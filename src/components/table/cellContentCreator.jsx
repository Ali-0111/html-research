import Button from '../Button/Button';

export default function cellContent(key, value) {
  if (key === 'code') {
    return (
      <Button name="demo" code={value} />
    );
  }
  return (value);
}
