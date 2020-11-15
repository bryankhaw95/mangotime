import dayjs from 'dayjs';
import {
IonCardContent,
  IonCard,
  IonCardTitle,
  IonCardHeader,
    } from '@ionic/react';

  import React from 'react';
  import {calculateBiorhythms} from '../calculation';
  import BiorhythmChart from './BiorhythmCharts';
  import './BiorhythmCard.css'; 

  function formatDate(isoString){
    return dayjs(isoString).format('DD MMM YYYY');
  }

  function BiorhythmCard(  {birthDate, targetDate} ) {  
    const {physical} = calculateBiorhythms(formatDate(birthDate),formatDate(targetDate));
    const {emotional} = calculateBiorhythms(formatDate(birthDate),formatDate(targetDate));
    const {intellectual} = calculateBiorhythms(formatDate(birthDate),formatDate(targetDate));

    return (
     <IonCard className="biorhythm-card ion-text-center">
        <IonCardHeader> 
          <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>

        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} size={31}/>

        <IonCardContent>
         {/*  <p>{targetDate}, {birthDate}</p> */}
          <p className="physical"> Physical: {physical.toFixed(4)}</p>
          <p className="emotional"> Emotional: {emotional.toFixed(4)}</p>
          <p className="intellectual"> Mental: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
    );
  }
  
  export default BiorhythmCard;
  