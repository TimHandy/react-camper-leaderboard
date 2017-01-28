# React Camper Leaderboard

A Free Code Camp assignment.

## Objective

Build a CodePen.io app that is functionally similar to [this](https://codepen.io/FreeCodeCamp/full/eZGMjp/).

Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.

**User Story**: I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.

**User Story**: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.

**User Story**: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.

Hint: To get the top 100 campers for the last 30 days: https://fcctop100.herokuapp.com/api/fccusers/top/recent.

Hint: To get the top 100 campers of all time: https://fcctop100.herokuapp.com/api/fccusers/top/alltime.


## Completed App

[Github Pages app](https://timhandy.github.io/react-camper-leaderboard/)

## Notable learning/features

- I should pseudocode more than I do, and plan the app out on paper first.

- .map over the api response, rather than doing a foreach.

- Only use setState once in the apiCall. I had multiple setState in the same function; this is bad. Don't need a first setState to set clear the campers to empty array, just build a fresh array and overwrite the existing one.

- The column sorting didn't matter which column was clicked; it just toggled back and forth between the two api calls and displayed that data. If I made handleClick accept an arg...'column', and used that to do the re-resort, this is more flexible/expandable if columns increase. To do this, I added an anonymous function in the onClick and pass in the arg for which column, this is a common pattern. David at the hack night explained this to me.

- Heard directly from a developer that their whole company is now using ES6 and removing jquery from all projects they refactor. They are no-longer allowed to use jquery and have to do everything in plain JS. He said that with ES6 he doesn't need to use jquery.

- App.jsx out on it's own looks odd; put this in the root of src next time.

- Inline styles are pretty cool, goes against the whole css in a separate file thing, but I can see why it works; everything is in one place.

## Notes for next time

- I should pseudocode more than I do, and plan the app out on paper first.

- Start to keep a boilerplate for React apps that I can use as a starting point.

- More smaller components is better than a few large ones. In future I would have created a header component also.

- dir structure:

      src 
          components   => for all dumb components
          controllers  => for all smart/container components
          App.jsx   => the main container for the app
      main.js  => to launch the app... this simply renders App.jsx to the app div.

- Try using fetch with promises instead of axios...

      fetch('/apiurl').then(response => {
          do whatever
      })

- Remove unused CSS.


## Dev

See package.json for run commands.