import clubLogo from "./assets/Chelsea-Logo.png";
import { useState } from "react";

export function ClubScoreSemaphore() {
  const [scoreClub, setScoreClub] = useState(0)
  const upScore = () => setScoreClub(scoreClub + 1)
  const resetScore = () => setScoreClub(0)
  const imgAlt = 'Chelsea FC logo image';
  const clubName = 'Chelsea FC';

  return <>
    <div className="panel-half">
      <div className="club-preview-half">
        <img src={clubLogo} className="logo" alt={imgAlt}/>
        <div>{clubName}</div>
      </div>
      <div className="score-half">
        <h1>{scoreClub}:</h1>
      </div>
    </div>
    <div className="buttons-half">
      <button onClick={upScore}>⬆️</button>
      <button onClick={resetScore}>🔄</button>
    </div>
  </>;
}
