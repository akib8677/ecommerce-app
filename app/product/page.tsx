'use client';

import { useQuery, gql } from '@apollo/client';

// Define the types for the GraphQL data
interface DemoNode {
  name: string;
  age: string; // Assuming age is returned as a string
}

interface DemoEdge {
  node: DemoNode;
}

interface DemoCollection {
  edges: DemoEdge[];
}

interface DemoData {
  demoCollection: DemoCollection;
}

// Define the GraphQL query
const GET_DEMO_DATA = gql`
  query GetDemoData {
    demoCollection {
      edges {
        node {
          name
          age
        }
      }
    }
  }
`;

// Define the DemoComponent
const DemoComponent = () => {
  // Use the useQuery hook to fetch data
  const { loading, error, data } = useQuery<DemoData>(GET_DEMO_DATA);

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Handle case where data is undefined or demoCollection is undefined
  if (!data || !data.demoCollection) return <p>No data found</p>;

  // Extract edges from the data
  const { edges } = data.demoCollection;

  return (
    <div>
      <h1>Demo Data</h1>
      {edges.map((edge, index) => (
        <div key={index}>
          <p>Name: {edge.node.name}</p>
          <p>Age: {edge.node.age}</p>
        </div>
      ))}
    </div>
  );
};

export default DemoComponent;
