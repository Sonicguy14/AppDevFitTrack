import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [data, setData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem(key));
    return savedData || initialValue;
  });

  const updateData = (newData) => {
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  return [data, updateData];
};

export default useLocalStorage;
