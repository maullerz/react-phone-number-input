import { getCountryCallingCode } from 'libphonenumber-js/core';
export function getInputValuePrefix(_ref) {
  let {
    country,
    international,
    withCountryCallingCode,
    metadata
  } = _ref;
  return country && international && !withCountryCallingCode ? "+".concat(getCountryCallingCode(country, metadata)) : '';
}
export function removeInputValuePrefix(value, prefix) {
  if (prefix) {
    value = value.slice(prefix.length);

    if (value[0] === ' ') {
      value = value.slice(1);
    }
  }

  return value;
}
//# sourceMappingURL=inputValuePrefix.js.map