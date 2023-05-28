export default function filter(collection, itemForFilter) {
  const filteredCollection = collection.filter((item) => (
    item.tagName.includes(itemForFilter.toLowerCase())));
  if (filteredCollection[0]) return filteredCollection;
  return null;
}
