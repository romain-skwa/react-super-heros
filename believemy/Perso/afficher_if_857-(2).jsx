import { useState } from "react";
export default function Personnages({
    portraitNormal,
    nom,
    description,
    superHero="Super-héros",
    jeuxVideo="truc",
    texteajoute = <em>Super-Héros</em>,
    secret="",
    ...concernant_ce_personnage}){
        const [identitéSecrete, setIdentitéSecrete] = useState(false);
/*
        On utilise une condition ternaire pour afficher ou non l'encadré "alias"
        {  condition  ? soit possibilité 1 : soit possibilité 2 }
        Ici, si on clique sur le mot secret (ligne 29) identitéSecrete devient true.
        Et ce qui est à la gauche des ":" sera affiché (ou activé).
        Dans ce cas, la div alias s'affichera.
*/
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
            <h3 onClick={() => setIdentitéSecrete(true)}>Secret</h3>
            {identitéSecrete === true ? 
            <div className="alias">Son identité de {superHero} est : <br></br> <h3>{secret}</h3></div>
            : null}
        </div>
    );
}