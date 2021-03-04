import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
function Logout() {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, [signOut]);

  return <Redirect to="/login" />;
}

export default Logout;
