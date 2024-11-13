import { useEffect, useState } from 'react';

function MyComponent() {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    setFilter(filterParam);
  }, []);

  return (
    <div>
      <h1>Filter Parameter Value:</h1>
      <p>{filter ? filter : "No filter provided"}</p>
    </div>
  );
}

export default MyComponent;
