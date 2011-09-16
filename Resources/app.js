(function() {
	//=== 背景をセット
	Ti.UI.setBackgroundColor('#000');

	//=== タブグループ生成＆オープン
	var tab = Titanium.UI.createTab({
		window : _createWindow()
	});
	var tabGroup = Titanium.UI.createTabGroup();
	tabGroup.addTab(tab);
	tabGroup.open();

	//=== トップウィンドウの作成
	function _createWindow() {
		var w = Titanium.UI.createWindow({
			title : 'TKAnimationSample',
			backgroundColor : '#fff',
			tabBarHidden : true,
			barColor : "black",
		});
		var tv = Ti.UI.createTableView();
		tv.data = [{
			title : 'hello_world.js',
			hasChild : true,
		}, {
			title : 'hello_world_with_fade.js',
			hasChild : true,
		}, {
			title : 'buttons.js',
			hasChild : true,
		}, {
			title : 'buttons_with_scale.js',
			hasChild : true,
		}, {
			title : 'redbox.js',
			hasChild : true,
		}, {
			title : 'redbox_multi_views.js',
			hasChild : true,
		}, {
			title : 'redbox_multi_views_scale.js',
			hasChild : true,
		}];
		tv.addEventListener("click", function(e) {
			var w2 = Ti.UI.createWindow({
				barColor : "black",
				url : e.row.title,
			});
			tab.open(w2);
		});
		w.add(tv);
		return w;
	}

})();
