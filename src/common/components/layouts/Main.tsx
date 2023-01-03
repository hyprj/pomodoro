interface Props {
  children: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return <main className="w-full flex flex-col items-center">{children}</main>;
};
