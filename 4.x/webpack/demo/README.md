# Sample using @arcgis/webpack-plugin

## Usage

```
npm install

# run local dev server
npm start

# create a production build
npm run build
```

## Steps to get to bug

Run on command line:

```
npm i
npm start
```

Watch the app work!

Now kill the task with CTRL+C

Then run 

```
npm start
```

Watch the app fail! Open the console to make sure

### What's happening here?

The `import('esri/...')` code is a dynamic import. Webpack recognizes this and automatically splits it into its own bundle. This is used for optimization so that we can dynamically load modules as they are needed. This is causing some issue with either the JS API, Dojo webpack plugin, Or some combination between that and the web workers in the API. 
