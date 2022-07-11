/** @format */

import { gql } from "apollo-server-core"

const typeDefs = gql`
	# Users
	type User {
		name: String!
		age: Int!
		married: Boolean!
	}

	# Queries
	type Query {
		getAllUsers: [User!]!
	}

	# Mutations
	type Mutation {
		createUser(name: String!, age: Int!, married: Boolean!): User!
	}
`

export default typeDefs
