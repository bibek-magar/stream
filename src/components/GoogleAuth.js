import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };
  componentDidMount() {
    //Client ID 99138726336-me1mqbhtc3ufgkuq7f9q8u5n60l7cu6v.apps.googleusercontent.com
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '99138726336-me1mqbhtc3ufgkuq7f9q8u5n60l7cu6v.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div> Dont know we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div>Signed in</div>;
    } else {
      return <div>Not signed in</div>;
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
export default GoogleAuth;
/*Goals
  - Get a reference to the 'auth' object after it initialzed
  - Figure out if the user is currently signed in
  - Print their authentication status on the screeen */
