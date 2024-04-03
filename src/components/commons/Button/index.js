export const Button = (props) => {
  const { title, type = "default", className } = props;

  return (
    <div
      className={`h-12 rounded ${
        type === "primary"
          ? "bg-purple-64"
          : type === "text"
          ? "bg-transparent"
          : "bg-white-8"
      } ${className}`}
    >
      <div
        className="grid items-center w-full h-full px-6 border border-solid border-[transparent] rounded text-white-88"
        style={{
          transition:
            "color 400ms ease 0ms, background-color 400ms ease 0ms, border-color 400ms ease 0ms, text-decoration-color 400ms ease 0ms, fill 400ms ease 0ms, stroke 400ms ease 0ms, opacity 400ms ease 0ms, box-shadow 400ms ease 0ms, text-shadow 400ms ease 0ms, transform 400ms ease 0ms, filter 400ms ease 0ms, backdrop-filter 400ms ease 0ms",
        }}
      >
        <span
          className="flex flex-row flex-nowrap justify-center items-center gap-2 -m-[1px]"
          style={{ gridArea: "1/1" }}
        >
          <span>{title}</span>
          {type === "text" && (
            <span>
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 16 16"
                class="w-3.5 h-3.5"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
                ></path>
              </svg>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
