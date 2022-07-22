import { bindable } from 'aurelia-framework';

export class Words {
  @bindable private words: string[] = ["am", "is", "are", "was", "were", "be", "being", "been"];

  private Delete(word: string): void {
    let index = this.words.indexOf(word);
    if (index !== -1) {
      this.words.splice(index,1);
    }
  }
}
