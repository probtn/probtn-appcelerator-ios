/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

var probtn = require('com.probtn.probtn');

probtn.addEventListener('probtn:open', function(e) {
	Ti.API.info('ProBtn: open');
});
probtn.addEventListener('probtn:close', function(e) {
	Ti.API.info('ProBtn: close');
});
probtn.addEventListener('probtn:show', function(e) {
	Ti.API.info('ProBtn: show');
});
probtn.addEventListener('probtn:hide', function(e) {
	Ti.API.info('ProBtn: hide');
});
probtn.addEventListener('probtn:drag', function(e) {
	Ti.API.info('ProBtn: drag');
});
probtn.addEventListener('probtn:content:show', function(e) {
	Ti.API.info('ProBtn: content show');
});
probtn.addEventListener('probtn:content:hide', function(e) {
	Ti.API.info('ProBtn: content hide');
});
probtn.addEventListener('probtn:content:loading', function(e) {
	Ti.API.info('ProBtn: content loading');
});
probtn.addEventListener('probtn:content:loaded', function(e) {
	Ti.API.info('ProBtn: content loaded');
});
probtn.addEventListener('probtn:content:error', function(e) {
	Ti.API.info('ProBtn: content error' + e.error);
});
probtn.addEventListener('probtn:event', function(e) {
	Ti.API.info('ProBtn: event: ' + e.event + '; args: ' + e.args + ';');
});

// open HintButton
// probtn.setButtonWindowFullscreen(true); // use if needs fullscreen
probtn.open();

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		Window = require('ui/handheld/ApplicationWindow');
	}

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();
