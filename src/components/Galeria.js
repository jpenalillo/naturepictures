import "../assets/css/galeria.css";
import Heart from "./Heart";

import { useContext } from "react";

import Context from "../Context";
export default function Home() {

  const { tarjeta, setTarjeta } = useContext(Context);
  return (
    <div className="galeria grid-columns-5 p-3">
      {tarjeta.map((e) => {
        return (
          <div className="galeria foto" key={e.id} style={{ backgroundImage: `url(${e.src.tiny})` }} onClick={() => {
            const index = tarjeta.findIndex((ele) => ele.id === e.id)
            tarjeta[index].liked = !tarjeta[index].liked
            setTarjeta([...tarjeta])
          }
          }>
            <Heart filled={e.liked} />
            {e.alt}
          </div>
        )
      })}
    </div>
  );
}
