import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App" />
    </ErrorBoundary>

  );
}

export default App;
