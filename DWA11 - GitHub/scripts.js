const createStore = (reducer) => {
    let state;
    const subscribers = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach((listener) => listener());
    };

    const subscribe = (listener) => {
        subscribers.push(listener);
    };

    dispatch({ type: '' });

    return { getState, dispatch, subscribe };
};

const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

const tallyReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case ADD:
            return { count: state.count + 1 };
        case SUBTRACT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
    }
};

const store = createStore(tallyReducer);

store.subscribe(() => {
    console.log('State changed:', store.getState());
});

console.log('Scenario 1');
console.log('Initial State:', store.getState());

console.log('Scenario 2');
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });

console.log('Scenario 3');
store.dispatch({ type: SUBTRACT });

console.log('Scenario 4');
store.dispatch({ type: RESET });