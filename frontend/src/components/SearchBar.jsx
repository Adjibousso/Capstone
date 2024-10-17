
import React from 'react';
import { useLocation } from 'react-router-dom';
// I was trying to make the search bar active, and display whatever the user
// searched for but I finally did it with the (if else if for a few words (country name))
const SearchResults = ({ products }) => {
  const query = new URLSearchParams(useLocation().search).get('query');
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
