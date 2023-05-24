export default function ButtonCopy() {
  const handleClick = () => {
    console.log('I copied the code');
  };

  return (
    <button
      type="button"
      className="border"
      onClick={() => handleClick()}
    >
      Get Codes
    </button>
  );
}
