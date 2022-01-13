import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

export const queries = {
  characters: gql`
    query($page: Int!, $filter: FilterCharacter){
        characters(page: $page, filter: $filter){
          info{
            count,
            pages,
            next,
            prev
          },
          results{
            id,
            name,
            status,
            image,
            gender
          }
        }
      }
    `,
  character: gql`
    query($id: ID!){
      character(id: $id){
        id,
        name,
        status,
        image,
        episode{
          name,
          air_date,
          created
        },
        species,
        type,
        gender,
        origin{
          id,
          name,
          type,
          dimension,
          created
        }
      }
    }`

}

export default client;