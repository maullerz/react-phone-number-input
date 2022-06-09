function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultInternationalIcon from './InternationalIcon.js';
import Flag from './Flag.js';
export function createCountryIconComponent(_ref) {
  let {
    flags,
    flagUrl,
    flagComponent: FlagComponent,
    internationalIcon: InternationalIcon
  } = _ref;

  function CountryIcon(_ref2) {
    let {
      country,
      label,
      aspectRatio,
      ...rest
    } = _ref2;

    // `aspectRatio` is currently a hack for the default "International" icon
    // to render it as a square when Unicode flag icons are used.
    // So `aspectRatio` property is only used with the default "International" icon.
    const _aspectRatio = InternationalIcon === DefaultInternationalIcon ? aspectRatio : undefined;

    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      className: classNames('PhoneInputCountryIcon', {
        'PhoneInputCountryIcon--square': _aspectRatio === 1,
        'PhoneInputCountryIcon--border': country
      })
    }), country ? /*#__PURE__*/React.createElement(FlagComponent, {
      country: country,
      countryName: label,
      flags: flags,
      flagUrl: flagUrl,
      className: "PhoneInputCountryIconImg"
    }) : /*#__PURE__*/React.createElement(InternationalIcon, {
      title: label,
      aspectRatio: _aspectRatio,
      className: "PhoneInputCountryIconImg"
    }));
  }

  CountryIcon.propTypes = {
    country: PropTypes.string,
    label: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number
  };
  return CountryIcon;
}
export default createCountryIconComponent({
  // Must be equal to `defaultProps.flagUrl` in `./PhoneInputWithCountry.js`.
  flagUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg',
  flagComponent: Flag,
  internationalIcon: DefaultInternationalIcon
});
//# sourceMappingURL=CountryIcon.js.map