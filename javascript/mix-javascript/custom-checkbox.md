We know that it's tricky to apply CSS in `checkbox` and in most case we need to create out own checkbox:

## Example 1: HTML, CSS

```html
<label class="main"
  >CodeX
  <input type="checkbox" />
  <span class="geekmark"></span>
</label>

<label class="main"
  >GeeksforGeeks
  <input type="checkbox" checked="checked" />
  <span class="geekmark"></span>
</label>

<label class="main"
  >CodeY
  <input type="checkbox" />
  <span class="geekmark"></span>
</label>
```

```css
/* custom checkbox */
input[type="checkbox"] {
  visibility: hidden;
}
/* Creating a custom checkbox based on demand */
.geekmark {
  position: absolute;
  top: 3px;
  left: -3px;
  height: 17px;
  width: 17px;
  border: 1px solid #4f5356;
}
/* Specify the background color to be shown when hovering over checkbox */
.checkbox-inline:hover input ~ .geekmark {
  background-color: yellow;
}
/* Specify the background color to be shown when checkbox is active */
.checkbox-inline input:active ~ .geekmark {
  background-color: red;
}
/* Specify the background color to be shown when checkbox is checked */
.checkbox-inline input:checked ~ .geekmark {
  background-color: green;
}
/* Checkmark to be shown in checkbox, It is not be shown when not checked */
.geekmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Display checkmark when checked */
.checkbox-inline input:checked ~ .geekmark:after {
  display: block;
}
/* Styling the checkmark using webkit */
/* Rotated the rectangle by 45 degree and  showing only two border to make it look like a tickmark */
.checkbox-inline .geekmark:after {
  left: 6px;
  bottom: 5px;
  width: 4px;
  height: 10px;
  border: solid white;
  border-width: 0 1.5px 1.5px 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
```

[Reference](https://www.geeksforgeeks.org/how-to-style-a-checkbox-using-css/)

## Example 2: React Component

```js
// index.js

import CustomCheckbox from "./CustomCheckbox";

<CustomCheckbox
  type="checkbox"
  checked={isSelected}
  disabled={isSelectionDisabled}
  onClick={handleSelectionChange}
/>;
```

```js
// CustomCheckbox.js

import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #2a6e61;
  stroke-width: 3px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  transition: all 150ms;
  ${props =>
    props.checked ? "border: 2px solid #0A6E61" : "border: 1px solid #aa9d9d"};

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const CheckboxCustom = ({ className, checked, ...props }) => {
  debugger;
  return (
    <CheckboxContainer className={className}>
      <StyledCheckbox data-checked={props.checked} checked={checked} {...props}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default CheckboxCustom;
```
