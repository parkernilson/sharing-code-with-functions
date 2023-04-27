# Sharing Code with Firebase Functions
This project is an example of how to share code between firebase functions and other packages using a monorepo.

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

### Note
Since vite pre-bundles dependencies and [caches them in the browser](https://vitejs.dev/guide/dep-pre-bundling.html#browser-cache), you may need to temporarily disable the network cache when making changes to the shared code and developing in the web app.