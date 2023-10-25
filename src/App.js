import './App.css'
import TodoListTable from './components/Table-list.js'
import Form from './components/Form.js'
import WarningPopUp from './components/WarningPopUp.js'
import React, { useCallback, useState } from 'react'

function App() {
	const [viewState, setViewState] = useState('0') //this will alternate the view 0=all, 1=completed, 2=todo
	const [values, setValues] = useState([]) //this will save the values and update the state of each task
	const [idCounter, setIdCounter] = useState(0) //this will always generate a unique id for each task
	const [popUpDisplayState, setPopUpDisplayState] = useState('')
	const viewsType = ['All', 'Completed', 'To-Do']

	const [popupMessage, setPopupMessage] = useState(null)

	const showPopup = useCallback(
		(newMessage) => {
			setPopupMessage(newMessage)
			setPopUpDisplayState('visible')
		},
		[setPopupMessage]
	)

	const resetPopup = useCallback(() => {
		setPopupMessage(null)
		setPopUpDisplayState('')
	}, [setPopupMessage])

	/**
	 * This function will add a task to the list
	 *
	 *
	 * @param {*} target
	 * Target will be the name of the task to be added to the list
	 */
	function handleAddTask(target) {
		setValues([
			...values,
			{ id: idCounter, name: target.value, isCompleted: false },
		])
		setIdCounter(idCounter + 1)
		target.value = ''
	}

	function handleSetViewState(e) {
		setViewState(e.target.dataset.view)
	}

	function handleCheckBoxChange(index) {
		setValues((values) => {
			const newValues = [...values]
			newValues[index] = {
				...newValues[index],
				isCompleted: !values[index].isCompleted,
			}
			return newValues
		})
	}

	return (
		<>
			<WarningPopUp
				value={popupMessage}
				onClose={resetPopup}
				displayState={popUpDisplayState}
			/>
			<div className='App'>
				<header>{viewsType[viewState]}</header>
				<TodoListTable
					data={values}
					viewState={viewState}
					handleCheckBoxChange={handleCheckBoxChange}
				/>
				<Form
					handleSetViewState={handleSetViewState}
					handleAddTask={handleAddTask}
					showPopup={showPopup}
				/>
			</div>
		</>
	)
}

export default App
