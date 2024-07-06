import React from "react";
import MultiStepForm from "../components/MultiStepForm";
import submitFormData from "../services/formDataAPI";

const MultiStepFormContainer = () => {
  const handleSubmit = (userData) => {
    submitFormData(userData);
  };

  return <MultiStepForm onSubmit={handleSubmit} />;
};

export default MultiStepFormContainer;
