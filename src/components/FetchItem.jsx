const FetchItem = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await fetch(`http://localhost:3000/details/items/${id}`);

  if (!res.ok) {
    throw new Error (`Fail fetching item with id ${id}`);
  }

  return res.json();
};

export default FetchItem;