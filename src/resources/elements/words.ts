import { bindable } from 'aurelia-framework';

export class Words {
  @bindable private words: string[] = ["am", "is", "are", "was", "were", "be", "being", "been"];
}
