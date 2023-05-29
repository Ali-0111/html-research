import React from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from '../../editor/CodeEditor';
import CodeRunner from '../../editor/CodeRunner';
// import FooterPageTwo from '../../components/FooterPageTwo';

export default function Code() {
  const { code } = useSelector((state) => (state));
  return (
    <section className="general-layout flex justify-between items-center bg-gray-100 pt-[1.2rem] w-full h-[80vh]">
      <CodeEditor code={code} />
      <CodeRunner code={code} />
      {/* <FooterPageTwo /> */}
    </section>
  );
}
