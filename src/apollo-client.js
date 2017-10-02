import { ApolloClient, createNetworkInterface,ApolloProvider } from 'react-apollo';
import React from 'react';
//product.api.int.devtrip.com.ar/
const networkInterface = createNetworkInterface({
  uri: '//product.api.stage.devtrip.com.ar/data'
});

const client = new ApolloClient({
  networkInterface
});

export const Provider = (props) => (
  <ApolloProvider client={client}>
    {React.cloneElement(props.children, props)}
  </ApolloProvider>
)

export default client;
