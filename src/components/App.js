import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Routing from '../routes';

function App() {
  return (
    <ErrorBoundary>
      {Routing()}
    </ErrorBoundary>

  );
}
export default App;
