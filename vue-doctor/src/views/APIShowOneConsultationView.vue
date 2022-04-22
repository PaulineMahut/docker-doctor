<template>
  <div class="d-flex flex-wrap gap-5 justify-content-center overflow-scroll">
    <div>
      <div class="card" style="width: 18rem">
        <img
          src="https://place-hold.it/300"
          class="card-img-top"
          alt="https://place-hold.it/300"
        />
        <div class="card-body">
          <h5 class="card-title">{{ currentConsult.doctor_name }}</h5>
          <p class="card-text">date : {{ currentConsult.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useConsultationStore } from "../stores/consultation";

const route = useRoute();
const storeConsult = useConsultationStore();
const currentConsult = ref({});

onMounted(() => {
  currentConsult.value =  storeConsult.consultations.find(
    (current_consult: any) => String(current_consult.id) === route.params.id
  );
});
</script>
