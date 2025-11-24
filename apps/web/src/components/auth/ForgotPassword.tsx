// apps/web/src/components/auth/ForgotPassword.tsx
import React, { useState } from "react";

interface ForgotPasswordProps {
  onReset?: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onReset }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onReset) {
      onReset(email);
    } else {
      // fallback: log to console
      console.log("Password reset requested for:", email);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 py-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          We’ll send you an email with instructions to reset your password.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
