import Head from "next/head";

import { Tasks } from "@features/tasks/Tasks";
import { Timer } from "@features/timer/Timer";
import { Header } from "@components/layouts/Header";
import { PageLayout } from "@components/layouts/PageLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Pomodoro time manager" />
      </Head>
      <PageLayout>
        <Header />
        <Timer />
        {/* <Tasks /> */}
      </PageLayout>
    </>
  );
}
