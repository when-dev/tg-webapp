import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from "../../app/hooks/redux";
import { selectBarFilter, selectFilter, setBarFilter, setFilter } from "../../entities/event/eventSlice";
import { barFilterList, barList, filterList, filterToWordMap } from "../../shared/constants";
import { searchIcon, showFiltersIcon } from '../../shared/assets';
import Button from "../../shared/ui/button";
// import { Drawer, Menu } from "@mui/material";
import { BarFilter, BarName, Filter } from "../../shared/types";

type Props = {
    iconType?: 'showFiltersIcon' | 'searchIcon',
    isInputFocused?: boolean,
}
const SortByButton = ({ iconType = 'showFiltersIcon', isInputFocused = false }: Props) => {
    const dispatch = useAppDispatch();
    const selectedFilter = useAppSelector(selectFilter);
    const selectedBarFilter = useAppSelector(selectBarFilter);
    const [isOpen, setIsOpen] = useState(false);
    const menuAnchorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isInputFocused) setIsOpen(false);
    }, [isInputFocused]);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const handleSelectFilter = (filter: Filter) => {
        dispatch(setFilter(filter));
        toggleMenu();
    }
    const handleSelectBarFilter = (barFilter: BarFilter) => {
        console.log(barFilter);
        dispatch(setBarFilter(barFilter));
        toggleMenu();
    }

    return (
        <div
            ref={menuAnchorRef}
            className={styles.root}
        >
            <Button
                onClick={toggleMenu}
                className={styles.btnPosition}
                text={
                    <>
                        {iconType === 'showFiltersIcon' && <img src={showFiltersIcon} />}
                        {iconType === 'searchIcon' && <img src={searchIcon} />}
                    </>}
            />
            {isOpen && (
                <div className={styles.menuContainer}>
                    {/* копирование кода, умнее не придумал */}
                    {barFilterList.map(barFilter => (
                        <div className={styles.menuItem} key={barFilter}>
                        <input
                            type='radio'
                            id={`filter-${barFilter}`}
                            className={styles.radioButton}
                            checked={selectedBarFilter === barFilter}
                            onChange={() => handleSelectBarFilter(barFilter)}
                        />
                        <label
                            htmlFor={`filter-${barFilter}`}
                            className={classNames(styles.root, { [styles.selectedFilter]: selectedBarFilter === barFilter })}
                            onClick={() => handleSelectBarFilter(barFilter)}
                        >
                            {filterToWordMap.get(barFilter)}
                        </label>
                    </div>
                    ))}
                    {filterList.map(filter => (
                        <div className={styles.menuItem} key={filter}>
                            <input
                                type='radio'
                                id={`filter-${filter}`}
                                className={styles.radioButton}
                                checked={selectedFilter === filter}
                                onChange={() => handleSelectFilter(filter)}
                            />
                            <label
                                htmlFor={`filter-${filter}`}
                                className={classNames(styles.root, { [styles.selectedFilter]: selectedFilter === filter })}
                                onClick={() => handleSelectFilter(filter)}
                            >
                                {filterToWordMap.get(filter)}
                            </label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default SortByButton;
