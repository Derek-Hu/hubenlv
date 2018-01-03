const path = require('path');
const fs = require('fs');
const markdownMatterPlugin = require('markdown-it-front-matter')
const dir = require('node-dir');
const crypto = require('crypto');

const MD = require('markdown-it')({html: true}).use(markdownMatterPlugin, function() {});

function ParseReadMe(options){

  var results = {};
  if(!options){
    return null;
  }

  Object.keys(options).forEach(key => {
    var result = dir.files(options[key], {sync:true}).map(file => {

      const filePath = path.relative(options[key], file);
      const pathHash = crypto.createHash('sha256').update(key+'|'+filePath);
      const contentUrl = pathHash.digest('hex');

      const content = fs.readFileSync(file, 'utf8');
      const tokens = MD.parse(content, {});
      const htmls = MD.render(content);

      const generatedPath = path.join(__dirname, '../src/_generated_posts');
      if(!fs.existsSync(generatedPath)){
        fs.mkdirSync(generatedPath);
      }

      fs.writeFileSync(path.join(generatedPath, contentUrl + '.js'), `export default {content: \`${htmls}\`}`)

      const block = tokens.find(token => token.type === 'front_matter');

      let metas = null;

      if(block){
        let markup = block.markup;
        metas = {}
        markup = markup.split('\n');
        markup.pop()
        markup.shift();
        markup.reduce((result, item)=>{
          let parts = item.split(':');
          result[parts.shift()] = parts.join(':').trim();
          return result;
        },metas)
        if(!Object.keys(metas).length){
          metas = null;
        }
      }
      let hashValue = null;
      if(metas && (typeof metas.category === 'string')){
        const hash = crypto.createHash('sha256');
        hash.update(metas.category);
        hashValue = hash.digest('hex');
      }



      return {
        title: metas && metas.title && metas.title.trim(),
        category:metas && metas.category && metas.category.trim(),
        metas:metas,
        path: filePath,
        contentUrl: contentUrl,
        _type_hash: hashValue,
        id: filePath.replace(/[\/\\]/g, '-').replace(/\.md$/g, '')
      };
    });

    results[key] = result;
  })

  return results;
}

module.exports = {ParseReadMe};
