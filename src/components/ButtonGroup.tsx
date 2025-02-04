const ButtonGroup = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Create Currency
        </button>
        <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Delete Currency
        </button>
      </div>
      <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
        Edit Currency
      </button>
    </div>
  );
};

export default ButtonGroup;