export class Tetrahedron {
  constructor(size=1) {
    const s = size;
    this.vertices = [
      [ s,  s,  s],[-s, -s,  s],
      [-s,  s, -s],[ s, -s, -s]
    ];
    this.edges = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];
    this.faces = [[0,1,2],[0,1,3],[0,2,3],[1,2,3]];
  }
}
