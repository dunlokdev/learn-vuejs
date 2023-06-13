console.log(`Hello world from main.js`);

const app = Vue.createApp({
  data() {
    return {
      data: [
        {
          fact: "Cats have 3 eyelids.",
          length: 20,
        },
        {
          fact: "Cats walk on their toes.",
          length: 24,
        },
        {
          fact: "Most cats adore sardines.",
          length: 25,
        },
        {
          fact: "Cats dislike citrus scent.",
          length: 26,
        },
        {
          fact: "Cats have supersonic hearing",
          length: 28,
        },
        {
          fact: "Female cats are polyestrous",
          length: 28,
        },
        {
          fact: "A form of AIDS exists in cats.",
          length: 30,
        },
      ],
    };
  },
  methods: {},
});

app.mount("#contact");
