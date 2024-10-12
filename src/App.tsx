import React, { useState } from 'react';
import { Calendar, Filter, ChevronDown } from 'lucide-react';
import DateRangePicker from './components/DateRangePicker';
import ProductFilter from './components/ProductFilter';
import OperationsSummary from './components/OperationsSummary';
import OperationsDetail from './components/OperationsDetail';

function App() {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState(false);

  const handleDateRangeChange = (start: string, end: string) => {
    setDateRange({ start, end });
    setShowDetails(start === end);
  };

  const handleProductFilterChange = (products: string[]) => {
    setSelectedProducts(products);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Stock Productos Oryza</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <DateRangePicker onChange={handleDateRangeChange} />
          <ProductFilter onChange={handleProductFilterChange} />
        </div>
        <OperationsSummary dateRange={dateRange} selectedProducts={selectedProducts} />
        {showDetails && (
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={() => setShowDetails(true)}
          >
            Ver detalle de operaciones
          </button>
        )}
      </div>
      {showDetails && <OperationsDetail dateRange={dateRange} selectedProducts={selectedProducts} />}
    </div>
  );
}

export default App;