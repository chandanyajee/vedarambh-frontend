// 'use client';

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: 'primary' | 'secondary' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
//   onClick?: () => void;
//   className?: string;
//   disabled?: boolean;
// }

// export default function Button({ 
//   children, 
//   variant = 'primary', 
//   size = 'md', 
//   onClick, 
//   className = '',
//   disabled = false 
// }: ButtonProps) {
//   const baseClasses = 'font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center';
  
//   const variants = {
//     primary: 'bg-orange-500 hover:bg-orange-600 text-white',
//     secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
//     outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
//   };
  
//   const sizes = {
//     sm: 'px-3 py-1.5 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg'
//   };
  
//   return (
//     <button
//       onClick={onClick}
//       disabled={disabled}
//       className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
//     >
//       {children}
//     </button>
//   );
// }