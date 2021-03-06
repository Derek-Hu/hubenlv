const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const path = require('path');
const rewireDefinePlugin = require('react-app-rewire-define-plugin')
const {ParseReadMe} = require('./plugins/markdown-meta-plugin');

const ReadMEs = {
  javascript: path.resolve(__dirname, 'src/_posts/javascript')
}

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);

  config.resolve.alias['__Source'] = path.resolve(__dirname, 'src/');
  // if(process.env.NODE_ENV === 'production'){
    // remove sourcemap in production
    // config.devtool = '';
  // }
  config = rewireDefinePlugin(config, env, {
    'process.env.MARKDOWN': JSON.stringify(ParseReadMe(ReadMEs))
  })

  return config;
};
