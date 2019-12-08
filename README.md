
<div align="center">
  <h1>Beshai Web Quickstart - Basic</h1>
  <p>
    Quickly spin up web-based prototypes using modern javascript, and minimal webpack
  </p>
  <p>
    Looking for more out of the box? Try 
    <a href="https://github.com/pbeshai/beshai-web-quickstart-full"
      >beshai-web-quickstart-full</a
    >.
  </p>
  <hr />
</div>

## Features

* basic webpack configuration with HTML template and public files copied over
* webpack-dev-server with easy configuration of hot module reloading
* barebones eslint configuration that defers to prettier
* prettier configured
* jsconfig provided to integrate better with [VS Code](https://code.visualstudio.com/)
* optional absolute imports by prefixing with `src`. e.g. `import bar from 'src/foo/bar'`

## Does Not Include

This repo notably does not include other common webpack loaders for importing things like images, css, and fonts. To use those here, you'll either have to add those loaders or put them in the public directory and reference them by their URL in your code and in the index.html.

## Installation

[Download a zip of this repo](https://github.com/pbeshai/beshai-web-quickstart-basic/archive/master.zip) then run `npm install`.

You can copy and paste the following to install. It will prompt you for a project name which sets the name of the directory created:

```shell
echo -n "Enter project name: " && read projectName
curl -Lk https://github.com/pbeshai/beshai-web-quickstart-basic/archive/master.zip -o beshai-web-quickstart-basic.zip && \
  unzip beshai-web-quickstart-basic.zip && \
  rm beshai-web-quickstart-basic.zip
mv beshai-web-quickstart-basic-master $projectName
cd $projectName
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


## Deploying

There are many options to easily deploy your prototype including [Surge](https://surge.sh/) and [Netlify](https://www.netlify.com/), but this repo comes configured for easy deploys to github pages. After pushing your repo to GitHub, just run

```shell
npm run deploy
```

Your app will be available at `https://username.github.io/repo`.


## Linting and Code Formatting

Linting and code formatting is provided via the `lint` and `prettier` scripts. I have my editor configured to automatically run prettier on save, but if you want to run it manually you can run:

```shell
npm run prettier
```

You may also consider [setting up a git hook with husky](https://prettier.io/docs/en/precommit.html) to make eslint and prettier run automatically on commits.

---

## License

Copyright 2019 Peter Beshai

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
