export class TorusKnot {
  constructor({radius=1, tube=0.4, radialSegments=8, tubularSegments=6, p=2, q=3}={}) {
    this.radius = radius;
    this.tube = tube;
    this.radialSegments = radialSegments;
    this.tubularSegments = tubularSegments;
    this.p = p;
    this.q = q;
    this.vertices = []; // placeholder vertices
    this.edges = [];
    this.faces = [];
  }
}
