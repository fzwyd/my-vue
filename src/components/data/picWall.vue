<template>
  <div class="wrapper">
    <div class="inner" :style="{ '--quantity': 10 }">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
        :style="{ '--index': index, '--color-card': card.color }"
      >
        <div class="img"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { color: '142, 249, 252' },
  { color: '142, 252, 204' },
  { color: '142, 252, 157' },
  { color: '215, 252, 142' },
  { color: '252, 252, 142' },
  { color: '252, 208, 142' },
  { color: '252, 142, 142' },
  { color: '252, 142, 239' },
  { color: '204, 142, 252' },
  { color: '142, 202, 252' },
]
</script>

<style scoped lang="scss">
@keyframes rotating {
  from {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
  }
  to {
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  --w: 10vw;
  --h: 35vh;
  --translateZ: calc((var(--w) + var(--h)) + 0px);
  --rotateX: -15deg;
  --perspective: 1000px;
  position: absolute;
  width: var(--w);
  height: var(--h);
  top: 30%;
  left: calc(50% - (var(--w) / 2) - 2.5px);
  z-index: 2;
  transform-style: preserve-3d;
  transform: perspective(var(--perspective));
  animation: rotating 20s linear infinite;
  .card {
    height: var(--h);
    width: var(--w);
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
  }
}
@media (max-width: 600px) {
  .inner {
    --w: 40vw;
    --h: 25vh;
  }
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #0000
    radial-gradient(
      circle,
      rgba(var(--color-card), 0.2) 0%,
      rgba(var(--color-card), 0.6) 80%,
      rgba(var(--color-card), 0.9) 100%
    );
}
</style>
