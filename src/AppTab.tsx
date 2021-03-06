import {
    IonTabBar, 
    IonLabel,
    IonTabButton,
    IonTabs,
    IonIcon,
    IonRouterOutlet
  } from '@ionic/react';
  
  import React, { useState } from 'react';
  import { ellipse, home as homeIcon, settings as settingsIcon, happyOutline } from 'ionicons/icons';
  import { BrowserRouter, Redirect, Route } from 'react-router-dom';
  
  import Homepage from './pages/Homepage';
  import SettingsPage from './pages/SettingsPage';
  import EntryPage from './pages/EntryPage';
  import DashboardPage from './pages/ProgressReport';

import { useAuth } from './auth';
import ProgressReport from './pages/ProgressReport';
  
  
  const AppTab: React.FC = () => {
    const { loggedIn } = useAuth();
    if(!loggedIn){
      return <Redirect to="/login"/>
    }
    
    return (
          <IonTabs>    
            <IonRouterOutlet>

        <Route exact path="/my/home">
          <Homepage />
        </Route>
  
        <Route exact path="/my/entries">
          <Homepage />
        </Route>

        <Route path="/my/entry/:id" component={EntryPage} exact={true} />

        <Route path="/my/setting" component={SettingsPage}> 
          <SettingsPage />
        </Route>
  
        <Route path="/my/progressreport" component={ProgressReport}> 
          <ProgressReport />
        </Route>

        <Route path="/" render={() => <Redirect to ="/home" />} exact={true} />
        
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
  
          <IonTabButton tab="home" href="/my/home">
            <IonIcon icon={homeIcon} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
  
          <IonTabButton tab="tab2" href="/my/entries">
            <IonIcon icon={ellipse} />
            <IonLabel>Entry</IonLabel>
          </IonTabButton>
  
          <IonTabButton tab="tab3" href="/my/setting">
            <IonIcon icon={settingsIcon} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
  
          <IonTabButton tab="progressreport" href="/my/progressreport">
            <IonIcon icon={happyOutline} />
            <IonLabel>Progress Report</IonLabel>
          </IonTabButton>

          </IonTabBar>
          </IonTabs>
    );
  };
  
  export default AppTab;
  