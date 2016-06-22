/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */

(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'app', // 'dist',
        'angular2':                   'node_modules/angular2',
        'rxjs':                       'node_modules/rxjs',
        'tether': 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' }
    };

    var packageNames = [
        'angular2/core'
    ];
    
    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }
    
    System.config(config);

})(this);