
<template>
  <h1>{{ reverseName }}</h1>
  <h1>
    {{ name.split('').reverse().join('') }}
  </h1>
</template>

<script>
  export default {
    data() {
      return {
        name: '12345',
      }
    },
    computed: {
      reverseName() {
        return this.name.split('').reverse().join('');
      },
    },
  }
</script>
