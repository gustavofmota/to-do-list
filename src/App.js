import './App.css'
import './components/table-list.js'
import TodoListTable from './components/table-list.js'
import Form from './components/form.js'
import React, { useState } from 'react'

function App() {
	const [viewState, setViewState] = useState(0) //this will alternate the view 0=all, 1=completed, 2=todo
	const [values, setValues] = useState([]) //this will save the values and update the state of each task
	const [idCounter, setIdCounter] = useState(0) //this will always generate a unique id for each task

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
			{ id: idCounter, name: target, isCompleted: false },
		])
		setIdCounter(idCounter + 1)
	}
	console.log(values)

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
		<div className='App'>
			<TodoListTable
				data={values}
				viewState={viewState}
				handleCheckBoxChange={handleCheckBoxChange}
			/>
			<Form
				handleSetViewState={handleSetViewState}
				handleAddTask={handleAddTask}
			/>
		</div>
	)
}

export default App
