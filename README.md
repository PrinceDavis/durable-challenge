# Node Challenge

### Functionalities
- Paginated results.
- Sorting.
- Request validation.
- dotenv for easy env management.
- pre-start validation to cut out runtime/enviroment issues.


## API
- [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/collections/8a9d4e0f1cebcb1995d0)
- link to [doc](https://documenter.getpostman.com/view/263074/UVksMuZ3)


### Running App

- Create a `.env` in the base directory from the .env-example file included.
- Make sure your node version is >=16
- Note: the app pre-startup check will fails and app would not start if you don't have the right env variables or node version is below the required version.


Run:


```bash
yarn
```

## Build Typescript

```bash
yarn build-ts
```


## Start

```bash
yarn start
```


## Test


```bash
yarn test
```


### Summary
- I Used jest as the test runner instead of mocha.
