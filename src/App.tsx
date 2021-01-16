import axios from "axios";
import * as React from "react";
import { useState } from "react";
import "./styles.css";

const gitHubURL = "https://api.github.com/repos/tannerlinsley/react-query";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string>("");

  const loadData = async () => {
    try {
      const response = await axios.get(gitHubURL);
      setData(JSON.stringify(response.data));
    } catch (ex) {
      setError("There was an error!");
      console.error(ex);
    }
    setIsLoading(false);
  };

  if (isLoading) return <div className="App">Loading...</div>;
  if (error) return <div className="App">{error}</div>;

  return (
    <div className="App">
      <button onClick={loadData}>Click me to load data!!</button>
      {<div>{data}</div>}
    </div>
  );
}
