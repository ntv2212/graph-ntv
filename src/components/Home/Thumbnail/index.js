import star1 from "../../../public/img/stars-1.png";
import starMask from "../../../public/img/star-mask.png";
import star2 from "../../../public/img/stars-2.png";
import star3 from "../../../public/img/stars-3.png";

export const Thumbnail = () => {
  return (
    <section className="">
      <div className="py-48">
        <div
          className="absolute left-[-5%] top-0 w-[105%] h-full bg-cover"
          style={{
            backgroundImage: `url(${star1})`,
            maskImage: `url(${starMask})`,
            maskSize: "100% 100%",
            transform: "translateZ(-240px)",
          }}
        ></div>
        <div
          className="absolute left-[-5%] top-0 w-[105%] h-full bg-cover"
          style={{
            backgroundImage: `url(${star2})`,
            maskImage: `url(${starMask})`,
            maskSize: "100% 100%",
            transform: "translateZ(-160px)",
          }}
        ></div>
        <div
          className="absolute left-[-5%] top-0 w-[105%] h-full bg-cover"
          style={{
            backgroundImage: `url(${star3})`,
            maskImage: `url(${starMask})`,
            maskSize: "100% 100%",
            transform: "translateZ(-80px)",
          }}
        ></div>
        <div
          className="absolute left-[-5%] top-0 w-[105%] h-full opacity-64"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
            transform: "translateZ(0px)",
          }}
        >
          <video
            src="/_next/static/media/hero.f472f960.mp4"
            width="1920"
            height="1080"
            playsinline
            autoplay
            class="css-71662q"
          ></video>
        </div>
      </div>
    </section>
  );
};
