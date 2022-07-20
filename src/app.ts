import { RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from "aurelia-framework";

export class App {

  configureRouter(config: RouterConfiguration): void {
    config.title = "My word bank";
    config.options.pushState = true;
    config.map([
      { route: ['',], moduleId: PLATFORM.moduleName('resources/elements/words'), title: "Home" }
    ]);
  }
}
