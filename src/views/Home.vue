<template>
  <div>
    <h1 @click="setCity">Home</h1>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  computed:{
    upperMsg(){
      return this.$store.state.msg.toUpperCase()
    },
    skillLength(){
      return this.$store.getters.skillLength;
    },
    gettersMsg(){
      return this.$store.getters.gettersMsg;
    },
    myskill(){
      let arr=this.$store.getters.filterSkill;
      return arr;
    },
    filterSkillByMsg(){
      return this.$store.getters.filterSkillByMsg('R');
    }
  }
}
</script>
