/// <reference path='../test.mocha.ts' />

describe('n3Charts.Factory.Container', () => {
  var domElement: JQuery = undefined;
  var container: n3Charts.Factory.Container = undefined;

  beforeEach(() => {
    domElement = angular.element(document.body).append('<div></div>');
    container = new n3Charts.Factory.Container(domElement[0]);
  });

  describe('createRoot()', () => {

    it('should create a svg root node', () => {

      var rootNode: SVGElement = undefined;

      container.createRoot();

      rootNode = domElement[0].getElementsByTagName('svg')[0];

      expect(rootNode.getAttribute('class')).to.equal('chart');
    });

    it('should provide a svg property', () => {

      var svgProp: SVGElement = undefined;

      expect(container.svg).to.equal(undefined);

      container.createRoot();

      svgProp = container.svg[0][0];

      expect(svgProp.getAttribute('class')).to.equal('chart');
    });

  });

  describe('createContainer()', () => {

    it('should create a vis container', () => {

      var visContainer: SVGElement = undefined;

      container.createRoot();
      container.createContainer();

      visContainer = domElement[0].getElementsByTagName('g')[0];

      expect(visContainer.getAttribute('class')).to.equal('container');
    });

    it('should provide a vis property', () => {

      var visProp: SVGElement = undefined;

      expect(container.vis).to.equal(undefined);

      container.createRoot();
      container.createContainer();

      visProp = container.vis[0][0];

      expect(visProp.getAttribute('class')).to.equal('container');
    });

  });
});
