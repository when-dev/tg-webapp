import React, { useContext, useEffect, useState } from "react"
import { crossSignIcon, plusSignIcon } from "../../shared/assets";
import { GuestInviteForm } from "../../shared/types";
import { defaultGuestListNumber } from "../../shared/constants";
import GuestForm from "../../shared/ui/guestForm";
import styles from './styles.module.scss';
import { FormValidationContext } from "../../app/context";
import { validateGuests } from "../../shared/utils";

const GuestList = () => {
    const {isValid, setIsValid, showErrorLabel, setShowErrorLabel} = useContext(FormValidationContext)!;
    const [guestList, setGuestList] = useState<GuestInviteForm[]>(Array.from({length: defaultGuestListNumber}, (_, k) => ['', '']));
    const addGuest = () => setGuestList(prev => {
        prev.push(['', '']);
        return [...prev];
    });

    useEffect(() => {
        const isValidationPassed = validateGuests(guestList);
        setIsValid(isValidationPassed);
    }, [guestList]);

    return (
        <div className={styles.root}>
            <div className={styles.main}>
                {guestList.map((_, i) => (
                    <GuestForm key={i} id={i} guestList={guestList} setGuestList={setGuestList} />
                ))}
            </div>
            <button onClick={() => addGuest()}>
                <img src={plusSignIcon} />
                <p>Добавить гостя</p>
            </button>
        </div>
    )
};

export default GuestList;
