import Vue from 'vue'
import Router from 'vue-router'
import TravelIntro from './views/TravelIntro.vue'  
import Chat from './views/Chat.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.Base_URL,
    routes:[
        {
            path:'/',                   //기본 웹페이지로 설정
            name:'travelintro', 
            component: TravelIntro      //기본 컴포넌트로 등록
        },
        {
            path:'/Chat',               
            name:'Chat',
            component:Chat,           
            props:true,                 //TravelIntro.vue 에서 입력한 이름 받을수 있게 설정
            beforeEnter:(to,from,next) =>{                  
                (to.params.name)? next() : next('/')    //파라미터 넘어온 이름 값이 있으면 Chat.vue 아니면 TravelIntro.vue 
            }
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})