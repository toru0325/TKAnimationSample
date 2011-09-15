Ti.include("TKKeyframeAnimation.js");

//
(function() {
	
	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var v2 = Ti.UI.createView({
		width : 30,
		height : 70*2,
		borderWidth: 0,
		borderColor: "white",
	});
	w.add(v2);
	var v = Ti.UI.createView({
		backgroundColor : "red",
		borderRadius : 10,
		width : 30,
		height : 30,
	});
	v2.add(v);
	
	//=== ボタン配置
	var bt = Ti.UI.createButton({
		title: "Hint",
		width: 150,
		height: 40,
		bottom: 20,
	});
	bt.addEventListener("click", function(){
		v2.borderWidth = v2.borderWidth ? 0 : 1; //=== 親ボックスの境界の表示＆非表示
	});
	w.add(bt);

	//=== アニメーションスタート
	var anim = new TKKeyframeAnimation([{
		duration : 800,
		transform : Ti.UI.create2DMatrix().translate(0, -70),
	}, {
		duration : 800,
		transform : Ti.UI.create2DMatrix().translate(0, 70),
	}], true);
	anim.play(v);
	
	//=== 親ボックスのアニメーションスタート
	var anim = new TKKeyframeAnimation([{
		duration : 400,
		curve: Ti.UI.ANIMATION_CURVE_LINEAR,
		transform : Ti.UI.create2DMatrix().rotate(120),
	}, {
		duration : 400,
		curve: Ti.UI.ANIMATION_CURVE_LINEAR,
		transform : Ti.UI.create2DMatrix().rotate(120*2).scale(3.0),
	}, {
		duration : 400,
		curve: Ti.UI.ANIMATION_CURVE_LINEAR,
		transform : Ti.UI.create2DMatrix().rotate(120*3),
	}], true);
	anim.play(v2);

})();
