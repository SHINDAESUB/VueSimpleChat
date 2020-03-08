<template>
    <div class="intro container">
        <div class="card">
            <div class="card-content center-align">
                <h4 class="white-text left">여행이란? </h4>
                <form @submit.prevent="enterChat">
                    <input typw="text" name="name" v-model="name">
                    <p v-if="feedback" class="red-text">{{feedback}}</p>
                    <button class="btn teal">입장하기</button>
                </form>    
            </div>
        </div>
    </div>   
</template>
<script>
export default {
    name: "TravelIntro",
    data(){
        return{
            name:null,
            feedback:null
        }
    },
    methods:{
        enterChat(){
            (this.name) ? this.$router.push({name:'Chat',params:{name:this.name}})  //이름이 있을경우  ?  Chat.vue 으로 입력한 name 파라미터로 넘긴다.  : 없다면 p 태그 출력
                        : this.feedback="대화를 할려면 이름을 입력하세요!"                        
        }
    }
}
</script>
<style scoped>
    .intro{max-width: 480px; margin-top: 50px; font-size: 2em;}
    p{font-size:12px}
    .card{background-image:url('../assets/paris.jpg')}
</style>