---
title: Visualization
date: February 2022
---

- component dependencies  
- file structure & commit history  
- bundle size  

## 1. for Component Dependencies

We can use [arkit](https://github.com/dyatko/arkit).

>Visualises JavaScript, TypeScript and Flow codebases as meaningful and committable architecture diagrams

- package.json

```json
{
  // ...
  "scripts": {
    "arkit": "npx arkit -d src -e \"src/typings,src/configs,src/constants.ts\" -o ./docs-components.png",
    // ...
  }
}
```

Example:

![example-of-generated-component-dependencies](https://raw.githubusercontent.com/ibarapascal/netbooks/master/src/temp/vision-view-components.svg)

We can combine it with CI, for example, commit the latest component dependencies chart after the merge operation on the master branch, or directly comment into the PR, etc.  

<details>

<summary>click here to see the CI example</summary>

```yml
name: Arkit
on:
  pull_request:
    branches:
      - master

jobs:
  arkit:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Init
        uses: actions/setup-node@v2
        with:
          node-version: 17
          cache: yarn
      - name: Create Arkit image
        run: |
          npm install -g yarn
          yarn
          yarn arkit
      - name: Upload image
        uses: devicons/public-upload-to-imgur@v2.2.2
        id: imgur_step
        with:
          path: ./docs-components.png
          client_id: ${{secrets.IMGUR_CLIENT_ID}}
      - name: Make comment
        uses: github-actions-up-and-running/pr-comment@v1.0.1
        with:
          repo-token: ${{secrets.GITHUB_TOKEN}}
          message: ${{ fromJSON(steps.imgur_step.outputs.markdown_urls)[0] }}
```

</details>

## 2. for File Structure & Commit history

We can use [gource](https://gource.io/).

>Software projects are displayed by Gource as an animated tree with the root directory of the project at its centre. Directories appear as branches with files as leaves. Developers can be seen working on the tree at the times they contributed to the project.

```shell
gource -s .5 -1280x720 --auto-skip-seconds .5 \
  --stop-at-end --output-ppm-stream - --output-framerate 30 \
  | ffmpeg -y -r 30 -f image2pipe -vcodec ppm -i - -b 65536K docs-gource.mp4
```

Example: 

![example-of-generated-commit-history-and-file-structure](https://raw.githubusercontent.com/ibarapascal/netbooks/master/src/temp/screenshot-files-20200202172311.jpg)

## 3. for Bundle Size

We can use [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer).

- next.config.js

```js
webpack: (config, {dev, isServer, ...options}) => {
  if (process.env.ANALYZE) {
    const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: options.isServer
          ? '../analyze/server.html'
          : './analyze/client.html',
      })
    );
  }
```

Example:

![example-of-generated-bundle-size-chart](https://user-images.githubusercontent.com/30466424/206376178-3ea7339e-0268-492a-b462-99be888fa142.png)

We can optionally check the import cost directly via the IDE extensions.  

For exmaple for VS code, we have

```
code --install-extension wix.vscode-import-cost
```
