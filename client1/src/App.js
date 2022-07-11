/** @format */

import "./App.css"
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import GetUsers from "./Components/GetUsers"
import Form from "./Components/Form"

const errorLink = onError(({ graphqlErrors, networkErrors }) => {
	if (graphqlErrors) {
		graphqlErrors.map((message, location, path) => {
			alert(`Graphql Error: ${message}`)
			return message
		})
	}
})

const link = from([
	errorLink,
	new HttpLink({ uri: "http://localhost:3002/graphql" }),
])

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
})

function App() {
	return (
		<ApolloProvider client={client}>
			<GetUsers />
			<Form />
		</ApolloProvider>
	)
}

export default App
