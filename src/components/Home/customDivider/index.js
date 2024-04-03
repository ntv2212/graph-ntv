import { InnerContainer } from "../../commons/innerContainer";

export const CustomDivider = () => {
  return (
    <InnerContainer>
      <div className="flex flex-nowrap justify-start items-center gap-0.5 h-[1px] ">
        <span className="block w-2 h-2 text-white-64 shrink-0">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 16 16"
            class="w-full h-full"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.64645 1.64645C7.84171 1.45118 8.15829 1.45118 8.35355 1.64645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L8.35355 14.3536C8.15829 14.5488 7.84171 14.5488 7.64645 14.3536L1.64645 8.35355C1.45118 8.15829 1.45118 7.84171 1.64645 7.64645L7.64645 1.64645ZM2.70711 8L8 13.2929L13.2929 8L8 2.70711L2.70711 8Z"
            ></path>
          </svg>
        </span>
        <hr className="flex-1 border-t border-solid border-white-16" />
        <span className="block w-2 h-2 text-white-64 shrink-0">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 16 16"
            class="w-full h-full"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.64645 1.64645C7.84171 1.45118 8.15829 1.45118 8.35355 1.64645L14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L8.35355 14.3536C8.15829 14.5488 7.84171 14.5488 7.64645 14.3536L1.64645 8.35355C1.45118 8.15829 1.45118 7.84171 1.64645 7.64645L7.64645 1.64645ZM2.70711 8L8 13.2929L13.2929 8L8 2.70711L2.70711 8Z"
            ></path>
          </svg>
        </span>
      </div>
    </InnerContainer>
  );
};
