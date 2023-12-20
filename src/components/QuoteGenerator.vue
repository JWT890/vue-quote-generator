<template>
    <div class="quote-generator">
        <h1>Random Quotes</h1>
        <p v-if="!quote">Click for a random quote</p>
        <blockquote v-else>
            <p v-html="quote.text"></p>
            <footer>- {{ quote.author }}</footer>
        </blockquote>
        <button @click="getQuote">Get Quote</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      quote: null,
    };
  },
  methods: {
    async getQuote() {
      // Replace this with your quote source (API, local array, etc.)
      const quotes = [
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      this.quote = randomQuote;
    },
  },
};
</script>