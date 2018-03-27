
## Index

- [Chrome Extension Environment](#chrome-extension-environment)
- [Message passing API](#message-passing-api)

---
### Chrome Extension Environment
There are **three** environments for chorme extensions -

1. Background environment

```js
"background": {
  "scripts": ["background.js"]
}
```

2. Popup environment

```js
"browser_action": {
  "default_icon": "icon.png",
  "default_popup": "popup.html",
}
```

3. User environment

```js
"content_scripts": [{
  "matches": ["http://*/*", "https://*/*"],
  "js": ["user-env.js"]
}]
```

### Message passing API

We can pass message from `UserEnvironment` to  `backgroundEnvironment` using API

```js

// user-env.js
chrome.runtime.sendMessage(document.getElementByTagName('title')[0].innerText);

// background.js
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  alert(response);
})

```