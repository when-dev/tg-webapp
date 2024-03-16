import React from 'react'
import { Provider as ReduxStoreProvider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'
import { history, store } from './store'
import AfishaPage from '../pages/afisha'
import UserPage from '../pages/userPage'
import EventDetailsPage from '../pages/eventDetailsPage'
import ReserveTablePage from '../pages/reserveTablePage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxStoreProvider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/" element={<AfishaPage />} />
            <Route path="/my">
              <Route path="events" element={<UserPage />} />
              <Route
                path="reservations"
                element={<UserPage type="reservations" />}
              />
            </Route>
            <Route path="/events">
              <Route path=":id" element={<EventDetailsPage />} />
            </Route>
          <Route path="/reservation" element={<ReserveTablePage />} />
          </Routes>
        </HistoryRouter>
      </ReduxStoreProvider>
    </QueryClientProvider>
  )
}

export default App
