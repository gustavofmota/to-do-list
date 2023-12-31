import React from 'react'

const Form = ({ handleSetViewState, handleAddTask, showPopup }) => {

	const verifyForm = () => {
		if (document.getElementById('newTask').value)
			handleAddTask(document.getElementById('newTask'))
		else showPopup('Invalid input. Please enter a task name!')
	}

	const onKeyDown = (e) => {
		if (e.keyCode === 13) {
			verifyForm()
		}
	}
	return (
		<div id='form'>
			<div className='form-input'>
				<input
					type='text'
					name='newTask'
					id='newTask'
					placeholder='Type Here'
					onKeyDown={(e) => onKeyDown(e)}
				/>
				<button type='button' onClick={() => verifyForm()}>
					Add Task
				</button>
			</div>
			<div className='view-types'>
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
		</div>
	)
}

export default Form
