// Criando um Redux Store
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);


// Obtenha o estado da Redux Store
let currentState = store.getState();


// Defina uma ação Redux
const action = {
  type: 'LOGIN'
}


// Defina um Criador de Ação => Uma função que retorna uma ação
const actionCreator = () => {
  return action;
}

// Enviando uma action para um reducer
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());


// Criando um Reducer para receber e manipular uma action

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  if(action.type === 'LOGIN') {
    return {
    login: true,
    }
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};


// Use uma instrução Switch para lidar com várias ações
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return { authenticated: true}
    case 'LOGOUT':
      return { authenticated: false}
    default:
      return state;
  }
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};


//  const para tipos de ação
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};


//Registrar um escutador da Store
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);


// Global count variable:
let count = 0;

store.subscribe(()=> count = count + 1)

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);


// Combinando múltiplos reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
})

const store = Redux.createStore(rootReducer);


// Enviar dados de ação para a loja
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// Escreva um contador com Redux
  // definir a constates que serão os tipos de cada action
  const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
  const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types
  
  // definir as ações
  const incAction = () => {
    return {
      type: INCREMENT,
    }
  }; // Define an action creator for incrementing
  
  const decAction = () => {
    return {
      type: DECREMENT,
    }
  }; // Define an action creator for decrementing

  // criar uma store do Redux
  const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your combineReducers

  // criar o reducer
  const counterReducer = (state = 0, action) => {
    switch(action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      default:
        return state;
    }
  }; // Define the counter reducer which will increment or decrement the state based on the action it receives



// Never Mutate State - Por que nunca modificar um state ?
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
  const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
  ];

  const immutableReducer = (state = todos, action) => {
    switch(action.type) {
      case ADD_TO_DO:
        // Don't mutate state here or the tests will fail
        return [...state, action.todo]
      default:
        return state;
    }
  };

  const addToDo = (todo) => {
    return {
      type: ADD_TO_DO,
      todo: todo
    }
  }

  const store = Redux.createStore(immutableReducer);


//Use o Spread Operator em Arrays
  const alert = ['Do not mutate state!'];

  const immutableReducer = (state = alert, action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Don't mutate state here or the tests will fail
        return [...state, action.todo]
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);


//Remover um item de uma matriz
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);


// Copie um objeto com Object.assign
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: 'online'})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
