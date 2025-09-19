import { Cube } from "../Cube.js";

export class SkewbExtreme {
  constructor(size=1) {
    const s = size/2;
    this.blocks = Array.from({length:12}, ()=>new Cube({width:s,height:s,depth:s}));
  }
}
