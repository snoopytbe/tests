import React from "react";
import { A, navigate, useRoutes } from "hookrouter";

function HomePage() {
  return (
    <div>
      <p>HomePage</p>
    </div>
  );
}

function AnotherPage() {
  return (
    <div>
      <p>AnotherPage</p>
      <A href="/third">Third</A>
    </div>
  );
}

function ThirdPage() {
  return (
    <div>
      <p>3</p>
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
  "/": () => <App />,
  "/home": () => <HomePage />,
  "/other": () => <AnotherPage />,
  "/third": () => <ThirdPage />
};

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <A href="/">Superhome</A>
      <br />
      <A href="/home">Home</A>
      <br />
      <A href="/other">Another</A>
      {routeResult || <NonExistentPage />}
    </div>
  );
}
