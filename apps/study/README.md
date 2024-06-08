# StyleX Study

This is a minimal app for studying the StyleX styling system. It uses Babel and `@stylexjs/babel-plugin` to processed the styles, and Parcel to bundle the app.

## Start

```
npm start
```

This will start a `babel --watch` and a Parcel development server in parallel. By default, the app will be served at `http://localhost:1234`.

Live reload might not work correctly with the current setup. It's recommended to refresh the page manually after saving changes.

## The Build Process

First, Babel will transform the source from the `src` directory, and output them to the `build` directory. We're using a minimal Babel configuration at this step, with `@stylexjs/babel-plugin` as the only plugin (except the ones for JSX and TS support). This way, we can easily inspect the output of the `@stylexjs/babel-plugin` without the interference of other plugins.

Then, Parcel will take on to bundle the app from the `build` directory, making it ready for the browser. The output of Parcel will be in the `dist` directory. Since Parcel is a zero-config bundler, we don't need to provide any configuration for it to work.

## Troubleshooting

* Try to remove the `dist` and `build` directories alone with the Parcel cache (`rm -rf build && rm -rf dist && rm -rf ../../.parcel-cache`) and restart `npm start`.
