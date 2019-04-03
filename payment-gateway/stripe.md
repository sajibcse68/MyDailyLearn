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
3. Checkout sends the payment details `directly to Stripe` from the customer's browser, assuming the details` pass basic validation`.
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
