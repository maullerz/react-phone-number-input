"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatPhoneNumber;
exports.formatPhoneNumberIntl = formatPhoneNumberIntl;

var _core = _interopRequireDefault(require("libphonenumber-js/core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formats a phone number.
 * Is a proxy for `libphonenumber-js`'s `.format()` function of a parsed `PhoneNumber`.
 * @param  {string} value
 * @param  {string} [format]
 * @param  {object} metadata
 * @return {string}
 */
function formatPhoneNumber(value, format, metadata) {
  if (!metadata) {
    if (typeof format === 'object') {
      metadata = format;
      format = 'NATIONAL';
    }
  }

  if (!value) {
    return '';
  }

  const phoneNumber = (0, _core.default)(value, metadata);

  if (!phoneNumber) {
    return '';
  } // Deprecated.
  // Legacy `format`s.


  switch (format) {
    case 'National':
      format = 'NATIONAL';
      break;

    case 'International':
      format = 'INTERNATIONAL';
      break;
  }

  return phoneNumber.format(format);
}

function formatPhoneNumberIntl(value, metadata) {
  return formatPhoneNumber(value, 'INTERNATIONAL', metadata);
}
//# sourceMappingURL=formatPhoneNumber.js.map