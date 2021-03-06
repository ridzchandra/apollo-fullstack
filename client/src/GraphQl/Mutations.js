/** @format */

import { gql } from "@apollo/client"

export const CREATE_USER_MUTATION = gql`
	mutation ($name: String!, $age: Int!, $married: Boolean!) {
		createUser(name: $name, age: $age, married: $married) {
			name
			age
			married
		}
	}
`
