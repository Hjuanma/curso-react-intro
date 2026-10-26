import React from "react";

function useLocalStorage(key, defaultValue) {
  const [item, setItem] = React.useState(defaultValue);
  const [loading, setloading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const jsonString = localStorage.getItem(key);
        if (jsonString) {
          setItem(JSON.parse(jsonString));
        }
      } catch (e) {
        setError(true);
      } finally {
        setloading(false);
      }
    }, 3000);
  }, []);

  function saveItem(newItem) {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  }

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
