export const SectionContainer = (props) => {
  const { children, onlyBottom } = props;

  return (
    <section>
      <div className={`${onlyBottom ? "pb-48" : "py-48"}`}>{children}</div>
    </section>
  );
};
