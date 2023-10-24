import React from 'react'

const TodoListTable = ({ data, viewState, handleCheckBoxChange }) => {
	function whatViewState() {
		switch (viewState) {
			case '0':
				return data
			case '1':
				return data.filter((item) => item.isCompleted)
			case '2':
				return data.filter((item) => !item.isCompleted)
			default:
				return data
		}
	}

	return (
		<table>
			<tbody>
				{whatViewState().map((item) => (
					<tr key={item.id}>
						<td>
							<div className='task'>
								<input
									type='checkbox'
									onChange={() =>
										handleCheckBoxChange(item.id)
									}
									checked={item.isCompleted}
								/>
								<label>{item.name}</label>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default TodoListTable
