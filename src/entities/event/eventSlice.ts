import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {
  barFullNameMap,
  filterToWordMap,
  initialEventSliceState,
} from '../../shared/constants'
import { fetchApiResponse } from './api'
import { BarFilter, BarName, EventId, Filter, TEvent } from '../../shared/types'
import { sortEventsByFilter } from '../../shared/utils'
import { RootState } from '../../app/store'

const initialState = initialEventSliceState

const fetchEvents = createAsyncThunk('events/fetchEvents', fetchApiResponse)

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload
      if (state.filter !== 'anyFilter')
        state.events.sort((a, b) => sortEventsByFilter(a, b, state.filter))
    },
    setBarFilter: (state, action: PayloadAction<BarFilter>) => {
      state.events = [...state.initialApiResponse]
      state.barFilter = action.payload
      if (state.barFilter !== 'anyBar')
        state.events = state.events.filter((event) =>
          event.place
            .split(' ')
            .some(
              (placeNamePart) =>
                placeNamePart ===
                barFullNameMap.get(state.barFilter as BarName),
            ),
        )
    },
    filterBySearchResult: (state, action: PayloadAction<string>) => {
      state.events = [...state.initialApiResponse]
      if (action.payload.length > 0)
        state.events = state.events.filter((event) =>
          event.short_name.toLowerCase().includes(action.payload),
        )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = 'idle'
        state.events = action.payload
        state.initialApiResponse = action.payload
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { setFilter, setBarFilter, filterBySearchResult } =
  eventSlice.actions

export const selectEvents = (state: RootState) => state.events.events
export const selectFilter = (state: RootState) => state.events.filter
export const selectBarFilter = (state: RootState) => state.events.barFilter
export const selectEventById = (state: RootState, id: EventId) =>
  selectEvents(state)[id]

export default eventSlice.reducer
