import {UserMeta} from "../interfaces/user-meta";
import {CustomMeta} from "./custom-meta";
export class BreedingMeta extends CustomMeta{

  intelligence: {id: number, value: string};
  mercy: {id: number, value: string};
  responsibility: {id: number, value: string};
  justice: {id: number, value: string};
  character: {id: number, value: string};

  constructor(metaList: UserMeta[]) {
    super(metaList)
  }

  get avg(): number {
    if (
      this.intelligence
      && this.character
      && this.justice
      && this.mercy
      && this.responsibility
    ) {
      return (
      + (parseFloat(this.intelligence.value) || 0)
      + (parseFloat(this.character.value) || 0)
      + (parseFloat(this.justice.value) || 0)
      + (parseFloat(this.mercy.value) || 0)
      + (parseFloat(this.responsibility.value) || 0)
      ) / 5;
    } else return 0;
  }
}
