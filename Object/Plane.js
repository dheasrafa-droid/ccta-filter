export class Plane {
  constructor({width=1, height=1}={}) {
    const w = width/2, h = height/2;
    this.vertices = [
      [-w,-h,0],[ w,-h,0],[ w,h,0],[-w,h,0]
    ];
    this.edges = [[0,1],[1,2],[2,3],[3,0]];
    this.faces = [[0,1,2,3]];
  }
}
