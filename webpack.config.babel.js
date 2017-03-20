import {join} from 'path'

const include = join(__dirname, 'src')

export default {
    entry: './src/app',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'ldsQuotes'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', include},
            {test: /\.json$/, loader: 'json-loader', include}
        ]
    }
}