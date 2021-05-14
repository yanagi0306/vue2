<template>
  <div>
    <table>
      <tr>
        お客様情報を入力して下さい
      </tr>
      <tr>
        <P>-性別-</P>
        <input type="radio" name="sex" />
        <label> 男性 </label>
        <input type="radio" name="sex" />
        <label> 女性 </label>
        <p>-生年月日-</p>
        <select>
          <option v-for="i in 39" :key="i.id">
            {{ i + 1949 }}年 (昭和{{ i + 24 }}年)
          </option>
          <option v-for="i in 12" :key="i.id">
            {{ i + 1988 }}年 (平成{{ i }})
          </option>
        </select>
        <label>年</label>
        <select>
          <option v-for="i in 12" :key="i.id">{{ i }}</option>
        </select>
        <label>月</label>
        <select>
          <option v-for="i in 31" :key="i.id">{{ i }}</option>
        </select>
        <label>日</label>
      </tr>
    </table>
    <router-link to="/question" tag="button">次へ進む</router-link>
  </div>
</template>
  
<script>
export default {
  data() {
    return {};
  },
  methods() {
    return;
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