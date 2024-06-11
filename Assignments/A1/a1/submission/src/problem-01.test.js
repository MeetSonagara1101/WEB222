const { toCamelCase } = require('./solutions');

describe('Problem 1 - toCamelCase() function', function () {
  test('returns name unmodified if it needs no changes', function () {
    let result = toCamelCase('variable');
    expect(result).toBe('variable');
  });

  test('returns simple name in UpperCamelCase if requested', function () {
    let result = toCamelCase('variable', true);
    expect(result).toBe('Variable');
  });

  test('correctly converts variable-name to variableName', function () {
    let result = toCamelCase('variableName');
    expect(result).toBe('variableName');
  });

  test('correctly converts variable-name to VariableName', function () {
    let result = toCamelCase('variableName', true);
    expect(result).toBe('VariableName');
  });

  test('correctly deals with long kebab-case names', function () {
    let result = toCamelCase('variablenamewithmanyDashes');
    expect(result).toBe('variablenamewithmanyDashes');
  });

  test('correctly deals with multiple - in a row', function () {
    let result = toCamelCase('variableNameWithMultipleDashes');
    expect(result).toBe('variableNameWithMultipleDashes');
  });
});
