import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-example',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
  ],
};
