console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
  it('', function() {
    let structure = function() {
      mouseResponseThreshold = $val
    };

    let varCallbacks = [
      function($val) {
        if ($val.value === 50) {
          return {failure: 'Change your code so `mouseResponseThreshold` equals something other than `50`.'};
        }
        return true;
      }
    ];

    let isMatch = Structured.match(code, structure, {varCallbacks: varCallbacks});
    let failureMessage = varCallbacks.failure || 'Did you set `mouseResponseThreshold` equal to a number other than 50?';
    assert.isOk(isMatch, failureMessage);
  });
});