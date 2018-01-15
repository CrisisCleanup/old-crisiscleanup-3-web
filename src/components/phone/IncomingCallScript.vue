<template>
<div class = "row justify-content-center">
    <div class = "card text-white bg-dark text-center">
        <div class = "card-body">
                <p class="card-text">
                    "Cleanup assistance hotline. My name is {{userName.first}}. How may I help you?..."
                </p>
        </div>
    </div>
    </div>
</div>
</template>

<script>
  import { mapMutations, mapState, mapActions } from 'vuex' //do we want to map acitons here?
  export default {
      name: 'phone-incoming-call-script',
      props: [
          'userName',
      ],
      methods: {
      }
  }
</script>