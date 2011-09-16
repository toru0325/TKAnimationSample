Ti.include("TKKeyframeAnimation.js");

//
(function() {

	//=== 表示＆非表示フラグ
	var isShow = false;

	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var bt1 = Ti.UI.createButton({
		title : "Button 1",
		width : 150,
		height : 40,
		top : 150,
	});
	w.add(bt1);
	var bt2 = Ti.UI.createButton({
		title : "Button 2",
		width : 150,
		height : 40,
		top : 150 + 50,
	});
	w.add(bt2);
	var bt3 = Ti.UI.createButton({
		title : "Button 2",
		width : 150,
		height : 40,
		top : 150 + 50 * 2,
	});
	w.add(bt3);
	w.addEventListener("click", function() {
		//=== ウィンドウクリックでボタンを表示＆非表示に
		isShow ? _hide() : _show();
	});
	//

	//=== 初期位置にセット
	bt1.opacity = bt2.opacity = bt3.opacity = 0.0;
	bt1.transform = bt2.transform = bt3.transform = _getHiddenTransform();

	//=== 初期位置のTransformを生成
	function _getHiddenTransform() {
		return Ti.UI.create2DMatrix().rotate(30).translate(0, 30).scale(5.0);
	}

	function _show() {
		[bt1, bt2, bt3].forEach(function(bt, i) {
			bt.animate({
				duration : 500,
				curve : Ti.UI.ANIMATION_CURVE_EASE_IN,
				delay : 100 * i,
				transform : Ti.UI.create2DMatrix(),
				opaque : true,
				opacity : 1.0,
			});
		});
		isShow = true;
	}

	function _hide() {
		[bt3, bt2, bt1].forEach(function(bt, i) {
			bt.animate({
				duration : 500,
				curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
				delay : 100 * i,
				transform : _getHiddenTransform(),
				opaque : true,
				opacity : 0.0,
			});
		});
		isShow = false;
	}

})();
