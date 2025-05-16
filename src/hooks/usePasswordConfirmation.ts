import { useState } from "react";

interface UsePasswordConfirmationProps {
  password: string;
  initialConfirmPassword?: string;
}

interface UsePasswordConfirmationReturn {
  confirmPassword: string;
  error: string;
  showConfirmPassword: boolean;
  setConfirmPassword: (password: string) => void;
  toggleConfirmPasswordVisibility: () => void;
  validateConfirmPassword: () => boolean;
  handleConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const usePasswordConfirmation = ({
  password,
  initialConfirmPassword = "",
}: UsePasswordConfirmationProps): UsePasswordConfirmationReturn => {
  const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword);
  const [error, setError] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setError("Please confirm your password.");
      return false;
    }

    if (confirmPassword !== password) {
      setError("Passwords do not match.");
      return false;
    }

    setError("");
    return true;
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    if (!value) {
      setError("");
    } else if (value !== password) {
      setError("Passwords do not match.");
    } else {
      setError("");
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return {
    confirmPassword,
    error,
    showConfirmPassword,
    setConfirmPassword,
    toggleConfirmPasswordVisibility,
    validateConfirmPassword,
    handleConfirmPasswordChange,
  };
};
