/**
 * Created by union on 23.06.16.
 */
function getPath(){
    return URL_PATH + "/";
    //return "";
}

(function (global) {

    var map = {
        'app': 'app',
        'rxjs': 'lib/rxjs',
        'angular2': 'lib/angular2'
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

    var config = {
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        map: map,
        packages: packages
    }

    System.config(config);

})(this);