import React from 'react';
import CodeEditor from '../../editor/CodeEditor';
import FooterPageTwo from '../../components/FooterPageTwo';
// import Screen from '../../components/codeScreen';
// import CodeMirrorComponent from '../../codeMirror/codemirror';

export default function TextArea() {
  return (
    <section className="general-layout flex flex-col justify-start items-center bg-gray-100 pt-[1.2rem] w-full h-[80vh]">

      {/* <Screen /> */}
      <h1 className="self-start ml-[2.5%]">See example codes here:</h1>
      <CodeEditor />
      <FooterPageTwo />
    </section>
  );
}
