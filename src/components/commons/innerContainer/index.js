export const InnerContainer = (props) => {
  const { children } = props;

  return <div className="mx-auto w-section max-w-[100vw] relative px-8">{children}</div>;
};
