import { rovesnikLogo, dorozhkaLogo, skrepkaLogo } from './assets'
import {
  ApiResponse,
  BarFilter,
  BarName,
  EventSliceState,
  EventType,
  Filter,
  ReservationInfo,
  TableData,
} from './types'

export const mockApiResponse: ApiResponse = {
  events: [
    {
      id: 1,
      name: 'День святого валентина',
      date: '14 февраля',
      time: 'с 20:00',
      place: '3 этаж бара Ровесник',
      price: 'от 400₽',
      type: 'Бесплатная вечеринка',
      description:
        'ROCKET — артист, который не нуждается в представлении. С каждым релизом его фан-база растёт в геометрической прогрессии. Его музыка — одна из самых вайбовых в отечественной индустрии. Пожалуй, каждый из нас слышал такие треки, как: «Город», «Everything Is Fine», «Monday» и, конечно же, «Инкассатор».',
    },
    {
      id: 2,
      name: 'Любое другое событие',
      date: '2 марта',
      time: 'с 19:00',
      place: '3 этаж бара Скрепка',
      price: 'от 400₽',
      type: 'Депозит',
      description:
        'ROCKET — артист, который не нуждается в представлении. С каждым релизом его фан-база растёт в геометрической прогрессии. Его музыка — одна из самых вайбовых в отечественной индустрии. Пожалуй, каждый из нас слышал такие треки, как: «Город», «Everything Is Fine», «Monday» и, конечно же, «Инкассатор».',
    },
    {
      id: 3,
      name: 'День космонавта',
      date: '14 февраля',
      time: 'с 22:00',
      place: '3 этаж бара Ровесник',
      price: 'от 400₽',
      type: 'Бесплатная вечеринка',
      description:
        'ROCKET — артист, который не нуждается в представлении. С каждым релизом его фан-база растёт в геометрической прогрессии. Его музыка — одна из самых вайбовых в отечественной индустрии. Пожалуй, каждый из нас слышал такие треки, как: «Город», «Everything Is Fine», «Monday» и, конечно же, «Инкассатор».',
    },
  ],
}

export const initialEventSliceState: EventSliceState = {
  ...mockApiResponse,
  initialApiResponse: mockApiResponse,
  currentBar: 'ровесник',
  filter: 'anyFilter',
  barFilter: 'anyBar',
  status: 'idle',
}

export const barList: BarName[] = ['rovesnik', 'doroshka', 'skrepka']
export const barDisplayNameList = ['Ровесник', 'Дорожка', 'Скрепка']
export const barFullNameMap = new Map<BarName, string>(
  Array.from({ length: barList.length }, (_, i) => [
    barList[i],
    barDisplayNameList[i],
  ]),
)
export const filterList: Filter[] = ['anyFilter', 'date', 'price']
export const barFilterList: BarFilter[] = [...barList, 'anyBar']
export const allFilterList: (Filter | BarFilter)[] = [
  ...barFilterList,
  ...filterList,
]
export const allFilterWordList: string[] = [
  'Для Ровесника',
  'Для Дорожки',
  'Для Скрепки',
  'Для всех баров',
  'Все события',
  'По дате',
  'По стоимости',
]
export const filterToWordMap = new Map<Filter | BarFilter, string>(
  Array.from({ length: allFilterList.length }, (_, i) => [
    allFilterList[i],
    allFilterWordList[i],
  ]),
)

export const barToLogoMap = new Map<BarName, string>([
  ['rovesnik', rovesnikLogo],
  ['doroshka', dorozhkaLogo],
  ['skrepka', skrepkaLogo],
] as [BarName, string][])

// и что-то ещё, я забыл что
export const eventTypeDescriptionsMap = new Map<EventType, string>([
  [
    'Бесплатная вечеринка',
    'Введите свои контакты и контакты друзей и близких, которых хотели бы пригласить на вечеринку.',
  ],
  [
    'Депозит',
    'Вечеринка будет проходить за депозит. Тут должно быть пояснение что такое депозит и зачем он нужен.',
  ],
] as [EventType, string][])
export const defaultGuestListNumber = 2

// <-- reservations -->
export const maxGuestCount = 15
export const dateSelectRange = 30 // in days
export const timeSelectRange = 15 // in row count
export const msInADay = 86400000
export const reservationsApiMockResponse: ReservationInfo[] = [
  {
    bar: 'rovesnik',
    tableId: 1,
    date: '2024-03-02',
    duration: 30,
    time: '19:00',
    guestCount: 2,
  },
  {
    bar: 'rovesnik',
    tableId: 2,
    date: '2024-03-03',
    duration: 30,
    time: '18:00',
    guestCount: 2,
  },
  {
    bar: 'rovesnik',
    tableId: 3,
    date: '2024-03-04',
    duration: 60,
    time: '17:00',
    guestCount: 2,
  },
  {
    bar: 'rovesnik',
    tableId: 4,
    date: '2024-03-05',
    duration: 60,
    time: '15:00',
    guestCount: 2,
  },
  {
    bar: 'rovesnik',
    tableId: 5,
    date: '2024-03-06',
    duration: 60,
    time: '14:00',
    guestCount: 2,
  },
  {
    bar: 'rovesnik',
    tableId: 6,
    date: '2024-03-07',
    duration: 60,
    time: '18:00',
    guestCount: 2,
  },
]
export const mockAvailableTables: TableData[] = [
  { id: 1, capacity: 8, location: '3', status: 'free' },
  { id: 2, capacity: 2, location: '3', status: 'reserved' },
  { id: 3, capacity: 2, location: '3', status: 'occupied' },
  { id: 4, capacity: 3, location: '3', status: 'free' },
  { id: 5, capacity: 3, location: '3', status: 'free' },
  { id: 6, capacity: 2, location: '3', status: 'free' },
]
export const tableDataApiMockResponse: TableData = {
  id: 1,
  capacity: 8,
  location: '3 этаж',
  status: 'free',
}

export const tableCapacityCases = new Map<number, string>()
for (let i = 0; i < maxGuestCount; i++) {
  if (i < 5) tableCapacityCases.set(i, 'человека')
  else tableCapacityCases.set(i, 'человек')
}
