"use strict";

var _metadata = _interopRequireDefault(require("libphonenumber-js/min/metadata"));

var _countries = require("./countries.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('helpers/countries', () => {
  it('should sort country options (no `order`)', () => {
    (0, _countries.sortCountryOptions)([{
      value: 'RU',
      label: 'Russia'
    }, {
      value: 'US',
      label: 'United States'
    }]).should.deep.equal([{
      value: 'RU',
      label: 'Russia'
    }, {
      value: 'US',
      label: 'United States'
    }]);
  });
  it('should sort country options (with a divider)', () => {
    (0, _countries.sortCountryOptions)([{
      value: 'RU',
      label: 'Russia'
    }, {
      value: 'US',
      label: 'United States'
    }], ['US', '|', 'RU']).should.deep.equal([{
      value: 'US',
      label: 'United States'
    }, {
      divider: true
    }, {
      value: 'RU',
      label: 'Russia'
    }]);
  });
  it('should sort country options (with "...")', () => {
    (0, _countries.sortCountryOptions)([{
      value: 'RU',
      label: 'Russia'
    }, {
      value: 'US',
      label: 'United States'
    }], ['US', '|', '...']).should.deep.equal([{
      value: 'US',
      label: 'United States'
    }, {
      divider: true
    }, {
      value: 'RU',
      label: 'Russia'
    }]);
  });
  it('should sort country options (with "…")', () => {
    (0, _countries.sortCountryOptions)([{
      value: 'RU',
      label: 'Russia'
    }, {
      value: 'US',
      label: 'United States'
    }], ['US', '|', '…']).should.deep.equal([{
      value: 'US',
      label: 'United States'
    }, {
      divider: true
    }, {
      value: 'RU',
      label: 'Russia'
    }]);
  });
  it('should sort country options (with "🌐")', () => {
    (0, _countries.sortCountryOptions)([{
      value: 'RU',
      label: 'Russia'
    }, {
      label: 'International'
    }, {
      value: 'US',
      label: 'United States'
    }], ['US', '🌐', '…']).should.deep.equal([{
      value: 'US',
      label: 'United States'
    }, {
      label: 'International'
    }, {
      value: 'RU',
      label: 'Russia'
    }]);
  });
  it('should get supported country options', () => {
    (0, _countries.getSupportedCountryOptions)(['🌐', 'RU', 'XX', '@', '|', '…', '...', '.'], _metadata.default).should.deep.equal(['🌐', 'RU', '|', '…', '...']);
  });
  it('should get supported country options (none supported)', () => {
    expect((0, _countries.getSupportedCountryOptions)(['XX', '@', '.'], _metadata.default)).to.be.undefined;
  });
  it('should get supported country options (none supplied)', () => {
    expect((0, _countries.getSupportedCountryOptions)(undefined, _metadata.default)).to.be.undefined;
  });
  it('should tell is country is supported with error', () => {
    (0, _countries.isCountrySupportedWithError)('RU', _metadata.default).should.equal(true);
    (0, _countries.isCountrySupportedWithError)('XX', _metadata.default).should.equal(false);
  });
  it('should get supported countries', () => {
    (0, _countries.getSupportedCountries)(['RU', 'XX'], _metadata.default).should.deep.equal(['RU']);
  });
  it('should get supported countries (none supported)', () => {
    expect((0, _countries.getSupportedCountries)(['XX'], _metadata.default)).to.be.undefined;
  });
});
//# sourceMappingURL=countries.test.js.map