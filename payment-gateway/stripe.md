# Stripe

#### 3 Type of Payments

- `PAYMENTS`: A complete payments platform engineered for growth
- `BILLING`: Build and scale your recurring business model
- `CONNECT`: Everything platforms need to get sellers paid

#### Stripe.js and Elements

- Enable us to collect sensitive payment information using customizable UI elements.

[Stripe elements](https://stripe.com/payments/elements) is a set of pre-built UI components for building `checkout` flow and is available as a feature of Stripe.js. Elements provide ready-made UI components like inputs and buttons for collecting inforamation from the user. Stripe.js then `tokenizes` the sensitive information within an Element without ever having it touch own server.

Elements features:

- Automatically format card information as it's entered
- Transtale placholders into customer's preferred language
- Responsive design to fit the width of your customer's screen for moble device
- Customizable styling to match the look and feel of checkout flow

```html
<script src="https://js.stripe.com/v3/"></script>

<form action="/charge" method="post" id="payment-form">
  <div class="form-row">
    <label for="card-element">
      Credit or debit card
    </label>
    <div id="card-element">
      <!-- A Stripe Element will be inserted here. -->
    </div>

    <!-- Used to display form errors. -->
    <div id="card-errors" role="alert"></div>
  </div>

  <button>Submit Payment</button>
</form>
```

```js
// Create a Stripe client.
var stripe = Stripe('pk_test_dfVrkxqwQFfmPU8WSmVthznF');

// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});

// Submit the form with the token ID.
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}
```

```css
/* ...
   ...
   ...
*/
```

[See Reference](https://stripe.com/docs/stripe-js)

#### Stripe Workflow

1. The customer arrives at our payment page that includes the Checkout code, loaded over `HTTPS`.
2. The customer clicks the payment button (e.g., Pay with Card), completes the payment form, and clicks on the `Pay Now` button.
3. Checkout sends the payment details `directly to Stripe` from the customer's browser, assuming the details `pass basic validation`.
4. Stripe returns a `token` to Checkout, or an `error` message if the card-network validation fails.
5. Checkout takes the returned token and stores it in the page's primary form—the one surrounding the `<script>` tag above, in a hidden element named `stripeToken`.
6. Checkout submits the form to our `server`.
7. Our server uses the posted token to charge the card.

## Billing

#### Products and Plans

Two core models make up subscriptions, the heart of Stripe's recurring billing system: `Product` and `Plan`

- `Products` - defines the product or service you offer
  - has no pricing information
  - has a plan

- `Plans` - defines how to charge a product
  - has pricing info: currency, billing interval, amount, and pricing tiers
  - creating more than on Plan for a product makes it possible to vary pricing by billing interval (i.e. monthly vs. quarterly billing)

#### Licensed and Metered usage

There are `two` models of usage for plans: `licensed` and `metered`

- `licensed` - (usage_type='licensed') usage allows you to set the `number of units for a subscription` item when creating or updating the subscription

- `metered plans` - accumulate total usage over a billing period
  - Usage is reported via the [Usage API](https://stripe.com/docs/billing/subscriptions/metered-billing#reporting-usage)
  - Usage is resets to `zero` every billing period.
  - A broadband provider charging per megabyte of usage every month
  - Billing for metered plans is calculated the same way as for `licensed` usage, except the usage total is multiplied by the plan amount instead of using a `fixed quantity`

#### Tiered Billing

More complex pricing schemes are expressed through [tiered pricing](https://stripe.com/docs/billing/subscriptions/tiers) (billing_scheme='tiered') which can be combined with either licensed or metered usage.

`Three` modes of metered billing:

- `Fixed per-unit pricing` by setting billing_scheme to per_unit. The total at the end of the period is amount × usage
- `Volume-based pricing` by setting billing_scheme to tiered and setting tiers_mode to volume. The total at the end of the period is the amount for the specific tier × usage. For example, given a tiering configuration of $5 for usage of 1 - 5, $4 for 6 - 10, and $3 for 11 - 20, a usage of 11 would result in a total of $33 ($3 × 11)
- `Graduated pricing` by setting billing_scheme to tiered and setting tiers_mode to graduated. The total at the end of the period is the sum of the amount for each tier × the usage for that particular tier. For example, given a graduated tiering configuration of $5 for usage of 1 - 5, $4 for 6 - 10, and $3 for 11 - 20, a usage of 11 would result in a total of $48 ($5 × 5 + $4 × 5 + $3 × 1).

## Managing Products and Plans

Plans are at the heart of subscriptions, establishing the billing cycle, currency, and base cost. Every plan is attached to a product, which represents the application or service offered to customers. Products can have more than one plan, reflecting variations in price and duration—such as monthly and annual pricing at different rates.

There are `two` kinds of products: `Goods` and `Services`.

`Goods` are intended for use with the Orders API while `services` are for subscriptions

- Service-type products have the following parameters
  - `name` - the product’s name, meant to be displayable to the customer
  - `type` - the product’s type, which should be service when working with subscriptions
  - `metadata` - a mapping of arbitrary keys and values that you can use to store additional information about the service in a structured format.

```js
var stripe = require("stripe")("sk_test_3zxmVmMJBuVYwNnBeKwB7msF");

const product = stripe.products.create({
  name: 'My SaaS Platform',
  type: 'service',
});
```

When creating a product through the API, the response includes an ID, which you can use to attach plans to the product.

#### Plans

Plans have the following parametes:

- `product:` either the ID of an existing product to associate with the plan or the properties to define a new product.
- `amount:` what the customer is charged per subscription per interval.
- `interval:` the billing period for the plan, which can range from a single day to a year. The interval options are day, week, month, and year. You can also use interval_count to set more customized intervals, such as billing a customer every 30 days or every 5 months.
- `id:` a unique identifier. This is auto-generated by Stripe. You can optionally override this value, but plan ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.

```js
var stripe = require("stripe")("sk_test_3zxmVmMJBuVYwNnBeKwB7msF");

const plan = stripe.plans.create({
  currency: 'usd',
  interval: 'month',
  product: 'prod_CHxGUqw1dyKsDM',
  nickname: 'Pro Plan',
  amount: 3000,
});
```

#### Changing and deleting plans

Once a plan has been created, only the metadata and nickname can be modified; the amount, currency, and interval are fixed.

- To switch customers over to new plan:
  - Create a new plan with a new price, using the instructions above.
  - Find all the customers on the old plan, using the instructions that follow.
  - [Update every subscription](https://stripe.com/docs/billing/subscriptions/upgrading-downgrading) found in Step 2 to the new plan.

If you’d rather charge customers the full amount of the new plan, cancel their subscriptions before subscribing them to the new plan. Doing so also resets the customer’s billing cycle.

Deleting a plan does not affect any existing subscribers of that plan, but new customers cannot be subscribed to it. We advise against deleting plans as having the historical plan information—even when no longer actively used—may be valuable.

Get the subscribers of a plan:

```js
var stripe = require("stripe")("sk_test_abc123");

const subscriptions = stripe.subscriptions.list({
  plan: 'plan_CBb6IXqvTLXp3f',
});
```

#### Working with Local Currencies

Each Customer object in Stripe is set to a specific currency the first time any of the following occurs:

- The customer is subscribed to a plan
- An invoice is created for the customer
- An invoice item is created for the customer
- The customer’s balance is adjusted
- A flat-rate coupon is attached to the customer (not a percent-off coupon)

## Payment Intents API

[Payment Intent API](https://stripe.com/docs/payments/payment-intents): Starting in September 2019, a new regulation called [Strong Customer Auhentication](https://stripe.com/docs/strong-customer-authentication) (SCA) will require businesses in Europe to request additonal authentication for online payments.

It tracks the lifecycle of a customer checkout flow and triggers additional authentication steps when required by regulatory mandates, custom Radar fraud rules, or redirect-based payment methods.

#### How Payment Intents API works

A [PaymentIntent](https://stripe.com/docs/api/payment_intents/object) object tracks the state of the payment through the status attribute. When the payment is successful, the status of the PaymentIntent changes to succeeded and you can confidently fulfill the order.

The Payment Intents API centers around two actions:

- Create: [Creating a PaymentIntent](https://stripe.com/docs/payments/payment-intents/creating-payment-intents) at the beginning of a checkout flow lets you track all the attempts to pay for an order.
- Confirm: Confirming a PaymentIntent will attempt to take the payment through the entire payment process. You can confirm a PaymentIntent either on your server with [confirm](https://stripe.com/docs/api/payment_intents/confirm) or on the client with Stripe.js and the mobile SDKs.
