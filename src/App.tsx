import { Year } from "./Year";

export function App() {
  const days: string[] = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];

  return (
    <>
      <Year days={days}/>
    </>
  );
};

