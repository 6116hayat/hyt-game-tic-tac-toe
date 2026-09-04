// import { forwardRef, InputHTMLAttributes } from "react";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
//   className?: string;
// }

// export const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ label, error, className = "", ...props }, ref) => {
//     return (
//       <div className="w-full">
//         {label && (
//           <label className="block text-sm font-medium text-gray-300 mb-2">
//             {label}
//           </label>
//         )}
//         <input
//           ref={ref}
//           className={`
//             w-full px-4 py-3
//             bg-gray-900/50 backdrop-blur-sm
//             border ${error ? "border-red-500" : "border-gray-700"}
//             rounded-xl
//             text-white placeholder-gray-500
//             focus:outline-none focus:ring-2 focus:ring-purple-500/50
//             transition-all duration-200
//             ${className}
//           `}
//           {...props}
//         />
//         {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
//       </div>
//     );
//   },
// );

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { shake, errorFade } from "../../animations/errorVariants";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <motion.div animate={error ? "animate" : "initial"} variants={shake}>
          <input
            ref={ref}
            className={`
              w-full px-4 py-3
              bg-gray-900/50 backdrop-blur-sm
              border-2 
              ${error ? "border-red-500" : isFocused ? "border-purple-500" : "border-gray-700"}
              rounded-xl
              text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500/50
              transition-all duration-200
              ${className}
            `}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </motion.div>
        <AnimatePresence>
          {error && (
            <motion.p
              variants={errorFade}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-1 text-sm text-red-400 flex items-center gap-1"
            >
              <span>⚠️</span>
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  },
);
