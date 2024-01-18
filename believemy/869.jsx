import "./App.css";
import Personnages from "./components/Personnages";

export default function App(){

    const [entourageRouge, setEntourageRouge] = useState();

  return (
      <main>
          <img className="titre" src="../public/images/titre-logo.jpg"></img>

        <section className="fiche_personnage">
          {/* Personnage principaux de la série South Park */}
            <Personnages nom="Kyle Broflovski"
                         portraitNormal="../../public/images/kyle-portrait-carré.jpg"
                         portraitSecret="../public/images/cerf-volant-portrait-carré.jpg"
                         jeuxVideo="Et tous les jeux en fait"
                         description="Kyle passe le plus clair de son temps avec ses trois camarades de classe à jouer ou essayer de se tirer de situations compliquées ou dangereuses. Une amitié forte l'unit à Stan, qui lui sauve la vie dans plusieurs occasions. Il s'entend également bien avec Kenny mais très mal avec Cartman, dont il supporte très mal les défauts et surtout l'antisémitisme obsessionnel."
                         secret="Homme cerf-volant"
                         entourage = {entourageRouge == "Kyle Broflovski"}
                          />
            <Personnages nom="Eric Cartman"
                         portraitNormal="../../public/images/cartman-portrait-carré.jpg" 
                         portraitSecret="../public/images/coon-portrait-carré.jpg"
                         jeuxVideo={["Et tous les jeux en fait","Et voila"]}
                         description="Il apparaît pour la première fois dans les deux courts-métrages de L'Esprit de Noël en 1992 et 1995, puis dans l'épisode pilote de la série, Cartman a une sonde anale, le 13 août 1997." 
                         secret="Le Coon"
                         entourage = {entourageRouge == "Eric Cartman"}
                         />
            <Personnages nom="Stan Marsh" 
                         portraitNormal="../../public/images/stan-marsh-portrait-carré.jpg" 
                         portraitSecret="../public/images/boite-outil-portrait-carré.jpg"
                         description="Stan est fréquemment en désaccord avec Cartman, lui reprochant son comportement et se moquant ouvertement de son poids5. Malgré cela, Stan n'a pas de relations aussi conflictuelles avec Cartman que Kyle ou Kenny. D'aucuns pensent que Stan est l'une des personnes que Cartman apprécie le plus, ou du moins vanne le moins, parce qu'il est catholique et de classe moyenne comme lu." 
                         secret="Boîte à outils"
                         entourage = {entourageRouge == "Stan Marsh"}
                          />
            <Personnages nom="Kenny McCormick" 
                         portraitNormal="../../public/images/kenny-portrait-carré.jpg" 
                         portraitSecret="../public/images/mysterion-portrait-carré.jpg"
                         description="Kenny est un des personnages principaux de la série, à l'instar de Stan Marsh, Kyle Broflovski et Eric Cartman. Sa voix assourdie et inaudible (à cause de la capuche de son anorak recouvrant sa bouche et la moitié de son visage) est celle de Dee Bradley Baker. Quoique la majorité de ses paroles soient incompréhensibles pour le spectateur, les personnages de la série semblent les comprendre sans trop de difficulté." 
                         secret="Mystérion"
                         entourage = {entourageRouge == "Kenny McCormick"}
                          />
            <Personnages nom='Leopold "Butters" Stotch' 
                         portraitNormal="../../public/images/butters-portrait-carré.jpg"
                         portraitSecret="../public/images/chaos-portrait-carré.jpg"
                         description="Butters est le plus doux, le plus innocent et le plus crédule des personnages de la série. À l'inverse de pratiquement tous les personnages, il jure rarement et utilise des euphémismes pour exprimer sa colère." 
                         superHero="Super-vilain" 
                         secret="Professeur Chaos" 
                         texteajoute="Super Vilain"
                         entourage = {entourageRouge == 'Leopold "Butters" Stotch'}
                         />
        </section>
      </main>
  );
}