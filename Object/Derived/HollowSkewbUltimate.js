import { Cube } from "../Cube.js";

export class HollowSkewbUltimate {
  constructor(size=1) {
    const s = size/2;
    this.blocks = Array.from({length:8}, ()=>new Cube({width:s,height:s,depth:s}));
    this.hollow = true; // flag wireframe/hollow
  }
}potret aq 
