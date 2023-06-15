console.log(`Hello world from main.js`);

const app = Vue.createApp({
  data() {
    return {
      classThumbnail: "cat-thumbnail",
      data: [
        {
          thumbnail:
            "https://i.pinimg.com/564x/a8/8b/32/a88b32e8df8051ec2a2fd97f05a06a5b.jpg",
          fact: "Cats have 3 eyelids.",
          length: 20,
          isCart: true,
        },
        {
          thumbnail:
            "https://i.pinimg.com/736x/03/1c/19/031c19e9d2f4d9460eb1e005025f7878.jpg",
          fact: "Cats walk on their toes.",
          length: 24,
          isCart: false,
        },
        {
          thumbnail:
            "https://i.pinimg.com/564x/47/fb/b7/47fbb7a5fe873c71b6453659a0f3a332.jpg",
          fact: "Most cats adore sardines.",
          length: 25,
          isCart: true,
        },
        {
          thumbnail:
            "https://i.pinimg.com/564x/16/7e/a8/167ea8a261c17d5ed9a0a35c911e8288.jpg",
          fact: "Cats dislike citrus scent.",
          length: 26,
          isCart: true,
        },
        {
          thumbnail:
            "https://i.pinimg.com/736x/af/d0/b7/afd0b71a1509e022a6b3359085c50789.jpg",
          fact: "Cats have supersonic hearing",
          length: 28,
          isCart: false,
        },
      ],
    };
  },
  methods: {
    onToggleCart(event, item) {
      console.log(item);
      item.isCart = !item.isCart;
    },
  },
});

app.mount("#contact");
