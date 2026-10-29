
const iconPaths = {
  search: (
    <>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4 4" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l1 12H4L5 8Z" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </>
  ),
  heart: (
    <path d="M20.8 8.7c0 5-8.8 10.2-8.8 10.2S3.2 13.7 3.2 8.7A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z" />
  ),
  arrow: (
    <>
      <path d="M4 12h15" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  chevron: <path d="m7 10 5 5 5-5" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
  leaf: (
    <>
      <path d="M20.5 3.5C11 3 5 7 5 13c0 3 2 5 5 5 6 0 10-6 10.5-14.5Z" />
      <path d="M3 21c3-6 7-9 13-12" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

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