# Sharing Code with Firebase Functions
This project is an example of how to share code between firebase functions and other packages using a monorepo.

## How it works
The shared code is a monorepo package that is imported by both the firebase functions and the web app. Normally firebase functions have a hard time with symlinked packages in monorepos, since the source files are uploaded to Google Cloud where the dependencies are then installed according to the package.json. However, we resolve this issue by using vite lib mode to bundle the shared code into the firebase functions source code while leaving all other dependencies external.

This solution is inspired by a suggestion by benrandja-akram on Github, check out the issue [here](https://github.com/vercel/turbo/issues/1121#issuecomment-1365561698).

## Getting Started
1. Install dependencies
``` bash
npm install
```
2. Run firebase functions emulator
``` bash
npm run emu
```
3. Open another terminal and run development mode
``` bash
npm run dev
```

Now you can see that both the firebase functions and the development mode are running and sharing the same code.

## Note
Since vite pre-bundles dependencies and [caches them in the browser](https://vitejs.dev/guide/dep-pre-bundling.html#browser-cache), you may need to temporarily disable the network cache when making changes to the shared code and developing in the web app.