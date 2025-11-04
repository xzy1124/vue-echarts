<template>
  <div class="item">
    <!-- 设置插槽 -->
     <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.item {
    height: 25rem;  // 增加高度到合适的值，如300px
    border: 1px solid blue;
    margin: .625rem;
    background-color: rgba(12, 130, 255, .85);
    overflow: hidden;  // 防止内容溢出
    position: relative;  // 确保定位正常
}
</style>