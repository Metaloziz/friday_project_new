import React from 'react';
import SuperInputText from '../c1-SuperInputText/SuperInputText';
import SuperButton from '../c2-SuperButton/SuperButton';
import SuperCheckbox from '../c3-SuperCheckbox/SuperCheckbox';

export const Test = () => {
  return (
    <div>
      Test
      <SuperInputText placeholder={'type some'}/>
      <SuperButton>Button</SuperButton>
      <SuperCheckbox>Checkbox</SuperCheckbox>
    </div>
  );
};
