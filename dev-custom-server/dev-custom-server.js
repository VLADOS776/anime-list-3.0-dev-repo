module.exports = function(Plugin, pluginPaths) {
    const config = {
        name: '[DEV] Свой сервер',
        id: 'dev-custom-server',
        description: 'Пример собственного сервера. Запускается при старте. Можно зайти по адресу localhost:3500',
        version: '1.0.0',
        minAppVersion: '1.4.0',
        author: 'VLADOS776',
        dependencies: ['express']
    }
    
    const path = require('path');
    let express, app;
    
    Plugin.newPlugin(config, {
        init: function(opt) {
            express = opt.dependencies.express;
            
            app = express();
            
            app.use(express.static(path.join(pluginPaths.dir, 'public')))
            
            app.listen(3500, () => {
                console.log('Server on port 3500');
            })
        }
    })
}