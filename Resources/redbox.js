Ti.include("TKKeyframeAnimation.js");

//
(function() {
	
	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var v = Ti.UI.createView({
		backgroundColor : "red",
		borderRadius : 10,
		width : 30,
		height : 30,
	});
	w.add(v);

	//=== アニメーションスタート
	var anim = new TKKeyframeAnimation([{
		duration : 800,
		transform : Ti.UI.create2DMatrix().translate(0, -100),
	}, {
		duration : 800,
		transform : Ti.UI.create2DMatrix().translate(0, 100),
	}], true);
	anim.play(v);

})();
