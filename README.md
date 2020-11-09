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
