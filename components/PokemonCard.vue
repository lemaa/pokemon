<template>
  <div :class="[' pokemon-card-container card m-2 border-4 border-yellow-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200', pokemon.pokemonTheme]">
    <div class="m-3">
      <h2 v-if="pokemon.evolvesFrom" class="text-xs  mb-1 text-center text-white font-mono">
        {{ pokemon.name }} {{ $t('pokemon.evolvesFrom') }} {{ pokemon.evolvesFrom.name }}
      </h2>
      <h2 v-else class="text-xs  mb-1 text-center text-white font-mono">
        {{ pokemon.name }} {{ $t('pokemon.evolvesFromNone') }}
      </h2>
      <h2 class="text-lg mb-1 flex text-white font-mono font-extrabold justify-between capitalize ">
        <span>{{ pokemon.name }}</span>
        <span class="animate-pulse">
          {{ pokemon.stats[0].base_stat }}HP
        </span>
      </h2>
      <div class="font-mono relative">
        <div :class="['card-avatar h-28 bg-gray-50', pokemon.pokemonTheme]" :style="{ backgroundImage: getBgImageSyle(pokemon.sprites.front_default)}" />
      </div>
      <div class="font-mono text-tiny text-center mt-2 bg-yellow-400">
        {{ pokemon.species }}. {{ $t('pokemon.length') }}: {{ pokemon.height }}m, {{ $t('pokemon.weight') }}: {{ pokemon.weight }}Kg
      </div>
      <div class="divide-y divide-black font-light font-mono text-sm text-white transition-all duration-200">
        <div class="container mb-1">
          <p class="">
            <span class="font-bold text-xs">{{ $t('pokemon.description') }}</span><span class="text-xs flex">  {{ pokemon.description }} </span>
          </p>
        </div>
        <div class="flex justify-between">
          <div class="container mb-1">
            <div class="font-bold text-xs">
              {{ $t('pokemon.ability') }}
            </div>
            <div class="flex justify-around flex-row">
              <span v-for="ability in pokemon.abilities" :key="ability" class="text-xs">  *{{ ability }} </span>
            </div>
          </div>
        </div>
        <div class="flex justify-between text-xs mb-1 pt-1">
          <div>
            <span>{{ $t('pokemon.attack') }}</span>
            <div class="text-center text-lg">
              {{ pokemon.stats[1].base_stat }}
            </div>
          </div>
          <div>
            <span>{{ $t('pokemon.defense') }}</span>
            <div class="text-center text-lg">
              {{ pokemon.stats[2].base_stat }}
            </div>
          </div>
          <div>
            <span>{{ $t('pokemon.speed') }}</span>
            <div class="text-center text-lg">
              {{ pokemon.stats[5].base_stat }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  methods: {
    getBgImageSyle (urlImage: string) {
      return `url(${urlImage}), repeating-linear-gradient(45deg, transparent, transparent 25px, rgb(255 255 255 / 42%) 15px, rgb(255 255 255 / 40%) 55px)`
    }

  }
})
</script>
<style lang="scss" scoped>
@import "~/assets/css/pokemon.scss";

.pokemon-card-container {
  &.bug {
    background: $bgBug;
  }

  &.dark {
    background: $bgDark;
  }

  &.dragon {
    background: $bgDragon;
  }

  &.electric {
    background: $bgElectric;
  }

  &.fairy {
    background: $bgFairy;
  }

  &.fighting {
    background: $bgFighting;
  }

  &.fire {
    background: $bgFire;
  }

  &.flying {
    background: $bgFlying;
  }

  &.ghost {
    background: $bgGhost;
  }

  &.grass {
    background: $bgGrass;
  }

  &.ground {
    background: $bgGround;
  }

  &.ice {
    background: $bgIce;
  }

  &.normal {
    background: $bgNormal;
  }

  &.poison {
    background: $bgPoison;
  }

  &.psychic {
    background: $bgPsychic;
  }

  &.rock {
    background: $bgRock;
  }

  &.steel {
    background: $bgSteel;
  }

  &.water {
    background: $bgWater;
  }
}

.card-avatar {
  border: solid 5px #edd721;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
  background-size: 60%, cover, 100%, cover !important;
  background-repeat: no-repeat !important;
  background-position: center 30% !important;

  &.bug {
    background-color: $bug;
  }

  &.dark {
    background: $bgDark;
  }

  &.dragon {
    background: $bgDragon;
  }

  &.electric {
    background: $bgElectric;
  }

  &.fairy {
    background: $bgFairy;
  }

  &.fighting {
    background: $bgFighting;
  }

  &.fire {
    background: $bgFire;
  }

  &.flying {
    background: $bgFlying;
  }

  &.ghost {
    background: $bgGhost;
  }

  &.grass {
    background: $bgGrass;
  }

  &.ground {
    background: $bgGround;
  }

  &.ice {
    background: $bgIce;
  }

  &.normal {
    background: $bgNormal;
  }

  &.poison {
    background: $bgPoison;
  }

  &.psychic {
    background: $bgPsychic;
  }

  &.rock {
    background: $bgRock;
  }

  &.steel {
    background: $bgSteel;
  }

  &.water {
    background: $bgWater;
  }
}

</style>
