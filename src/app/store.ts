import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createBrowserHistory } from 'history'
import { combineReducers } from 'redux'
import { createReduxHistoryContext } from 'redux-first-history'

import eventReducer from '../entities/event/eventSlice'
import counterReducer from '../features/Counter/counterSlice'
import { docsApi } from './services/docs'

// Setup redux-first-history
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() })
export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development' ? true : false,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([docsApi.middleware, routerMiddleware]),
  reducer: combineReducers({
    counter: counterReducer,
    events: eventReducer,
    router: routerReducer,
    [docsApi.reducerPath]: docsApi.reducer,
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
export const history = createReduxHistory(store)
