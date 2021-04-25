# Mail Service (Frontend)

This project is mainly focused on sending emails by using different mail service providers (eg: `sendgrid`). This codebase is front-end UI which shows the form to allow user to type and send emails.


### How to run it locally

```js
// install npm packages and start front-end codebase locally
yarn && yarn start

// run test locally
yarn run test
```


### Major functionalities

1. Using React hook form (form fields) + Yup (validation) + Styled components (CSS) for creating a mail form
2. Support responsive display (tested)


### Improvements

1. Add context API for displaying emails records which is after clicked 'Submit' button
2. Refactor `EmailForm.tsx` component file, make it shorter
3. Add unit test coverage functionality 


### Resources:

1. https://github.com/JedWatson/react-select
2. https://react-select.com/home
3. https://react-select.com/creatable
4. https://stackoverflow.com/questions/62059408/reactjs-and-typescript-refers-to-a-value-but-is-being-used-as-a-type-here-ts
5. https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import/56577324
6. https://www.npmjs.com/package/jest-fetch-mock
