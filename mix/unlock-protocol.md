## What is Unlock Protocol?

Unlock lets you easily lock and manage access to your content, apps, community and even real life events and spaces.

[Ref](https://unlock-protocol.com/)

## Integrating Unlock with React

```js
  constructor(props) {
    super(props);

    this.state = {
      locked: "pending" // there are 3 state: pending, locked and unlocked
    };
  }
  componentDidMount() {
    const paywallDomain = this.paywallDomain();
    const script = document.createElement("script");

    script.src = `https://${paywallDomain}.unlock-protocol.com/static/unlock.1.0.min.js`;
    // script.async = true;

    document.body.appendChild(script);

    // make it global
    window.unlockProtocolConfig = {
      locks: {
        "0xB0114bbDCe17e0AF91b2Be32916a1e236cf6034F": {
          name: "Sajib Lock"
        }
      },
      icon:
        "https://unlock-protocol.com/static/images/svg/unlock-word-mark.svg",
      callToAction: {
        default: "Please Unlock things!"
      }
    };

    // listen to events from unlockProtocol
    window.addEventListener("unlockProtocol", this.unlockHandler);
  }

  componentWillUnmount() {
    // clean things up before unmounting
    window.removeEventListener("unlockProtocol", this.unlockHandler);
  }

  loadCheckoutModal() {
    window.unlockProtocol && window.unlockProtocol.loadCheckoutModal();
  }

  paywallDomain() {
    const env = process.env.NODE_ENV;
    // check node environment and select paywall domain
    // staging-paywall for testing, we can test with Rinkeby Test Network
    return env === 'development' ? 'staging-paywall' : 'paywall';
  }

  unlockHandler = (e) => {
    console.log('e.detail: ', e.detail);

    this.setState(state => {
      return {
        ...state,
        locked: e.detail
      };
    });
  }

  render() {
  const { locked } = this.state
  return (
    <div className="App">
      <header className="App-header">
        {locked === "locked" && (
          <div onClick={this.loadCheckoutModal} style={{ cursor: "pointer" }}>
            Unlock me!{" "}
            <span aria-label="locked" role="img">
              🔒
            </span>
          </div>
        )}
        {locked === "unlocked" && (
          <div>
            Unlocked!{" "}
            <span aria-label="unlocked" role="img">
              🗝
            </span>
          </div>
        )}
      </header>
    </div>
  )
}
```

[Ref](https://unlock-protocol.com/blog/integratating-unlock-react/)

## Reference

- [Website](https://unlock-protocol.com/)
- [Staging Dashboard -- for development](https://staging-app.unlock-protocol.com/dashboard/)
- [Official React Example](https://github.com/unlock-protocol/react-example/blob/master/public/index.html#L37)
