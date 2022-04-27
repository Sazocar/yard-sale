import React from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
			response.data.splice(0,3);
      setProducts(response.data);
    }
    fetchData();
  }, []);

	return products;
};

export { useGetProducts };