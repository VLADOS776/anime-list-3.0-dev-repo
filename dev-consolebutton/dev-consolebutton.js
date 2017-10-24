// Anime List 3.0 Plugin

module.exports = function(Plugin) {
	const config = {
		name: '[DEV] Кнопка консоли',
		id: 'dev-consolebutton',
		description: 'Добавляет кнопку вызова консоли слева от поиска',
		version: '1.0.0',
		author: 'VLADOS776',
	}
	
	Plugin.newPlugin(config, {
		init: function(opt) {
			$('.navbar .form-inline').before(`
				<button class="btn btn-sm btn-dark mr-2" onclick="require('electron').remote.getCurrentWindow().toggleDevTools()"><i class="fa fa-terminal" aria-hidden="true"></i></button>
				`)
		}
	})
}