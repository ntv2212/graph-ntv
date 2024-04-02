import { useState } from "react";
import { ChevronMenu } from "../commons/chevronMenu";

const languageArr = [
  {
    label: "EN - English",
    value: "English",
  },
  {
    label: "ES - Espanol",
    value: "Espanol",
  },
];

export const LanguagePicker = () => {
  const [isOpenPicker, setIsOpenPicker] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");

  const handleTogglePicker = () => {
    setIsOpenPicker((pre) => !pre);
  };

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div
      className="flex items-center gap-2 text-white-88 cursor-pointer"
      onClick={handleTogglePicker}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 16 16"
        class="w-5 h-5"
        fill="currentColor"
      >
        <path d="M8 1C5.71875 1 3.69408 2.10417 2.41504 3.8H2.4V3.81914C1.52497 4.98768 1 6.43227 1 8C1 11.8577 4.1423 15 8 15C11.8577 15 15 11.8577 15 8C15 4.1423 11.8577 1 8 1ZM10.1 2.80879C12.1546 3.63715 13.6 5.64285 13.6 8C13.6 9.42342 13.0696 10.7161 12.2 11.7023V10.8H10.1V8H5.9V6.6H7.3V4.5H10.1V2.80879ZM2.54492 6.74492L3.8 8L5.9 10.1V12.2H7.3V13.5521C4.53204 13.2088 2.4 10.8635 2.4 8C2.4 7.56753 2.45287 7.14882 2.54492 6.74492Z"></path>
      </svg>
      <span className="text-sm">{currentLanguage}</span>
      <ChevronMenu isActive={isOpenPicker} />
      {isOpenPicker && (
        <div className="absolute right-0 top-16">
          <div className="rounded border border-solid border-white-4 bg-panes">
            <div className="py-4">
              {languageArr.map((item) => (
                <div
                  className="flex items-center px-6 py-2 gap-2 text-white-64 hover:text-white group"
                  key={item.value}
                  onClick={() => handleChangeLanguage(item.value)}
                >
                  <span
                    className={`${
                      currentLanguage === item.value
                        ? "opacity-100"
                        : "opacity-0"
                    } group-hover:opacity-100`}
                  >
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
                        d="M8 4L12 8L8 12L4 8L8 4Z"
                      ></path>
                    </svg>
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
