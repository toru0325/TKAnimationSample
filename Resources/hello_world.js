
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

	//=== ウィンドウクリックで表示
	w.addEventListener("click", _show);

	//=== 関数定義
	function _show() {
		v.animate({
			duration : 800,
			transform : Ti.UI.create2DMatrix(),
		});
	}

})();
