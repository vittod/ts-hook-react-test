import React, { useState, lazy, Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import './testo.css';
import TestoUno from './testo-uno';
import TestoDos from './testo-dos';

import HalfScreen from './half-screen';
import { MyContext } from './context-service';

const TestoTres = lazy(() => import('./testo-tres'));

function App() {

  const [nuCtx, setContext] = useState('');
  const [showTres, setshowTres] = useState(false);

  return (
    <div className="App">
      <MyContext.Provider value={[nuCtx]}>

        <HalfScreen>
          <TestoUno 
            changeContext={setContext}
            setShowTres={setshowTres}
            showTres={showTres}
          >
            <div className="my-seperator">
              <h1 className="Dialog-title">
                Attention!
              </h1>
              <p className="Dialog-message">
                This is some composed content.
              </p>
            </div>
          </TestoUno>

          <TestoDos />   

          <Suspense fallback={<h2>loding testoTRES</h2>}>
            {showTres && 
              <TestoTres changeContext={setContext} />
            }
          </Suspense> 

          <TestoDos />    
        </HalfScreen>

      </MyContext.Provider>
    </div>
  );
}

export default App;
