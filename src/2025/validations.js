// --- Setup: Define a larger set of validation rules using country codes ---
const countryValidationRules = {
  US: /^\d{5}(?:-\d{4})?$/,
  BR: /^\d{5}-\d{3}$/,
  CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
  DE: /^\d{5}$/,
  JP: /^\d{3}-\d{4}$/,
  GB: /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?[ -]?[0-9][ABD-HJLNP-UW-Z]{2}$/,
  FR: /^\d{5}$/,
  IT: /^\d{5}$/,
  AU: /^\d{4}$/,
  NL: /^\d{4} ?[A-Z]{2}$/,
  ES: /^\d{5}$/,
  MX: /^\d{5}$/,
  IN: /^\d{6}$/,
  CN: /^\d{6}$/,
  RU: /^\d{6}$/,
  CH: /^\d{4}$/,
  AT: /^\d{4}$/,
  SE: /^\d{3} ?\d{2}$/,
  NO: /^\d{4}$/,
  DK: /^\d{4}$/,
  BE: /^\d{4}$/,
  PT: /^\d{4}-\d{3}$/,
  IE: /^([AC-FHKNPRTV-Y]\d{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/,
  NZ: /^\d{4}$/,
  ZA: /^\d{4}$/,
};

const validationTypes = Object.keys(countryValidationRules);

// --- Method 1: Full If/Else Chain ---
function validateWithIfElse(type) {
  if (type === "US") return countryValidationRules.US;
  else if (type === "BR") return countryValidationRules.BR;
  else if (type === "CA") return countryValidationRules.CA;
  else if (type === "DE") return countryValidationRules.DE;
  else if (type === "JP") return countryValidationRules.JP;
  else if (type === "GB") return countryValidationRules.GB;
  else if (type === "FR") return countryValidationRules.FR;
  else if (type === "IT") return countryValidationRules.IT;
  else if (type === "AU") return countryValidationRules.AU;
  else if (type === "NL") return countryValidationRules.NL;
  else if (type === "ES") return countryValidationRules.ES;
  else if (type === "MX") return countryValidationRules.MX;
  else if (type === "IN") return countryValidationRules.IN;
  else if (type === "CN") return countryValidationRules.CN;
  else if (type === "RU") return countryValidationRules.RU;
  else if (type === "CH") return countryValidationRules.CH;
  else if (type === "AT") return countryValidationRules.AT;
  else if (type === "SE") return countryValidationRules.SE;
  else if (type === "NO") return countryValidationRules.NO;
  else if (type === "DK") return countryValidationRules.DK;
  else if (type === "BE") return countryValidationRules.BE;
  else if (type === "PT") return countryValidationRules.PT;
  else if (type === "IE") return countryValidationRules.IE;
  else if (type === "NZ") return countryValidationRules.NZ;
  else if (type === "ZA") return countryValidationRules.ZA;
  return null;
}

// --- Method 2: Full Switch Case (direct regex return) ---
function validateWithSwitch(type) {
  switch (type) {
    case "US":
      return /^\d{5}(?:-\d{4})?$/;
    case "BR":
      return /^\d{5}-\d{3}$/;
    case "CA":
      return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    case "DE":
      return /^\d{5}$/;
    case "JP":
      return /^\d{3}-\d{4}$/;
    case "GB":
      return /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?[ -]?[0-9][ABD-HJLNP-UW-Z]{2}$/;
    case "FR":
      return /^\d{5}$/;
    case "IT":
      return /^\d{5}$/;
    case "AU":
      return /^\d{4}$/;
    case "NL":
      return /^\d{4} ?[A-Z]{2}$/;
    case "ES":
      return /^\d{5}$/;
    case "MX":
      return /^\d{5}$/;
    case "IN":
      return /^\d{6}$/;
    case "CN":
      return /^\d{6}$/;
    case "RU":
      return /^\d{6}$/;
    case "CH":
      return /^\d{4}$/;
    case "AT":
      return /^\d{4}$/;
    case "SE":
      return /^\d{3} ?\d{2}$/;
    case "NO":
      return /^\d{4}$/;
    case "DK":
      return /^\d{4}$/;
    case "BE":
      return /^\d{4}$/;
    case "PT":
      return /^\d{4}-\d{3}$/;
    case "IE":
      return /^([AC-FHKNPRTV-Y]\d{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/;
    case "NZ":
      return /^\d{4}$/;
    case "ZA":
      return /^\d{4}$/;
    default:
      return null;
  }
}

// --- Method 3: Object Literal Map ---
// The `countryValidationRules` object is already our map!
function validateWithObjectMap(type) {
  return countryValidationRules[type] || null;
}

// --- Method 4: Map Object ---
// We create the Map once from our rules object.
const validatorMap = new Map(Object.entries(countryValidationRules));
function validateWithMap(type) {
  return validatorMap.get(type) || null;
}

// --- Method 5: Array.find() ---
// We create the array once from our rules object.
const validatorArray = Object.entries(countryValidationRules).map(
  ([key, value]) => {
    return { type: key, rule: value };
  }
);
function validateWithArrayFind(type) {
  const found = validatorArray.find((item) => item.type === type);
  return found ? found.rule : null;
}

// --- Performance Benchmark Logic (unchanged) ---
function runPerformanceTest(validatorFn, validatorName) {
  console.log(`🚀 Starting benchmark for: ${validatorName}`);
  const iterations = 5_000_000;
  const startTime = performance.now();

  for (let i = 0; i < iterations; i++) {
    const type = validationTypes[i % validationTypes.length];
    validatorFn(type);
  }

  const endTime = performance.now();
  const duration = endTime - startTime;
  console.log(`✅ Finished ${validatorName} in ${duration.toFixed(4)} ms.\n`);
  return duration;
}

// --- Run All Tests ---
console.log(
  "Running expanded validation performance comparison (25 types)...\n"
);

runPerformanceTest(validateWithSwitch, "Switch Case");
runPerformanceTest(validateWithObjectMap, "Object Literal Map");
runPerformanceTest(validateWithMap, "Map Object");
runPerformanceTest(validateWithArrayFind, "Array.find()");
runPerformanceTest(validateWithIfElse, "If/Else Chain");

/** output
 bun .\validations.js
Running expanded validation performance comparison (25 types)...

🚀 Starting benchmark for: Switch Case
✅ Finished Switch Case in 68.4609 ms.

🚀 Starting benchmark for: Object Literal Map
✅ Finished Object Literal Map in 48.0552 ms.

🚀 Starting benchmark for: Map Object
✅ Finished Map Object in 106.3784 ms.

🚀 Starting benchmark for: Array.find()
✅ Finished Array.find() in 407.0861 ms.

🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 68.8392 ms.

new If Else returning directly the regex:
🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 71.3202 ms.
 */
