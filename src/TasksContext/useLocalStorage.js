import React from "react";

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

React.useEffect(()=>{
  setTimeout(()=>{
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
    
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem= JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
    
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, 2000)
}, [])

  

  // funcion para actualizar el localStorage de las Tasks
  const saveItem = (newItem) => {
    localStorage.removeItem(itemName);
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }
  return {item, saveItem, loading, error};
}

export {useLocalStorage};