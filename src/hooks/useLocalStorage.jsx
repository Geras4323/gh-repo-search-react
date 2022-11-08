import React from 'react';

function useLocalStorage(locker, initialValue) {
  const [data, setData] = React.useState()

  React.useEffect(() => {
    try {
      const fetchedData = localStorage.getItem(locker)
      let parsedData;

      if (!fetchedData) {
        localStorage.setItem(locker, initialValue);
        parsedData = initialValue;
      } else {
        parsedData = JSON.parse(fetchedData);
      }
      setData(parsedData);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }, [])

  function saveToLS(newData) {
    try {
      setData(newData);
      const stringData = JSON.stringify(newData);
      localStorage.setItem(locker, stringData);
    } catch (error) {
      console.log(`Error saving data: ${error}`);
    }
  }

  return {
    data,
    saveToLS,
  }
}

export { useLocalStorage };