import SearchBar from '../../components/searchBar';
import Table from '../../components/table/Table';

export default function Home() {
  return (
    <section className="general-layout flex flex-col justify-center items-center bg-gray-100 pt-[1.2rem] w-full">

      <SearchBar />
      <Table />
    </section>
  );
}
