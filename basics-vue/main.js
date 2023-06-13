console.log(`Hello world from main.js`);

const app = Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    onLogEvent(event, x, y) {
      console.log(`Event is running...`);
      this.x = x;
      this.y = y;
    },
    onMouseMove(e) {
      console.log(`Event mouse move: `, e);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});

app.mount("#contact");
