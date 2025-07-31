import './App.css';
import React, { useEffect, useState } from 'react';

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
    <div className="App">
      <header className="App-header">
        <h1>React + Telegram Web App</h1>
        {userData ? (
          <div>
            <p>Пользователь: {userData.user?.first_name}</p>
            <button onClick={sendDataToTelegram}>Отправить данные</button>
          </div>
        ) : (
          <p>Загрузка...</p>
        )}
      </header>
    </div>
  );
}

export default App;
