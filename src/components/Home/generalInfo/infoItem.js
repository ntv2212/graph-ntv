export const InfoItem = (props) => {
  const { title, subTitle, des } = props;

  return (
    <div
      className="opacity-100 translate-y-0"
      style={{
        transition:
          "color 800ms ease 0ms, background-color 800ms ease 0ms, border-color 800ms ease 0ms, text-decoration-color 800ms ease 0ms, fill 800ms ease 0ms, stroke 800ms ease 0ms, opacity 800ms ease 0ms, box-shadow 800ms ease 0ms, text-shadow 800ms ease 0ms, transform 800ms ease 0ms, filter 800ms ease 0ms, backdrop-filter 800ms ease 0ms",
      }}
    >
      <h3 className="text-white font-semibold text-32 leading-[clamp(1em,calc(0.9em+9.6px),1.5em)] tracking-[clamp(-2px,calc(-0.05em+0.8px),0px)]">
        {title} <br />
        <span class="text-white-64">{subTitle}</span>
      </h3>
      <p className="mt-4 text-24 text-white-64 leading-[clamp(1em,calc(0.9em+9.6px),1.5em)] tracking-[clamp(-2px,calc(-0.05em+0.8px),0px)]">
        {des}
      </p>
    </div>
  );
};
