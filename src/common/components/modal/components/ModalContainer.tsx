interface Props {
  children: React.ReactNode;
}

export const ModalContainer = ({ children }: Props) => {
  return (
    <div className="z-10 w-[min(100%,24rem)] fixed mt-32 left-2/4 -translate-x-2/4 bg-white rounded-lg dark:bg-slate-700">
      {children}
    </div>
  );
};
