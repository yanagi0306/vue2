<template>
  <div>
    <table>
      <tr>
        以下の内容をご確認ください
      </tr>
      <tr>
        <p>-性別-</p>
        <p>{{ displaySex }}</p>
        <p>-生年月日-</p>
        <p>
          {{ displaybirthYear.slice(0, 5) }}{{ displaybirthMonth }}月{{
            displaybirthDay
          }}日
        </p>
        <p>-現在、生命保険に加入されていますか？-</p>
        <p>{{ displaymyInsurance }}</p>
        <p>
          -現在入院中ですか。または、最近３ヶ月以内に医師の診断・検査の結果、入院・手術を勧められたことはありますか？-
        </p>
        <p>{{ displaymyHospitalization }}</p>
        <p>
          -過去5年以内に、病気や怪我で、手術を受けたことまたは継続して７日間以上の入院をしたことはありますか？-
        </p>
        <p>{{ displaypastHospitalization }}</p>
        <p>-ご相談内容-</p>
        <p>{{ displaypconsultation }}</p>
      </tr>
    </table>

    <router-link to="/consultation" tag="button">前へ戻る</router-link>
    <router-link to="/" tag="button">送信</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: mapGetters([
    'displaySex',
    'displaybirthYear',
    'displaybirthMonth',
    'displaybirthDay',
    'displaymyInsurance',
    'displaymyHospitalization',
    'displaypastHospitalization',
    'displaypconsultation',
  ]),
};
</script>
<style scoped></style>
