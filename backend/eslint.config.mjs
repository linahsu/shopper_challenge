import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("plugin:@typescript-eslint/recommended"), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        globals: {
            ...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, "off"])),
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 2016,
        sourceType: "module",
    },

    rules: {
        "no-console": "warn",
        camelcase: "warn",
        "arrow-parens": [2, "always"],
        quotes: [2, "single"],
        "consistent-return": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
        }],

        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
        }],

        "object-curly-newline": "off",
        "max-params": ["error", 4],
        "max-lines": ["error", 100],

        "max-lines-per-function": ["error", {
            max: 22,
            skipBlankLines: true,
            skipComments: true,
        }],

        "max-len": ["error", 100, {
            ignoreComments: true,
        }],

        complexity: ["error", 5],
        "import/no-extraneous-dependencies": ["off"],
        "@typescript-eslint/no-empty-interface": "warn",

        "@typescript-eslint/lines-between-class-members": ["error", "always", {
            exceptAfterSingleLine: true,
        }],
    },
}];