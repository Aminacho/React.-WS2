import React from "react";
import "./style.css";

import Players from "./Players";
import { data } from "../data";

function PlayersListe({ children }) {
  return (
    <div>
      {children}

      <div id="playersListe">
        {data.map((player, i) => (
          <Players key={i} {...player} />
        ))}
      </div>
    </div>
  );
}

export default PlayersListe;
