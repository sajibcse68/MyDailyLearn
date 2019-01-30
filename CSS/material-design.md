#### How MDC Web is built

MDC Web's JavaScript layer is comprised of `three` classes per component: the **Component**, **Foundation**, and **Adapter**. This pattern gives MDC Web the flexibility integrate with frontend frameworks.

The **Foundation** contains the business logic that implements Material Design. The Foundation does not reference any HTML elements. This lets us abstract HTML interaction logic into the Adapter. `Foundation has an Adapter`.

The **Adapter** is an interface. The Adapter interface is referenced by the Foundation to implement Material Design  business logic. You can implement the Adapter in different frameworks such as Vue, Angular, or React. An implementation of an Adapter interacts with the DOM structure.

The **Component** has a Foundation, and its role is to

1. Implement the *Adapter*, using non-framework JavaScript, and
2. Provide public methods that proxy to methods in the Foundation

#### What MDC Web provides

Every package in MDC Web comes with a *Component*, *Foundation*, and *Adapter*. To instantiate a Component we must pass the **root element** to the Component's constructor method. The Component implements an Adapter, which interacts with the DOM and HTML elements. The Component then instantiates the Foundation, which calls the Adapter methods.

To integrate MDC Web into a framework we need to create our own Component in that framework's language/syntax. The framework Component implements MDC Web's Adapter and uses MDC Web's Foundation.

[See Examples]()