var sass = require('node-sass');
var md5 = require('md5');
var fs = require('fs');
var assets = require('./_assets/assets.json').assets;
var dist = "./_data";
var YAML = require('json2yaml')
    , ymlText
    ;


/*
This checks the assets.json in the assets folder
and creates a new one in the dist folder
for wordpress to get it's enqued files
*/

console.log('build ran');
for (var i = 0; i < assets.length; i++) {
  //if load is true
  //and the -HASH string is present
    //add file with hash to assets.json in dist folder
  destinationFile = assets[i].destinationFile;
  sourceFile = fs.readFileSync(assets[i].sourceFile).toString('utf8');

  //different kinds of files
  if (assets[i].type == 'scss'){
    assets[i].fileData = sass.renderSync({
      data: sourceFile,
      outputStyle: 'compressed'
    });
    assets[i].fileData = assets[i].fileData.css.toString('utf8');
  }

  //add to assets.json for wp
  if (assets[i].load && destinationFile.indexOf('HASH') != -1) {

    asset = assets[i];
    asset.destinationFile = destinationFile.replace('HASH', md5(assets[i].fileData));
    asset.file = asset.file.replace('HASH', md5(assets[i].fileData));
    destinationFile = asset.destinationFile;

  }

  fs.writeFileSync(destinationFile, assets[i].fileData);
  delete assets[i].fileData;
}
console.log(assets);
assetsYaml = YAML.stringify(assets, 4);
console.log(assetsYaml);
fs.writeFileSync(dist+'/assets.yml', assetsYaml);
