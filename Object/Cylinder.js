export class Cylinder {
  constructor({radiusTop=1, radiusBottom=1, height=1, radialSegments=8}={}) {
    this.radiusTop = radiusTop;
    this.radiusBottom = radiusBottom;
    this.height = height;
    this.radialSegments = radialSegments;
    this.vertices = []; // placeholder vertices
    this.edges = [];
    this.faces = [];
  }
}
