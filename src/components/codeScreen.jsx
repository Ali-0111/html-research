import React from 'react';

const editorUrl = 'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor';

export default function Screen() {
  const [text, setText] = React.useState('');
  const handleTextAreaChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  const handleClick = () => {
    // const textarea = document.querySelector('.textarea');
    // copy text
    navigator.clipboard.writeText('<p>I am copied text </p>');
    window.open(editorUrl);
  };

  return (
    <>
      <textarea
        id="codeScreen"
        className="textarea min-w-[40%]"
        value={text}
        onChange={handleTextAreaChange}
        name="textArea"
      />
      <button
        type="button"
        className="border border-black"
        onClick={handleClick}
      >
        copy
      </button>
    </>
  );
}
