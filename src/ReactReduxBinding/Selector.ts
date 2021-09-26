import React, { useState, useEffect } from 'react';

export function useSelector(store, selector) {
  const [state, setChanged] = useState(0);

  useEffect(() => {
    function handleStatusChange() {
        setChanged(state+1);
    }
    let unsubscribe = store.subscribe(handleStatusChange);
    return ()=>unsubscribe();

  });

  return selector(store.getState());
}