export default function Logo({ width = 60, height = 60, className = '' }: { width?: number; height?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AL ENAYA Logo"
      role="img"
    >
      <g transform="translate(200, 200)">
        {/* Top-left thick arc */}
        <path d="M -175 -40 A 185 185 0 0 1 -55 -178" fill="none" stroke="#C8102E" strokeWidth="48" strokeLinecap="round" />
        {/* Top-right small dash */}
        <path d="M 60 -178 A 185 185 0 0 1 95 -158" fill="none" stroke="#C8102E" strokeWidth="42" strokeLinecap="round" />
        {/* Left-bottom arc */}
        <path d="M -185 30 A 185 185 0 0 1 -158 100" fill="none" stroke="#C8102E" strokeWidth="48" strokeLinecap="round" />
        {/* Bottom-right large arc */}
        <path d="M 30 182 A 185 185 0 0 1 182 -20" fill="none" stroke="#C8102E" strokeWidth="48" strokeLinecap="round" />
        {/* Blue U - left vertical bar */}
        <rect x="-90" y="-130" width="58" height="180" fill="#003DA5" rx="8" />
        {/* Blue U - right vertical bar */}
        <rect x="32" y="-130" width="58" height="180" fill="#003DA5" rx="8" />
        {/* Blue U - bottom rounded curve */}
        <path d="M -90 48 Q -90 148 0 148 Q 90 148 90 48 L 32 48 Q 32 108 0 108 Q -32 108 -32 48 Z" fill="#003DA5" />
      </g>
    </svg>
  );
}
