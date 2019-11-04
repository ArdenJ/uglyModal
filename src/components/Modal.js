import React from 'react'
import ReactDOM from 'react-dom'


// Components
import ModalHeader from './ModalHeader'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'



const Modal = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(

    <React.Fragment>
        <div className='modal-overlay' />
        <div className='modal-wrapper'>
            <div className='modal'>
                <div className='modal-header' style={{display: 'grid', gridTemplateColumns: 'auto 5rem'}}>
                    <ModalHeader title='h11o' />
                    <div className='button'>
                        <button type='button' className='modalCloseButton' onClick={hide}>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
                <hr />
                <div>
                    <ModalBody />
                </div>
                <hr />
                <ModalFooter />
            </div>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal