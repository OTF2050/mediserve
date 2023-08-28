const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");




module.exports = {
    mode: 'development',
    
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: path.join(__dirname, 'build'),
        },
        open: true,
      },

    entry: {
        app:'./src/index.js'
      },
      
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },
   
            {
                test: /\.css$/,
                use: [
                {
                loader:MiniCssExtractPlugin.loader,
                options:{
                  esModule:false,
                },
                
                },
                "css-loader",
                "sass-loader"
              ],
              
              },
              {
                test: /\.(png|jpe?g|gif|webp)$/i,
                type: "asset/resource",
                generator:{
                    filename:"./images/[name][ext]"
                }
              }         
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/HTML/index.html",
     }),
     new HtmlWebpackPlugin({
        filename: "about-us.html",
        template: "./src/HTML/about-us.html",
     }),
     new HtmlWebpackPlugin({
        filename: "cleaning services.html",
        template: "./src/HTML/cleaning services.html",
     }),
     new HtmlWebpackPlugin({
        filename: "Landscaping and Grounds Maintenance.html",
        template: "./src/HTML/Landscaping and Grounds Maintenance.html",
     }),
     
     new HtmlWebpackPlugin({
        filename: "Help Desk and Customer Support.html",
        template: "./src/HTML/Help Desk and Customer Support.html",
     }),
     new HtmlWebpackPlugin({
        filename: "Mechanical and Electrical (M&E) Services.html",
        template: "./src/HTML/Mechanical and Electrical (M&E) Services.html",
     }),
     new HtmlWebpackPlugin({
        filename: "Building Fabric Maintenance.html",
        template: "./src/HTML/Building Fabric Maintenance.html",
     }),
     new HtmlWebpackPlugin({
        filename: "Air-Duct-Cleaning.html",
        template: "./src/HTML/Air-Duct-Cleaning.html",
     }),
     new HtmlWebpackPlugin({
        filename: "our-crew.html",
        template: "./src/HTML/our-crew.html",
     }), new HtmlWebpackPlugin({
        filename: "gallery.html",
        template: "./src/HTML/gallery.html",
     }),
    
    new HtmlWebpackPlugin({
        filename: "scoail-media.html",
        template: "./src/HTML/scoail-media.html",
     }),

     new HtmlWebpackPlugin({
        filename: "contact-us.html",
        template: "./src/HTML/contact-us.html",
     }),

     new MiniCssExtractPlugin({filename: "CSS/style.css"}),

     new OptimizeCssAssetsPlugin({}),
    ]
}