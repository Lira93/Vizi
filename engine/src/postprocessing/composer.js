/**
 * @fileoverview Vizi Effects Composer - postprocessing effects composer, wraps Three.js
 * 
 * @author Tony Parisi
 */

goog.provide('Vizi.Composer');

/**
 * @constructor
 */

Vizi.Composer = function(param)
{
	// Freak out if somebody tries to make 2
    if (Vizi.Composer.instance)
    {
        throw new Error('Composer singleton already exists')
    }

	Vizi.Composer.instance = this;

    // Create the effects composer
    // For now, create default render pass to start it up
	var graphics = Vizi.Graphics.instance;
    this.composer = new THREE.EffectComposer( graphics.renderer );
	this.composer.addPass( new THREE.RenderPass( graphics.scene, graphics.camera ) );
}

Vizi.Composer.prototype.render = function(deltat) {

	// for now just pass it through
	this.composer.render(deltat);	
}

Vizi.Composer.prototype.addEffect = function(effect) {

	this.composer.addPass(effect.pass);	
}

Vizi.Composer.instance = null;