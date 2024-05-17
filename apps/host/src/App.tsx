import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const App1 = React.lazy(() => import("app1/App"));
const Button = React.lazy(() => import("components/Button"));

type AppProps = {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => {
  return (
    <div style = {{
      border: "1px solid black",
    }}>
    <h1><center>{`Host Application ${title}`}</center></h1>
    <ErrorBoundary appName="Shared Button">
      <React.Suspense fallback="Loading button ...">
        <div style={{
          margin: "10px",
          padding: "10px",
          textAlign: "center",
          border: "1px solid green",
        }}
        >
        <h2>Micro Frontend with shared Button component</h2>
          <Button /></div>
      </React.Suspense>
    </ErrorBoundary>
    <ErrorBoundary appName="Application">
      <React.Suspense fallback="Loading ppplication ...">
        <App1 />
      </React.Suspense>
    </ErrorBoundary>
  </div>
  );
}

export default App;
