import { useSelector } from 'react-redux';

export default function SearchList() {
  const { filteredBySearch: data } = useSelector((store) => (store));

  const listItems = data.map((item, i) => (
    <li
      key={`item.tagname + ${i + 1}`}
      className="hover:scale-[1.02] cursor-pointer hover:bg-slate-200/70"
    >
      <button
        type="button"
        className="w-full text-left"
      >
        {item.tagName}
      </button>
    </li>
  ));

  return (
    <div className="
      absolute
      bg-white
      text-black
      w-full
      searchList-wrapper
      border-2 rounded-lg my-1 p-1
    "
    >
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
