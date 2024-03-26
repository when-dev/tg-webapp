export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type TDateTime = string
export type Timestamp = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
export type DateString = string;

export type UID = string;
export type EventTypeShort = 'free' | 'deposit' | 'event';
export type EventType = 'Депозит' | 'Бесплатная вечеринка' | 'Ивент';
export type TEvent = {
    event_id: number,
    bar_id: number,
    short_name: string,
    img_path: string,
    datetime: TDateTime,
    place: string,
    price: number,
    event_type: EventTypeShort,
    description: string,
    age_restriction: number,
}
export type GuestInviteForm = [string, string];

export type ApiResponse = TEvent[];

export type EventSliceState = {
    events: ApiResponse,
    currentBar: string,
    filter: Filter,
    barFilter: BarFilter,
    initialApiResponse: ApiResponse,
    status: 'idle' | 'loading' | 'failed',
}

export type Filter = 'anyFilter' | 'date' | 'price';
export type BarId = 1 | 2 | 3;
export type BarName = 'rovesnik' | 'doroshka' | 'skrepka';
export type BarFilter = BarName | 'anyBar';
export type EventId = number;
export type ReservationInfo = {
    bar: BarName,
    tableId: number,
    time: string,
    date: Timestamp,
    duration: number,
    guestCount: number,
}
export type TableData = {
    id: number,
    capacity: number,
    location: string,
    status: 'free' | 'reserved' | 'occupied',
}