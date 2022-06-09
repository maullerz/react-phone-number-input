"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInput = createInput;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("libphonenumber-js/core");

var _inputValuePrefix = require("./helpers/inputValuePrefix.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createInput(defaultMetadata) {
  /**
   * `InputBasic` is the most basic implementation of a `Component`
   * that can be passed to `<PhoneInput/>`. It parses and formats
   * the user's input but doesn't control the caret in the process:
   * when erasing or inserting digits in the middle of a phone number
   * the caret usually jumps to the end (this is the expected behavior).
   * Why does `InputBasic` exist when there's `InputSmart`?
   * One reason is working around the [Samsung Galaxy smart caret positioning bug]
   * (https://github.com/catamphetamine/react-phone-number-input/issues/75).
   * Another reason is that, unlike `InputSmart`, it doesn't require DOM environment.
   */
  function InputBasic(_ref, ref) {
    let {
      value,
      onChange,
      country,
      international,
      withCountryCallingCode,
      metadata,
      inputComponent: Input,
      ...rest
    } = _ref;
    const prefix = (0, _inputValuePrefix.getInputValuePrefix)({
      country,
      international,
      withCountryCallingCode,
      metadata
    });

    const _onChange = (0, _react.useCallback)(event => {
      let newValue = (0, _core.parseIncompletePhoneNumber)(event.target.value); // By default, if a value is something like `"(123)"`
      // then Backspace would only erase the rightmost brace
      // becoming something like `"(123"`
      // which would give the same `"123"` value
      // which would then be formatted back to `"(123)"`
      // and so a user wouldn't be able to erase the phone number.
      // Working around this issue with this simple hack.

      if (newValue === value) {
        const newValueFormatted = format(prefix, newValue, country, metadata);

        if (newValueFormatted.indexOf(event.target.value) === 0) {
          // Trim the last digit (or plus sign).
          newValue = newValue.slice(0, -1);
        }
      }

      onChange(newValue);
    }, [prefix, value, onChange, country, metadata]);

    return /*#__PURE__*/_react.default.createElement(Input, _extends({}, rest, {
      ref: ref,
      value: format(prefix, value, country, metadata),
      onChange: _onChange
    }));
  }

  InputBasic = /*#__PURE__*/_react.default.forwardRef(InputBasic);
  InputBasic.propTypes = {
    /**
     * The parsed phone number.
     * "Parsed" not in a sense of "E.164"
     * but rather in a sense of "having only
     * digits and possibly a leading plus character".
     * Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    value: _propTypes.default.string.isRequired,

    /**
     * A function of `value: string`.
     * Updates the `value` property.
     */
    onChange: _propTypes.default.func.isRequired,

    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (e.g. `(800) 555 35 35`).
     * E.g. "US", "RU", etc.
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (e.g. `+7 800 555 35 35`)
     * Perhaps the `country` property should have been called `defaultCountry`
     * because if `value` is an international number then `country` is ignored.
     */
    country: _propTypes.default.string,

    /**
     * If `country` property is passed along with `international={true}` property
     * then the phone number will be input in "international" format for that `country`
     * (without "country calling code").
     * For example, if `country="US"` property is passed to "without country select" input
     * then the phone number will be input in the "national" format for `US` (`(213) 373-4253`).
     * But if both `country="US"` and `international={true}` properties are passed then
     * the phone number will be input in the "international" format for `US` (`213 373 4253`)
     * (without "country calling code" `+1`).
     */
    international: _propTypes.default.bool,

    /**
     * If `country` and `international` properties are set,
     * then by default it won't include "country calling code" in the input field.
     * To change that, pass `withCountryCallingCode` property,
     * and it will include "country calling code" in the input field.
     */
    withCountryCallingCode: _propTypes.default.bool,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: _propTypes.default.object.isRequired,

    /**
     * The `<input/>` component.
     */
    inputComponent: _propTypes.default.elementType.isRequired
  };
  InputBasic.defaultProps = {
    metadata: defaultMetadata,
    inputComponent: 'input'
  };
  return InputBasic;
}

var _default = createInput();

exports.default = _default;

function format(prefix, value, country, metadata) {
  return (0, _inputValuePrefix.removeInputValuePrefix)((0, _core.formatIncompletePhoneNumber)(prefix + value, country, metadata), prefix);
}
//# sourceMappingURL=InputBasic.js.map