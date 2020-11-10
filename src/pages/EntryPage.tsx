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
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRouteMatch } from "react-router";
// import { entries } from '../data';
import { firestore } from "../firebase";
import { Entry, toEntry } from "../model";
import SettingsPage from "./SettingsPage";
// import { entries } from '../data';

interface RouteParams {
  id: string;
}

const EntryPage: React.FC = () => {
  const match = useRouteMatch<RouteParams>();
  const { id } = match.params;
  const [entry, setEntry] = useState<Entry>();

  useEffect(() => {
    const entryRef = firestore.collection("entries").doc(id);
    entryRef.get().then((doc) => {setEntry(toEntry(doc));
    });
  }, [id]);

  // const entry = entries.find((entry) => entry.id === id);

  // if(!entry) {
  //     throw new Error('No such entry: ${id}');
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Entry: </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">This is Entry Page</IonContent>
    </IonPage>
  );
};

export default EntryPage;
