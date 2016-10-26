/**
 * Get the mean interval. Example:
 *
 *     mean([111, 222, 333, 444, 555]) // => 333
 *
 * @param {array} intervals
 * @returns {number}
 */
module.exports = function(intervals) {
  if (!intervals.length) {
    return 0
  }

  return (intervals.reduce(function(prev, curr) {
    return prev + curr
  }) / intervals.length)
}