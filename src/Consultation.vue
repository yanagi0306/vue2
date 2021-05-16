<template>
  <div>
    <table>
      <tr>
        ご相談内容をご記入ください
      </tr>
      <tr>
        <p>-ご相談内容-</p>
        <textarea rows="12" cols="50" v-model="$store.state.consultation"></textarea>
      </tr>
    </table>
    <router-link to="/Question" tag="button">前へ戻る</router-link>
    <router-link to="/result" tag="button">次へ進む</router-link>
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
