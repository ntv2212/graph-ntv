export const CommonHeading = (props) => {
  const { title, subTitle, des } = props;

  return (
    <div className="px-common2 text-center">
      <h2 className="text-white font-semibold text-64 leading-common tracking-common ">
        {title} <br />
        <span class="text-white-48">{subTitle}</span>
      </h2>
      <p className="text-24 text-white-64 leading-common tracking-common mt-8">
        {des}
      </p>
    </div>
  );
};
