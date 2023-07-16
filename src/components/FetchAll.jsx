const FetchAll = async ({ queryKey }) => {
  const name = queryKey[1];
  const res = await fetch(`http://localhost:3000/details/${name}`);

  if (!res.ok) {
    throw new Error (`Error fetching ${name}`);
  }

  return res.json();
};

export default FetchAll;