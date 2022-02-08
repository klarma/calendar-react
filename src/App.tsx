import { Week } from "./Week";
export function App() {

  const days: string[] = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];

  return (
    <>
      <Week days={days} />
    </>
  );
};

