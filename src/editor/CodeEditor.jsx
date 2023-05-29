import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import { useDispatch } from 'react-redux';
import Button from '../components/Button/Button';
import { updateStateCode } from '../Redux/codeSlice';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

export default function CodeEditor({ code }) {
  const dispatch = useDispatch();
  return (
    <div className="border-2 rounded w-[45%] h-full">
      <div className="relative px-3 h-full">
        <h1 className="text-center text-blue-800">
          Read and Write codes here:
        </h1>
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
        <div className="absolute bottom-0 left-0">
          <Button name="backHome" />
        </div>
      </div>
    </div>
  );
}

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
};
