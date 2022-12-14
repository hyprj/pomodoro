interface Props {
  children: React.ReactNode;
}

export const ModalContent = ({ children }: Props) => {
  return <div className="flex flex-col px-4">{children}</div>;
};
