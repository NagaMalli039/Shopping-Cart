<template>
    <q-card class="q-ma-md">
      <q-card-section>
        <q-form @submit="submitForm">
          <q-input
            v-model="formData.name"
            label="Name"
            outlined
            dense
            
        />
          <q-input
            v-model="formData.email"
            label="Email"
            outlined
            dense
          />
          <q-btn
            type="submit"
            color="primary"
            label="Submit"
            class="q-mt-md"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup>

  const formData = ref({
    name: '',
    email: ''
  });
  
  const submitForm = () => {
    console.log('Form submitted with data:', formData);
  };
  </script>
  