<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">메시지 입력후 엔터 입력 </label>
            <input type="text" name="new-message" v-model="newMessage">
        </form>
    </div>
</template>
<script>
import {db} from '../firebaseInit.js'
export default {
    name:'newMessage',
    props:['name'],
    data(){
        return{
            newMessage:null
        }
    },
    methods:{
        addMessage(){    
            if(this.newMessage !=null){
                db.collection('messages').add({          //firebase에 add()메서드를 이용해  'messages' 이름으로 저장한다.
                    content: this.newMessage,
                    name :this.name,
                    timestamp: Date.now()
                }).catch((error)=>{console.log(error)})
            }
            this.newMessage= null;   
        }
    }
}
</script>