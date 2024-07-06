const validations = {
  email: {
    required: "Email ID is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address format",
    },
  },
  password: {
    required: "Password is required",
    minLength: { value: 8, message: "Password must be at least 8 characters" },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must contain at least 2 uppercase, 2 lowercase, 2 digits, and 2 special characters",
    },
  },
  firstName: {
    required: "First Name is required",
    minLength: { value: 2, message: "First Name must be at least 2 characters" },
    maxLength: { value: 50, message: "First Name cannot exceed 50 characters" },
    pattern: { value: /^[A-Za-z]+$/, message: "Only alphabets are allowed for First Name" },
  },
  lastName: {
    pattern: { value: /^[A-Za-z]*$/, message: "Only alphabets are allowed for Last Name" },
  },
  address: {
    required: "Address is required",
    minLength: { value: 10, message: "Address must be at least 10 characters" },
  },
  countryCode: {
    required: "Country Code is required",
  },
  phoneNumber: {
    required: "Phone Number is required",
    pattern: { value: /^\d{10}$/, message: "Phone Number must be 10 digits" },
  },
  acceptTerms: {
    required: "You must accept the Terms and Conditions",
  },
};

export default validations;
