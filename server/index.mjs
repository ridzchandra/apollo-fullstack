/** @format */

import { ApolloServer } from "apollo-server-express"
import express from "express"
import typeDefs from "./Schema/TypeDefs.mjs"
import resolvers from "./Schema/Resolvers.mjs"

const app = express()

const server = new ApolloServer({
	typeDefs,
	resolvers,
})

await server.start()

server.applyMiddleware({ app })

app.listen(
	{
		port: 3002,
	},
	() => {
		console.log(`SERVER RUNNING ON PORT 3002`)
	}
)
