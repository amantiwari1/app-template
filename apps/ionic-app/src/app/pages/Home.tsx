import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { trpc } from '../utils/trpc';
import './Home.css';

const Home: React.FC = () => {
  const hello = trpc.useQuery(['getUser']);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{hello.data?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{hello.data?.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
