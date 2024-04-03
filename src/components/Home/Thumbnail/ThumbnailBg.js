import starMask from "../../../public/img/star-mask.png";

export const ThumbnailBg = (props) => {
  const { src, translate } = props;

  return (
    <div
      className="absolute left-[-5%] top-0 w-[105%] h-full bg-cover"
      style={{
        backgroundImage: `url(${src})`,
        maskImage: `url(${starMask})`,
        maskSize: "100% 100%",
        transform: `translateZ(${translate}px)`,
      }}
    />
  );
};
