import React from 'react'
import PopUp from './PopUp'

class WarningPopUp extends PopUp {
	render() {
		return (
			<div className='WarningPopUp'>
				<div className='WarningPopUp-content'>
					<div className='WarningPopUp-header'>
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
