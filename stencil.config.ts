import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-super-compoments-yee',
  globalStyle: 'src/global/style.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    { src: 'global' }
  ]
};
