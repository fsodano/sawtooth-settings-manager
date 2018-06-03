<template>
    <div class="panel">
        <div class="panel-header">
            <p>@ <code>{{ address }}</code></p>
        </div>
        <div class="panel-body">
            <pre>{{decodedData}}</pre>
        </div>
        <div class="panel-footer">
            <button class="btn btn-primary float-right">Edit</button>
        </div>
    </div>
</template>
<script>
import protobuf from 'protobufjs';

export default {
  props: ['address', 'data'],
  data() {
    return {
      decodedData: '',
    };
  },
  methods: {
    decodeMessage(base64EncodedMessage) {
      return protobuf.load('build/protos/setting.proto')
        .then((root) => {
          const Setting = root.lookup('Setting');
          const buffer = Uint8Array.from(atob(base64EncodedMessage), c => c.charCodeAt(0));
          return Setting.decode(buffer);
        });
    },
  },
  async created() {
    const jsonFormatSpaces = 2;
    this.decodedData = JSON.stringify(await this.decodeMessage(this.data), null, jsonFormatSpaces);
  },
};
</script>
