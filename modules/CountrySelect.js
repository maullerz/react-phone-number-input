function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
export default function CountrySelect(_ref) {
  let {
    value,
    onChange,
    options,
    ...rest
  } = _ref;
  const onChange_ = useCallback(event => {
    const value = event.target.value;
    onChange(value === 'ZZ' ? undefined : value);
  }, [onChange]);
  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]); // "ZZ" means "International".
  // (HTML requires each `<option/>` have some string `value`).

  return /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    value: value || 'ZZ',
    onChange: onChange_
  }), options.map(_ref2 => {
    let {
      value,
      label,
      divider
    } = _ref2;
    return /*#__PURE__*/React.createElement("option", {
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
  value: PropTypes.string,

  /**
   * A function of `value: string`.
   * Updates the `value` property.
   */
  onChange: PropTypes.func.isRequired,
  // `<select/>` options.
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    divider: PropTypes.bool
  })).isRequired
};
const DIVIDER_STYLE = {
  fontSize: '1px',
  backgroundColor: 'currentColor',
  color: 'inherit'
};
export function CountrySelectWithIcon(_ref3) {
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
  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);
  return /*#__PURE__*/React.createElement("div", {
    className: "PhoneInputCountry"
  }, /*#__PURE__*/React.createElement(CountrySelect, _extends({}, rest, {
    value: value,
    options: options,
    className: classNames('PhoneInputCountrySelect', className)
  })), unicodeFlags && value && /*#__PURE__*/React.createElement("div", {
    className: "PhoneInputCountryIconUnicode"
  }, getUnicodeFlagIcon(value)), !(unicodeFlags && value) && /*#__PURE__*/React.createElement(Icon, {
    "aria-hidden": true,
    country: value,
    label: selectedOption && selectedOption.label,
    aspectRatio: unicodeFlags ? 1 : undefined
  }), /*#__PURE__*/React.createElement(Arrow, null));
}
CountrySelectWithIcon.propTypes = {
  // Country flag component.
  iconComponent: PropTypes.elementType,
  // Select arrow component.
  arrowComponent: PropTypes.elementType.isRequired,
  // Set to `true` to render Unicode flag icons instead of SVG images.
  unicodeFlags: PropTypes.bool
};
CountrySelectWithIcon.defaultProps = {
  arrowComponent: () => /*#__PURE__*/React.createElement("div", {
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