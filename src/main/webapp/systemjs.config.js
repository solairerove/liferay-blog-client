(function(global) {

    var map = {
        'app':                        'app', // 'dist',
        'angular2':                   'node_modules/angular2',
        'rxjs':                       'node_modules/rxjs'
    };

    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' }
    };

    var packageNames = [
        'angular2/core'
    ];
    
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
    
    System.config(config);

    System.import('app/main').then(null, console.error.bind(console));

})(this);