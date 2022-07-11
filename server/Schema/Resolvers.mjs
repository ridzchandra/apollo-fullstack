/** @format */

import users from "../FakeData.mjs"

const resolvers = {
	Query: {
		getAllUsers() {
			return users
		},
	},

	Mutation: {
		createUser(parent, args) {
			const newUser = args
			users.push(newUser)
			return newUser
		},
	},
}

export default resolvers
