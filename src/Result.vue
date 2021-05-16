<template>
  <div>
    <table>
      <tr>
        以下の内容をご確認ください
      </tr>
      <tr>
        <p>-性別-</p>
        <p>{{$store.state.sex}}</p>
        <p>-生年月日-</p>
        <p>{{$store.state.birthYear.slice(0,5)}}{{$store.state.birthMonth}}月{{$store.state.birthDay}}日</p>
        <p>-現在、生命保険に加入されていますか？-</p>
        <p>{{$store.state.myInsurance}}</p>
        <p>-現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院・手術を勧められたことはありますか？-</p>
        <p>{{$store.state.myHospitalization}}</p>
        <p>-過去5年以内に、病気や怪我で、手術を受けたことまたは継続して７日間以上の入院をしたことはありますか？-</p>
        <p>{{$store.state.pastHospitalization}}</p>
        <p>-ご相談内容-</p>
        <p>{{$store.state.consultation}}</p>

      </tr>
    </table>
    <router-link to="/consultation" tag="button">前へ戻る</router-link>
    <router-link to="/" tag="button">送信</router-link>
  </div>
</template>

<script >

export default{
  
  
  
}
</script>
<style scoped>

</style>
