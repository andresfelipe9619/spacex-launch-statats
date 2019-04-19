import React, { Component } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from "./components/launches";
const Client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <div className="container">
          <h1>SpaceX</h1>
        </div>
        <Launches />
      </ApolloProvider>
    );
  }
}

export default App;
