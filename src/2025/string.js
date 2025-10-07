// ============================================================
// Extended JavaScript String Methods Study Kit
// ============================================================

// ------------------------------------------------------------
// 🔸 Static / “Class-level” Methods on String
// ------------------------------------------------------------

// String.fromCharCode()
function makeFromCharCodes(...codes) {
  return String.fromCharCode(...codes);
}
console.log(makeFromCharCodes(72, 101, 108, 108, 111)); // "Hello"

// String.fromCodePoint()
function makeFromCodePoints(...points) {
  return String.fromCodePoint(...points);
}
console.log(makeFromCodePoints(0x1f600, 0x1f601)); // 😄😁

// String.raw() — useful in tagged templates or to get raw string escapes
function rawLiteralExample(strings, ...values) {
  // simulate how tagged template raw works
  return String.raw(strings, ...values);
}
console.log(rawLiteralExample`Line1\nLine2\t${42}`);
// prints: "Line1\\nLine2\\t42" (i.e. raw backslashes not interpreted)

// ------------------------------------------------------------
// 🧩 Instance Methods
// ------------------------------------------------------------

// codePointAt()
function showCodePoint(str, pos) {
  return str.codePointAt(pos);
}
console.log(showCodePoint("💖", 0)); // e.g. 128150

// normalize()
function normalizeToForm(str, form = "NFC") {
  return str.normalize(form);
}
console.log(normalizeToForm("e\u0301")); // “é” in canonical form

// localeCompare()
function compareStringsLocale(a, b, locale = "en") {
  // returns negative if a < b, zero if equal, positive if a > b under locale
  return a.localeCompare(b, locale);
}
console.log(compareStringsLocale("résumé", "resume", "fr"));

// match()
function findMatches(str, regex) {
  return str.match(regex);
}
console.log(findMatches("2025-10-07", /\d{4}/g)); // ["2025", "10", "07"]

// matchAll()
function findAllMatches(str, regex) {
  return [...str.matchAll(regex)];
}
console.log(findAllMatches("abc123xyz456", /(\d+)/g));
// yields an array of match objects with groups

// search()
function searchPattern(str, regex) {
  return str.search(regex);
}
console.log(searchPattern("Look for @ in this", /@/)); // index or -1

// replace()
function replaceOnce(str, regexOrStr, replacement) {
  return str.replace(regexOrStr, replacement);
}
console.log(replaceOnce("123-456-789", /-/, ":")); // only first dash replaced

// replaceAll()
function replaceAllOccurences(str, search, replacement) {
  return str.replaceAll(search, replacement);
}
console.log(replaceAllOccurences("a-b-a-b", "-", "+")); // "a+b+a+b"

// split()
function splitWithSeparator(str, sep = ",") {
  return str.split(sep);
}
console.log(splitWithSeparator("one,two,three", ","));

// startsWith(), endsWith()
function checkStartsEnds(str, start, end) {
  return {
    starts: str.startsWith(start),
    ends: str.endsWith(end),
  };
}
console.log(checkStartsEnds("hello.js", "he", ".js"));

// toLocaleLowerCase(), toLocaleUpperCase()
function localeCase(str, locale = "tr") {
  return {
    lower: str.toLocaleLowerCase(locale),
    upper: str.toLocaleUpperCase(locale),
  };
}
console.log(localeCase("I", "tr")); // Turkish “i” has special rules

// valueOf() — returns primitive string value
function primitiveValue(obj) {
  return obj.valueOf();
}
const strObj = new String("abc");
console.log(primitiveValue(strObj)); // "abc"

// toString()
function convertToString(val) {
  return val.toString();
}
console.log(convertToString(123)); // "123"

// ------------------------------------------------------------
// 🔔 Deprecated / Legacy / HTML-related (for completeness, but you *shouldn’t* use in new code)
// ------------------------------------------------------------

// anchor(), big(), blink(), bold(), fixed(), fontcolor(), fontsize(), italics(), link(), small(), strike(), sub(), sup()
function makeBoldHTML(str) {
  return str.bold();
}
console.log(makeBoldHTML("important")); // "<b>important</b>"
