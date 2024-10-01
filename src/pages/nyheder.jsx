import React from "react";
import "./styles/nyheder.css";

const Nyheder = () => {
  return (
    <section>
      
      <div className="banner">
        <h1>NYHEDER</h1>
      </div>

      <div className="grid">
        <div className="grid-item">
          <img src="/src/img/BoD-Board.webp" alt="" />
          <h3>Nyt! Klubaften</h3>
          <p>on 30. september 2024</p>
          <h5>
            KLUBAFTEN – kun for medlemmer Så begynder vi på et nyt fast
            arrangement på onsdage i ulige uger. Første gang…
          </h5>{" "}
          {/* Empty h5 or remove this line if unnecessary */}
        </div>
        <div className="grid-item">
          <img src="/src/img/poster.jpg" alt="" />
          <h3>PLAKATKONKURRENCE ROLLESPIL 2025</h3>
          <p>on 9. september 2024</p>
          <h5>
            PLAKATKONKURRENCE NITRICON 2025. Vind 500kr, 2 fribiletter til
            NitriCon 2025, og masser af opmærksomhed på vores online platforme….
          </h5>{" "}
          {/* Empty h5 */}
        </div>
        <div className="grid-item">
          <img src="/src/img/anime-news.jpg" alt="" />
          <h3>Nyhedsbrev Oktober 2024</h3>
          <p>on 21. august 2024</p>
          <h5>
            Hvad sker der i Rollespilsklubben denne måned? Vi fortsætter
            traditionen med Onsdagsrollespil! Denne måned er der forventet spil
            d. 12/6 og…
          </h5>{" "}
          {/* Empty h5 */}
        </div>
        <div className="grid-item">
          <img src="/src/img/viking.jpg" alt="" />
          <h3>Nyhedsbrev September 2024</h3>
          <p>on 17. juli 2024</p>
          <h5>
            Hvad sker der i Rollespilsklubben denne måned? Der afholdes
            Onsdagsrollespil som normalt i Toys n’ Loot’s lokaler hver anden
            onsdag. Denne…
          </h5>{" "}
          {/* Empty h5 */}
        </div>
        <div className="grid-item">
          <img src="/src/img/board-game.jpg" alt="" />
          <h3>Lidt om onsdagsrollespil</h3>
          <p>on 2. juni 2024</p>
          <h5>
            Onsdagsrollespil er en aften hvor du kan prøve kræfter med nye
            rollespilsystemer eller hvis du er game master (GM) kan…
          </h5>{" "}
          {/* Empty h5 */}
        </div>
        <div className="grid-item">
          <img src="/src/img/larp-group.jpg" alt="" />
          <h3>Rollespil som nybegynder</h3>
          <p>on 27. maj 2024</p>
          <h5>
            INFO FOR NYBEGYNDERE Rollespil, eller TTRPG (Table Top RolePlaying
            Games) går ud på at en person, er DM/GM (Dungeon/Game master) og…
          </h5>{" "}
          {/* Empty h5 */}
        </div>
      </div>
    </section>
  );
};

export default Nyheder;
