#### Stencil / Snowpack (/ Webpack) Example

This repo is an example of attempting to use a [`dist` distribution of stencil](https://stenciljs.com/docs/distribution) within a snowpack app, as well as a working webpack app using the same stencil lib for comparison.

The stencil-example is a stock `npm init stencil` app, but with the other forms of distribution (`www` and `dist-custom-elements-bundle`) removed.

The goal is to have the stencil component work with snowpack, both for local dev and when built with `@snowpack/plugin-webpack`.

### Running

You should be able to just `npm install` either the snowpack or webpack app.  The stencil app should build automatically (`postinstall` hook), then `npm start`.
