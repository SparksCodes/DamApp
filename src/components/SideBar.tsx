import "./sideBar.css";
import { useState } from "react";

function SideBar({ mostrarComponente }) {
  const [showAside, setShowAside] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showApps, setShowApps] = useState(false);

  const [markAll, setMarkAll] = useState(true);
  const [markCards, setMarkCards] = useState(false);
  const [markAccount, setMarkAccount] = useState(false);
  const [markApps, setMarkApps] = useState(false);

  const handleMouseShow = () => {
    setShowAside(true);
  };
  const handleMouseCards = () => {
    setShowCards(true);
  };
  const handleMouseAccount = () => {
    setShowAccount(true);
  };
  const handleMouseApps = () => {
    setShowApps(true);
  };

  const handleMouseLeave = () => {
    setShowAside(false);
    setShowCards(false);
    setShowAccount(false);
    setShowApps(false);
  };

  const markApp = (item: String) => {
    switch (item) {
      case "all":
        setMarkAll(true);
        setMarkCards(false);
        setMarkAccount(false);
        setMarkApps(false);
        break;
      case "cards":
        setMarkAll(false);
        setMarkCards(true);
        setMarkAccount(false);
        setMarkApps(false);
        break;
      case "account":
        setMarkAll(false);
        setMarkCards(false);
        setMarkAccount(true);
        setMarkApps(false);
        break;
      case "apps":
        setMarkAll(false);
        setMarkCards(false);
        setMarkAccount(false);
        setMarkApps(true);
        break;
      default:
        break;
    }
  };

  return (
    <aside>
      <div className="aside__side">
        <a
          href="#"
          onMouseEnter={handleMouseShow}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            mostrarComponente("all"), markApp("all");
          }}
        >
          <svg
            viewBox="0 -960 960 960"
            style={{
              fill: markAll ? "var(--orange-color)" : "var(--primary-color)",
            }}
          >
            <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
          </svg>
        </a>
        <div
          className="aside__all__show"
          style={{ display: showAside ? "block" : "none" }}
        >
          <span>Contraseñas</span>
        </div>
        <a
          href="#"
          onMouseEnter={handleMouseCards}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            mostrarComponente("cards"), markApp("cards");
          }}
        >
          <svg
            viewBox="0 -960 960 960"
            style={{
              fill: markCards ? "var(--orange-color)" : "var(--primary-color)",
            }}
          >
            <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
          </svg>
        </a>
        <div
          className="aside__all__cards"
          style={{ display: showCards ? "block" : "none" }}
        >
          Tarjetas de Crédito
        </div>
        <a
          href="#"
          onMouseEnter={handleMouseAccount}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            mostrarComponente("account"), markApp("account");
          }}
        >
          <svg
            viewBox="0 -960 960 960"
            style={{
              fill: markAccount
                ? "var(--orange-color)"
                : "var(--primary-color)",
            }}
          >
            <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z" />
          </svg>
        </a>
        <div
          className="aside__all__account"
          style={{ display: showAccount ? "block" : "none" }}
        >
          Cuentas de Banco
        </div>
        <a
          href="#"
          onMouseEnter={handleMouseApps}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            mostrarComponente("apps"), markApp("apps");
          }}
        >
          <svg
            viewBox="0 -960 960 960"
            style={{
              fill: markApps ? "var(--orange-color)" : "var(--primary-color)",
            }}
          >
            <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm0-240q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm0-240q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640ZM480-400q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm40 240v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
          </svg>
        </a>
        <div
          className="aside__all__apps"
          style={{ display: showApps ? "block" : "none" }}
        >
          Aplicaciones
        </div>
      </div>
      <div className="myName">
      <p id="myName_course">2ºDAM</p>
      <p id="myName_name">Pedro</p>
      <p id="myName_surname">Monserrat</p>
      </div>
    </aside>
  );
}

export default SideBar;
