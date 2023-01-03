interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[120rem] mx-auto">{children}</div>;
};
