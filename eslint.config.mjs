import react from "eslint-plugin-react"
import prettier from "eslint-plugin-prettier"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const compat = new FlatCompat({
    baseDirectory: dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
})

export default [
    {
        files: ["**/*.ts", "**/*.jsx", "**/*.tsx"],
    },
    ...compat.extends("plugin:react/recommended", "airbnb", "prettier"),
    {
        plugins: {
            react,
            prettier,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            ecmaVersion: 13,
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            "prettier/prettier": "warn",
            "arrow-body-style": "off",
            "prefer-arrow-callback": "off",

            "no-unused-vars": [
                "error",
                {
                    vars: "local",
                    args: "none",
                },
            ],

            "react/jsx-filename-extension": [
                1,
                {
                    extensions: [".js", ".jsx"],
                },
            ],

            "react/function-component-definition": [
                2,
                {
                    namedComponents: "function-declaration",
                },
            ],

            "no-use-before-define": [
                "error",
                {
                    variables: false,
                },
            ],
        },
    },
    {
        ignores: ["public/*", "node_modules/*", ".cache/*"],
    },
]
