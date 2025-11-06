import { useEffect, useState } from "react";
import '../styles/Citation.css';

function Citation() {
    const citations = [
    { id: 1, text: "Le bonheur est parfois caché dans l'inconnu.", author: " — Victor Hugo"},
    { id: 2, text: "On ne voit bien qu’avec le cœur. L’essentiel est invisible pour les yeux.", author: " — Antoine de Saint-Exupéry" },
    { id: 3, text: "Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme.", author: "— Winston Churchill"},
    { id: 4, text: "Le plus grand risque est de ne prendre aucun risque.", author: "— Mark Zuckerberg"},
    { id: 5, text: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.", author: " — Mark Twain"},
    { id: 6, text: "Rêve ta vie en couleur, c’est le secret du bonheur.", author: "— Walt Disney"},
    { id: 7, text: "La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.", author: " — Albert Einstein"},
    { id: 8, text: "L’avenir appartient à ceux qui croient en la beauté de leurs rêves.", author: " — Eleanor Roosevelt"},
    { id: 9, text: "Celui qui déplace une montagne commence par déplacer de petites pierres.", author: " — Confucius"},
    { id: 10, text: "Fais de ta vie un rêve, et d’un rêve, une réalité.", author: " — Antoine de Saint-Exupéry"},
    { id: 11, text: "Chaque jour est une nouvelle chance d’avancer.", author: "— Anonyme"},
    { id: 12, text: "Il n’y a pas de réussite sans échec.", author: "— Anonyme"},
    { id: 13, text: "Le courage n’est pas l’absence de peur, mais la capacité de la vaincre.", author: " — Nelson Mandela"},
    { id: 14, text: "Tout ce que tu peux imaginer est réel.", author: " — Pablo Picasso"},
    { id: 15, text: "Fais de ta passion ton métier et tu ne travailleras jamais un seul jour de ta vie.", author: " — Confucius"},
    { id: 16, text: "On devient ce que l’on croit.", author: " — Oprah Winfrey"},
    { id: 17, text: "La meilleure façon de prédire l’avenir est de le créer.", author: " — Peter Drucker"},
    { id: 18, text: "Le bonheur n’est pas d’avoir tout ce que l’on désire, mais d’apprécier ce que l’on a.", author: " — Proverbe"},
    { id: 19, text: "Ton temps est limité, ne le gaspille pas à vivre la vie de quelqu’un d’autre.", author: "— Steve Jobs"},
    { id: 20, text: "Le monde appartient à ceux qui se lèvent tôt.", author: " — Proverbe"}
    ];


  const [citationDuJour, setCitationDuJour] = useState(null);

  useEffect(() => {
    const date = new Date();
    const dayOfYear = Math.floor(
      (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );

    const index = dayOfYear % citations.length;
    setCitationDuJour(citations[index]);
  }, []);
      
  return (
  <div className="citations-container">
    {citationDuJour && (
      <>
        <p className="citation">{citationDuJour.text}</p>
        <br />
        <p className="citation">{citationDuJour.author}</p>
      </>
    )}
  </div>
    );
}

export default Citation;