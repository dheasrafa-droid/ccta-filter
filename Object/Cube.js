export class Cube {
  constructor({width=1, height=1, depth=1}={}) {
    const w = width/2, h = height/2, d = depth/2;

    this.vertices = [
      [-w,-h,-d],[ w,-h,-d],[ w, h,-d],[-w, h,-d],
      [-w,-h, d],[ w,-h, d],[ w, h, d],[-w, h, d]
    ];

    this.edges = [
      [0,1],[1,2],[2,3],[3,0],
      [4,5],[5,6],[6,7],[7,4],
      [0,4],[1,5],[2,6],[3,7]
    ];

    this.faces = [
      [0,1,2,3],[4,5,6,7],
      [0,1,5,4],[1,2,6,5],
      [2,3,7,6],[3,0,4,7]
    ];
  }
}
