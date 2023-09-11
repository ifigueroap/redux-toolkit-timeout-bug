import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

import React, { useEffect } from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';

import { IonApp, setupIonicReact } from '@ionic/react';

import { TheAPI } from './services/TheAPI';

setupIonicReact({ mode: "md" });

declare function cwr(operation: string, payload: any): void;

const App: React.FC = () => {
  const { data, isError, error } = TheAPI.useGetThingQuery({ thingId: 1 });

  useEffect(() => {
    if (isError) {
      console.log("Error");
    }
  }, [isError, error]);

  const errorFallbackComponent = ({ error }: any) => {
    const err = new Error();
    err.message = "Error caught by React error boundary: " + error.status;
    cwr("recordError", err);

    return <div>Error {err.message}</div>;
  };

  return (
    <ErrorBoundary
      // fallbackRender={errorFallbackFunction}
      FallbackComponent={errorFallbackComponent}
      onReset={() => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <IonApp>
        <div>
          Hola
          {data && (
            <div>
              Data found: {data.id} {data.title} {data.author}
            </div>
          )}
          {isError && error && <div>Error found: {JSON.stringify(error)}</div>}
        </div>
      </IonApp>
    </ErrorBoundary>
  );
};

export default App;
