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