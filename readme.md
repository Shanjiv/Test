You have to run first npm install to install all the modules.

Everything works great, when i don't require soap module in /app/components/Evergreen.jsx.

Helpful urls: 
https://www.bountysource.com/issues/10582931-webpack
https://github.com/request/request/issues/1529#issuecomment-90347445

Problem: I have required node-soap module in /app/components/Evergreen.jsx. Afterwards webpack is giving me a bunch of errors:


WARNING in ./~/optional/optional.js
Critical dependencies:
8:11-26 the request of a dependency is an expression
 @ ./~/optional/optional.js 8:11-26

WARNING in ./~/ejs/lib/ejs.js
require.extensions is not supported by webpack. Use a loader instead.

WARNING in ./~/ejs/lib/ejs.js
require.extensions is not supported by webpack. Use a loader instead.

WARNING in ./~/optional/package.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/optional/package.json Unexpected token (2:9)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:9)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.provide (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:52:20)
    at CachedInputFileSystem.readFile (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:140:24)
    at DependenciesBlock.onLoadPitchDone (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:255:7)
    at DependenciesBlock.loadPitch (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:182:27)
    at DependenciesBlock.doBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:241:4)
    at DependenciesBlock.build (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:84:14)
    at Compilation.buildModule (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:126:9)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:309:10
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:58:13
    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tapable/lib/Tapable.js:75:69)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:38:11)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:121:6)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:116:7
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:726:13
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:52:16
 @ ./~/optional ^\.\/.*$

WARNING in ./~/optional/LICENSE
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/optional/LICENSE Unexpected token (1:10)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (1:10)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/optional ^\.\/.*$

WARNING in ./~/optional/README.md
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/optional/README.md Unexpected character '#' (1:0)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected character '#' (1:0)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp$7.getTokenFromCode (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2756:10)
    at Parser.pp$7.readToken (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2477:17)
    at Parser.pp$7.nextToken (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2468:15)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:515:10)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/optional ^\.\/.*$

WARNING in ./~/ajv/dist/ajv.bundle.js
Critical dependencies:
26:78-86 This seems to be a pre-built javascript file. Though this is possible, it's not recommended. Try to require the original source to get better results.
 @ ./~/ajv/dist/ajv.bundle.js 26:78-86

ERROR in ./~/soap/lib/wsdl.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/soap/lib
 @ ./~/soap/lib/wsdl.js 16:9-22

ERROR in ./~/soap/package.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/soap/package.json Unexpected token (2:9)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:9)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.provide (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:52:20)
    at CachedInputFileSystem.readFile (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:140:24)
    at DependenciesBlock.onLoadPitchDone (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:255:7)
    at DependenciesBlock.loadPitch (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:182:27)
    at DependenciesBlock.doBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:241:4)
    at DependenciesBlock.build (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:84:14)
    at Compilation.buildModule (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:126:9)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:309:10
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:58:13
    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tapable/lib/Tapable.js:75:69)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:38:11)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:121:6)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:116:7
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:726:13
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:52:16
 @ ./~/soap/lib/http.js 12:14-40

ERROR in ./~/soap/lib/security/ClientSSLSecurity.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/soap/lib/security
 @ ./~/soap/lib/security/ClientSSLSecurity.js 3:9-22

ERROR in ./~/soap/lib/security/ClientSSLSecurityPFX.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/soap/lib/security
 @ ./~/soap/lib/security/ClientSSLSecurityPFX.js 5:9-22

ERROR in ./~/soap/lib/security/WSSecurityCert.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/soap/lib/security
 @ ./~/soap/lib/security/WSSecurityCert.js 5:9-22

ERROR in /Users/Shan/~/path/path.js
Module build failed: Error: Couldn't find preset "react" relative to directory "/Users/Shan/node_modules/path"
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/options/option-manager.js:293:19
    at Array.map (native)
    at OptionManager.resolvePresets (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/options/option-manager.js:275:20)
    at OptionManager.mergePresets (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/options/option-manager.js:264:10)
    at OptionManager.mergeOptions (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/options/option-manager.js:249:14)
    at OptionManager.init (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/options/option-manager.js:368:12)
    at File.initOptions (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/index.js:212:65)
    at new File (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/file/index.js:135:24)
    at Pipeline.transform (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-core/lib/transformation/pipeline.js:46:16)
    at transpile (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-loader/lib/index.js:46:20)
    at Object.module.exports (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/babel-loader/lib/index.js:163:20)
 @ ./~/soap/lib/wsdl.js 18:11-26

ERROR in ./~/ejs/lib/ejs.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/ejs/lib
 @ ./~/ejs/lib/ejs.js 47:9-22

ERROR in ./~/ejs/package.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/ejs/package.json Unexpected token (2:9)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:9)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.provide (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:52:20)
    at CachedInputFileSystem.readFile (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:140:24)
    at DependenciesBlock.onLoadPitchDone (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:255:7)
    at DependenciesBlock.loadPitch (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:182:27)
    at DependenciesBlock.doBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:241:4)
    at DependenciesBlock.build (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:84:14)
    at Compilation.buildModule (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:126:9)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:309:10
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:58:13
    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tapable/lib/Tapable.js:75:69)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:38:11)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:121:6)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:116:7
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:726:13
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:52:16
 @ ./~/ejs/lib/ejs.js 52:22-48

ERROR in ./~/request/lib/har.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/request/lib
 @ ./~/request/lib/har.js 3:9-22

ERROR in ./~/xml-crypto/lib/signed-xml.js
Module not found: Error: Cannot resolve module 'fs' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/xml-crypto/lib
 @ ./~/xml-crypto/lib/signed-xml.js 10:9-22

ERROR in ./~/forever-agent/index.js
Module not found: Error: Cannot resolve module 'net' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/forever-agent
 @ ./~/forever-agent/index.js 10:10-24

ERROR in ./~/forever-agent/index.js
Module not found: Error: Cannot resolve module 'tls' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/forever-agent
 @ ./~/forever-agent/index.js 11:10-24

ERROR in ./~/tough-cookie/lib/cookie.js
Module not found: Error: Cannot resolve module 'net' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tough-cookie/lib
 @ ./~/tough-cookie/lib/cookie.js 35:10-24

ERROR in ./~/tough-cookie/package.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tough-cookie/package.json Unexpected token (2:9)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:9)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.provide (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:52:20)
    at CachedInputFileSystem.readFile (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:140:24)
    at DependenciesBlock.onLoadPitchDone (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:255:7)
    at DependenciesBlock.loadPitch (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:182:27)
    at DependenciesBlock.doBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:241:4)
    at DependenciesBlock.build (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:84:14)
    at Compilation.buildModule (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:126:9)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Compilation.js:309:10
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:58:13
    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tapable/lib/Tapable.js:75:69)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:38:11)
    at onDoneResolving (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:121:6)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModuleFactory.js:116:7
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:726:13
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/async/lib/async.js:52:16
 @ ./~/tough-cookie/lib/cookie.js 41:14-40

ERROR in ./~/tunnel-agent/index.js
Module not found: Error: Cannot resolve module 'net' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tunnel-agent
 @ ./~/tunnel-agent/index.js 5:10-24

ERROR in ./~/tunnel-agent/index.js
Module not found: Error: Cannot resolve module 'tls' in /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/tunnel-agent
 @ ./~/tunnel-agent/index.js 6:10-24

ERROR in ./~/mime-db/db.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/mime-db/db.json Unexpected token (2:40)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:40)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/mime-db/index.js 13:17-37

ERROR in ./~/har-schema/lib/afterRequest.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/afterRequest.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 4:16-46

ERROR in ./~/har-schema/lib/beforeRequest.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/beforeRequest.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 5:17-48

ERROR in ./~/har-schema/lib/browser.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/browser.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 6:11-36

ERROR in ./~/har-schema/lib/cache.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/cache.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 7:9-32

ERROR in ./~/har-schema/lib/content.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/content.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 8:11-36

ERROR in ./~/har-schema/lib/cookie.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/cookie.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 9:10-34

ERROR in ./~/har-schema/lib/creator.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/creator.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 10:11-36

ERROR in ./~/har-schema/lib/entry.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/entry.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 11:9-32

ERROR in ./~/har-schema/lib/har.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/har.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 12:7-28

ERROR in ./~/har-schema/lib/header.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/header.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 13:10-34

ERROR in ./~/har-schema/lib/log.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/log.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 14:7-28

ERROR in ./~/har-schema/lib/page.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/page.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 15:8-30

ERROR in ./~/har-schema/lib/pageTimings.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/pageTimings.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 16:15-44

ERROR in ./~/har-schema/lib/postData.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/postData.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 17:12-38

ERROR in ./~/har-schema/lib/query.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/query.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 18:9-32

ERROR in ./~/har-schema/lib/request.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/request.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 19:11-36

ERROR in ./~/har-schema/lib/timings.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/timings.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 21:11-36

ERROR in ./~/har-schema/lib/response.json
Module parse failed: /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/har-schema/lib/response.json Unexpected token (2:6)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (2:6)
    at Parser.pp$4.raise (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp.semicolon (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:581:61)
    at Parser.pp$1.parseExpressionStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:966:10)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:730:24)
    at Parser.pp$1.parseBlock (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:981:25)
    at Parser.pp$1.parseStatement (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:709:33)
    at Parser.pp$1.parseTopLevel (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
    at nextLoader (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:275:25)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/webpack-core/lib/NormalModuleMixin.js:259:5
    at Storage.finished (/Users/Shan/Desktop/Evergreen/Evergreen/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:38:16)
    at /Users/Shan/Desktop/Evergreen/Evergreen/node_modules/graceful-fs/graceful-fs.js:78:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:439:3)
 @ ./~/har-schema/lib/index.js 20:12-38

