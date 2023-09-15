<script setup lang="ts">
defineProps({
  fetchFree: Function,
  fetchPaid: Function,
});
</script>

<template>
  <div class="flex flex-col items-center justify-center text-start xl:gap-24">
    <img
      src="../assets/logo.png"
      alt="logo"
      class="mx-auto w-3/4 sm:w-max" />
    <div class="max-w-md md:text-lg">
      <p>
        Welcome to BoreNoMore, where boredom meets its match. We understand that
        life can sometimes feel dull, so we're here to spice things up with a
        world of exciting activities tailored just for you.
      </p>
      <ol class="sm:list-disc hidden sm:inline">
        <p class="py-4 font-semibold">How it works:</p>
        <li>Feeling Bored? 🙁</li>
        <li>Tap on one of the buttons for Instant Fun! 🎉</li>
        <li>Save Favorites "+", and mark them as finished in the board! 🚀</li>
      </ol>
    </div>
    <div class="mt-4 flex justify-center gap-4 flex-wrap">
      <button
        @click="fetchFree?.()"
        class="buttonActivity">
        🔎 Free activity
      </button>
      <button
        @click="fetchPaid?.()"
        class="buttonActivity">
        💸 Paid activity
      </button>
      <router-link
      
        to="/board"
        class="buttonActivity">
        📃 Go to board
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
