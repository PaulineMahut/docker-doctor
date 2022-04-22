<template>
  <div class="d-flex flex-wrap gap-5 justify-content-center overflow-scroll">
    <div v-for="consult in consultStore.consultations" :key="consult['@id']">
      <router-link :to="{ name: 'consultation', params: { id: consult.id } }">
        <div class="card" style="width: 18rem">
          <img
            src="https://place-hold.it/300"
            class="card-img-top"
            alt="https://place-hold.it/300"
          />
          <div class="card-body">
            <h5 class="card-title">{{ consult.doctor_name }}</h5>
            <p class="card-text">date : {{ consult.date }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "../stores/token";
import { useConsultationStore } from "../stores/consultation";
import { fetchConsults } from "../plugins/fetch";
import { onMounted } from "@vue/runtime-core";

const consultStore = useConsultationStore();
const userStore = useUserStore();

onMounted(() => {
  fetchConsults().then((consultsDatas) => {
    consultStore.consultations = consultsDatas["hydra:member"];
  });
});
</script>
