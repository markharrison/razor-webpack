const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        site: './site/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/'),
        filename: 'js/[name].[hash].js',
        publicPath: "./"
        // libraryTarget: 'var',
        // library: 'EntryPoint'
    },
    module: {
        rules: [
             {
                test: /app\.less$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader, options: {
                        publicPath: '/css/'
                    }},
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: [
                            require('autoprefixer')({ }),
                            ]
                        }
                    },
                    { loader: "less-loader", options: {} },
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            dry: false,
            cleanOnceBeforeBuildPatterns: ['js/site.*.js','css/site.*.css']
 
        }),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'Custom template',
            template: './Pages/Shared/_LayoutTemplate.cshtml',
            filename: '../Pages/Shared/_Layout.cshtml'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].[hash].css'
          }),
    ]
};