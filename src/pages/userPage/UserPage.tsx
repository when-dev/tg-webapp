import React from "react";
import ReservationList from "../../features/reservationList";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/footer";
import styles from './styles.module.scss';
import TableReservationList from "../../features/tableReservationList/TableReservationList";

type Props = {
    type?: 'afisha' | 'reservations',
}
const UserPage = ({type = 'afisha'}: Props) => {
    const reservationTypeToTextMap = new Map([
        ['afisha', 'Запланированные события:'],
        ['reservations', 'Забронированные столы:']
    ]);

    return (
        <div className={styles.root}>
            <Header type={type} />
            <div className={styles.main}>
                <h2>Личный кабинет</h2>
                <p>{reservationTypeToTextMap.get(type)}</p>
                {type === 'afisha' && <ReservationList />}
                {type === 'reservations' && <TableReservationList />}
            </div>
            <Footer />
        </div>
    )
};

export default UserPage;
