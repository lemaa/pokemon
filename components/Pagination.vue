<template>
  <div class="grid gap-4 grid-cols-4">
    <div v-if="currentPage === 1" class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300">
      <span class="hidden sm:inline">{{ $t('pagination.first') }}</span>
    </div>
    <nuxt-link
      v-else
      :to="'/1'"
      class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-red-500 hover:text-white transform duration-500 ease-in-out"
    >
      <span class="hidden sm:inline">{{ $t('pagination.first') }}</span>
    </nuxt-link>

    <div v-if="currentPage === 1" class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300">
      <span class="hidden sm:inline">{{ $t('pagination.previous') }}</span>
    </div>

    <nuxt-link
      v-else
      :to="`/${prevPage}`"
      class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-red-500 hover:text-white transform duration-500 ease-in-out"
    >
      <span class="hidden sm:inline">{{ $t('pagination.previous') }}</span>
    </nuxt-link>

    <div v-if="currentPage === totalPages" class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300">
      <span class="hidden sm:inline">{{ $t('pagination.next') }}</span>
    </div>

    <nuxt-link
      v-else
      :to="`/${nextPage}`"
      class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-red-500 hover:text-white transform duration-500 ease-in-out"
    >
      <span class="hidden sm:inline">{{ $t('pagination.next') }}</span>
    </nuxt-link>
    <div v-if="currentPage === totalPages" class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300">
      <span class="hidden sm:inline">{{ $t('pagination.last') }}</span>
    </div>
    <nuxt-link
      v-else
      :to="`/${totalPages}`"
      class="border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-red-500 hover:text-white transform duration-500 ease-in-out"
    >
      <span class="hidden sm:inline">{{ $t('pagination.last') }}</span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    totalPages: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    nextPage: {
      type: Number,
      default: 1
    },
    prevPage: {
      type: Number,
      default: 1
    }
  }
})
</script>
