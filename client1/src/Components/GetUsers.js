/** @format */

import React, { useEffect, useState } from "react"
import { useQuery, gql } from "@apollo/client"
import { LOAD_USERS } from "../GraphQl/Queries"

const GetUsers = () => {
	const [users, setUsers] = useState(null)
	const { error, loading, data } = useQuery(LOAD_USERS)
	useEffect(() => {
		setUsers(data && data.getAllUsers)
	}, [data])
	return (
		<div>
			{users &&
				users.map((user) => (
					<div>
						<h3>{user.name}</h3>
						<h3>{user.age}</h3>
						<h3>{user.married ? "Married" : "Not Married"}</h3>
						<br />
						<br />
						<br />
					</div>
				))}
		</div>
	)
}

export default GetUsers
