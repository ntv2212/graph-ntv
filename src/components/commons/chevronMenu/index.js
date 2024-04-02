export const ChevronMenu = (props) => {
  const { isActive } = props;

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      class={`w-3 h-3 text-white opacity-64 ${
        isActive ? "-rotate-90" : "rotate-90"
      }`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.35353 1.64645L11.3535 7.64645C11.5488 7.84172 11.5488 8.1583 11.3535 8.35356L5.35353 14.3536L4.64642 13.6465L10.2929 8.00001L4.64642 2.35356L5.35353 1.64645Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
