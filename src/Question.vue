<template>
  <div>
    <table>
      <tr>
        以下にお答えください
      </tr>
      <tr>
        <div>
          <p>現在、生命保険に加入されていますか？</p>
          <input
            type="radio"
            value="はい"
            v-model="myInsurance"
            name="insurance"
          />
          <label>はい</label>
          <input
            type="radio"
            value="いいえ"
            v-model="myInsurance"
            name="insurance"
          />
          <label>いいえ</label>
        </div>

        <div v-if="myInsurance === 'はい' || myInsurance === 'いいえ'">
          <p>
            現在入院中ですか。または、最近３ヶ月以内に医師の診断、検査の結果、入院・手術を勧められたこ<br />とはありますか？
          </p>
          <input
            type="radio"
            value="はい"
            v-model="myHospitalization"
            name="threeMonths"
          />
          <label>はい</label>
          <input
            type="radio"
            value="いいえ"
            v-model="myHospitalization"
            name="threeMonths"
          />
          <label>いいえ</label>
        </div>

        <div
          v-if="myHospitalization === 'はい' || myHospitalization === 'いいえ'"
        >
          <p>
            過去5年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことはありま<br />すか？
          </p>
          <input
            type="radio"
            name="fiveYears"
            value="はい"
            v-model="pastHospitalization"
          />
          <label>はい</label>
          <input
            type="radio"
            name="fiveYears"
            value="いいえ"
            v-model="pastHospitalization"
          />
          <label>いいえ</label>
        </div>
      </tr>
    </table>
    <router-link to="/" tag="button">前へ戻る</router-link>
    <router-link to="/consultation" tag="button" v-on:click.native="add()"
      >次へ進む</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      myInsurance: "",
      myHospitalization: "",
      pastHospitalization: "",
    };
  },
  methods: {
    addmyInsurance() {
      this.$store.commit("addMyInsurance", this.myInsurance);
    },
    addmyHospitalization() {
      this.$store.commit("addMyHospitalization", this.myHospitalization);
    },
    addpastHospitalization() {
      this.$store.commit("addPastHospitalization", this.pastHospitalization);
    },
    add() {
      this.addmyInsurance();
      this.addmyHospitalization();
      this.addpastHospitalization();
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
tr {
  border: solid 1px;
}
</style>