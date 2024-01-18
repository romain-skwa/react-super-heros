import { useState } from "react";
export default function Personnages({
    portraitNormal,
    nom,
    description,
    superHero="Super-héros",
    jeuxVideo="",
    texteajoute = <em>Super-Héros</em>,
    secret="",
    ...concernant_ce_personnage}){
        /* 
        Cette variable constante va avoir deux états 
        celle qui est inscrite par défaut useState("par défaut")
        et celle qui sera dans setcontenu, ici à la ligne 29 : setContenu(texteajoute)
        */
        const [contenu, setContenu] = useState("");
        console.log(contenu);
    return (
        <div className="personnage">
            <img alt={`Portrait de ${nom}`} src={portraitNormal}></img>
            <h2>{nom}</h2>
            <div className="description">{description}</div>
            <div>Présent dans le jeu :
                <ul>
                    <li>Le baton de la vérité</li>
                    <li>L'annale du destin</li>
                    <li>{jeuxVideo}</li>
                </ul>
            </div>
            <h3 onClick={() => setContenu(texteajoute)}>Secret</h3>
            {contenu}
            <div className="alias">Son identité de {superHero} est : <br></br> <h3>{secret}</h3></div>
        </div>
    );
}