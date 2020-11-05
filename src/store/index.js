import { configureStore, getDefaultMiddleware, createReducer } from '@reduxjs/toolkit';
import Data from '../Data'


const initialState = { data: Data }
const booksReducer = createReducer(initialState, {
  'BOOK/REMOVE': (state, action) => {
    console.log('Received action', action, state.data)
    state.data = state.data.filter(book => book.id !== action.id)
    return state
  }
  
})

const store = configureStore({
  reducer: {
    // Register reducer here
    books: booksReducer,
  },
  devTools: true, // process.env.NODE_ENV !== 'production',
  middleware: [
    ...getDefaultMiddleware({
    }),
  ],
});



// Add to cart
store.dispatch({ type: 'BOOK/REMOVE', id: 5})


export default store;
