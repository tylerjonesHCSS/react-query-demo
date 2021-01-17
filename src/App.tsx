import { BrowserRouter as Router, Route } from "react-router-dom";
import * as React from "react";
import "./styles.css";
import Layout from "./Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Route path="/">
            <h1>Welcome to the slow demo!</h1>
            <Layout />
            <ReactQueryDevtools initialIsOpen />
          </Route>
        </div>
      </Router>
    </QueryClientProvider>
  );
}
