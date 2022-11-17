import { Header } from "@components/ui/Header";
import { PageHead } from "@components/Head/PageHead";
import { StoreProvider } from "@context/StoreProvider";
import { Timer } from "@features/timer/Timer";

export default function Home() {
  return (
    <>
      <PageHead />
      <div className="flex flex-col justify-start items-center min-h-screen bg-app-bg-pomodoro px-2">
        <StoreProvider>
          <Header />
          <Timer />
        </StoreProvider>
      </div>
    </>
  );
}
