<template>
  <div>
    <table>
      <tr>
        以下にお答えください
      </tr>
      <tr>
        <div>
          <p>現在、生命保険に加入されていますか？</p>
          <input type="radio" value="はい" v-model="$store.state.myInsurance" name="insurance" >
          <label>はい</label>
          <input type="radio" value="いいえ" v-model="$store.state.myInsurance" name="insurance">
          <label>いいえ</label>
        </div>

        <div v-if="$store.state.myInsurance==='はい' || $store.state.myInsurance==='いいえ'">
          <p>
            現在入院中ですか。または、最近３ヶ月以内に医師の診断、検査の結果、入院・手術を勧められたこ<br>とはありますか？
          </p>
          <input type="radio" value="はい" v-model="$store.state.myHospitalization" name="threeMonths">
          <label>はい</label>
          <input type="radio" value="いいえ" v-model="$store.state.myHospitalization" name="threeMonths">
          <label>いいえ</label>
        </div>

        <div v-if="$store.state.myHospitalization==='はい'||$store.state.myHospitalization==='いいえ'">
          <p>
            過去5年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありま<br>すか？
          </p>
          <input type="radio" name="fiveYears" value="はい" v-model="$store.state.pastHospitalization">
          <label>はい</label>
          <input type="radio" name="fiveYears" value="いいえ" v-model="$store.state.pastHospitalization">
          <label>いいえ</label>
        </div>
      </tr>
    </table>
    <router-link to="/" tag="button">前へ戻る</router-link>
    <router-link to="/consultation" tag="button">次へ進む</router-link>
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
tr{
  border: solid 1px;
}
</style>