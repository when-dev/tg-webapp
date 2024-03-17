import React, { Suspense, createContext, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks/redux'
import { selectEventById } from '../../entities/event/eventSlice'
import EventCard from '../../widgets/eventCard'
import Button from '../../shared/ui/button'
import Header from '../../shared/ui/header'
import Footer from '../../shared/ui/footer'
import {
  eventTypeDescriptionsMap,
  shortEventTypeToWordsMap,
} from '../../shared/constants'
import GuestList from '../../widgets/guestList'
import styles from './styles.module.scss'
import { FormValidationContext } from '../../app/context'
import { useQuery } from '@tanstack/react-query'
import { fetchEventDataById } from '../../entities/event/api'

const EventDetailsPage = () => {
  const [isValid, setIsValid] = useState(false)
  const [showErrorLabel, setShowErrorLabel] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['fetchProducts', id],
    queryFn: () => fetchEventDataById(id!),
  })
  console.log(data)
  // интеграция с платежной системой
  const buyTickets = () => {
    if (isValid) {
      setShowErrorLabel(false)
    } else {
      if (!showErrorLabel) setShowErrorLabel(true)
    }
  }

  return (
    <div className={styles.root}>
      <Header />
      {!isLoading && (
        <>
          <EventCard data={data!} showUpperBubble cardType="description" />
          <div className={styles.main}>
            <div className={styles.mainAboutEvents}>
              <h1>O событии</h1>
              <p>{data!.description}</p>
            </div>
            <div className={styles.cardItem}>
              <h2>Тип: {shortEventTypeToWordsMap.get(data!.event_type)}</h2>
              <p>
                {eventTypeDescriptionsMap.get(
                  shortEventTypeToWordsMap.get(data!.event_type)!,
                )}
              </p>
            </div>
            <div className={styles.btnIndentation}>
              {shortEventTypeToWordsMap.get(data!.event_type) ===
                'Бесплатная вечеринка' && (
                <>
                  <FormValidationContext.Provider
                    value={{
                      isValid,
                      setIsValid,
                      showErrorLabel,
                      setShowErrorLabel,
                    }}
                  >
                    <div>
                      <GuestList />
                    </div>
                    {showErrorLabel && <p>{'Заполнены не все поля'}</p>}
                    <Button
                      text="Зарегистрироваться"
                      onClick={buyTickets}
                      type={'whiteBtnToBuy'}
                    />
                  </FormValidationContext.Provider>
                </>
              )}
              {shortEventTypeToWordsMap.get(data!.event_type) === 'Депозит' && (
                <>
                  <h3>Цена: {data!.price}</h3>
                  <Button
                    text="Внести депозит"
                    onClick={buyTickets}
                    type={'whiteBtnToBuy'}
                  />
                </>
              )}
              {shortEventTypeToWordsMap.get(data!.event_type) === 'Ивент' && (
                <>
                  <h3>Цена: {data!.price}</h3>
                  <Button
                    text="Купить билет"
                    onClick={buyTickets}
                    type={'whiteBtnToBuy'}
                  />
                </>
              )}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}

export default EventDetailsPage
