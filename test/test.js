"use strict";

// Require Third-party Dependencies
const Ajv = require("ajv");

// Require Internal
const schema = require("./eslint.schema.json");
const rule = require("../index.js");

// Merge all rules!
rule.rules = {};
rule.env = {};

for (const filePath of rule.extends) {
    const payload = require(filePath);
    if (payload.env) {
        Object.assign(rule.env, payload.env);
    }
    Object.assign(rule.rules, payload.rules);
}
delete rule.extends;

// Validate
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile(schema);

const isValid = validate(rule);
if (!isValid) {
    console.error(validate.errors);
    throw new Error("Failed to validate Config");
}
console.log("Succesfully validated ESLint config!")
