// Anime List 3.0 Plugin

module.exports = function(Plugin) {
	const config = {
		name: '[DEV] Log events',
		id: 'dev-logevents',
		description: 'Плагин выводит в консоль все события, которые отправляются плагинам',
		version: '1.0.0',
		author: 'VLADOS776',
	}
	
	Plugin.newPlugin(config, {
		onEvent: console.log
	})
}