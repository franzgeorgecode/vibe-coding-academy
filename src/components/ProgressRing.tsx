import React from 'react';
import { motion } from 'framer-motion';

interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  bgColor?: string;
  showPercentage?: boolean;
  animated?: boolean;
}

export default function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 8,
  className = '',
  children,
  color = '#3B82F6', // blue-500
  bgColor = '#E5E7EB', // gray-200
  showPercentage = true,
  animated = true
}: ProgressRingProps) {
  const normalizedRadius = (size - strokeWidth * 2) / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const center = size / 2;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        height={size}
        width={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke={bgColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={center}
          cy={center}
        />
        
        {/* Progress circle */}
        <motion.circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={animated ? strokeDashoffset : circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={center}
          cy={center}
          initial={animated ? { strokeDashoffset: circumference } : false}
          animate={animated ? { strokeDashoffset } : false}
          transition={animated ? { duration: 1.5, ease: "easeInOut" } : false}
          className="transition-all duration-300"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))'
          }}
        />
      </svg>
      
      {/* Content in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children || (showPercentage && (
          <motion.div 
            className="text-center"
            initial={animated ? { opacity: 0, scale: 0.5 } : false}
            animate={animated ? { opacity: 1, scale: 1 } : false}
            transition={animated ? { delay: 0.5, duration: 0.5 } : false}
          >
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(progress)}%
            </div>
            <div className="text-xs text-gray-500 -mt-1">
              Complete
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}