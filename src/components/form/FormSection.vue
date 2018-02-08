<template>
  <section>
    <h1>{{ titleLabel }}</h1>
    <div v-for="(value, key) in data.fields">
      {{key}}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titleLabel: {
      type: String
    },
    labelName: {
      type: String
    },
    data: {
      type: Object
    },
    titleHelp: {
      type: String
    },
    isRequired: {
      type: Boolean
    },
  },
  computed: {
  }
}
</script>
