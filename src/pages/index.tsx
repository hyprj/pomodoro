import Head from "next/head";
import { StoreProvider } from "src/common/context/StoreProvider";
import { PomodoroWrapper } from "src/common/components/ui/PomodoroWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Pomodoro time manager" />
      </Head>
      <StoreProvider>
        <PomodoroWrapper />
      </StoreProvider>
    </>
  );
}
