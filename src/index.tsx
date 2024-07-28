import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

// Create an httpLink
const httpLink = new HttpLink({
  uri: "https://graphql.anilist.co",
});

// Create an authLink to attach the Authorization header
// const authLink = new ApolloLink((operation, forward) => {
//   // Retrieve the API key from environment variables
//   const token = process.env.REACT_APP_API_SECRET;

//   // Add the Authorization header to each request
//   operation.setContext({
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return forward(operation);
// });
// console.log(process.env.REACT_APP_API_SECRET);

// Create the Apollo Client
export const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
