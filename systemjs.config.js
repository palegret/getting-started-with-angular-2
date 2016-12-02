(function(global) {
  // map: tells System loader where to look for things
  const map = {
    'app': 'dist',
		'@angular': 'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs': 'node_modules/rxjs'
  };

  const ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // packages: tells System loader how to load when no filename and/or extension
  let packages = {
    'app': { 
			main: 'app.main.js',  
			defaultExtension: 'js' 
		},
    'rxjs': { 
			defaultExtension: 'js' 
		},
    'angular2-in-memory-web-api': { 
			main: 'index.js', 
			defaultExtension: 'js' 
		}
  };

  // Individual files (~300 requests):
  function packIndex(pkgName) {
		const fullPkgName = '@angular/' + pkgName;
    packages[fullPkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
		const fullPkgName = '@angular/' + pkgName;
		const bundlePath = 'bundles/' + pkgName + '.umd.js';
    packages[fullPkgName] = { main: bundlePath, defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need individual index files
  const setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  const config = {
    map: map,
    packages: packages
  };

	function logErrorToConsole(err) { 
		console.error(err); 
	}

	System.config(config);
	System.import('app').catch(logErrorToConsole);
})(this);
