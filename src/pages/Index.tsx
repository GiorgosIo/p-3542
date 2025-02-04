import CurrencyConverter from "@/components/CurrencyConverter";
import ButtonGroup from "@/components/ButtonGroup";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>
        <p className="text-xl text-gray-600">Convert currencies with real-time exchange rates</p>
      </header>
      <main className="w-full max-w-md">
        <CurrencyConverter />
        <ButtonGroup />
      </main>
    </div>
  );
};

export default Index;