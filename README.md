# Next Starter

Tech Stack:

[Next.js](https://nextjs.org/) | [TypeScript](https://www.typescriptlang.org/) | [ESLint](https://eslint.org/) | [Prettier](https://prettier.io/) | [Tailwind CSS](https://tailwindcss.com/) | [pnpm]()

## How to use it

To use this starter, run the following command to create your Next.js app:

```sh
pnpm create next-app my-app -e https://github.com/heloineto/next-starter
```

Note:

To have an up-to-date project, verify when this template was last updated. If you believe it was too long ago, consider recreating it following (and changing if necessary) the steps below.

## How to re-create it

1.  You can create a TypeScript project with `create-next-app` using the `--ts`, `--typescript` flag. [Instructions here.](https://nextjs.org/docs/basic-features/typescript)

    ```shell
    pnpm create next-app --ts next-starter
    ```

1.  Install Tailwind. [Instructions here.](https://tailwindcss.com/docs/guides/nextjs)

    Remember to use `pnpm` instead of `npm`

    Add automatic tailwind class sorting with prettier. [Instructions here](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

    ```shell
    pnpm i -D prettier prettier-plugin-tailwindcss
    ```

1.  Configure Prettier. [See configuration.](./.prettierrc)

    Install `eslint-config-prettier`. [See more.](https://prettier.io/docs/en/integrating-with-linters.html)

    ```bash
    pnpm i -D eslint-config-prettier
    ```

    Notes:

    Trailing commas improve developer experience. [See why](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

1.  Configure ESLint. [See configuration.](./.eslintrc.json)

    Install ESLint Plugin TypeScript. [Instructions here.](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

    ```bash
    pnpm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`
    ```

1.  Add Husky and lint-staged

    Install husky. [Instructions here.](https://typicode.github.io/husky/#/?id=install)

    Add lint-staged. [Instructions here.](https://www.npmjs.com/package/lint-staged)

1.  Add vscode settings & extensions

    ```json
    // .vscode/settings.json

    {
    	"editor.codeActionsOnSave": [
    		"source.addMissingImports",
    		"source.fixAll",
    		"source.organizeImports"
    	],
    	"editor.defaultFormatter": "esbenp.prettier-vscode",
    	"editor.foldingImportsByDefault": true,
    	"editor.formatOnSave": true
    }
    ```

    ```json
    // .vscode/extensions.json

    {
    	"recommendations": [
    		"svelte.svelte-vscode",
    		"bradlc.vscode-tailwindcss",
    		"dbaeumer.vscode-eslint",
    		"esbenp.prettier-vscode"
    	]
    }
    ```

1.  Add common utils

    ```
    src/
    ├ lib/
    ├ utils/
    │ └ classes.ts
    ```
