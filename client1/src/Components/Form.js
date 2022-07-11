/** @format */

import React, { useState } from "react"
import { CREATE_USER_MUTATION } from "../GraphQl/Mutations"
import { useMutation } from "@apollo/client"

const Form = () => {
	const [name, setName] = useState("")
	const [age, setAge] = useState(0)
	const [married, setMarried] = useState(false)

	// createUSer should match with the name used in TypeDefs on server side
	const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)

	const onValueChange = (e) => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value)
				break
			case "age":
				setAge(Number(e.target.value))
				break
			case "married":
				setMarried(e.target.value === "Y" ? true : false)
				break
			default:
				break
		}
	}

	const addUser = () => {
		createUser({
			variables: {
				name: name,
				age: age,
				married: married,
			},
		})

		if (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Name"
				name="name"
				onChange={onValueChange}
			/>
			<input
				type="number"
				placeholder="Age"
				name="age"
				onChange={onValueChange}
			/>
			<div onChange={onValueChange}>
				<input type="radio" name="married" value="Y" /> Y
				<input type="radio" name="married" value="N" /> N
			</div>

			<button onClick={addUser}>Create User</button>
		</div>
	)
}

export default Form
