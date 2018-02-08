<template>
  <section>
    <h1>{{ titleLabel }}</h1>
    <div v-for="(value, key) in data.fields">
      <!--{{key}}-->
      <div v-if="value.field_type=='text'">
        <!--{{key}} - text-->
        <TextField :label-t="value.label_t"></TextField>
      </div>
      <div v-else-if="value.field_type=='hidden'">
        {{key}} - hidden
      </div>
      <div v-else-if="value.field_type=='textarea'">
        {{key}} - textarea
      </div>
      <div v-else-if="value.field_type=='select'">
        {{key}} - select
      </div>
      <div v-else-if="value.field_type=='multiselect'">
        {{key}} - multiselect
      </div>
      <div v-else-if="value.field_type=='checkbox'">
        {{key}} - checkbox
      </div>
      <div v-else-if="value.field_type=='radio'">
        {{key}} - checkbox
      </div>
    </div>
  </section>
</template>

<script>
import TextField from './TextField.vue';
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
  },
  components: {
    TextField
  }
}
</script>
