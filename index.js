/**
 * Component dependencies.
 */

var context = require('webgl-context');
var attribute = require('webgl-attribute');
var uniform = require('webgl-uniform');
var shader = require('webgl-shader');
var program = require('webgl-program');
var model = require('webgl-model');

/**
 * Expose component.
 */

module.exports = function () {

  /**
   * Renderer
   * Create the renderer.
   * @param {HTMLCanvasElement} canvas The canvas element.
   * @param {Object} options The options for creating the engine.
   * @return {Renderer} The engine.
   * @api public
   */
  
  function Renderer (canvas, options) {
    options = options || {};
    var ctx = context(canvas, options);
    this.canvas = canvas;
    this.context = ctx;
    this.Attribute = attribute(ctx);
    this.Uniform = uniform(ctx);
    this.Shader = shader(ctx);
    this.Program = program(ctx);
    this.Model = model(ctx);
  }

  /**
   * Renderer.use
   * Use a plugin.
   * @param {Function} fn plugin
   * @return {Renderer} this for chaining
   * @api public
   */
  
  Renderer.use = function (fn) {
    fn(this);
    return this;
  };

  return Renderer;
};
