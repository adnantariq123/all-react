import React, { Component } from 'react';


class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return (
                <>
                    <li className="alert-danger"> Bro something is wrong :-(</li>
                </>
            )
        }
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default ErrorBoundary;