import React, { Component } from 'react';
import { logError } from '../types/analytics';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: undefined,
    errorInfo: undefined
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    logError(error, errorInfo.componentStack || undefined);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#131722] text-[#d1d4dc] p-4">
          <h1 className="text-2xl font-bold mb-4">Lo sentimos, algo salió mal</h1>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <div className="max-w-2xl w-full">
              <pre className="bg-[#1e222d] p-4 rounded overflow-auto text-sm">
                {this.state.error.toString()}
              </pre>
              {this.state.errorInfo && (
                <pre className="bg-[#1e222d] p-4 rounded overflow-auto text-sm mt-2">
                  {this.state.errorInfo.componentStack}
                </pre>
              )}
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 