const sequence = require("./sequence")
const titForTat = require("./titForTat")
const testEach = require("./testEach")

/***
 * @param {string} text
 * @param {Object} [options]
 * @param {boolean} [options.isSequenced=true] - sequences text according to SBL Hebrew Font manual
 * @param {boolean} [options.qametsQatan=false] - checks for Qamets Qatan
 * @returns {string}
 */

module.exports = (text, options = { isSequenced: true, qametsQatan: false }) => {
  let newSeq = options.isSequenced ? sequence(text) : text
  let titTat = titForTat(newSeq)
  let array = titTat.split(" ")
  let modArray = testEach(array, { qametsQatan: options.qametsQatan })
  let transliteration = modArray.join(" ")
  return transliteration
}
