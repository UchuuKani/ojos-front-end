# Million Ojos Project

This is supposed to be a fairly minimal front end.

Base project set up including Parcel, project structure, and config files based on:

- https://adrianhall.github.io/javascript/react/2020/03/29/parcel-typescript-react/
- https://github.com/adrianhall/parcel-typescript-template/tree/v0.1

---

## Make-shift documentation of the problems I encounter - to be moved elsewhere later on

11/27/2020 - For whatever reason, React was not defined in `src/index.tsx` when trying to run `parcel public/index --open` as part of the `dev` npm script

- after a quick Google search found a Github issue for the `parcel-bundler` project encountering similar issue when using Typescript in the project, and found a solution:
  - previously, in `index.tsx` was importing React like so: `import React from "react"`, but someone (gnijuohz) in the thread said to use `import * as React from 'react'` to import. This fixed my issue.
  - in the end, included this option in `tsconfig.json` and able to use `import React from "react"`: "allowSyntheticDefaultImports": true,
