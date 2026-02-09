import { useEffect, useState } from 'react';
import axios from 'axios';

function ItemsList() {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setItemsData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {itemsData.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-lg font-bold mt-2">${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;