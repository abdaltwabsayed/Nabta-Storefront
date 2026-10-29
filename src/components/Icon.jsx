
import { iconPaths } from "../data/iconPaths.jsx";

export default function Icon({
  name,
  size = 20,
  fill = "none",
  strokeWidth = 1.7,
  className = "",
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}