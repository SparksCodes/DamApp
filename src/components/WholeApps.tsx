import Card from "./Card.tsx";
import "../components/WholeApps.css";
import face from "../icons/facebook.svg";
import insta from "../icons/instagram.svg";
import lin from "../icons/linkedin.svg";
import pint from "../icons/pinterest.svg";
import tik from "../icons/tiktok.svg";
import twit from "../icons/twitter.svg";

function WholeApps() {
  return (
    <>
      <div className="caja">
        <h1>APLICACIONES</h1>
        <div className="container__AppData">
          <Card name="Facebook" logo={face} url="www.facebook.com" />
          <Card name="Instagram" logo={insta} url="www.instagram.com" />
          <Card name="LinkedIn" logo={lin} url="www.linkedin.es" />
          <Card name="Pinterest" logo={pint} url="www.pinterest.es" />
          <Card name="Tik Tok" logo={tik} url="www.tiktok.com" />
          <Card name="Twitter" logo={twit} url="www.twitter.com" />
        </div>
      </div>
    </>
  );
}

export default WholeApps;
