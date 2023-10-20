<template>
  <div>{{ now }}</div>
</template>

<script>
  export default {
    computed: {
      now() {
        return Date.now();
      },
    },
  }
</script>
