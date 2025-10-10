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

// Automatically generate the list of types from our rules object
const validationTypes = Object.keys(countryValidationRules);

// --- Method 1: If/Else Chain (abbreviated for readability) ---
function validateWithIfElse(type) {
  if (type === "US") {
    return countryValidationRules.US;
  } else if (type === "BR") {
    return countryValidationRules.BR;
  } else if (type === "CA") {
    return countryValidationRules.CA;
  } else if (type === "DE") {
    return countryValidationRules.DE;
  } else if (type === "JP") {
    return countryValidationRules.JP;
  }
  // ... and so on for all 25 countries. This gets very long.
  else if (type === "ZA") {
    return countryValidationRules.ZA;
  }
  return null;
}

// --- Method 2: Switch Case (abbreviated for readability) ---
function validateWithSwitch(type) {
  switch (type) {
    case "US":
      return countryValidationRules.US;
    case "BR":
      return countryValidationRules.BR;
    case "CA":
      return countryValidationRules.CA;
    case "DE":
      return countryValidationRules.DE;
    case "JP":
      return countryValidationRules.JP;
    // ... and so on for all 25 countries.
    case "ZA":
      return countryValidationRules.ZA;
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
node .\validations.js
Running expanded validation performance comparison (25 types)...

🚀 Starting benchmark for: Switch Case
✅ Finished Switch Case in 28.0311 ms.

🚀 Starting benchmark for: Object Literal Map
✅ Finished Object Literal Map in 108.6997 ms.

🚀 Starting benchmark for: Map Object
✅ Finished Map Object in 90.2662 ms.

🚀 Starting benchmark for: Array.find()
✅ Finished Array.find() in 124.6828 ms.

🚀 Starting benchmark for: If/Else Chain
✅ Finished If/Else Chain in 47.6416 ms.
 */
