#Redux based Tech Stack App

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

###Actual Application Stuff:

1. npm install --save redux react-redux
