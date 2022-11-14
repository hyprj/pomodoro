import Head from "next/head";

import { Timer } from "../features/timer/Timer";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Pomodoro</title>
        <meta name="description" content="Pomodoro time manager" />
      </Head>
      {/* <Header /> */}
      <Timer />
    </div>
  );
}
