import React, { useMemo } from 'react';
import './App.css';
import ReactWebChat from 'botframework-webchat';

const App = () => {
  const directLine = useMemo(
    () =>
      window.WebChat.createDirectLine({
        secret: process.env.REACT_APP_DIRECT_LINE_SECRET
      }),
    []
  );

  return (
    <div className="App" style={{ height: '100vh' }}>
      <ReactWebChat directLine={directLine} />
    </div>
  );
};

export default App;
