import { useState } from "react";

interface UsePasswordValidationProps {
  initialPassword?: string;
  minLength?: number;
}

interface UsePasswordValidationReturn {
  password: string;
  error: string;
  showPassword: boolean;
  setPassword: (password: string) => void;
  togglePasswordVisibility: () => void;
  validatePassword: () => boolean;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const usePasswordValidation = ({
  initialPassword = "",
  minLength = 8,
}: UsePasswordValidationProps = {}): UsePasswordValidationReturn => {
  const [password, setPassword] = useState(initialPassword);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = () => {
    if (!password) {
      setError("Please enter a password.");
      return false;
    }

    if (password.length < minLength) {
      setError(`Password must be at least ${minLength} characters.`);
      return false;
    }

    setError("");
    return true;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    
    if (!value) {
      setError("");
    } else if (value.length < minLength) {
      setError(`Password must be at least ${minLength} characters.`);
    } else {
      setError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {
    password,
    error,
    showPassword,
    setPassword,
    togglePasswordVisibility,
    validatePassword,
    handlePasswordChange,
  };
};
