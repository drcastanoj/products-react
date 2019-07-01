
### Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**

## Prerequisite
- Install yarn `npm install -g yarn`

```bash
# clone
git clone https://github.com/drcastanoj/products-react.git

# change directory to our repo
cd products-react


# install the repo with yarn
yarn or npm i

# start the server backend
yarn start:dev or npm run start:dev

```
go to frontend[http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:5000](http://localhost:3000) in your browser

go to backend [http://0.0.0.0:8080/api](http://0.0.0.0:8080/api) or [http://localhost:8080/api](http://localhost:8080/api) in your browser



## Build production on Heroku

```bash
# build
yarn build

# start the server backend
yarn start

```

## Available Scripts
1. `yarn start` - Starts the server backend and frontend for deploy on Heroku
2. `yarn start:development` - Starts the react app
3. `yarn clean:build` - Delete files on /build
4. `yarn test:ci` - Run test and show coverage
4. `yarn build` - Generate react app on /build
5. `yarn test` - Run server test
6. `yarn start:api` - Run server backend with products
7. `yarn cy` - Run E2E tests


###  create-react-app Docs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start:dev or yarn start:dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test or yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
