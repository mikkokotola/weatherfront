# Weatherfront
A simple weather app frontend (PoC, not a full functional app) for displaying the current weather of a location.

There is a related backend that uses Vaisala XWeather API, AWS CDK, Lambda, Api Gateway and Secrets Manager. Backend repo: https://github.com/mikkokotola/weather.

## Architecture
![Weather app architecture](Weather_architecture.png)

Note that the backend is in another repo.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). No unit tests implemented currently.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. No end-to-end tests implemented currently.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Other notes
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

