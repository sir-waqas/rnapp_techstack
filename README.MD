# Redux based Tech Stack App

//Introduction to Redux:

https://stephengrider.github.io/JSPlaygrounds/
//const reducer = () => [];

//Setup the reducer to get an action to change the state
const reducer = (state=[], action) => {
if(action.type === 'split_string'){
return action.payload.split('');
}else if(action.type === 'add_character'){
//state.push(action.payload);
//return state;
//New way to do things using JSX
return [...state, action.payload];
}
return state;
};
//Create a store with a reducer setup into it
const store = Redux.createStore(reducer);
//Get the state status
store.getState();
//Action to be done by the reducer
const action = {
type: 'split_string',
payload: 'asdf'
};
//Trigger the action to be pushed into the reducer to change the state
store.dispatch(action);
//Check the State changed
store.getState();
//Now to check what use this redux has on the application to reduce complexity
const action2 = {
type: 'add_character',
payload: 'a'
};
store.dispatch(action2);
store.getState();

### Actual Application Stuff:

1. npm install --save redux react-redux

### We will create two reducers in the app state

1. List of Topics with Text
2. Currently Selected Topic

### Items To Do

1. Create a JSON File containing the Items to be listed in the application // Alternatively we can bring them from a web-service as well (as done while stying fetch)
2. Create a Reducer with a title LibraryReducer.js
3. Create a Custom Component LibraryList.js to display the data using Redux mechanism
4. Use Connect in LibraryList to achieve the goal
5. Most importantly we will create a mapStateToProps function implementation to achieve our goals
