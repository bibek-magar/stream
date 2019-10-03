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
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  onSignIn = () => {
    this.auth.signIn();
  };
  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className='ui red google button'>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className='ui green google button'>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
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
