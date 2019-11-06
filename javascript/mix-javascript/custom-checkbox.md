We know that it's tricky to apply CSS in `checkbox` and in most case we need to create out own checkbox:

```js
// index.js

import CustomCheckbox from './CustomCheckbox';

<CustomCheckbox
  type="checkbox"
  checked={isSelected}
  disabled={isSelectionDisabled}
  onClick={handleSelectionChange}
/>
```

```js
// CustomCheckbox.js

import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #2A6E61;
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
  ${props => (props.checked ? 'border: 2px solid #0A6E61' : 'border: 1px solid #aa9d9d')};

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
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
