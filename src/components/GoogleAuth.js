import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    //Client ID 99138726336-me1mqbhtc3ufgkuq7f9q8u5n60l7cu6v.apps.googleusercontent.com

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '99138726336-me1mqbhtc3ufgkuq7f9q8u5n60l7cu6v.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>Google AUth</div>;
  }
}
export default GoogleAuth;
/*Goals
  
 