import React from 'react'

// Hook
import useModal from './useModal'

const ModalBodyEvents = () => (
    <div>
      Body 1
    </div>
)

const ModalBodyMutation = () => (
    <div>
      Body 2
    </div>
)

// How can I initialise the state differently so these aren't backwards?
const ModalBodyEl = ({isShowing, hide}) => ( isShowing ? 
  <div style={{display: 'grid', gridTemplateColumns: '5rem auto'}}>
    <button type='button' onClick={hide}>back</button>
    <ModalBodyMutation isShowing={isShowing} />
  </div>
:
  <div style={{display: 'grid', gridTemplateColumns: 'auto 5rem'}}>
    <ModalBodyEvents isShowing={!isShowing} />
    <button type='button' onClick={hide}>next</button>
  </div>
)

function ModalBody() {
  const {isShowing, toggle} = useModal()
  return (
    <div>
      <ModalBodyEl isShowing={isShowing} hide={toggle} />
    </div>
  )
}
  export default ModalBody;