import React from 'react';

interface OperationsDetailProps {
  dateRange: { start: string; end: string };
  selectedProducts: string[];
}

const OperationsDetail: React.FC<OperationsDetailProps> = ({ dateRange, selectedProducts }) => {
  // This is a mock implementation. In a real scenario, you would fetch data from your MySQL database.
  const mockData = [
    {
      product: 'DON ERNESTO INTEGRAL',
      operations: [
        { type: 'Venta', quantity: 50, date: '2023-04-15T10:30:00' },
        { type: 'Producción', quantity: 100, date: '2023-04-15T14:45:00' },
        { type: 'Devolución', quantity: 10, date: '2023-04-15T16:20:00' },
      ],
    },
    {
      product: 'Arroz L. Fino EL CHEFF 00000 10x1',
      operations: [
        { type: 'Venta', quantity: 30, date: '2023-04-15T09:15:00' },
        { type: 'Producción', quantity: 80, date: '2023-04-15T13:30:00' },
      ],
    },
    // Add more mock data for other products
  ];

  const filteredData = mockData.filter((item) =>
    selectedProducts.length === 0 || selectedProducts.includes(item.product)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Detalle de Operaciones</h2>
      {filteredData.map((item) => (
        <div key={item.product} className="mb-8">
          <h3 className="text-lg font-semibold mb-2">{item.product}</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 text-left">Operación</th>
                <th className="border p-2 text-right">Cantidad</th>
                <th className="border p-2 text-left">Fecha y Hora</th>
              </tr>
            </thead>
            <tbody>
              {item.operations.map((op, index) => (
                <tr key={index}>
                  <td className="border p-2">{op.type}</td>
                  <td className="border p-2 text-right">{op.quantity}</td>
                  <td className="border p-2">{new Date(op.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold">
                <td className="border p-2">Subtotal</td>
                <td className="border p-2 text-right">
                  {item.operations.reduce((sum, op) => sum + op.quantity, 0)}
                </td>
                <td className="border p-2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      ))}
    </div>
  );
};

export default OperationsDetail;