"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInput = createInput;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PhoneInput = _interopRequireDefault(require("./PhoneInput.js"));

var _InputSmart = _interopRequireDefault(require("./InputSmart.js"));

var _InputBasic = _interopRequireDefault(require("./InputBasic.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createInput(defaultMetadata) {
  function PhoneInput(_ref, ref) {
    let {
      smartCaret,
      ...rest
    } = _ref;
    return /*#__PURE__*/_react.default.createElement(_PhoneInput.default, _extends({}, rest, {
      ref: ref,
      Component: smartCaret ? _InputSmart.default : _InputBasic.default
    }));
  }

  PhoneInput = /*#__PURE__*/_react.default.forwardRef(PhoneInput);
  PhoneInput.propTypes = {
    /**
     * HTML `<input/>` `type` attribute.
     */
    type: _propTypes.default.string,

    /**
     * HTML `<input/>` `autocomplete` attribute.
     */
    autoComplete: _propTypes.default.string,

    /**
     * By default, the caret position is being "intelligently" managed
     * while a user inputs a phone number.
     * This "smart" caret behavior can be turned off
     * by passing `smartCaret={false}` property.
     * This is just an "escape hatch" for any possible caret position issues.
     */
    // Is `true` by default.
    smartCaret: _propTypes.default.bool.isRequired,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: _propTypes.default.object.isRequired
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

var _default = createInput();

exports.default = _default;
//# sourceMappingURL=PhoneInputBrowser.js.map