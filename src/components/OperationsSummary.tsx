import React from 'react';

interface OperationsSummaryProps {
  dateRange: { start: string; end: string };
  selectedProducts: string[];
}

const OperationsSummary: React.FC<OperationsSummaryProps> = ({ dateRange, selectedProducts }) => {
  // This is a mock implementation. In a real scenario, you would fetch data from your MySQL database.
  const mockData = [
    {
      product: 'DON ERNESTO INTEGRAL',
      salesAndReturns: 100,
      production: 150,
      initialStock: 200,
      finalStock: 250,
    },
    {
      product: 'Arroz L. Fino EL CHEFF 00000 10x1',
      salesAndReturns: 80,
      production: 120,
      initialStock: 150,
      finalStock: 190,
    },
    // Add more mock data for other products
  ];

  const filteredData = mockData.filter((item) =>
    selectedProducts.length === 0 || selectedProducts.includes(item.product)
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Resumen de Operaciones</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Producto</th>
            <th className="border p-2 text-right">Ventas y Devoluciones</th>
            <th className="border p-2 text-right">Producción</th>
            <th className="border p-2 text-right">Existencia Inicial</th>
            <th className="border p-2 text-right">Existencia Final</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.product}>
              <td className="border p-2">{item.product}</td>
              <td className="border p-2 text-right">{item.salesAndReturns}</td>
              <td className="border p-2 text-right">{item.production}</td>
              <td className="border p-2 text-right">{item.initialStock}</td>
              <td className="border p-2 text-right">{item.finalStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OperationsSummary;