<template>
  <div>
    <table>
      <tr>
        お客様情報を入力して下さい
      </tr>
      <tr>
        <P>-性別-</P>
        <input
          type="radio"
          name="sex"
          value="男性"
          v-model="$store.state.sex"
        />
        <label> 男性 </label>
        <input
          type="radio"
          name="sex"
          value="女性"
          v-model="$store.state.sex"
        />
        <label> 女性 </label>
        <p>-生年月日-</p>
        <select v-model="$store.state.birthYear">
          <option v-for="i in 39" :key="i.id">
            {{ i + 1949 }}年 (昭和{{ i + 24 }})
          </option>
          <option v-for="i in 12" :key="i.id">
            {{ i + 1988 }}年 (平成{{ i }})
          </option>
        </select>
        <label>年</label>
        <select v-model="$store.state.birthMonth">
          <option v-for="i in 12" :key="i.id">{{ i }}</option>
        </select>
        <label>月</label>
        <select v-model="$store.state.birthDay">
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