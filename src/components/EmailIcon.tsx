export const EmailIcon = ({
  width = 32,
  height = 32,
  className = "",
  strokeColor = "currentColor",
  strokeWidth = 2,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        height="18"
        width="26"
        x="3"
        y="7"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      />
      <polyline
        points="29,7 16,18 3,7"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
      />
    </svg>
  );
};
