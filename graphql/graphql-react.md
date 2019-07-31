## GraphQL in React

React has a very active ecosystem surrounding GraphQL, and already have many tools that make using GraphQL a breeze.

The required packages:

- `apollo-boost:` it is a zero configuration way of getting started with GraphQL in react
- `react-apollo:` Apollo Client is the best way to use GraphQL in client-side applications. React-apollo provides an integration between GraphQL and Apollo client
- `graphql-tag:` A JavaScript template literal tag that parses GraphQL queries

First step is to import `apollo-client` from `apollo-boost`

```js
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
```

then, create an instance of apollo client with the `uri (api endpoint)` property:

```js
const client = new ApolloClient({
  uri: 'http://klsj2342.aws.sjfk.zone/graphql,
})
```

Next step is to connect `Apollo` and `React` usign `ApolloProvider` from `react-apollo`:

```js
import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Books from './Books'

const client = new ApolloClient({
  uri: 'https://r95kv5p84n.lp.gql.zone/graphql',
})

const App = () => (
  <ApolloProvider client={client}>
    <nav className="navbar">
      <a className="navbar-brand" href="">
        GraphQL in React - Demo application
      </a>
    </nav>
    <div className="container">
      <Books />
    </div>
  </ApolloProvider>
)

export default App
```

Now, create a Books component to fetch the book list:

```js
import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Book from './Book'

const Books = () => (
  <Query
    query={gql`
      {
        allBooks {
          id
          title
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Good things take time....</p>
      if (error) return <p>Something went wrong...</p>

      return <div className="row">{data.allBooks.map(book => <Book book={book} />)}</div>
    }}
  </Query>
)

export default Books
```

- `loading -- ` to show the data is still loading 
- `error -- ` to indicate that some error was caused 
- `data -- ` the actual data as an array (or, as specified in the backend)

[Reference](https://www.codementor.io/jupiterfierce31/you-will-love-graphql-in-react-if-read-this-post-wyj4tobii?utm_content=posts&utm_source=sendgrid&utm_medium=email&utm_term=post-wyj4tobii&utm_campaign=newsletter20190724)

