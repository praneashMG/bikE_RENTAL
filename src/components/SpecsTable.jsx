// SpecsTable.jsx
export default function SpecsTable({ vehicle }) {
  return (
    <div className="mt-6 border rounded-lg p-4 bg-gray-50">
      <h3 className="font-bold text-lg mb-3">Specifications</h3>
      <table className="w-full text-left">
        <tbody>
          <tr>
            <td className="text-gray-600 py-1">Brand</td>
            <td className="font-medium">{vehicle.brand}</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Model</td>
            <td className="font-medium">{vehicle.model}</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Year</td>
            <td className="font-medium">{vehicle.year}</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Type</td>
            <td className="font-medium">{vehicle.type}</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Color</td>
            <td className="font-medium">{vehicle.color}</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Engine</td>
            <td className="font-medium">{vehicle.engine}</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Mileage</td>
            <td className="font-medium">{vehicle.mileage} km/l</td>
          </tr>
          <tr>
            <td className="text-gray-600 py-1">Seats</td>
            <td className="font-medium">{vehicle.seats}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
