import React from "react"
import { crossSignIcon } from "../../assets";
import { GuestInviteForm } from "../../types";
import styles from './styles.module.scss'

type Props = {
    id: number,
    setGuestList: React.Dispatch<React.SetStateAction<GuestInviteForm[]>>,
    guestList: GuestInviteForm[],
}
const GuestForm = ({ id, guestList, setGuestList }: Props) => {
    const removeGuest = () => {
        setGuestList(prev => {
            if (id <= 0) return prev;
            prev.splice(id, 1);
            return [...prev];
        })
    };
    const handleChange = (trigger: 'name' | 'tg', value: string) => {
        setGuestList(prev => {
            prev[id][trigger === 'name' ? 0 : 1] = value;
            return [...prev];
        })
    }

    return (
        <div className={styles.root}>
            <div className={styles.guestInfo}>
                <h3>Гость №{id + 1}</h3>
                {id > 0 && (
                    <button onClick={removeGuest}>
                        <img src={crossSignIcon} />
                    </button>
                )}
            </div>
            <div className={styles.infoInputs}>
                <input
                    type="text"
                    placeholder="Имя Фамилия"
                    onChange={e => handleChange('name', e.target.value)}
                    value={guestList[id][0]}
                />
                <input
                    type="text"
                    placeholder="Telegram"
                    onChange={e => handleChange('tg', e.target.value)}
                    value={guestList[id][1]}
                />
            </div>

        </div>
    )
};

export default GuestForm;
