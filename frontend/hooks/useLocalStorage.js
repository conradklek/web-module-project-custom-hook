import { useState } from "react";

export default function useLocalStorage(key, value) {
  const [valueLS, setValueLS] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  });
  const setStoredValue = (value) => {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
    setValueLS(value);
  };
  return [valueLS, setStoredValue];
}
