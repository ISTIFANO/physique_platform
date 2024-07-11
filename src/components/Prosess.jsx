import React from 'react';
import { FaVideo, FaTasks, FaClipboardCheck, FaChartLine, FaRegFileAlt, FaHandPointer } from 'react-icons/fa';
import './Prosess.css'; // Make sure to create and import this CSS file

export default function Prosess() {
  return (
    <>
      <h2 className="text-3xl font-bold text-foreground text-center sm:text-4xl">
        Comment exceller en <span className="text-yellow-400 ">Physique</span>  avec Chargui ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <div className="card flex flex-col items-center text-center">
          <FaVideo className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Les cours en vidéo</h3>
          <p className="text-muted-foreground">
            +1000 vidéos détaillées pour maîtriser parfaitement ton cours (en français et en darija)
            Consultation illimitée
            Accès 24h/24.
          </p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <FaTasks className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Exercices corrigés étape par étape</h3>
          <p className="text-muted-foreground">
            Des centaines d’exercices de différents niveaux expliqués pas à pas, en vidéos et en texte.
          </p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <FaClipboardCheck className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Quiz</h3>
          <p className="text-muted-foreground">
            Des centaines de quiz à chaque étape du cours pour être sûr que tu maîtrises toutes les méthodes.
          </p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <FaChartLine className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Suivi de ta progression</h3>
          <p className="text-muted-foreground">
            Notre système te permet de savoir où tu en es dans tes révisions en temps réel.
          </p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <FaRegFileAlt className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Examens corrigés</h3>
          <p className="text-muted-foreground">
            Tous les examens nationaux du baccalauréat corrigés et expliqués en détails en vidéos (français et darija).
          </p>
        </div>
        <div className="card flex flex-col items-center text-center">
          <FaHandPointer className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Des outils de simulation intéractifs</h3>
          <p className="text-muted-foreground">
            Nos outils interactifs de travaux pratiques très efficaces te permettent d’approfondir tes connaissances.
          </p>
        </div>
      </div>
    </>
  );
}
