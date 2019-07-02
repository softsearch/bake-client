import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errorInfo: null,
      error: false
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <div>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Normally just render children
    return children;
  }
}

export default ErrorBoundary;
