import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonPage,
    IonList,
    IonButtons,
    IonBackButton
} from '@ionic/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { entries } from '../data';
import SettingsPage from './SettingsPage';

interface RouteParams {
    id: string;
}

const EntryPage: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const entry = entries.find((entry) => entry.id === id);
    if(!entry) {
        throw new Error('No such entry: ${id}');
    }
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start"><IonBackButton/></IonButtons>
                    <IonTitle>Entry: {id}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                This is Entry Page
                
            </IonContent>
        </IonPage>
    );
};

export default EntryPage;