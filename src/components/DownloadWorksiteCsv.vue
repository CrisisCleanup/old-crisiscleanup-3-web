<template>
  <button class="btn btn-primary" @click="download">{{btnMessage}}</button>
</template>

<script>

  export default {
    data() {
      return {
        taskId: '',
        isPolling: false,
        downloadUrl: null,
        pollId: null,
        btnMessage: 'Download CSV'
      }
    },
    methods: {
      download() {
        const eventId = this.$store.state.worker.event.id;
        const orgId = this.$store.state.worker.currentOrgId;

        this.axios.get(`/worksites/generator?event_id=${eventId}&org_id=${orgId}`).then(resp => {
          this.btnMessage = 'Generating CSV';
          this.taskId = resp.data.task_id;
          this.isPolling = true;
          this.pollBackend();
        });
      },
      pollBackend() {
        this.pollId = setInterval(() => {
          this.axios.get(`/worksites/generator?task_id=${this.taskId}`).then(resp => {
            if (resp.data.url) {
              this.downloadUrl = resp.data.url;
              window.location.replace(this.downloadUrl);
              this.isPolling = false;
              clearTimeout(this.pollId);
              this.btnMessage = 'Download CSV';
            }
          });
        }, 2000);
      }
    }
  }
</script>
