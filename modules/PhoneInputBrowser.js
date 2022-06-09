function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import PhoneInput_ from './PhoneInput.js';
import InputSmart from './InputSmart.js';
import InputBasic from './InputBasic.js';
export function createInput(defaultMetadata) {
  function PhoneInput(_ref, ref) {
    let {
      smartCaret,
      ...rest
    } = _ref;
    return /*#__PURE__*/React.createElement(PhoneInput_, _extends({}, rest, {
      ref: ref,
      Component: smartCaret ? InputSmart : InputBasic
    }));
  }

  PhoneInput = /*#__PURE__*/React.forwardRef(PhoneInput);
  PhoneInput.propTypes = {
    /**
     * HTML `<input/>` `type` attribute.
     */
    type: PropTypes.string,

    /**
     * HTML `<input/>` `autocomplete` attribute.
     */
    autoComplete: PropTypes.string,

    /**
     * By default, the caret position is being "intelligently" managed
     * while a user inputs a phone number.
     * This "smart" caret behavior can be turned off
     * by passing `smartCaret={false}` property.
     * This is just an "escape hatch" for any possible caret position issues.
     */
    // Is `true` by default.
    smartCaret: PropTypes.bool.isRequired,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: PropTypes.object.isRequired
  };
  PhoneInput.defaultProps = {
    /**
     * HTML `<input/>` `type="tel"`.
     */
    type: 'tel',

    /**
     * Remember (and autofill) the value as a phone number.
     */
    autoComplete: 'tel',

    /**
     * Set to `false` to use "basic" caret instead of the "smart" one.
     */
    smartCaret: true,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: defaultMetadata
  };
  return PhoneInput;
}
export default createInput();
//# sourceMappingURL=PhoneInputBrowser.js.map