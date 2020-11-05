## Add Linter

We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/) for linting and code formatting:

- Create file `.eslintrc.js` and copy content from [here](https://gist.github.com/radenkovic/96984e8efd995e9258cf3a82c86be497)
- install dependencies mentioned in gist (under `bash`)
- do not install `eslint` dependency if you are using `create-react-app`
- add `script` in `package.json`: `"lint": "eslint ./src"`


## Add support for absolute path

- Create `jsconfig.json` file in the project root
- Paste content from [here](https://gist.github.com/radenkovic/96984e8efd995e9258cf3a82c86be497)
  

Now you can use:

`import LandingPage from components/LandingPage` 

anywhere, instead of

`import LandingPage from '../../../components/LandingPage'`