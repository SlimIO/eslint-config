"use strict";

const { join } = require("path");

// CONSTANTS
const RULES_DIR = join(__dirname, "src");

module.exports = {
    extends: [
        join(RULES_DIR, "possible-errors.js"),
        join(RULES_DIR, "best-practices.js"),
        join(RULES_DIR, "node.js"),
        join(RULES_DIR, "styles.js"),
        join(RULES_DIR, "ecmascript6.js"),
        join(RULES_DIR, "jsdoc.js")
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 9,
        sourceType: "script"
    },
    rules: {
        strict: ["error", "global"]
    },
    plugins: [
        "jsdoc"
    ]
}
