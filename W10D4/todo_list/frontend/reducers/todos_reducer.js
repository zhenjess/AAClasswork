
import  { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};



const todosReducer = (state = initialState, action) => {
  Object.freeze(state); //for safety to allow no manipulation of original state

  const nextState = Object.assign({}, state); //to create the new state putting old into new state
  const nextState1 = {};

  switch (action.type) {
   
    case (RECEIVE_TODOS): 
      action.todos.forEach(function(todo) {
        nextState1[todo.id] = todo; //to begin from an empty POJO for a new POJO each time 
      });
     return nextState;

    case (RECEIVE_TODO):
      nextState[action.todo.id] = action.todo;
      return nextState;

    default:
      return state;
  }
};

export default todosReducer;