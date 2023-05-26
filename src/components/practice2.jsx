import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';

function Practice2() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://api.plentys.pk/api/v1/public/product/search?title=/&categoryId=1&minPrice=1&maxPrice=&productIds=&storeId=&brandId=&rating=&conditionId=&discountValue=&promotionId=&lookupShippingTypeId=&lookupAttributeValueIds=&freshBaazar=&exactDiscount=&cityId=1&orderBy=stockDesc&limit=60&page=1');
        const productsData = response.data.data;
        setAllProducts(productsData);
        console.log(productsData)
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchQuery.length >= 2) {
      const filteredResults = _.filter(allProducts, (product) =>
        _.includes(_.toLower(product.brand), _.toLower(searchQuery))
     
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, allProducts]);
console.log(searchResults)
  return (
    <div className='text-blue-400'>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search by name..."
      />
      <ul>
        {searchResults.map((product) => (
          <li key={product.id}>{`${product.title} id :${product.productId}`}</li>
        ))}
      </ul>
    </div>
  );
}
export default Practice2;