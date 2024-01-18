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
        /*
             Pour afficher une chose conditionnellement
            La variable const peut changer de valeur quand on clique sur le mot "secret" : true ou false. Par défaut, elle est false
            Ligne 34, quand on clique sur "secret", la const devient true.
            Ligne 20. Si la const "identitéSecrete" devient true, la variable "contenu" = "superhero"
            alors qu'à la base, cette variable était vide.
        */
        const [identitéSecrete, setIdentitéSecrete] = useState(false);

        let contenu ="";
        if (identitéSecrete == true) {
            contenu = superHero;
        }

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
            {contenu}
            <div className="alias">Son identité de {superHero} est : <br></br> <h3>{secret}</h3></div>
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