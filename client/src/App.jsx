// client/src/App.jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/data')
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <h1>Hello from the React Frontend!</h1>
      {data && <p>Data from the backend: {data.message}</p>}
    </div>
  );
}

export default App;
