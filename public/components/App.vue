<template>
  <div>
    <router-view class="mt-2"></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      appName: Const.APP_NAME,
    }
  }
}
</script>
<style>
  @font-face {
    font-family: "Audiowide";
    font-display: swap;/*attends que la font soit chargée */
    src: url(/fonts/Audiowide-Regular.eot) format('eot');
    src: url(/fonts/Audiowide-Regular.eot?) format('eot'),
    url(/fonts/Audiowide-Regular.woff2) format('woff2'),
    url(/fonts/Audiowide-Regular.woff) format('woff'),
    url(/fonts/Audiowide-Regular.ttf) format('ttf');
  }
  h1, h2, h3, h4, h5, h6, .card-header {
    font-family: Audiowide !important;
  }
  h2 {
    text-align: center;
  }
</style>
