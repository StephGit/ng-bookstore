# ng-bookstore

This main goal of this project is to create a reference implementation of a state of the art single page application with angular5.


based on https://github.com/akveo/ngx-admin

## Technologies

This project was generated with [Angular CLI 1.6.7](https://cli.angular.io/) and [Angular5](https://angular.io/) .


## Getting started
   yarn or npm install
   ng serve or npm start
   go to http://localhost:4200/


## Backend
   The corresponding backend service used for this project is on Github as well: 
   https://github.com/AdrianKrebs/bookstore
   


## TODOs

- [ ] I18n
- [ ] Redux state handling



## Releasenotes

1. Kunde kann seine E-Mail nach der Registrierung ändern. Falls er die E-Mail ändert, wird nur die Mailadresse
des Customers geändert. Der Username bleibt gleich. (Fehlverhalten bei Fischlis-Store -> Register und Mailadresse ändern- Login nicht mehr möglich)
2. State wird hauptsächlich über Services gehandelt. Komponenten sind weitgehend dumm gehalten. 
Hierbei wird auf der Komponente über OnInit eine Subscribtion auf ein Subject erstellt und OnDestroy
die Subscription aufgehoben. 
3. Speziell implementiert wurde eine ComponentFactory, welche dynamisch die notwendigen
 Komponenten für die Edit-Komponente bereitstellt.
