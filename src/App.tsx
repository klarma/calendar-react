import Year from "./components/Year";

function App() {
  const days: string[] = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];

  return (
    <>
      <Year days={days}/>
    </>
  );
};

export default App;
