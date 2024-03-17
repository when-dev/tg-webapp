import React from 'react'
import ReservationCard from '../reservationCard'
import { TEvent } from '../../shared/types'
import { mockApiResponse } from '../../shared/constants'
import EventCard from '../../widgets/eventCard'
import Button from '../../shared/ui/button'
import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

const ReservationList = () => {
  const navigate = useNavigate()
  const userReservations: (TEvent & { eventStatus: string })[] = [
    ...mockApiResponse,
  ].map((event) => ({ ...event, ...{ eventStatus: 'ok' } })) // useAppSelector(selectUserReservations)
  const handleEditReservation = (eventId: number) => {
    navigate(`/events/${eventId}`)
  }
  const redirectToAfisha = () => navigate('/')

  return (
    <div>
      {userReservations.length > 0 &&
        userReservations.map((reservationEvent, i) => (
          <EventCard
            key={i}
            data={reservationEvent}
            showActionButton
            customActionButtonText={'Изменить бронь'}
            customActionButtonAction={() =>
              handleEditReservation(reservationEvent.event_id)
            }
            showUpperBubble
            cardType="userPage"
          />
        ))}
      {userReservations.length <= 0 && (
        <div className={styles.checkAfisha}>
          <p>
            {
              'У вас пока что нет активных билетов. Посмотрите афишу и выберите то, что вас заинтересует.'
            }
          </p>
          <Button
            text={'Посмотреть афишу'}
            type="checkAfisha"
            onClick={() => redirectToAfisha()}
          />
        </div>
      )}
    </div>
  )
}

export default ReservationList
