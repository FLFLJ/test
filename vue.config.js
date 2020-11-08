module.exports={
    devServer:{
        proxy:{
            '/api2':{
                target:'http://localhost:3000',
                changeOrigin:true
            },
            '/api':{
                target:'http://localhost:8080',
                ws:true,
                changeOrigin:true,
                
                }
            }
        }
    }
