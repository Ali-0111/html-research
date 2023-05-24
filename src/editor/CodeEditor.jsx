import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

export default function CodeEditor() {
  const [code, setCode] = React.useState(
    '<h2>Demo</h2>',
  );
  return (
    <div className="editor-container">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
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
