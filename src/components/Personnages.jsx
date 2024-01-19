import { useState } from "react";
export default function Personnages({
    portraitNormal = "../public/images/anonyme.jpg",
    portraitSecret = "../public/images/anonyme.jpg",
    nom = "Il faut donner un nom",
    description = "Pas de description pour l'instant",
    superHero="Super-héros",
    jeuxVideo="truc",
    texteajoute = <em>Super-Héros</em>,
    secret="Pas de secret",
    entourage,
    ...concernant_ce_personnage}){
        const [identitéSecrete, setIdentitéSecrete] = useState(false);

    return (
        <div className="personnage">
            {identitéSecrete === true ? <img alt={`Portrait de ${nom}`} src={portraitSecret}></img> : <img alt={`Portrait de ${nom}`} src={portraitNormal}></img>}
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
        Créer une liste en Javascript. Vidéo 856
            Faut écrire "key". Vidéo 858
            <p>Présent dans le jeu :
                <ul>
                    {jeuxVideo.map((jeux) =>(
                        <li key={jeux}>{jeux}</li>
                    ))}
                </ul>
            </p>

        Dans le fichier jsx, on écrit
            jeuxVideo={["Et tous les jeux en fait","Et voila"]}

        */