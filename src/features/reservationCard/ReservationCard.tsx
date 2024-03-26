import React from "react"
import EventCard from "../../widgets/eventCard";
import { Optional, ReservationInfo, TEvent, TableData } from "../../shared/types";
import Button from "../../shared/ui/button";
import styles from './styles.module.scss';
import { barFullNameMap, tableCapacityCases } from "../../shared/constants";
import { useQuery } from "@tanstack/react-query";
import { getTableDataByTableId } from "../../entities/reservation/api";
import Spinner from "../../compoments/Spinner";
import { convertTimestampToDateString } from "../../shared/utils";

type Props = {
    data: ReservationInfo
}
const ReservationCard = ({ data }: Props) => {
    const { data: tableInfo, isLoading } = useQuery({
        queryKey: ['tableInfo', data.tableId],
        queryFn: () => getTableDataByTableId(data.tableId),
    });

    const { bar, time, date } = data;
    const handleReservationChange = () => { }

    return (
        <div className={styles.root}>
            <h1>{`Бар ${barFullNameMap.get(bar)}`}</h1>
            <p>{time}</p>
            <div>
                {isLoading || !tableInfo && (
                    <Spinner />
                )}
                {!isLoading && tableInfo && (
                    <>
                        <p>{convertTimestampToDateString(date)}</p>|
                        <p>{tableInfo.location}</p>|
                        <p>{`Стол на ${tableInfo.capacity} ${tableCapacityCases.get(tableInfo.capacity)}`}</p>
                    </>
                )}

            </div>
            <div>
                <Button type='whiteChangeReserve' text={'Изменить бронь'} onClick={handleReservationChange} />
            </div>
        </div>
    )
};

export default ReservationCard;
