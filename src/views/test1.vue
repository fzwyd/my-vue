<template>
  <div class="carousel-demo">
    <h2>Horizontal Carousel</h2>
    <HorizontalScroller :items="carouselItems" @change="handleChange">
      <template #item="{ item, active }">
        <div class="custom-item" :style="{ backgroundColor: item.color }">
          <h3>{{ item.title }}</h3>
          <p>{{ active ? item.description : '' }}</p>
        </div>
      </template>
    </HorizontalScroller>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HorizontalScroller from '@/components/test/HorizontalScroller.vue';

export default defineComponent({
  components: {
    HorizontalScroller
  },
  setup() {
    const carouselItems = ref([
      { title: 'Item 1', description: 'Description for item 1', color: '#f5a623' },
      { title: 'Item 2', description: 'Description for item 2', color: '#7ed321' },
      { title: 'Item 3', description: 'Description for item 3', color: '#bd10e0' },
      { title: 'Item 4', description: 'Description for item 4', color: '#4a90e2' },
      { title: 'Item 5', description: 'Description for item 5', color: '#50e3c2' },
    ]);

    const handleChange = (index: number) => {
      console.log('Active item changed:', index);
    };

    return {
      carouselItems,
      handleChange
    };
  }
});
</script>

<style lang="less">
.carousel-demo {
  max-width: 800px;
  margin: 0 auto;

  .custom-item {
    height: 200px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 20px;

    h3 {
      margin: 0 0 10px;
      font-size: 20px;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>
