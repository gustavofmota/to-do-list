import React from 'react'
import PopUp from './PopUp'
import './WarningPopUp.css'

class WarningPopUp extends PopUp {
	render() {
		return (
			<div className={`WarningPopUp ${this.props.displayState}`}>
				<div className='WarningPopUp-content'>
					<div className='WarningPopUp-header'>
						<div className='title'>Warning!! &#9888;</div>
						<div
							className='closing-X'
							onClick={() =>
								this.props.onClose && this.props.onClose()
							}
						>
							X
						</div>
					</div>
					<div className='WarningPopUp-body'>{this.props.value}</div>
				</div>
			</div>
		)
	}
}

export default WarningPopUp
