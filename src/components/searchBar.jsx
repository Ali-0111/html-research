import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { feedFilteredBySearch } from '../Redux/codeSlice';
import SearchField from './Input/inputField';
import SubmitButton from './Button/SubmitButton';
import searchIcon from '../assets/images/searchIcon.svg';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    searchText: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    dispatch(feedFilteredBySearch(value));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      relative
      rounded-full
      flex items-center justify-between bg-white
      w-[40%] mx-auto pl-2 border-2 py-[3px]
      "
    >
      <SearchField
        value={formData.searchText}
        func={handleInputChange}
      />

      <SubmitButton picture={searchIcon} alt="submitPict" />
    </form>
  );
}
