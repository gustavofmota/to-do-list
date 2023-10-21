import React from 'react'

const TodoListTable = ({ data, onCheckBoxChange }) => {
	return (
		<table>
			<tbody>
				{data.map((item) => (
					<tr>
						<td>
							<input
								type='checkbox'
								onChange={onCheckBoxChange(item.id)}
							/>
						</td>
						{/*Is completed?*/}
						<td>
							<label>{item.name}</label>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TodoListTable
