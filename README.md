# ES6 and React Boilerplate Playground

TODO: Some more relavent README details here

### How to develop/run

- Install dependencies `npm install`
- Fire it up! `npm run develop`
  - Starts a "build/watch" process via WebPack
  - Starts a "live reload" server via BrowserSync
- Be happy

**If all goes well** you should see something that looks like:

![image](https://cloud.githubusercontent.com/assets/1240178/7254344/be70dd34-e7ff-11e4-96fa-3794bba2a3bb.png)

*Note: You may have to manually reload the page **once** for the first build :)

Read `package.json` for details on `npm run` commands. Currently something along the lines of

```json
{
  "scripts": {
    "build": "./node_modules/.bin/webpack",
    "develop": "./node_modules/.bin/webpack --watch --verbose & npm run server",
    "lint": "./node_modules/.bin/eslint ./src; true;",
    "server": "./node_modules/.bin/browser-sync start --config='./bs-config.js'"
  },
}
```