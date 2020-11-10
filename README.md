# oversaettelsePoC er et proof of concept for fler sproget html sider,
jeg fandt løsningen ved brug af denne video: https://www.youtube.com/watch?v=OKU08dWK8BA
hvor jeg fik skabt nok kendskab til at kunne selv at kunne programmere det nødvendige til det jeg skulle.

eftersom jeg bruger .textcontent til at sætte data ind så sletter den det forrige, dette kan være et problem med handlebars projekter.
grundet f.eks. {{title}} indsættelser, jeg har derfor gemt det før jeg sætter ind hvor jeg så appender det ind bagefter.
man kunne muligvis gøre så det gemmer det samme sted eller have {{eksempel}} med i oversættelses JSON så man undgår dette.

på nuværende tidspunkt er json gemt i html, hvilket ikke er optimalt, arbejder på at kunne gøre det fra filer

-------------------------------------------------------------------------------------------------------------------------------------------
jeg har brugt kommandoen: express --view=hbs --git
til at skabe projektet fra en boilerplate.

kør det sådan her:
1. npm install
2. npm start

gør i dev med nodemon kommandoen, istedet for npm start:
nodemon ./bin/www


Fremgangs måde
---------------------------------------------------------------------------------------------------------------------------------------------
tilføj en data-key="dinDataKey", tilføj nu den string værdi der skal vises der til JSON under script eksempel

var langdata = {
   "languages": {
    "en": {
      "strings": {
      "dinDataKey": "this is what that are appended",
      "dinDataKey+hbs": "this is what that are inputted {{yeah}}
          }
          }
     "da": {
      "strings": {
       "dinDatakey": "dette er hvad der er tilføjet",
       "dinDataKey+hbs": "dette er hvad der er sat ind {{yeah}}
       }
      }
    }
}

ellers se på layout.hbs, +hbs værdien er lavet så man kan tilføjede/beholde {{værdier}} på det korrekte sted, eller bliver de, hvis de er der i forvejen tilføjet til slut
 
