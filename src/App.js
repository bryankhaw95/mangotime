import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
  
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard'; //importing a component into another file 
import { useLocalStorage } from './hooks';
import BiorhythmChart from './components/BiorhythmCharts';

function App() {
  const [name, setName] = useLocalStorage('name','');
  const [birthdate, setBirthDate] = useLocalStorage('birthDate','');
  const [targetdate, setTargetDate] = useState('');
  const [size, setSize] = useState('size','');
  //const tDate = new Date().toISOString();
 

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BioRhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      {targetdate && BiorhythmCard}
        <IonItem>
          <IonLabel position="floating">Firstname:</IonLabel>
        <IonInput type="text" //placeholder="First Name" 
          value={name}
          onIonChange={(event) => setName(event.detail.value)}
        />
             </IonItem>

{targetdate &&
<BiorhythmCard birthDate={birthdate} targetDate={targetdate} />
}

   
        <IonItem>
          <IonLabel position="floating">Birthdate:</IonLabel>
          <IonDatetime 
          displayFormat="D MMM YYYY"
          value={birthdate}
          onIonChange={(event) => setBirthDate(event.detail.value)}
        />
          </IonItem>
            {birthdate && 
          <IonItem>
          <IonLabel position="floating">Target Date:</IonLabel>
          <IonDatetime 
          displayFormat="D MMM YYYY"
          value={targetdate}
          onIonChange={(event) => setTargetDate(event.detail.value)}
        />
          </IonItem> }
            
          <IonItem>
          <IonLabel position="floating">Size:</IonLabel>
          <IonInput
          value={size}
          onIonChange={(event) => setSize(event.detail.value)}
        />
          </IonItem> 



{/* {targetdate &&
<BiorhythmChart birthDate={birthdate} targetDate={targetdate} size={size}/>
} */}

      </IonContent>
    </IonApp>
  );
}

export default App;
