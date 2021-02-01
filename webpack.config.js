const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  //specifid the file and directory for compiled code 
  // the source code that needs to be compiled
  entry: [`${SRC_DIR}/index.js`],
  //this will not minify code, so that debugging is easier
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  

  //this is what compiles my react code from the src directory
  //and also es6 code, presets are contained within the .babelrc file

  module: {
    rules: [
      //babel-loader with env and react presets
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              //this will avoid re-compilation if nothing changes
              cacheDirectory: true,
            },
          },
        ],
      },
      //style and css loaders
      //css and style loaders to be able to write modular
      //react components along with theit own style sheets
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
};