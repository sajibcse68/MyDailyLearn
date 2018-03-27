
#### There are three environments for chorme extensions:

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
  "js": ["myScript.js"]
}]
```