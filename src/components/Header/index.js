import { ProductButton } from "./ProductButton";
import { EcoSystemButton } from "./EcoSystemButton";
import { LanguagePicker } from "./LanguagePicker";

export const Header = () => {
  return (
    <div className="px-8 flex items-center justify-start h-20 w-full absolute top-0 left-0">
      <div className="flex items-center justify-between flex-1">
        <nav className="w-full h-full relative">
          <ul className="flex items-center justify-start gap-6">
            <li>
              <a href="/" className="flex items-center gap-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 16"
                  className="h-8 w-8 text-white opacity-64"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M12.1462 10.5611C12.4236 10.8372 12.4488 11.2693 12.2219 11.5738L12.1462 11.661L9.02112 14.7722C8.716 15.0759 8.2214 15.0759 7.91629 14.7722C7.63891 14.496 7.6137 14.064 7.84064 13.7595L7.91629 13.6723L11.0414 10.5611C11.3465 10.2573 11.8411 10.2573 12.1462 10.5611ZM7.6875 1C10.2763 1 12.375 3.08934 12.375 5.66665C12.375 8.24396 10.2763 10.3333 7.6875 10.3333C5.09867 10.3333 3 8.24396 3 5.66665C3 3.08934 5.09867 1 7.6875 1ZM7.6875 2.55555C5.96165 2.55555 4.5625 3.94838 4.5625 5.66665C4.5625 7.38492 5.96165 8.77775 7.6875 8.77775C9.41345 8.77775 10.8125 7.38492 10.8125 5.66665C10.8125 3.94838 9.41345 2.55555 7.6875 2.55555ZM13.1563 1C13.5878 1 13.9375 1.34816 13.9375 1.77778C13.9375 2.20739 13.5878 2.55555 13.1563 2.55555C12.7248 2.55555 12.3751 2.20739 12.3751 1.77778C12.3751 1.34816 12.7248 1 13.1563 1Z"
                  ></path>
                </svg>
                <span className="text-sm font-semibold text-white opacity-64">
                  The Graph
                </span>
              </a>
            </li>
            <li>
              <ProductButton />
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white opacity-64">
                  Studio Pricing
                </span>
              </a>
            </li>
            <li>
              <EcoSystemButton />
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white opacity-64">
                  Blog
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white opacity-64">
                  Jobs
                </span>
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white opacity-64">
                  Docs
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <LanguagePicker />
      </div>
    </div>
  );
};
