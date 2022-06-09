"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountrySelectWithIcon = CountrySelectWithIcon;
exports.default = CountrySelect;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _unicode = _interopRequireDefault(require("country-flag-icons/unicode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CountrySelect(_ref) {
  let {
    value,
    onChange,
    options,
    ...rest
  } = _ref;
  const onChange_ = (0, _react.useCallback)(event => {
    const value = event.target.value;
    onChange(value === 'ZZ' ? undefined : value);
  }, [onChange]);
  const selectedOption = (0, _react.useMemo)(() => {
    return getSelectedOption(options, value);
  }, [options, value]); // "ZZ" means "International".
  // (HTML requires each `<option/>` have some string `value`).

  return /*#__PURE__*/_react.default.createElement("select", _extends({}, rest, {
    value: value || 'ZZ',
    onChange: onChange_
  }), options.map(_ref2 => {
    let {
      value,
      label,
      divider
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("option", {
      key: divider ? '|' : value || 'ZZ',
      value: divider ? '|' : value || 'ZZ',
      disabled: divider ? true : false,
      style: divider ? DIVIDER_STYLE : undefined
    }, label);
  }));
}

CountrySelect.propTypes = {
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value: _propTypes.default.string,

  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: _propTypes.default.func.isRequired,
  // `<select/>` options.
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.string,
    label: _propTypes.default.string,
    divider: _propTypes.default.bool
  })).isRequired
};
const DIVIDER_STYLE = {
  fontSize: '1px',
  backgroundColor: 'currentColor',
  color: 'inherit'
};

function CountrySelectWithIcon(_ref3) {
  let {
    value,
    options,
    className,
    iconComponent: Icon,
    getIconAspectRatio,
    arrowComponent: Arrow,
    unicodeFlags,
    ...rest
  } = _ref3;
  const selectedOption = (0, _react.useMemo)(() => {
    return getSelectedOption(options, value);
  }, [options, value]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "PhoneInputCountry"
  }, /*#__PURE__*/_react.default.createElement(CountrySelect, _extends({}, rest, {
    value: value,
    options: options,
    className: (0, _classnames.default)('PhoneInputCountrySelect', className)
  })), unicodeFlags && value && /*#__PURE__*/_react.default.createElement("div", {
    className: "PhoneInputCountryIconUnicode"
  }, (0, _unicode.default)(value)), !(unicodeFlags && value) && /*#__PURE__*/_react.default.createElement(Icon, {
    "aria-hidden": true,
    country: value,
    label: selectedOption && selectedOption.label,
    aspectRatio: unicodeFlags ? 1 : undefined
  }), /*#__PURE__*/_react.default.createElement(Arrow, null));
}

CountrySelectWithIcon.propTypes = {
  // Country flag component.
  iconComponent: _propTypes.default.elementType,
  // Select arrow component.
  arrowComponent: _propTypes.default.elementType.isRequired,
  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: _propTypes.default.bool
};
CountrySelectWithIcon.defaultProps = {
  arrowComponent: () => /*#__PURE__*/_react.default.createElement("div", {
    className: "PhoneInputCountrySelectArrow"
  })
};

function getSelectedOption(options, value) {
  for (var _iterator = _createForOfIteratorHelperLoose(options), _step; !(_step = _iterator()).done;) {
    const option = _step.value;

    if (!option.divider && option.value === value) {
      return option;
    }
  }
}
//# sourceMappingURL=CountrySelect.js.map