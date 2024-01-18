import { useState } from "react";
export default function Personnages({
    portraitNormal,
    portraitSecret,
    nom,
    description,
    superHero="Super-héros",
    jeuxVideo="truc",
    texteajoute = <em>Super-Héros</em>,
    secret="",
    ...concernant_ce_personnage}){
        const [identitéSecrete, setIdentitéSecrete] = useState(false);

    return (
        <div className="personnage">
            {identitéSecrete === true ?
            <img alt={`Portrait de ${nom}`} src={portraitSecret}></img> :
            <img alt={`Portrait de ${nom}`} src={portraitNormal}></img>
            }
            <h2>{nom}</h2>
            <div className="description">{description}</div>
            <div>Présent dans le jeu :
                <ul>
                    <li>Le baton de la vérité</li>
                    <li>L'annale du destin</li>
                    <li>{jeuxVideo}</li>
                </ul>
            </div>
            <h3 onClick={() => setIdentitéSecrete(!identitéSecrete)}>{identitéSecrete === true ? "Masquer cette partie" : "Voir son secret"}</h3>
            {identitéSecrete && <div className="sonSecret">{superHero}</div>}
            {identitéSecrete === true ? <div className="alias">Son identité de {superHero} est : <br></br> <h3>{secret}</h3></div> : null}
        </div>
    );
}
/*
On a ajouté 
    {identitéSecrete === true ? "Masquer cette partie" : "Voir son secret"}
là où il y avait seulement
    Secret

Et on a mis 
    setIdentitéSecrete(!identitéSecrete)
à la place de 
    setIdentitéSecrete(true)
pour obtenir l'inverse de l'état actuel de "identitéSecrete" à chaque fois qu'on clique sur "Masquer cette partie" ou sur "Voir son secret"
*/