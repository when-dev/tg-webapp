import React, { useState } from 'react'
import styles from './styles.module.scss'
import modalStyles from '../../pages/reserveTablePage/styles.module.scss'
import descriptionStyles from './styles2.module.scss' // TODO: поменять название
import { Optional, TEvent } from '../../shared/types'
import Button from '../../shared/ui/button'
import EventInfoText from '../eventInfoText'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { Modal } from '@mui/material'
import { shortEventTypeToWordsMap } from '../../shared/constants'
import { QRCode } from '../../shared/assets'

type Props = {
  data: TEvent
  showUpperBubble: boolean
  customUpperBubbleText?: string
  customActionButtonText?: string
  customActionButtonAction?: (
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void
  showActionButton?: boolean
  cardType: 'base' | 'description' | 'userPage'
}
const EventCard = ({
  data,
  showUpperBubble,
  customUpperBubbleText,
  showActionButton,
  customActionButtonAction,
  customActionButtonText,
  cardType = 'base',
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const buyTickets = () => {}
  const toggleModal = () => setIsModalOpen((prev) => !prev)

  let {
    datetime,
    short_name,
    place,
    price,
    event_id,
    event_type,
    age_restriction,
  } = data
  place = place.split('/')[0]
  const time = `с ${datetime.split('T')[1].split(':').slice(0, 2).join(':')}`

  return (
    <div
      className={classNames(
        cardType === 'description' ? descriptionStyles.root : styles.root,
      )}
      onClick={(e) => {
        if (
          cardType === 'base' ||
          shortEventTypeToWordsMap.get(event_type) === 'Бесплатная вечеринка'
        )
          navigate(`/events/${event_id}`)
        else if (cardType === 'userPage') {
          // @ts-ignore жесть костыль
          if (e.target.textContent !== 'Изменить бронь') toggleModal()
        }
      }}
    >
      {/* TODO: пропатчить, как появится связь с беком */}
      {showUpperBubble && (
        <div
          className={
            cardType === 'description'
              ? descriptionStyles.rootTime
              : styles.rootTime
          }
        >
          {customUpperBubbleText ?? time}
        </div>
      )}
      <EventInfoText
        data={{ datetime, short_name, place, age_restriction }}
        cardType={cardType}
      />
      {!!showActionButton && (
        <Button
          className={
            cardType === 'description'
              ? descriptionStyles.buttonBuy
              : styles.buttonBuy
          }
          text={customActionButtonText ?? 'Купить билет'}
          type="white"
          onClick={customActionButtonAction ?? buyTickets}
        />
      )}
      <Modal
        className={styles.modal}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div id="qrCodeContainer" className={styles.qrCodeContainer}>
          <img src={QRCode} alt="qr" />
          <button
            className={styles.closeButton}
            onClick={() => setIsModalOpen(false)}
          >
            Для закрытия нажмите на qr
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default EventCard
