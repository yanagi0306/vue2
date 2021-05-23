<template>
  <div>
    <table>
      <tr>
        お客様情報を入力して下さい
      </tr>
      <tr>
        <P>-性別-</P>
        <input type="radio" name="sex" value="男性" v-model="sex" />
        <label> 男性 </label>
        <input type="radio" name="sex" value="女性" v-model="sex" />
        <label> 女性 </label>
        <p>-生年月日-</p>
        <select v-model="birthYear">
          <option v-for="i in 39" :key="i.id">
            {{ i + 1949 }}年 (昭和{{ i + 24 }})
          </option>
          <option v-for="i in 12" :key="i.id">
            {{ i + 1988 }}年 (平成{{ i }})
          </option>
        </select>
        <label>年</label>
        <select v-model="birthMonth">
          <option v-for="i in 12" :key="i.id">{{ i }}</option>
        </select>
        <label>月</label>
        <select v-model="birthDay">
          <option v-for="i in 31" :key="i.id">{{ i }}</option>
        </select>
        <label>日</label>
      </tr>
    </table>

    <router-link to="/question" tag="button" v-on:click.native="add()"
      >次へ進む</router-link
    >
  </div>
</template>

<script>
export default {
  methods: {
    addSex() {
      this.$store.commit('addSex', this.sex);
    },
    addBirthYear() {
      this.$store.commit('addBirthYear', this.birthYear);
    },
    addBirthMonth() {
      this.$store.commit('addBirthMonth', this.birthMonth);
    },
    addBirthDay() {
      this.$store.commit('addBirthDay', this.birthDay);
    },
    add() {
      this.addSex();
      this.addBirthYear();
      this.addBirthMonth();
      this.addBirthDay();
    },
  },
  data() {
    return {
      sex: '',
      birthYear: '',
      birthMonth: '',
      birthDay: '',
    };
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
