import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import { useDispatch, useSelector } from 'react-redux';
import { updateStateCode } from '../Redux/codeSlice';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

export default function CodeEditor() {
  const dispatch = useDispatch();
  const { code } = useSelector((state) => (state));
  return (
    <div className="editor-container">
      <Editor
        value={code}
        onValueChange={(code) => dispatch(updateStateCode(code))}
        highlight={(code) => highlight(code, languages.js)}
        padding={0}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 18,
        }}
      />
    </div>
  );
}
