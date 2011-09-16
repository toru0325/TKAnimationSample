(function() {

	//=== レイアウト
	var w = Ti.UI.currentWindow;
	var v = Ti.UI.createLabel({
		text : "Hello world!",
		font : {
			fontSize : 50,
		},
		textAlign : "center",
		color : "white",
		height : 60,
	});
	w.add(v);

	//=== vを初期位置にセット
	v.transform = Ti.UI.create2DMatrix().translate(0, 250);

	//=== 表示フラグ
	var isShow = false;

	//=== ウィンドウクリックでボタンを表示＆非表示に
	w.addEventListener("click", function() {
		isShow ? _hide() : _show();
		isShow = !isShow;
	});
	//

	//=== 関数定義
	function _show() {
		v.animate({
			duration : 800,
			transform : Ti.UI.create2DMatrix(),
		});
	}

	function _hide() {
		v.animate({
			duration : 800,
			transform : Ti.UI.create2DMatrix().translate(0, 250),
		});
	}

})();
