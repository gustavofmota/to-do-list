import './App.css'
import './components/table-list.js'
import TodoListTable from './components/table-list.js'
import Form from './components/form.js'
import React, { useState } from 'react'

function App() {
	const [viewState, setViewState] = useState()
	const [values, setValues] = useState([])
	const [idCounter, setIdCounter] = useState(0)
	function handleAddTask(target) {
		setValues([
			...values,
			{ id: idCounter, name: target, isCompleted: false },
		])
		setIdCounter(idCounter + 1)
	}
	console.log(values)

	function handleSetViewState(e) {
		setViewState(e.target.value)
	}

	return (
		<div className='App'>
			{/* <TodoListTable data={values} viewState={viewState} /> */}
			<Form
				handleSetViewState={handleSetViewState}
				handleAddTask={handleAddTask}
			/>
		</div>
	)
}

export default App
