import { Cube } from "../Cube.js";
export class EdgeBlock {
  constructor(size=1) {
    this.block = new Cube({width:size,height:size,depth:size});
  }
}
