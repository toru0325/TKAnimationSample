Ti.include("TKKeyframeAnimation.js");

//
(function() {
	
	//=== レイアウト
	var w = Ti.UI.currentWindow;
	w.backgroundColor = "white";
	
	var v = Ti.UI.createView({
		backgroundColor : "black",
		borderRadius : 10,
		width : 180,
		height : 180,
		opacity: 0.8,
	});
	w.add(v);

	//=== 初期位置
	v.transform = Ti.UI.create2DMatrix().scale(0.0);
	
	//=== 表示＆非表示フラグ
	var isShow = false;

	//=== ウィンドウクリックでボタンを表示＆非表示に
	w.addEventListener("click", function() {
		isShow ? _hide() : _show();
	});
	//

	function _show() {
		var anim = new TKKeyframeAnimation([{
			duration: 300,
			transform: Ti.UI.create2DMatrix().scale(1.2)
		},{
			duration: 100,
			transform: Ti.UI.create2DMatrix()
		}], false);
		anim.play(v);
		isShow = true;
	}

	function _hide() {
		var anim = new TKKeyframeAnimation([{
			duration: 100,
			transform: Ti.UI.create2DMatrix().scale(1.2)
		},{
			duration: 300,
			transform: Ti.UI.create2DMatrix().scale(0.0)
		}], false);
		anim.play(v);
		isShow = false;
	}
})();
