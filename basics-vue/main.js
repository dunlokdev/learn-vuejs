console.log(`Hello world from main.js`);

const app = Vue.createApp({
  // template: "<h1>Contact with {{myName}}</h1>",
  data() {
    return {
      myName: "Dunlokdev",
      age: 18,
      friend: "Phuong Nga so beauty",
      isOldEnough: true,
    };
  },
});

app.mount("#contact");
