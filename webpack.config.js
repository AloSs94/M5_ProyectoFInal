const path = require('path');
const CopyPlugin =require('copy-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins:[
       new CopyPlugin({
           patterns:[
               {
                   from:'src/public/imgs',to:'public/imgs' //te permite copiar las iamgenes a dist
               }
           ]
       }),
       new workboxPlugin.GenerateSW({
           clientsClaim:true,
           skipWaiting:true
       })
       //genera un server worker
    ],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
            rules:[
                {
                    test: /\.css$/i,
                    use:['style-loader','css-loader']
                },
                {
                    test: /\.s[ac]ss$/i,
                    use:['style-loader','css-loader','sass-loader']
                },
                {
                    test: /\.(png|jpg)$/i,
                    type: "asset/resource",
                },
            ]

    }
};