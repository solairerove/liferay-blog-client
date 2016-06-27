/**
 * Created by union on 23.06.16.
 */
(function (global) {

    var map = {
        'app': 'blog-ui-0.0.1b/app',
        'public': 'blog-ui-0.0.1b/public',
        'rxjs': 'blog-ui-0.0.1b/lib/rxjs',
        'angular2': 'blog-ui-0.0.1b/lib/angular2'
    };

    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'}
    };

    var packageNames = [
        'angular2',
        'rxjs',
        'systemjs'
    ];

    packageNames.forEach(function (pkgName) {
        packages[pkgName] = {defaultExtension: 'js'};
    });

    var config = {
        map: map,
        packages: packages
    };

    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);