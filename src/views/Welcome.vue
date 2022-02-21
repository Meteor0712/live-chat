<template>
  <div class="welcome container">
      <p>welcome</p>
      <SingupForm />
  </div>

</template>

<script>
import SingupForm from '../components/SingupForm.vue'

export default {
    components: { SingupForm }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
</style>