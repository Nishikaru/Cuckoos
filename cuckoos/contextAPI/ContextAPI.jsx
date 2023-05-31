import React, { useState } from 'react';
import { createContext } from "react";

export const My_context = createContext(null)

const ContextAPI = ({children}) => {
  const [Test,SetTest] = useState('meaw')
  return (
    <My_context.Provider value={{Test}}>
      {children}
    </My_context.Provider>
  );
};

export default ContextAPI;