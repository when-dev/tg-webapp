import React from 'react';
import styles from './styles.module.scss';
import descriptionStyles from './styles2.module.scss'; // TODO: поменять название
import { Optional, TEvent } from '../../shared/types';
import Button from '../../shared/ui/button';
import EventInfoText from '../eventInfoText';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
    data: Optional<TEvent, 'price'>,
    showUpperBubble: boolean,
    customUpperBubbleText?: string,
    customActionButtonText?: string,
    customActionButtonAction?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
    showActionButton?: boolean,
    type: 'base' | 'description',
}
const EventCard = ({
    data,
    showUpperBubble,
    customUpperBubbleText,
    showActionButton,
    customActionButtonAction,
    customActionButtonText,
    type = 'base'
}: Props) => {
    const navigate = useNavigate();
    const buyTickets = () => {
    };
    
    const { date, name, place, price, time, id } = data;

    return (
        <div 
        className={classNames(type === 'base' ? styles.root : descriptionStyles.root)}
        onClick={() => type === 'base' && navigate(`/events/${id - 1}`)}
      >

        {/* TODO: пропатчить, как появиться связь с беком */}
        {showUpperBubble && (
          <div className={type === 'base' ? styles.rootTime : descriptionStyles.rootTime}>
            {customUpperBubbleText ?? time}
          </div>
        )}
        <EventInfoText data={{ date, name, place }} type={type} />
        {!!showActionButton && (
          <Button
            className={type === 'base' ? styles.buttonBuy : descriptionStyles.buttonBuy}
            text={customActionButtonText ?? 'Купить билет'}
            type='white'
            onClick={customActionButtonAction ?? buyTickets}
          />
        )}
      </div>
    );
};

export default EventCard;