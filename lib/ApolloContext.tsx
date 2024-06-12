'use client';

import { ReactNode, createContext, useContext } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider as ApolloClientProvider, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`,
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    },
  }),
  cache: new InMemoryCache(),
});

const ApolloContext = createContext(client);

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  );
};

export const useApolloClient = () => useContext(ApolloContext);
