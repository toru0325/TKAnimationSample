//=== Ti.includeして使います。requireには対応していません。

TKKeyframeAnimation.isClosed = false;
TKKeyframeAnimation.isRunning = true;

//
(function() {
	//=== ウィンドウがアクティブじゃないときは作動させない自動処理
	Ti.UI.currentWindow.addEventListener("focus", function() {
		TKKeyframeAnimation.isRunning = true;
	});
	Ti.UI.currentWindow.addEventListener("blur", function() {
		TKKeyframeAnimation.isRunning = false;
	});
	Ti.UI.currentWindow.addEventListener("close", function() {
		TKKeyframeAnimation.isClosed = true;
	});
})();

function TKKeyframeAnimation(animDefs_ls, isLoop_bool) {
	if(!(this instanceof TKKeyframeAnimation)) {//=== インスタンス化されてなければnullを返す
		alert("TKKeyframeAnimation: newでインスタンス化してください");
		return null;
	}

	//=== プライベート変数
	var anims = animDefs_ls;
	var isLoop = isLoop_bool;
	var curIndex = -1;

	//=== パブリックメソッド
	this.play = _playNext;
	this.clearAnims = _clearAnims;

	//=== 以下プライベートメソッド
	function _clearAnims() {
		anims = [];
	}

	function _playNext(view) {
		_proceedIndex();
		if(_getCurrent()) {
			setTimeout(function() {//=== クラッシュを避けるため、タイムアウトを設置
				_playNext2(view);
			}, 10);
		}
	}

	function _playNext2(view) {
		if(!TKKeyframeAnimation.isClosed) {
			if(TKKeyframeAnimation.isRunning) {
				view.animate(_getCurrent(), function() {
					_playNext(view);
				});
			} else {
				setTimeout(function() {//=== ウィンドウがアンフォーカス時は待機
					_playNext2(view);
				}, 1000);
			}
		}
	}

	function _proceedIndex() {//=== インデックスだけ進ませる
		curIndex++;
		if(curIndex >= anims.length) {
			if(isLoop) {
				curIndex = 0;
			} else {
				curIndex = -1;
			}
		}
	}

	function _getCurrent() {//=== 現在のインデックスのアニメを取得
		if(curIndex > -1)
			return anims[curIndex];
	}

}