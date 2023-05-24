import React from 'react';
import CodeEditor from '../../editor/CodeEditor';
import FooterPageTwo from '../../components/FooterPageTwo';

export default function Code() {
  return (
    <section className="general-layout flex flex-col justify-start items-center bg-gray-100 pt-[1.2rem] w-full h-[80vh]">

      <h1 className="self-start ml-[2.5%]">
        Read and Write codes here:
      </h1>
      <CodeEditor />
      <FooterPageTwo />
    </section>
  );
}
