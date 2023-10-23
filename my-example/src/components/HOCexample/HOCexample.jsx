import React, { useState } from "react";

// This is your UserComponent
function UserComponent(props) {
  return (
    <div>
      <h2>Welcome, {props.user}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
}

// This is the HOC (Higher-Order Component)
function withAuthentication(WrappedComponent) {
  return function (props) {
    const [user, setUser] = useState("John Doe");
    const [email, setEmail] = useState("john@example.com");
    const isAuthenticated = true; // You can implement your authentication logic here

    if (isAuthenticated) {
      return <WrappedComponent user={user} email={email} />;
    } else {
      return <p>Please log in to view this information.</p>;
    }
  };
}

// Use the HOC to enhance your component
const AuthenticatedUser = withAuthentication(UserComponent);

function HOC() {
  return (
    <div>
      <h1>My HOC</h1>
      <AuthenticatedUser />
    </div>
  );
}

export default HOC;
