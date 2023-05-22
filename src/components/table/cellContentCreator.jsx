import Button from '../Button/Button';

export default function cellContent(key, value) {
  if (key === 'Usage') {
    return (
      <>
        <div>{value.info}</div>
        <Button code={value.code} />
      </>
    );
  }
  return (value);
}
