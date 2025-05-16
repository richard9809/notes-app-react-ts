import { useState } from "react";

export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

interface UseEmailValidationProps {
  initialEmail?: string;
  required?: boolean;
}

interface UseEmailValidationReturn {
  email: string;
  error: string;
  setEmail: (email: string) => void;
  validateEmail: () => boolean;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useEmailValidation = ({
  initialEmail = "",
  required = true,
}: UseEmailValidationProps = {}): UseEmailValidationReturn => {
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState("");

  const validateEmail = () => {
    if (required && !email) {
      setError("Please enter your email address.");
      return false;
    }

    if (email && !isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    setError("");
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    
    if (!value) {
      setError("");
    } else if (!isValidEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  return {
    email,
    error,
    setEmail,
    validateEmail,
    handleEmailChange,
  };
};
