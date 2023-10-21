import React from 'react'

const Form = ({ handleSetViewState, handleAddTask }) => {

    const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			handleAddTask(document.getElementById('newTask').value)
		}
	}
	return (
		<div>
			<input
				type='text'
				name='newTask'
				id='newTask'
				onKeyDown={(e) => onKeyDown(e)}
			/>
			<button
				type='button'
				onClick={() =>
					handleAddTask(document.getElementById('newTask').value)
				}
			>
				Add Task
			</button>
			<button
				type='button'
				data-view='0'
				onClick={(e) => handleSetViewState(e)}
			>
				View all
			</button>
			<button
				type='button'
				data-view='1'
				onClick={(e) => handleSetViewState(e)}
			>
				View completed
			</button>
			<button
				type='button'
				data-view='2'
				onClick={(e) => handleSetViewState(e)}
			>
				View todo
			</button>
		</div>
	)
}

export default Form
