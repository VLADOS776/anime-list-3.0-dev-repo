module.exports = function(Plugin) {
    const config = {
        name: '[DEV] Расширение сервера',
        id: 'dev-server',
        description: 'Пример расширения функционала встроенного сервера',
        version: '1.0.0',
        minAppVersion: '1.4.0',
        author: 'VLADOS776',
        dependencies: ['server']
    };
    
    let Server;
    
    Plugin.newPlugin(config, {
        init: function(opt) {
            Server = opt.dependencies.server;
            
            Server.app().get('/new-page', function(req, res) {
                
                res.header('Content-Type', 'application/json; charset=utf-8');
                res.end('Hello. This page created by "' + config.name + '" plugin.')
            })
        }
    })
}