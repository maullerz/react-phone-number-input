"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * This is an _experimental_ React Native component.
 * Feedback thread: https://github.com/catamphetamine/react-phone-number-input/issues/296
 */
function PhoneTextInput(_ref, ref) {
  let {
    TextInputComponent,
    onChange,
    ...rest
  } = _ref;
  // Instead of `onChangeText(value: string)` it could use
  // `onChange(nativeEvent: Event)` and get `value` from `nativeEvent.text`.
  const onChangeText = (0, _react.useCallback)(value => {
    onChange({
      preventDefault() {
        this.defaultPrevented = true;
      },

      target: {
        value
      }
    });
  }, [onChange]); // React Native `<TextInput/>` supports properties:
  // * `placeholder: string?`
  // * `autoFocus: boolean?`
  // * `value: string?`
  // plus the ones mentioned below:

  return /*#__PURE__*/_react.default.createElement(TextInputComponent, _extends({
    ref: ref,
    keyboardType: "phone-pad",
    onChangeText: onChangeText
  }, rest));
}

PhoneTextInput = /*#__PURE__*/_react.default.forwardRef(PhoneTextInput);
PhoneTextInput.propTypes = {
  /**
   * The input field `value: string`.
   */
  value: _propTypes.default.string,

  /**
   * A function of `event: Event`.
   * Updates the `value: string` property.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * The standard `autoCompleteType` property of a React Native `<TextInput/>`.
   */
  autoCompleteType: _propTypes.default.string,

  /**
   * The input field component.
   */
  TextInputComponent: _propTypes.default.elementType.isRequired
};
PhoneTextInput.defaultProps = {
  /**
   * Shows phone number suggestion(s) when the user focuses the input field.
   */
  autoCompleteType: 'tel',

  /**
   * By default, uses the default React Native `TextInput` component.
   */
  TextInputComponent: _reactNative.TextInput
};
var _default = PhoneTextInput;
exports.default = _default;
//# sourceMappingURL=PhoneTextInput.js.map