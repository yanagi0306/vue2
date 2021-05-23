import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    myInsurance: '',
    myHospitalization: '',
    pastHospitalization: '',
    consultation: '',
  },
  getters: {
    displaySex: state => state.sex,
    displaybirthYear: state => state.birthYear,
    displaybirthMonth: state => state.birthMonth,
    displaybirthDay: state => state.birthDay,
    displaymyInsurance: state => state.myInsurance,
    displaymyHospitalization: state => state.myHospitalization,
    displaypastHospitalization: state => state.pastHospitalization,
    consultation: state => state.message
  },


  mutations: {
    addSex(state, i) {
      state.sex = i;
    },
    addBirthMonth(state, i) {
      state.birthMonth = i;
    },
    addBirthYear(state, i) {
      state.birthYear = i;
    },
    addBirthDay(state, i) {
      state.birthDay = i;
    },
    addMyInsurance(state, i) {
      state.myInsurance = i;
    },
    addMyHospitalization(state, i) {
      state.myHospitalization = i;
    },
    addPastHospitalization(state, i) {
      state.pastHospitalization = i;
    },
    addConsultation(state, i) {
      state.consultation = i;
    },
  },

})
