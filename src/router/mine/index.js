export default{
    path:'/mine',
    component:()=>import('@/views/Mine'),
    children:[
        {
            path:'center',
            component:()=>import('@/views/Mine/Center')
            
        },
        {
            path:'register',
            component:()=>import('@/components/Register')
        },
        {
            path:'findpassword',
            component:()=>import('@/components/FindPassword')
        },
        {
            path:'login',
            component:()=>import('@/components/Login')
        },
        {
            path:'/mine',
            redirect:'/mine/center'
        }
    ]
}