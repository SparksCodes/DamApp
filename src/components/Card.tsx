
import "../components/Card.css";


function Card(props: any) {
  return (
    <>
      <div className="box">
        <h1>{props.name}</h1>
        <div className="box__logo">
          <img src={props.logo}></img>
        </div>
        <div className="box__url">
          <a href={`https://${props.url}`} target="_blank">
            {props.url}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;