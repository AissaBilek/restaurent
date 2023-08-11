const path = require('path');

module.exports = {
  mode: 'development', // ou 'production'
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Pour nettoyer le dossier de sortie avant la nouvelle génération
  },
  target: 'web', // Indique à Webpack de générer du code compatible avec les navigateurs

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
