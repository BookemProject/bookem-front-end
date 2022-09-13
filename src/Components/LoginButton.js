import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import "../Styles/ButtonDesign.css";

function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <Button id="ButtonDesign" variant="primary" onClick={loginWithRedirect}>Log in</Button>
  );
}

export default LoginButton;