const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap',
            },
            // share: avoid duplication load of dependency for container project
            shared: ['faker'],

            // {
            //     faker: {
            //         singleton: true,
            //     },
            // }, // if we want to require or import faker module, we will try to share it in the container
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
