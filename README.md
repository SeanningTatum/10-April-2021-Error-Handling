# 10-April-2021-Error-Handling


> ✨ Bootstrapped with create-su-app. (create sean urgel app)

[Read the blog](https://seanurgel.dev/blog/better-error-handling-in-react-and-axios)
[Slides](https://seanurgel.dev/blog/better-error-handling-in-react-and-axios)

```
├── routes
│   ├── Home.test.tsx
│   ├── Home.tsx <------ Demo App
├── services
│   └── Blog.ts <------ Api Calls
├── store
│   └── DialogStore.tsx <------- State Management
├── types
│   ├── Errors.ts <--------- Custom errors
│   └── ValidationError.ts
└── utils
    └── axiosInstance.ts <-------- Custom axios instance
```

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
