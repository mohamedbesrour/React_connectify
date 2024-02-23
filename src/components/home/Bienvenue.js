import React, { useState, useEffect } from "react";

const traductions = [
  "Bienvenue","Welcome","Bienvenido","Willkommen",
  "ben vini","Byenvini","Akksil ak diam","дякую",
  "স্বাগত","欢迎光临","مرحباً","ברוך הבא",
  "いらっしゃいませ","Anṣuf yis-wen","ⴰⵏⵚⵓⴼ ⵢⵉⵙ ⵡⴻⵏ",
];

export default function Bienvenue() {
  const [index, setindex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindex((prevIndex) =>
        prevIndex === traductions.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="containerBienvenue">
      <div className="titreBienvenue">
        <h2>{traductions[index]}</h2>
        <p className="texteBienvenue">
          "Harmonisez vos passions, partagez vos émotions
          avec Connectify!"
        </p>
      </div>
    </div>
  );
}

