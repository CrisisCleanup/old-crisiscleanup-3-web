<template>
<div class = "row justify-content-center">
    <div class = "card text-white bg-dark text-center">
        <div class = "card-body">
                <p class="card-text">
                    "Cleanup assistance hotline. My name is {{name}}. How may I help you?..."
                </p>
        </div>
    </div>
    </div>
</div>
</template>

<script>
  export default {
      name: 'phone-incoming-call-script',
      props: [
          'name',
      ]
  }
</script>