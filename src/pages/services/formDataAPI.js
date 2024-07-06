import { message } from "antd";
const API_URL = "https://codebuddy.review/submit";

const submitFormData = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    message.success("Form submitted successfully!");
    return responseData;
  } catch (error) {
    console.error("Error submitting form:", error);
    message.error("Failed to submit form. Please try again.");
    throw error;
  }
};

export default submitFormData;
