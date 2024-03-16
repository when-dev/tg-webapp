import React, { Suspense } from 'react';
import Header from "../../shared/ui/header";
import EventList from '../../features/eventList';
import AfishaPageTitle from '../../shared/ui/afishaPageTitle';
import EventSearchField from '../../features/eventSearchField';
import Footer from '../../shared/ui/footer';
import styles from './styles.module.scss';
import Spinner from '../../compoments/Spinner';


const AfishaPage = () => {
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.main}>
                <AfishaPageTitle text={'Ровеснике'} />
                <EventSearchField />
                <p>Ближайшие события:</p>
                <Suspense fallback={<Spinner>Загрузка</Spinner>}>
                    <EventList />
                </Suspense>
            </div>
            <Footer />
        </div>
    );
};

export default AfishaPage;