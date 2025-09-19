import { Cube } from "../Cube.js";

export class Pyraminx {
  constructor(size=1) {
    const s = size/2;
    this.blocks = [
      ...Array.from({length:4}, ()=>new Cube({width:s,height:s,depth:s})),
      ...Array.from({length:6}, ()=>new Cube({width:s,height:s,depth:s}))
    ];
  }
}
