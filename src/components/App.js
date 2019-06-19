import React from 'react';
import ErrorBoundary from './commons/ErrorBoudary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App" />
    </ErrorBoundary>

  );
}

export default App;
