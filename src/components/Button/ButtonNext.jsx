export default function ButtonNext() {
  const handleClick = () => {
    console.log('I go  next');
  };

  return (
    <button
      type="button"
      className="border"
      onClick={() => handleClick()}
    >
      Open Compiler &gt;&gt;
    </button>
  );
}
