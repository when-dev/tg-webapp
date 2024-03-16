import React from 'react'
import styles from './styles.module.scss'
import descriptionStyles from './styles2.module.scss'
import { Optional, TEvent } from '../../shared/types'
import classNames from 'classnames'
import { arrow } from '../../shared/assets'

type Props = {
    data: Pick<TEvent, 'date' | 'name' | 'place'>
    className?: string
    fullWidth?: boolean
    type: 'base' | 'description',
}
const EventInfoText = ({ data, className, type = 'base' }: Props) => {
    const { date, name, place } = data



    return (
        <div className={classNames(classNames, type === 'base' ? styles.root : descriptionStyles.root)}>
            <div className={type === 'base' ? styles.rootName : descriptionStyles.rootName}>
                <h1>{name}</h1>
            </div>
            <div className={type === 'base' ? styles.rootInfo : descriptionStyles.rootInfo}>
                <p>
                    {date}<span className={styles.line}>|</span>{place}
                </p>
            </div>
            <span>
                    {(type === 'base') ? <img src={arrow} alt='arrow' style={{backgroundSize: 'cover'}} /> : (type === 'description' ? '18+' : null)}
            </span>
        </div>
    )
}

export default EventInfoText