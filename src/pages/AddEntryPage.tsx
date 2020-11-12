import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonList,
  IonButtons,
  IonBackButton,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { add as addIcon} from 'ionicons/icons';

// import { entries } from '../data';

  const AddEntryPage: React.FC = () => {

    console.log('[AddEntryPage] render');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add Entry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">To add new entry</IonContent>
    

    </IonPage>
  );
  }

export default AddEntryPage;
