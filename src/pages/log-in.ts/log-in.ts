import { Page } from "../Page";
import { Component, state, trigger, style, transition, animate } from "@angular/core";
import { ProfileService } from "../../services";

@Component({
  selector: 'log-in-page',
  templateUrl: 'log-in.html',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '100%'
      })),
      state('closed', style({
        height: '0px'
      }))
    ]),
  ]
})
export class LogInPage extends Page {

  public static readonly title: string = 'Connexion';

  shown: 'connect'| 'register' = 'connect';

  constructor(private profileService: ProfileService) {
    super(LogInPage.title);
  }

  toggle() {
    this.shown = this.shown ==='connect' ? 'register' : 'connect';
  }
}
