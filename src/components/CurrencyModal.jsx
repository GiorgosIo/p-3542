import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const CurrencyModal = ({ isOpen, onClose, mode, onSubmit }) => {
  const [currencyData, setCurrencyData] = useState({
    code: '',
    name: '',
    rate: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(currencyData)
    onClose()
  }

  const getTitle = () => {
    switch (mode) {
      case 'create':
        return 'Create New Currency'
      case 'edit':
        return 'Edit Currency'
      case 'delete':
        return 'Delete Currency'
      default:
        return ''
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="font-montserrat bg-theme text-white">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode !== 'delete' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Currency Code</label>
                <input
                  type="text"
                  value={currencyData.code}
                  onChange={(e) => setCurrencyData({ ...currencyData, code: e.target.value })}
                  className="w-full p-2 rounded bg-white/10 border border-white/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Currency Name</label>
                <input
                  type="text"
                  value={currencyData.name}
                  onChange={(e) => setCurrencyData({ ...currencyData, name: e.target.value })}
                  className="w-full p-2 rounded bg-white/10 border border-white/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Exchange Rate</label>
                <input
                  type="number"
                  step="0.0001"
                  value={currencyData.rate}
                  onChange={(e) => setCurrencyData({ ...currencyData, rate: e.target.value })}
                  className="w-full p-2 rounded bg-white/10 border border-white/20"
                  required
                />
              </div>
            </>
          )}
          {mode === 'delete' && (
            <p className="text-center py-4">Are you sure you want to delete this currency?</p>
          )}
          <div className="flex justify-end space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-white/10 hover:bg-white/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-white text-theme hover:bg-white/90"
            >
              {mode === 'delete' ? 'Delete' : 'Save'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CurrencyModal