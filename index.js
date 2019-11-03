"use strict";

// Require Node.js Dependencies
const { existsSync, readFileSync } = require("fs");
const { join } = require("path");

// Require Third-party Dependencies
const TOML = require("@iarna/toml");

// CONSTANTS
const RULES_DIR = join(__dirname, "src");

const rules = {
    strict: ["error", "global"]
};

const parserOptions = {
    ecmaVersion: 9,
    sourceType: "script"
};

const manifestPath = join(process.cwd(), "slimio.toml");
if (existsSync(manifestPath)) {
    try {
        const buf = readFileSync(manifestPath);
        const { type = "package" } = TOML.parse(buf.toString());

        switch(type.toLowerCase()) {
            case "addon":
                rules["require-await"] = "off";
                rules["max-params"] = ["error", 4];
                parserOptions.sourceType = "module";
                break;
            case "napi":
                rules["no-param-reassign"] = "off";
                break;
        }
    }
    catch (err) {
        // Do nothing
    }
}

module.exports = {
    extends: [
        join(RULES_DIR, "possible-errors.js"),
        join(RULES_DIR, "best-practices.js"),
        join(RULES_DIR, "node.js"),
        join(RULES_DIR, "styles.js"),
        join(RULES_DIR, "ecmascript6.js"),
        join(RULES_DIR, "jsdoc.js")
    ].map(require.resolve),
    parser: "babel-eslint",
    parserOptions,
    rules,
    plugins: [
        "jsdoc"
    ]
}
