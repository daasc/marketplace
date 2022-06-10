<template>
  <div class="buttons">
    <span class="button-prev" :class="{ disabled: canPrev }" @click="prev()">
      <svg viewBox="0 0 32 32">
        <path
          d="M22.4 32c0.205 0 0.409-0.078 0.566-0.234 0.312-0.312 0.312-0.819 0-1.131l-13.834-13.834 13.834-13.834c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-14.4 14.4c-0.312 0.312-0.312 0.819 0 1.131l14.4 14.4c0.156 0.156 0.361 0.234 0.566 0.234z"
        ></path>
      </svg>
    </span>
    <span class="button-next" :class="{ disabled: canNext }" @click="next()">
      <svg viewBox="0 0 32 32">
        <path
          d="M8 32c-0.205 0-0.409-0.078-0.566-0.234-0.312-0.312-0.312-0.819 0-1.131l13.834-13.834-13.834-13.834c-0.312-0.312-0.312-0.819 0-1.131s0.819-0.312 1.131 0l14.4 14.4c0.312 0.312 0.312 0.819 0 1.131l-14.4 14.4c-0.156 0.156-0.361 0.234-0.566 0.234z"
        ></path>
      </svg>
    </span>
  </div>
</template>
<script>
export default {
  name: 'ButtonNextAndPrevCategory',
  data() {
    return {
      contNext: 1,
      canNext: false,
      canPrev: true,
    }
  },
  methods: {
    next() {
      document.getElementById('list_category').scrollLeft += 200
      this.checkPrevButton()
      this.checkNextButton()
      this.contNext++
    },
    prev() {
      document.getElementById('list_category').scrollLeft -= 200
      this.checkPrevButton()
      this.checkNextButton()
    },
    checkNextButton() {
      console.log(document.getElementById('list_category').scrollLeft)
      console.log(this.contNext)
      if (
        process.client &&
        this.contNext * 200 <
          document.getElementById('list_category').scrollLeft
      ) {
        this.canNext = true
      } else {
        this.canNext = false
      }
    },
    checkPrevButton() {
      if (
        process.client &&
        document.getElementById('list_category').scrollLeft === 0
      ) {
        this.canPrev = true
      } else {
        this.canPrev = false
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.disabled {
  pointer-events: none;
  cursor: not-allowed;
}
.buttons {
  display: flex;
  gap: 10px;

  .button-prev,
  .button-next {
    font-size: 12px;
    width: 26px;
    height: 26px;
    line-height: 26px;
    color: #000;
    background-color: #f3f3f3;
    border-color: #02010100;
    text-align: center;
    svg {
      vertical-align: -0.125em;
      width: 1em;
      height: 1em;
      display: inline-block;
      fill: currentColor;
    }
  }
}
</style>
