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
            <h3 onClick={() => setIdentitéSecrete((etatPrécédent) =>!etatPrécédent)}>{identitéSecrete === true ? "Cacher son secret" : "Voir son secret"}</h3>
            {identitéSecrete && <div className="sonSecret">{superHero}</div>}
            {identitéSecrete === true ? <div className="alias">Son identité de {superHero} est : <br></br> <h3>{secret}</h3></div> : null}
        </div>
    );
}
/*
Pour être sûr que l'on va repasser à l'état précédent le clic, on va insérer une fonction fléchée dans la fonction fléchée
On remplace
<h3 onClick={() => setIdentitéSecrete(!identitéSecrete)}>
par 
<h3 onClick={() => setIdentitéSecrete((etatPrécédent) =>!etatPrécédent)}>

C'est une assurance que le changement se fera même si l'utilisateur spam le bouton
*/