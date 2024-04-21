import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar.tsx";
import PasswordGenerator from "./components/PasswordGenerator.tsx";
import CreditCards from "./components/CreditCards.tsx";
import BankAccounts from "./components/BankAccounts.tsx";
import WholeApps from "./components/WholeApps.js";

function App() {
  const [actualPage, setActualPage] = useState("all");

  const mostrarComponente = (page:any) => {
    setActualPage(page);
  };

 
  return (
    <>
      <div>
        <SideBar mostrarComponente={mostrarComponente} />

        {actualPage === "all" && <PasswordGenerator />}
        {actualPage === "cards" && <CreditCards />}
        {actualPage === "account" && <BankAccounts />}
        {actualPage === "apps" && <WholeApps />}
      </div>
    </>
  );
}

export default App;