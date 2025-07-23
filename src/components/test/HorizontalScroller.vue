<template>
  <div class="scrollable-container">
    <div class="scroll-wrapper" ref="scrollContainer">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="scroll-item"
        :class="{ active: activeIndex === index }"
        @click="scrollToIndex(index)"
        ref="itemRefs"
      >
        <slot name="item" :item="item" :active="activeIndex === index"></slot>
      </div>
    </div>
    <div class="navigation">
      <button class="nav-btn prev" @click="scrollToPrev" :disabled="activeIndex === 0">
        <span>←</span>
      </button>
      <button
        class="nav-btn next"
        @click="scrollToNext"
        :disabled="activeIndex === items.length - 1"
      >
        <span>→</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import type { PropType } from 'vue'
export default defineComponent({
  name: 'HorizontalScroller',
  props: {
    items: {
      type: Array as PropType<any[]>,
      required: true,
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const scrollContainer = ref<HTMLElement | null>(null)
    const itemRefs = ref<HTMLElement[]>([])
    const activeIndex = ref(props.initialIndex)

    const scrollToIndex = (index: number) => {
      if (index < 0 || index >= props.items.length || !scrollContainer.value) return

      activeIndex.value = index

      const itemElement = itemRefs.value[index]
      if (!itemElement) return

      const containerWidth = scrollContainer.value.offsetWidth
      const itemWidth = itemElement.offsetWidth
      const scrollLeft = itemElement.offsetLeft - containerWidth / 2 + itemWidth / 2

      scrollContainer.value.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      })

      emit('change', index)
    }

    const scrollToNext = () => {
      scrollToIndex(activeIndex.value + 1)
    }

    const scrollToPrev = () => {
      scrollToIndex(activeIndex.value - 1)
    }

    const handleScroll = () => {
      if (!scrollContainer.value || itemRefs.value.length === 0) return

      const containerMiddle =
        scrollContainer.value.scrollLeft + scrollContainer.value.offsetWidth / 2

      let closestIndex = 0
      let closestDistance = Infinity

      itemRefs.value.forEach((item, index) => {
        const itemMiddle = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(containerMiddle - itemMiddle)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      if (activeIndex.value !== closestIndex) {
        activeIndex.value = closestIndex
        emit('change', closestIndex)
      }
    }

    onMounted(() => {
      if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', handleScroll)
        // Initial scroll to selected item
        setTimeout(() => {
          scrollToIndex(activeIndex.value)
        }, 100)
      }
    })

    watch(
      () => props.initialIndex,
      newIndex => {
        if (newIndex !== activeIndex.value) {
          scrollToIndex(newIndex)
        }
      }
    )

    return {
      scrollContainer,
      itemRefs,
      activeIndex,
      scrollToIndex,
      scrollToNext,
      scrollToPrev,
    }
  },
})
</script>

<style lang="less">
.scrollable-container {
  position: relative;
  width: 100%;
  margin: 0 auto;

  .scroll-wrapper {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; // Hide scrollbar for Firefox
    -ms-overflow-style: none; // Hide scrollbar for IE/Edge
    padding: 20px 0;

    &::-webkit-scrollbar {
      display: none; // Hide scrollbar for Chrome/Safari
    }
  }

  .scroll-item {
    flex: 0 0 33.333%;
    scroll-snap-align: center;
    transition: all 0.3s ease;
    transform: scale(0.8);
    opacity: 0.7;
    padding: 0 10px;
    box-sizing: border-box;

    &.active {
      transform: scale(1);
      opacity: 1;
      z-index: 1;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    .nav-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      pointer-events: auto;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &.prev {
        margin-left: 10px;
      }

      &.next {
        margin-right: 10px;
      }
    }
  }
}
</style>
