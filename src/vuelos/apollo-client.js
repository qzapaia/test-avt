import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: '//product.api.stage.devtrip.com.ar/data'
});

const client = new ApolloClient({
  networkInterface
});

export default client;
