<template>
    <div class="panel">
        <div class="panel-header">
            <p>@ <code>{{ address }}</code></p>
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label class="form-label">
                    <textarea v-model="decodedData" class="form-input" rows="5"></textarea>
                </label>

            </div>
        </div>
        <div class="panel-footer">
            <button class="btn btn-primary float-right">Edit</button>
        </div>
    </div>
</template>
<script>
export default {
  props: ['address', 'data'],
  computed: {
    decodedData() {
      return atob(this.data);
    },
  },
};
</script>
