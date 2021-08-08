<template>
  <div class=" inset-x-auto w-full z-10">
    <div class="  mx-auto shadow-md rounded-md p-5 bg-white">
      <div class="flex gap-2 flex-col md:flex-row center">
        <div class="relative flex-1">
          <input
            id="searchText"
            value=""
            name="searchText"
            type="text"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3"
            :placeholder="$t('searchBar.textSearchPlaceHolder')"
          >
          <label for="searchText" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">{{ $t('searchBar.textSearchLabel') }}</label>
        </div>
        <div class="relative flex-1">
          <input
            id="pokemonType"
            value=""
            name="pokemonType"
            type="text"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3"
            placeholder="..."
          >
          <label for="pokemonType" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">{{ $t('searchBar.typeLabel') }}</label>
        </div>
        <div />
        <div class="relative flex-1">
          <input
            id="pokemonAbility"
            value=""
            name="pokemonAbility"
            type="text"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3"
            placeholder="..."
          >
          <label for="pokemonAbility" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">{{ $t('searchBar.abilityLabel') }}</label>
        </div>
        <div class="relative flex-1">
          <input
            id="pokemonGeneration"
            value=""
            name="pokemonGeneration"
            type="text"
            class="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600 focus:border-2 p-3"
            placeholder="..."
          >
          <label for="pokemonGeneration" class="absolute left-2 px-1 -top-2.5 bg-white text-red-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-red-600 peer-focus:text-sm">{{ $t('searchBar.generationLabel') }}</label>
        </div>
      </div>
      <div class="flex justify-end mt-3">
        <button class="bg-red-500 border-yellow-500  hover:bg-red-700 text-white font-extrabold text-lg rounded-full px-10 py-1">
          {{ $t('searchBar.search') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>
