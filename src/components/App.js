import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Login from './containers/authentication/login';

function App() {
  return (
    <ErrorBoundary>
      <div>
        <Login />
      </div>
    </ErrorBoundary>

  );
}
export default App;
