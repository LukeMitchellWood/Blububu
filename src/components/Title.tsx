const random = () => Math.random() * 2 - 1;

export const Title: FC<{ title: String; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-2xl sm:text-4xl xl:text-8xl uppercase goodfood xl:pb-16">
      <h3 className="inline-block">{title}</h3>
      <br />
      <p className="text-xl sm:text-3xl xl:text-6xl">{subtitle}</p>
    </div>
  );
};
