import React, { useState } from "react";

const FormContext = React.createContext({ name: null });

export const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState();

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
