import { Cube } from "../Cube.js";
export class CompoundCube {
  constructor(size=1) {
    const s = size/2;
    this.blocks = [
      new Cube({width:s,height:s,depth:s}),
      new Cube({width:s,height:s,depth:s}),
      new Cube({width:s,height:s,depth:s})
    ];
  }
}
