import CurrencyConverter from "@/components/CurrencyConverter"
import ButtonGroup from "@/components/ButtonGroup"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme p-4 font-montserrat">
      <header className="text-center mb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>
        <p className="text-xl opacity-80">Convert currencies with real-time exchange rates</p>
      </header>
      <main className="w-full max-w-md">
        <CurrencyConverter />
        <ButtonGroup />
      </main>
    </div>
  )
}

export default Index