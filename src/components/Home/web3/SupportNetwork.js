import { Button } from "../../commons/Button";

export const SupportNetwork = () => {
  return (
    <div className="mt-8 px-[min(8.2vw-46.9px,64px)]">
      <h3 className="text-white font-semibold leading-common tracking-common">
        Supported Networks
      </h3>
      <p className="text-24 text-white-64 leading-common tracking-common mt-2">
        Anyone can use subgraphs to power applications across 40+ networks and
        counting.
      </p>
      <ul
        className="-mx-2 grid justify-center items-stretch gap-8 mt-8"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(min(32px, 100%), 1fr))",
        }}
      >
        <li>
          <span className="block w-8 h-8 text-white">
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
                d="M11.3688 8.81011L7.68341 14L4 8.81011L7.68341 10.985L11.3688 8.81011ZM7.68341 2L11.3668 8.11174L7.68341 10.2887L4 8.11174L7.68341 2Z"
              ></path>
            </svg>
          </span>
        </li>
      </ul>
      <div className="mt-8">
        <Button
          type="text"
          title="View all network"
          className="custom-text-button"
        />
        <p className="text-white-48 text-xs leading-common tracking-common mt-2">
          On The Graph Network & hosted service
        </p>
      </div>
    </div>
  );
};
