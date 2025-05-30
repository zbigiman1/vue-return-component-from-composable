<script setup>
import { useForm } from "./composables/useForm"


const MyForm = useForm({
  fields:
    [
      {
        type: 'email'
      }, {
        type: 'password'
      }
    ]
})
</script>

<template>
  <MyForm />
</template>