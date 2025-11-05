import React from 'react';

const EducationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="100%"
    height="100%"
    className="icon-education"
  >
    <defs>
      <linearGradient id="educationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64ffda" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>

    {/* Graduation Cap */}
    {/* Cap top */}
    <path
      d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"
      fill="url(#educationGradient)"
    />

    {/* Cap tassel */}
    <circle cx="12" cy="3.5" r="0.8" fill="#64ffda">
      <animate attributeName="cy" values="3.5;4.5;3.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <line x1="12" y1="3.5" x2="12" y2="5.5" stroke="#64ffda" strokeWidth="0.3">
      <animate attributeName="y2" values="5.5;6.5;5.5" dur="2s" repeatCount="indefinite"/>
    </line>

    {/* Cap bottom/Body */}
    <path
      d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"
      fill="#1e40af"
      opacity="0.8"
    />

    {/* Book pages accent */}
    <path
      d="M7 14v3.5L12 20l5-2.5V14"
      fill="none"
      stroke="#64ffda"
      strokeWidth="0.5"
      opacity="0.6"
    />
  </svg>
);

export default EducationIcon;
