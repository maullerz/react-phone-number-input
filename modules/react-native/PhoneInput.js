function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import PhoneTextInput from './PhoneTextInput.js';
import PhoneInput_ from '../PhoneInput.js';
import InputBasic from '../InputBasic.js';
import { metadata as metadataType } from '../PropTypes.js';
/**
 * This is an _experimental_ React Native component.
 * Feedback thread: https://github.com/catamphetamine/react-phone-number-input/issues/296
 */

export function createPhoneInput(defaultMetadata) {
  let PhoneInput = (_ref, ref) => {
    let {
      inputComponent,
      ...rest
    } = _ref;
    return /*#__PURE__*/React.createElement(PhoneInput_, _extends({}, rest, {
      ref: ref,
      Component: InputBasic,
      inputComponent: PhoneTextInput,
      TextInputComponent: inputComponent
    }));
  };

  PhoneInput = /*#__PURE__*/React.forwardRef(PhoneInput);
  PhoneInput.propTypes = {
    /**
     * Allows specifying a custom input field component,
     * like a "Material UI" input field or something.
     */
    inputComponent: PropTypes.elementType,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: metadataType.isRequired
  };
  PhoneInput.defaultProps = {
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: defaultMetadata
  };
  return PhoneInput;
}
export default createPhoneInput();
//# sourceMappingURL=PhoneInput.js.map