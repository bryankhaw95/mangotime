import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import MainFile from "../components/main/MainTimer";
import { Entry, toEntry } from "../model";

const HomePage: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const entriesRef = firestore.collection('entries');
      entriesRef.get().then(({docs}) => setEntries(docs.map(toEntry)));
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLabel>hi! welcome to mangotime</IonLabel>
        <IonList>
          {entries.map((entry) => (
            <IonItem button key={entry.id} routerLink={`/my/entry/${entry.id}`}>
              {entry.title}
            </IonItem>
          ))}
        </IonList>
        <MainFile />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
