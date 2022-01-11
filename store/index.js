import axios from '~/plugins/axios'

export const state = () => ({
  pokemons: []
})

export const mutations = {
  setPokemons(state, items){
    state.pokemons = items
  }
}

export const action = {
  async nuxtServerInit ( {commit}) {
    const { data } = await axios.get('/pokemon')
    commit('setPokemons', data.results)
  }
}
