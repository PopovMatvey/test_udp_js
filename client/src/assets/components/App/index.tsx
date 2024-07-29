import React, { useEffect, useState } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './css/style.css';
import { MainContent } from '../MainContent';
import { Loader } from '../Loader';

/**
 * Приложениеы
 * @returns компонент "Приложение"
 */
function App() {

  const [flagStatusApplication, setFlagStatusApplication] = useState(false);

  useEffect(() => {
    setFlagStatusApplication(false);
    setTimeout(() => {
      setFlagStatusApplication(true);
    }, 1000);
  }, []);

  return (

    <>
      {flagStatusApplication ?
        <>
          <Header />
          <MainContent />
          <Footer />
        </> : <Loader />}
    </>
  );
}

export default App;
