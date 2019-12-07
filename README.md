# beshai-web-quickstart-basic

This repo provides a starting point for spinning up quick web-based prototypes using modern javascript and webpack.

## Features

* basic webpack configuration with HTML template and public files copied over
* webpack-dev-server with easy configuration of hot module reloading
* barebones eslint configuration that defers to prettier
* prettier configured
* jsconfig provided to integrate better with VS Code
* optional absolute imports by prefixing with `src`. e.g. `import bar from 'src/foo/bar'`

## Does Not Include

This repo notably does not include other common webpack loaders for importing things like images, css, and fonts. To use those here, you'll either have to add those loaders or put them in the public directory and reference them by their URL in your code and in the index.html.

## Installation

[Download a zip of this repo](https://github.com/pbeshai/beshai-web-quickstart-basic/archive/master.zip) then run `npm install`

```shell
curl -Lk https://github.com/pbeshai/beshai-web-quickstart-basic/archive/master.zip -o beshai-web-quickstart-basic.zip && \
  unzip beshai-web-quickstart-basic.zip && \
  rm beshai-web-quickstart-basic.zip
mv beshai-web-quickstart-basic-master prototype94
cd prototype94
npm install
```

## Run the dev server

```shell
npm run start
```


## Build for production

```shell
npm run build
```

You can then check out the production build by running a web server in the build directory. A simple way to do so is to use the provided `start:prod` script:

```shell
npm run start:prod
```

## Linting and Code Formatting

Linting and code formatting is provided via the `lint` and `prettier` scripts. I have my editor configured to automatically run prettier on save, but if you want to run it manually you can run:

```shell
npm run prettier
```

You may also consider [setting up a git hook with husky](https://prettier.io/docs/en/precommit.html) to make eslint and prettier run automatically on commits.