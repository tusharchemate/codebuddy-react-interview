import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Steps, Button, Divider, Form } from "antd";
import UserDetails from "./UserDetails";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
const { Step } = Steps;

const MultiStepForm = ({ onSubmit }) => {
  const methods = useForm({
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const steps = [
    { title: "User Details", component: <UserDetails /> },
    { title: "Personal Information", component: <PersonalInformation /> },
    { title: "Contact Information", component: <ContactInformation /> },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const onFormSubmit = async (data) => {
    const { acceptTermsAndCondition, ...formData } = data;
    try {
      await onSubmit(formData);
      console.log("Form data submitted successfully:", formData);
      navigate("/posts");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => setCurrentStep(currentStep - 1);

  return (
    <FormProvider {...methods}>
      <Form onFinish={handleSubmit(onFormSubmit)}>
        <Steps current={currentStep}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
        <Divider />
        {steps[currentStep].component}
        <div className={styles.container}>
          {currentStep > 0 && (
            <Button className={`${styles.button} ${styles.buttonMarginRight}`} onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button type="primary" htmlType="submit" loading={isSubmitting}>
              Submit
            </Button>
          )}
        </div>
      </Form>
    </FormProvider>
  );
};

export default MultiStepForm;
