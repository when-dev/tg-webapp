import { rovesnikLogo, dorozhkaLogo, skrepkaLogo } from './assets'
import { rovesnik1F, rovesnik2F, rovesnik3F } from './assets'
import {
  ApiResponse,
  BarFilter,
  BarName,
  EventSliceState,
  EventType,
  EventTypeShort,
  Filter,
  ReservationInfo,
  TableData,
} from './types'

export const apiEndpoint =
  'https://ff68-2a00-1370-8198-8cc0-c17e-b24e-4197-8dd2.ngrok-free.app/api'

export const mockApiResponse: ApiResponse = [
  {
    event_id: 2,
    short_name: 'Вечеринка 1',
    description:
      'ROCKET — артист, который не нуждается в представлении. С каждым релизом его фан-база растёт в геометрической прогрессии. Его музыка — одна из самых вайбовых в отечественной индустрии. Пожалуй, каждый из нас слышал такие треки, как: «Город», «Everything Is Fine», «Monday» и, конечно же, «Инкассатор».',
    img_path:
      '/home/donqhomo/Desktop/orders/CRM-Rovesnik-Doroshka-Screpka/BackendApp/static/event1.jpg',
    datetime: '2024-03-18T19:00:00',
    bar_id: 1,
    place: '3ий этаж Ровесник / адрес: abcdef',
    age_restriction: 18,
    event_type: 'deposit',
    price: 1000.0,
  },
  {
    event_id: 3,
    short_name: 'Вечеринка 2',
    description:
      'ROCKET — артист, который не нуждается в представлении. С каждым релизом его фан-база растёт в геометрической прогрессии. Его музыка — одна из самых вайбовых в отечественной индустрии. Пожалуй, каждый из нас слышал такие треки, как: «Город», «Everything Is Fine», «Monday» и, конечно же, «Инкассатор».',
    img_path:
      '/home/donqhomo/Desktop/orders/CRM-Rovesnik-Doroshka-Screpka/BackendApp/static/event2.jpg',
    datetime: '2024-03-19T18:00:00',
    bar_id: 1,
    place: '1ый этаж Ровесник / адрес: abcdef',
    age_restriction: 18,
    event_type: 'deposit',
    price: 2000.0,
  },
  {
    event_id: 4,
    short_name: 'Вечеринка 3',
    description:
      'ROCKET — артист, который не нуждается в представлении. С каждым релизом его фан-база растёт в геометрической прогрессии. Его музыка — одна из самых вайбовых в отечественной индустрии. Пожалуй, каждый из нас слышал такие треки, как: «Город», «Everything Is Fine», «Monday» и, конечно же, «Инкассатор».',
    img_path:
      '/home/donqhomo/Desktop/orders/CRM-Rovesnik-Doroshka-Screpka/BackendApp/static/event3.jpg',
    datetime: '2024-03-20T18:00:00',
    bar_id: 1,
    place: '2ой этаж Ровесник / адрес: abcdef',
    age_restriction: 18,
    event_type: 'free',
    price: 0.0,
  },
]

export const shortEventTypeToWordsMap = new Map<EventTypeShort, EventType>([
  ['free', 'Бесплатная вечеринка'],
  ['deposit', 'Депозит'],
  ['event', 'Ивент'],
] as [EventTypeShort, EventType][])

export const initialEventSliceState: EventSliceState = {
  events: [...mockApiResponse],
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

export const eventTypeDescriptionsMap = new Map<EventType, string>([
  [
    'Бесплатная вечеринка',
    'Введите свои контакты и контакты друзей и близких, которых хотели бы пригласить на вечеринку.',
  ],
  [
    'Депозит',
    'Вечеринка будет проходить за депозит. Тут должно быть пояснение что такое депозит и зачем он нужен.',
  ],
  ['Ивент', 'чето чето четоче точе точ еточе то'],
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

export const rovesnikFloorPaths = [rovesnik1F, rovesnik2F, rovesnik3F]
