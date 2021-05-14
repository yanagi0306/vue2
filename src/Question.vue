<template>
  <div>
    <table>
      <tr>
        以下にお答えください
      </tr>
      <tr>
        <div>
          <p>現在、生命保険に加入されていますか？</p>
          <input type="radio" v-on:click="takeInsurance" name="insurance">
          <label>はい</label>
          <input type="radio" v-on:click="takeInsurance" name="insurance">
          <label>いいえ</label>
        </div>

        <div v-if="myInsurance">
          <p>
            現在入院中ですか。または、最近３ヶ月以内に医師の診断、検査の結果、入院・手術を勧められたこ<br>とはありますか？
          </p>
          <input type="radio" v-on:click="getHospitalization" name="threeMonths">
          <label>はい</label>
          <input type="radio" v-on:click="getHospitalization" name="threeMonths">
          <label>いいえ</label>
        </div>

        <div v-if="myHospitalization">
          <p>
            過去5年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありま<br>すか？
          </p>
          <input type="radio" name="fiveYears">
          <label>はい</label>
          <input type="radio" name="fiveYears">
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
  data() {
    return {
      myInsurance: false,
      myHospitalization: false,
    };
  },
  methods: {
    takeInsurance() {
      this.myInsurance = true;
    },
    getHospitalization() {
      this.myHospitalization = true;
    },
  },
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