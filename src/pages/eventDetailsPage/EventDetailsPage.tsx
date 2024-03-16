import React, { createContext, useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks/redux";
import { selectEventById } from "../../entities/event/eventSlice";
import EventCard from "../../widgets/eventCard";
import Button from "../../shared/ui/button";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/footer";
import { eventTypeDescriptionsMap } from "../../shared/constants";
import GuestList from "../../widgets/guestList";
import styles from './styles.module.scss';
import { FormValidationContext } from "../../app/context";

const EventDetailsPage = () => {
    const [isValid, setIsValid] = useState(false);
    const [showErrorLabel, setShowErrorLabel] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useAppSelector((state) => selectEventById(state, Number(id) ?? 0));
    // интеграция с платежной системой
    const buyTickets = () => {
        if (isValid) {
            setShowErrorLabel(false);
            alert('all good');
        } else {
            if (!showErrorLabel) setShowErrorLabel(true);
            alert('all bad');
        }
    };

    return (
        <div className={styles.root}>
            <Header />
            <EventCard
                data={data}
                showUpperBubble
                type="description"
            />
            <div className={styles.main}>
                <div className={styles.mainAboutEvents}>
                    <h1>O событии</h1>
                    <p>{data.description}</p>
                </div>
                <div className={styles.cardItem}>
                    <h2>Тип: {data.type}</h2>
                    <p>{eventTypeDescriptionsMap.get(data.type)}</p>
                </div>
                <div className={styles.btnIndentation}>
                    {data.type === 'Бесплатная вечеринка' && (
                        <>
                            <FormValidationContext.Provider value={{isValid, setIsValid, showErrorLabel, setShowErrorLabel}}>
                                <div>
                                    <GuestList />
                                </div>
                                {showErrorLabel && <p>{'Заполнены не все поля'}</p>}
                                <Button text='Купить билет' onClick={buyTickets} type={"whiteBtnToBuy"} />
                            </FormValidationContext.Provider>
                        </>
                    )}
                    {data.type === 'Депозит' && (
                        <>
                            <h3>Цена: {data.price}</h3>
                            <Button text='Купить билет' onClick={buyTickets} type={"whiteBtnToBuy"} />
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventDetailsPage;
