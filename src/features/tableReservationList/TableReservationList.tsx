import React from "react";
import styles from './styles.module.scss';
import ReservationCard from "../reservationCard";
import { reservationsApiMockResponse } from "../../shared/constants";
import { useQuery } from "@tanstack/react-query";
import { getReservationsByUID, getTableDataByTableId } from "../../entities/reservation/api";
import Button from "../../shared/ui/button";
import { useNavigate } from "react-router-dom";

const TableReservationList = () => {
    const navigate = useNavigate();
    const userId = 'abdef'; // useSelector(selectUserId);
    const {data: reservations} = useQuery({queryKey: ['reservationsData', userId], queryFn: () => getReservationsByUID(userId)});
    const handleReservation = () => navigate('/reservation');

    return (
        <div>
            {reservations && reservations.length > 0 && (
                reservations.map((reservation, i) => <ReservationCard key={i} data={reservation} />)
            )}
            {!reservations || reservations.length <= 0 && (
                <div className={styles.noReserveTable}>
                    <p>{'Вы пока что не бронировали стол в нашем заведении, но можете сделать это прямо сейчас.'}</p>
                    <Button type="whiteBtnToBuy" text={'Забронировать стол'} onClick={handleReservation} />
                </div>
            )}
        </div>
    )
};

export default TableReservationList;
