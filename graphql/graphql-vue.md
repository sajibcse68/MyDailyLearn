#### Installation

```
# need to have the [GraphQL](https://github.com/graphql-cli/graphql-cli) installed to bootstrap GraphQl server using `graphql create`
$ npm install -g graphql-cli

# deploy database from `datamodel.graphql` file
$ prisma deploy

```

#### Various Dependencies:

- `graphql-yoga`: Provides the functionality for our GraphQL server (based on Express.js)
- `prisma-binding`: Easily lets us connects resolvers to Prisma's GraphQL API
