import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [
    state,
    dispatch]
  = React.useReducer(reducer, initialState({ initialValue }));
  
  const { 
    synchronizedItem,
    error,
    loading,
    item 
  } = state;

  // const [synchronizedItem, setSynchronizedItem] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(initialValue);
  // const [item, setItem] = React.useState(initialValue);
  // ACTIONS CREATORS
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSynchronize = () => dispatch({ type: actionTypes.synchronize });
  

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);

        // setItem(parsedItem);
        // setLoading(false);
        // setSynchronizedItem(true);
      } catch (error) {
        onError(error);
        // setError(error);
      }
    }, 1000);
  }, [synchronizedItem]);

  const synchronizeItem = () => {
    onSynchronize();
  };

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem)
      // setItem(newItem);
    } catch (error) {
      onError(error);
      // setError(error);
    }
  };
  return { item, saveItem, loading, error, synchronizeItem };
}

const initialState = ({initialValue}) => ({
  synchronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  synchronize: 'SYNCHRONIZE',
};  

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    synchronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.synchronize]: {
    ...state,
    error: false,
    loading: true,
    synchronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage };
