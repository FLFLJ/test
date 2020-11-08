export default{
    path:'/admin',
    component:()=>import('@/views/Admin'),
    children:[
        {
            path:'users',
            component:()=>import('@/views/Admin/users')
            
        },
        {
            path:'cinema',
            component:()=>import('@/views/Admin/cinema')
        },
        {
            path:'movie',
            component:()=>import('@/views/Admin/movie')
        },
        {
            path:'/admin',
            redirect:'/admin/movie'
        }
    ]
}