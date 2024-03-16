import React, { useRef, useState } from "react"
import SortByButton from "../sortByButton";
import styles from './styles.module.scss';
import { useAppDispatch } from "../../app/hooks/redux";
import { filterBySearchResult } from "../../entities/event/eventSlice";
import useDebounce from "../../app/hooks/useDebounce";

const EventSearchField = () => {
    const dispatch = useAppDispatch();
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value);
    useDebounce(() => {
        dispatch(filterBySearchResult(inputValue));
    }, [inputValue], 300);

    return (
        <div className={styles.root}>
            <input
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onChange={handleChange}
                type="text"
                className={styles.searchInput}
                placeholder="Поиск событий"
            />
            <SortByButton isInputFocused={isInputFocused} iconType={isInputFocused ? 'searchIcon': 'showFiltersIcon'} />
        </div>
       
    )
};

export default EventSearchField;
