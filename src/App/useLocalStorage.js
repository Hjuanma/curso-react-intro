import React from "react";

function useLocalStorage(key, defaultValue) {
  const jsonString = localStorage.getItem(key);

  if (jsonString) {
    defaultValue = JSON.parse(jsonString);
  }

  const [item, setItem] = React.useState(defaultValue);

  function saveItem(newItem) {
    localStorage.setItem(key, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

export { useLocalStorage };