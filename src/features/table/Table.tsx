import React, { useState } from 'react'
import styles from './styles.module.scss'
import { TableData } from '../../shared/types'
import { twoPersonTable } from '../../shared/assets'
import { tableCapacityCases } from '../../shared/constants'

type Props = {
  info: TableData
  isSelected: boolean
  onClick: () => void
}
const Table = ({ info, isSelected, onClick }: Props) => {
  const { id, capacity, location, status } = info

  const getAvailabilityColor = () => {
    switch (status) {
      case 'free':
        return 'rgba(0, 211, 34, 1)'
      case 'reserved':
        return 'orange'
      case 'occupied':
        return 'red'
    }
  }

  return (
    <div className={styles.root}>
      <div
        className={`${styles.main} ${isSelected ? styles.selected : ''}`}
        onClick={onClick}
      >
        <div className={styles.tableInfo}>
          <div className={styles.tableInfoTitle}>
            <div
              className={styles.availability}
              style={{ backgroundColor: getAvailabilityColor() }}
            />
            <h1>{`Стол №${id}`.toLocaleUpperCase()}</h1>
          </div>
          <div className={styles.tableDetails}>
            <p>
              {`Стол на ${capacity} ${tableCapacityCases.get(capacity)}`}
              <span>|</span>
              {`${location} этаж`}
            </p>
          </div>
        </div>
        <div className={styles.table}>
          <img src={twoPersonTable} />
        </div>
      </div>
    </div>
  )
}

export default Table
