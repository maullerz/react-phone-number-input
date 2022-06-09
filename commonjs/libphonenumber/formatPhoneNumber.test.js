"use strict";

var _formatPhoneNumber2 = _interopRequireWildcard(require("./formatPhoneNumber.js"));

var _metadata = _interopRequireDefault(require("libphonenumber-js/min/metadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function call(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(_metadata.default);
  return func.apply(this, args);
}

function formatPhoneNumber() {
  return call(_formatPhoneNumber2.default, arguments);
}

function formatPhoneNumberIntl() {
  return call(_formatPhoneNumber2.formatPhoneNumberIntl, arguments);
}

describe('formatPhoneNumber', () => {
  it('should format phone numbers', () => {
    expect(() => formatPhoneNumber()).to.throw('must be a string'); // formatPhoneNumber().should.equal('')

    formatPhoneNumber(null).should.equal('');
    formatPhoneNumber('').should.equal('');
    expect(() => (0, _formatPhoneNumber2.default)('+1', 'NATIONAL')).to.throw('`metadata` argument not passed');
    expect(() => (0, _formatPhoneNumber2.default)('+12133734253', undefined, _metadata.default)).to.throw('Unknown "format"');
    expect(() => (0, _formatPhoneNumber2.default)('+12133734253', '123', _metadata.default)).to.throw('Unknown "format"');
    formatPhoneNumber('+1', 'NATIONAL').should.equal('');
    formatPhoneNumber('+12133734253', 'NATIONAL').should.equal('(213) 373-4253');
    formatPhoneNumber('+12133734253').should.equal('(213) 373-4253');
    formatPhoneNumber('+12133734253', 'INTERNATIONAL').should.equal('+1 213 373 4253'); // Deprecated.
    // Legacy `format`s.

    formatPhoneNumber('+12133734253', 'National').should.equal('(213) 373-4253');
    formatPhoneNumber('+12133734253', 'International').should.equal('+1 213 373 4253');
  });
  it('should format international phone numbers', () => {
    formatPhoneNumberIntl('+12133734253').should.equal('+1 213 373 4253');
  });
});
//# sourceMappingURL=formatPhoneNumber.test.js.map