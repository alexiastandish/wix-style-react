import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Input from '../Input';
import styles from './Input.scss';

const inputDriverFactory = ({component, wrapper}) => {
  const $component = $(component);
  const input = $component.find('input')[0];
  const innerDiv = $component.find('div')[0];
  const clearButton = $(component).find(`.${styles.clear_button}`);

  return {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](input, event),
    focus: () => input.focus(),
    clickClear: () => ReactTestUtils.Simulate.click(clearButton[0]),
    getValue: () => input.value,
    getDefaultValue: () => input.defaultValue,
    getTabIndex: () => input.tabIndex,
    hasExclamation: () => !!innerDiv && innerDiv.className.indexOf(styles.exclamation) >= 0,
    hasError: () => component.className.indexOf(styles.error) >= 0,
    getUnit: () => $component.find(`.${styles.unit}`)[0].textContent,
    hasMagnifyingGlass: () => !!innerDiv && innerDiv.className.indexOf(styles.magnifying_glass) >= 0,
    hasClearButton: () => clearButton.length > 0,
    isRTL: () => component.className.indexOf(styles.rtl) >= 0,
    hasEndWrapping: () => component.className.indexOf(styles.endpadding) >= 0,
    isFocusedStyle: () => input.className.indexOf(styles.focus) >= 0,
    isHoveredStyle: () => input.className.indexOf(styles.hover) >= 0,
    isOfStyle: style => component.className.indexOf(styles[style]) >= 0,
    isFocus: () => document.activeElement === input,
    exists: () => component.find('input').length === 1,
    hasIconLeft: () => component.className.indexOf(styles.iconLeft) >= 0,
    setProps: props => {
      const {onChange = () => {}, ...otherProps} = props;
      ReactDOM.render(<div ref={r => component = r}><Input onChange={onChange} {...otherProps}/></div>, wrapper);
    }
  };
};


const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  const {onChange = () => {}, ...otherProps} = props;
  ReactDOM.render(<div ref={r => component = r}><Input onChange={onChange} {...otherProps}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const inputTestkitFactory = ({wrapper, id}) => {
  const button = $(wrapper).find(`#${id}`)[0];
  return inputDriverFactory(button, wrapper);
};

export {inputTestkitFactory, componentFactory, inputDriverFactory};
