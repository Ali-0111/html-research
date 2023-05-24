import { useState } from 'react';
import searchIcon from '../assets/images/searchIcon.svg';

export default function SearchBar() {
  const [formData, setFormData] = useState({
    searchText: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData.searchText);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-[40%] mx-auto pl-2 border-2 py-[3px] rounded-full flex items-center justify-between bg-white">
      <input
        className="w-[90%] indent-1 outline-none"
        type="text"
        placeholder="Search..."
        required
        name="searchText"
        value={formData.searchText}
        onChange={handleInputChange}
      />
      <button
        className="w-[10%] flex justify-end"
        type="submit"
      >
        <img src={searchIcon} alt="logo" />
      </button>
    </form>
  );
}
