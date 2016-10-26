var assert = require('assert')
var mean = (function(coverage) {
  if (coverage) return require('../lib-cov/mean.js')
  return require('..')
})(process.env.MEAN_COVERAGE)


suite('Mean');

test('result', function() {
  assert.equal(mean([111, 222, 333, 444, 555]), 333)
})

test('empty array', function() {
  assert.equal(mean([]), 0)
})