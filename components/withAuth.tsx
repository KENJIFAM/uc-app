import React from 'react';
import Router from 'next/router';
import { loggedIn } from 'utils/auth';
import Loader from './Loader';

const withAuth = (AuthComponent: React.ReactType) => {
  return class extends React.Component<{}, {isLoading: boolean}> {
    constructor(props: {}) {
      super(props);
      this.state = {
        isLoading: true
      };
    };

    componentDidMount() {
      if (!loggedIn()) {
        Router.push('/login');
      }
      this.setState({
        isLoading: false
      });
    }

    render() {
      return (
        <>
          {this.state.isLoading 
            ? <Loader />
            : <AuthComponent {...this.props} />
          }
        </>
      );
    }
  };
};

export default withAuth;