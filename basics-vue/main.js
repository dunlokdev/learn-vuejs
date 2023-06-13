console.log(`Hello world from main.js`);

const app = Vue.createApp({
  // template: "<h1>Contact with {{myName}}</h1>",
  template: `<h1>Hello world from contact index.html</h1>
    <h3>My name is {{firstName + " " + lastName}}, i'm {{age}} years old</h3>
    <h3>My friend is {{isOldEnough ? friend : ""}}</h3>
    <button v-on:click="onChangeName">Change name</button>
    <button @click="onChangeName">Change name with shorter syntax</button>

    <button @click="onShow">Show modal</button>
    <div class="modal" v-if="isShow">
      <h1>This is title modal</h1>
    </div>
  `,
  data() {
    return {
      firstName: "Loc",
      lastName: "Duong",
      age: 18,
      friend: "Phuong Nga so beauty",
      isOldEnough: true,
      isShow: false,
    };
  },
  methods: {
    onChangeName() {
      this.firstName = "Nga";
      this.lastName = "Phuong";
    },
    onShow() {
      this.isShow = !this.isShow;
    },
  },
});

app.mount("#contact");
