import React from 'react';
import { useAppSelector } from '../../app/hooks/redux';
import { selectEvents } from '../../entities/event/eventSlice';
import EventCard from '../../widgets/eventCard';
import styles from './styles.module.scss';

const EventList = () => {
    const events = useAppSelector(selectEvents);

    return (
        <div>
            {events.map((event, i) => (
                <div key={i} className={styles.container}>
                    <EventCard
                        key={i}
                        data={event}
                        showUpperBubble
                        showActionButton
                        type='base'
                    />
                </div>
            ))}
        </div>
    );
};

export default EventList;