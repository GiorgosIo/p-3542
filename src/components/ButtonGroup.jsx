import { useState } from 'react'
import CurrencyModal from './CurrencyModal'

const ButtonGroup = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: null
  })

  const handleModalSubmit = (data) => {
    console.log('Modal submitted with data:', data)
    // Handle the submission based on mode
    switch (modalState.mode) {
      case 'create':
        console.log('Creating currency:', data)
        break
      case 'edit':
        console.log('Editing currency:', data)
        break
      case 'delete':
        console.log('Deleting currency:', data)
        break
      default:
        break
    }
  }

  return (
    <>
      <div className="flex flex-col space-y-4 font-montserrat">
        <div className="flex space-x-4">
          <button 
            onClick={() => setModalState({ isOpen: true, mode: 'create' })}
            className="flex-1 bg-theme text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Create Currency
          </button>
          <button 
            onClick={() => setModalState({ isOpen: true, mode: 'delete' })}
            className="flex-1 bg-theme text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Delete Currency
          </button>
        </div>
        <button 
          onClick={() => setModalState({ isOpen: true, mode: 'edit' })}
          className="w-full bg-theme text-white py-2 px-4 rounded-md shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        >
          Edit Currency
        </button>
      </div>

      <CurrencyModal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        onClose={() => setModalState({ isOpen: false, mode: null })}
        onSubmit={handleModalSubmit}
      />
    </>
  )
}

export default ButtonGroup