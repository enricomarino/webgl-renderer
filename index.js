
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
   * @return {v3.Engine} The engine.
   * @api public
   */
  
  function Renderer (canvas, options) {
    var options = options || {};
    var context = context(canvas, options);

    this.canvas = canvas;
    this.context = context;
    this.Attribute = attribute(context);
    this.Uniform = uniform(context);
    this.Shader = shader(context);
    this.Program = program(context);
    this.Model = model(context);
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
