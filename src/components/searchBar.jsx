import { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="w-[40%] mx-auto p-2 border-2 rounded-full flex items-center justify-between bg-white">
      <input
        className="w-[90%] py-[2px] indent-1 outline-none"
        type="text"
        placeholder="Search..."
        required
        name="searchText"
        value={formData.searchText}
        onChange={handleInputChange}
      />
      <button
        className="w-[10%] py-[2px] text-right"
        type="submit"
      >
        Ok
      </button>
    </form>
  );
}
