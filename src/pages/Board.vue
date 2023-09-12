<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useActivityStore } from "../store/activity";

const acitityStore = useActivityStore();

const { favorites } = storeToRefs(acitityStore);
favorites;
</script>

<template></template>

<style scoped></style>
