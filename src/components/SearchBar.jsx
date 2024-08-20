import React, { useState } from 'react';

function SearchBar({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterTransactions(term);
  };

  return (
    <input
      type="text"
      placeholder="Search by description"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
