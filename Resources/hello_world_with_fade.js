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
	
	//=== vを初期位置にセット
	v.transform = Ti.UI.create2DMatrix().translate(0, 30);
	v.opacity = 0.0;
	
	//=== 関数定義
	function _show(){
		v.animate({
			duration: 500,
			transform: Ti.UI.create2DMatrix(),
			
			opaque: true, //=== 透明度のアニメーションを有効にするフラグ
			opacity: 1.0,
		});
	}
	
})();
