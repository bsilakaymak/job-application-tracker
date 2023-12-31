function isValidEmail(email: string) {
  // Regular expression pattern for a basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const validationSchema = {
  jobTitle: (value: string) => {
    if (!value || value.trim() === "") {
      return "Job Title is required";
    }
    return null;
  },
  jobDescription: (value: string) => {
    if (!value || value.trim() === "") {
      return "Job Description is required";
    }
    return null;
  },
  companyName: (value: string) => {
    if (!value || value.trim() === "") {
      return "Company Name is required";
    }
    return null;
  },
  companyContact: (value: any) => {
    if (value != "N/A") {
      if (!isValidEmail(value)) {
        return "Enter a valid email address for Company Contact";
      }
    }
    return null;
  },
  appliedVia: (value: string) => {
    if (!value || value.trim() === "") {
      return "Applied Via is required";
    }
    return null;
  },
  status: (value: string) => {
    if (!value || value.trim() === "") {
      return "Status is required";
    }
    return null;
  },
  remarks: (value: string) => {
    if (!value || value.trim() === "") {
      return "Remarks are required";
    }
    return null;
  },
  open: (value: boolean) => {
    if (typeof value !== "boolean") {
      return "Open must be a boolean value (true or false)";
    }
    return null;
  },
  feedback: (value: string) => {
    if (!value || value.trim() === "") {
      return "Feedback is required";
    }
    return null;
  },
};
