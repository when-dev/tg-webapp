import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'
import { TableData } from '../../types'

type Props = {
  className?: string
  text: React.ReactNode
  type?:
    | 'blue'
    | 'white'
    | 'textRed'
    | 'widthBtn'
    | 'toBook'
    | 'whiteBtnToBuy'
    | 'checkAfisha'
    | 'whiteChangeReserve'
    | 'submitBtn'
    | 'submitReserve'
    | 'reserveTable'
    | 'changeReserve'
  onClick: (e?: any) => void
  selectedTable?: TableData | null
}

const Button = ({ className, text, type, onClick, selectedTable }: Props) => {
  let buttonText = text

  if (type === 'submitReserve' && selectedTable) {
    buttonText = `Забронировать стол №${selectedTable.id}`
  }

  const buttonClasses = classNames(className, styles.root, {
    [styles.blue]: type === 'blue',
    [styles.white]: type === 'white',
    [styles.textRed]: type === 'textRed',
    [styles.widthBtn]: type === 'widthBtn',
    [styles.toBook]: type === 'toBook',
    [styles.whiteBtnToBuy]: type === 'whiteBtnToBuy',
    [styles.checkAfisha]: type === 'checkAfisha',
    [styles.whiteChangeReserve]: type === 'whiteChangeReserve',
    [styles.submitBtn]: type === 'submitBtn',
    [styles.submitReserve]: type === 'submitReserve',
    [styles.reserveTable]: type === 'reserveTable',
    [styles.changeReserve]: type === 'changeReserve',
  })

  return (
    <div className={buttonClasses} onClick={onClick}>
      {buttonText}
    </div>
  )
}

export default Button
