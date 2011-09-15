Ti.include("TKKeyframeAnimation.js");

//
(function() {
	
	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var v = Ti.UI.createLabel({
		text: "Hello world!",
		font: {
			fontSize: 50,
		},
		textAlign: "center",
		color: "white",
		height : 60,
	});
	w.add(v);
	w.addEventListener("click", _show);
	
	v.transform = Ti.UI.create2DMatrix().translate(0, 250);
	
	function _show(){
		v.animate({
			duration: 800,
			transform: Ti.UI.create2DMatrix(),
		});
	}
	
})();
