import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEmailValidation } from "@/hooks/useEmailValidation";

export const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { email, error, handleEmailChange, validateEmail } = useEmailValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      return;
    }

    setIsLoading(true);
    // TODO: Implement password reset logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <div className="w-full max-w-[450px] space-y-8 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-900">
        <div className="flex flex-col items-center gap-1">
          <Logo />
          <h1 className="mt-6 text-center text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            Forgotten your password?
          </h1>
          <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
            Enter your email below, and we'll send you a link to reset it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-900 dark:text-slate-50"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email@example.com"
              error={!!error}
              hint={error}
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading || !!error}
          >
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </div>
    </div>
  );
};
