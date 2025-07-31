import './App.css';
import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import logo from './logo.svg';
import MainComponent from './components/MainComponent';

function App() {
  const [userData, setUserData] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;

      // Получение данных пользователя
      setUserData(tg.initDataUnsafe);

      // Отправка уведомления или закрытие окна
      tg.ready();

      setIsReady(true);
    }
  }, []);

  const sendDataToTelegram = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData("Some data");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      {userData ? (
          <MainComponent/>
        ) : (
          <p>Загрузка...</p>
        )}
    </React.Fragment>
    
  );
}

export default App;
