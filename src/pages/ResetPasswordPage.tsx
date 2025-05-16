import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePasswordValidation } from "@/hooks/usePasswordValidation";
import { usePasswordConfirmation } from "@/hooks/usePasswordConfirmation";

export const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    password,
    error: passwordError,
    showPassword,
    handlePasswordChange,
    togglePasswordVisibility,
    validatePassword,
  } = usePasswordValidation();

  const {
    confirmPassword,
    error: confirmPasswordError,
    showConfirmPassword,
    handleConfirmPasswordChange,
    toggleConfirmPasswordVisibility,
    validateConfirmPassword,
  } = usePasswordConfirmation({ password });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePassword() || !validateConfirmPassword()) {
      return;
    }

    setIsLoading(true);
    // TODO: Implement password reset logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <div className="w-full max-w-[500px] space-y-4 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-900">
        <div className="flex flex-col items-center">
          <Logo />
          <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Reset Your Password
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Choose a new password to secure your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="new-password"
              className="text-sm font-medium text-slate-900 dark:text-slate-50"
            >
              New Password
            </label>
            <Input
              id="new-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              onRightIconClick={togglePasswordVisibility}
              error={!!passwordError}
              hint={passwordError || (
                <div className="flex items-center gap-1.5">
                  <InfoIcon className="h-4 w-4 text-slate-500" />
                  <span>At least 8 characters</span>
                </div>
              )}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-slate-900 dark:text-slate-50"
            >
              Confirm New Password
            </label>
            <Input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onRightIconClick={toggleConfirmPasswordVisibility}
              error={!!confirmPasswordError}
              hint={confirmPasswordError}
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="mt-2 w-full"
            disabled={isLoading || !!passwordError || !!confirmPasswordError}
          >
            {isLoading ? "Resetting password..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  );
};

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
