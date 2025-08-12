'use client';
import { useState } from 'react';

export default function ForgotPasswordForm({ language, onBack }) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const content = {
    English: {
      title: 'Reset Password',
      subtitle: 'Enter your email address and we\'ll send you a link to reset your password',
      email: 'Email Address',
      emailPlaceholder: 'Enter your email address',
      sendButton: 'Send Reset Link',
      backButton: 'Back to Login',
      successTitle: 'Check Your Email',
      successMessage: 'We\'ve sent a password reset link to your email address. Please check your inbox and follow the instructions.',
      resendText: 'Didn\'t receive the email?',
      resendLink: 'Resend'
    },
    हिंदी: {
      title: 'पासवर्ड रीसेट करें',
      subtitle: 'अपना ईमेल पता दर्ज करें और हम आपको पासवर्ड रीसेट करने के लिए एक लिंक भेजेंगे',
      email: 'ईमेल पता',
      emailPlaceholder: 'अपना ईमेल पता दर्ज करें',
      sendButton: 'रीसेट लिंक भेजें',
      backButton: 'लॉगिन पर वापस जाएं',
      successTitle: 'अपना ईमेल चेक करें',
      successMessage: 'हमने आपके ईमेल पते पर एक पासवर्ड रीसेट लिंक भेजा है। कृपया अपना इनबॉक्स चेक करें और निर्देशों का पालन करें।',
      resendText: 'ईमेल नहीं मिला?',
      resendLink: 'दोबारा भेजें'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Email address is required');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleResend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <i className="ri-mail-check-line text-green-600 text-2xl w-6 h-6 flex items-center justify-center"></i>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {content[language].successTitle}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {content[language].successMessage}
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">
            {content[language].resendText}
          </p>
          <button
            onClick={handleResend}
            disabled={isLoading}
            className="text-orange-500 hover:text-orange-600 font-medium text-sm cursor-pointer disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : content[language].resendLink}
          </button>
        </div>

        <button
          onClick={onBack}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
        >
          <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
          {content[language].backButton}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {content[language].title}
        </h3>
        <p className="text-gray-600 text-sm">
          {content[language].subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {content[language].email}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder={content[language].emailPlaceholder}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white py-2 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center"></i>
              <span>Sending...</span>
            </div>
          ) : (
            <>
              <i className="ri-mail-send-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
              {content[language].sendButton}
            </>
          )}
        </button>
      </form>

      <button
        onClick={onBack}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
      >
        <i className="ri-arrow-left-line w-4 h-4 flex items-center justify-center mr-2 inline-block"></i>
        {content[language].backButton}
      </button>
    </div>
  );
}
