import React from "react";
import { A, navigate, useRoutes } from "hookrouter";

function HomePage() {
  return (
    <div>
      <A href="/other">Second</A>
    </div>
  );
}

function AnotherPage() {
  return (
    <div>
      <A href="/third/andre/matthieu">Users Page</A>
    </div>
  );
}

function ThirdPage(props) {
  return (
    <div>
      {props.nom}
      {props.prenom}
      <A href="/home">First</A>
    </div>
  );
}

function NonExistentPage() {
  return (
    <div>
      <h1>404</h1> <p>Page doesn't exist</p>
    </div>
  );
}

const routes = {
  "/home": () => <HomePage />,
  "/other": () => <AnotherPage />,
  "/third/:nom/:prenom": ({ prenom, nom }) => (
    <ThirdPage nom={nom} prenom={prenom} />
  )
};

export default function App() {
  const routeResult = useRoutes(routes);

  return <div className="App">{routeResult || <HomePage />}</div>;
}
