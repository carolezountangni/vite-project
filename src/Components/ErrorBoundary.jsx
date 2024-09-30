import React from 'react'
//    npm i react-error-boundary

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour que le prochain rendu affiche une
    // UI de secours.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Exemple de "componentStack" :
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logErrorToMyService(error, info.componentStack);
    console.error(error, info.componentStack);

  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n’importe quelle UI de secours
      return this.props.fallback;
    }

    return this.props.children;
  }
}