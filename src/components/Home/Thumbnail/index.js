import star1 from "../../../public/img/stars-1.png";
import star2 from "../../../public/img/stars-2.png";
import star3 from "../../../public/img/stars-3.png";
import hero from "../../../public/video/hero.mp4";
import heroEnd from "../../../public/img/hero-end.jpg";
import { Button } from "../../commons/Button";
import { ThumbnailBg } from "./ThumbnailBg";
import { SectionContainer } from "../../commons/sectionContainer";

export const Thumbnail = () => {
  return (
    <SectionContainer className="py-48">
      <ThumbnailBg src={star1} translate={-240} />
      <ThumbnailBg src={star2} translate={-160} />
      <ThumbnailBg src={star3} translate={-80} />
      <div
        className="absolute left-[-5%] top-0 w-[105%] h-full opacity-64"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          transform: "translateZ(0px)",
        }}
      >
        <video
          width="1920"
          height="1080"
          muted
          playsInline
          class="block absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
        >
          <source src={hero} type="video/mp4" />
        </video>
        <img
          className="absolute block left-0 top-0 w-full h-full bg-cover"
          src={heroEnd}
          alt=""
        ></img>
        <div class="absolute left-0 top-0 w-full h-full bg-theme-purple mix-blend-color opacity-0"></div>
        <div class="absolute left-0 top-0 w-full h-full bg-turquoise mix-blend-color opacity-0"></div>
      </div>
      <div
        className="relative mx-auto w-full max-w-[100vw]"
        style={{ transform: "translateZ(160px)" }}
      >
        <h1 className="text-white font-semibold text-center grid items-center text-96">
          <span
            className="translate-x-[-5%] bg-clip-text opacity-0"
            style={{
              gridArea: "1/1",
              transition:
                "color 400ms ease 0ms, background-color 400ms ease 0ms, border-color 400ms ease 0ms, text-decoration-color 400ms ease 0ms, fill 400ms ease 0ms, stroke 400ms ease 0ms, opacity 400ms ease 0ms, box-shadow 400ms ease 0ms, text-shadow 400ms ease 0ms, transform 400ms ease 0ms, filter 400ms ease 0ms, backdrop-filter 400ms ease 0ms",
              backgroundImage:
                "linear-gradient(92deg, rgb(76, 102, 255) 0%, rgb(138, 76, 255) 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover thousands
            <br /> of open APIs
          </span>
          <span
            className="translate-x-[5%] bg-clip-text opacity-0"
            style={{
              gridArea: "1/1",
              transition:
                "color 400ms ease 0ms, background-color 400ms ease 0ms, border-color 400ms ease 0ms, text-decoration-color 400ms ease 0ms, fill 400ms ease 0ms, stroke 400ms ease 0ms, opacity 400ms ease 0ms, box-shadow 400ms ease 0ms, text-shadow 400ms ease 0ms, transform 400ms ease 0ms, filter 400ms ease 0ms, backdrop-filter 400ms ease 0ms",
              backgroundImage:
                "linear-gradient(92deg, rgb(102, 216, 255) 0%, rgb(76, 102, 255) 100%)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Build unstoppable
            <br /> applications
          </span>
          <span
            class="css-18qzu71"
            style={{
              gridArea: "1/1",
              transition:
                "color 400ms ease 0ms, background-color 400ms ease 0ms, border-color 400ms ease 0ms, text-decoration-color 400ms ease 0ms, fill 400ms ease 0ms, stroke 400ms ease 0ms, opacity 400ms ease 0ms, box-shadow 400ms ease 0ms, text-shadow 400ms ease 0ms, transform 400ms ease 0ms, filter 400ms ease 0ms, backdrop-filter 400ms ease 0ms",
            }}
          >
            Access the&nbsp;world’s
            <br /> blockchain data
          </span>
        </h1>
        <div
          className="flex items-center mt-12 justify-center visible opacity-100"
          style={{ transition: "opacity 400ms ease 0ms" }}
        >
          <div className="flex gap-6 flex-nowrap">
            <Button title={"Explore Data"} />
            <Button title={"Get Started"} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
