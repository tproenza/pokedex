# Pokedex clone 👾

A web responsive approach to building a Pokedex clone using the [Poke API](https://pokeapi.co/)

## How to run

```
git clone git@github.com:tproenza/pokedex.git
cd pokedex
```
Use Node v14 or greater: If you're using [NVM](https://github.com/nvm-sh/nvm)
```
nvm install v14
nvm use v14
```
Install the dependencies
```
npm install
```
Start the app
```
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Stack

- [Create React App](https://github.com/facebook/create-react-app) To bootstrap the app
- [TypeScript](https://www.typescriptlang.org/) For Typing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) For testing
- [Axios](https://www.npmjs.com/package/axios) As the HTTP client
- [Styled Components](https://styled-components.com/) For styling
- [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) For responsiveness

## What's Included
**Testing:** Some tests can be found [here](https://github.com/tproenza/pokedex/blob/main/src/App.test.tsx). This is an initial subset of more that can be included throughout the app to assert the expected user behavior.

**Responsiveness & Styling:** The app layout is responsive solely with the use of Flexbox. Less time was spent on actual styling (CSS), but all of the groundwork is established by modular use of Styled Components.

**Error handling:** Exception handling statements are defined throughout the app in efforts to ensure the user doesn't end in a state where the app is unusable, however, there's always room to improve UI/UX via proper error handling. Some of the thought includes adding `catch` blocks at the http client level where a `try...catch` statement may not capture `Uncaught (in promise)` type errors. The user is also routed to appropriate routes when the app is unable to producre the data to build the UI. Further enhancements should be added regarding what a user sees after being routed to a certain view due to hitting error cases.

**Create Pokemon feature:** The inspiration for the pokemon being added comes after the programming "glitch" introduced in some of the early Pokemon video games where an unofficial species can be found and is known as [MissingNo](https://en.wikipedia.org/wiki/MissingNo.). This feature uses the [Storage service](https://github.com/tproenza/pokedex/blob/main/src/services/storageService.ts/storageService.ts) and integrates with [custom hooks](https://github.com/tproenza/pokedex/tree/main/src/hooks) which allows users to create new pokemon without using any 3rd party APIs and see them in the list with the existing pokemon coming from the [Poke API](https://pokeapi.co/). 

The feature allows a user to create a new Pokemon by inputing just a name for demonstration purposes. More input fields can be added to create your own Pokemon with the stats of your liking. Styling-wise (CSS) this view can be greatly enhanced as not much time was placed into it.

## Takeaways
There are great opportunities to enhance each of the above sections that might've been under time contraints and will be followed up upon with additional PRs. Thanks for reading!
