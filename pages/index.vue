<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">
        Hero title
      </p>
      <p class="subtitle">
        Hero subtitle
      </p>
    </div>
    <div class="panel">
      <div class="panel-heading is-blue">
        Data Pokemon
      </div>
      <div class="panel-block" v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </div>
    </div>
  </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default{
      computed: mapState([
        'pokemons'
      ])
    }
</script>

