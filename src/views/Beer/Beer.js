import axios from "axios";

export default {
  name: "Beer",
  props: [],
  data() {
    return {
      id: +this.$route.query.id || +this.$route.params.id || 1,
      beer: null,
    };
  },
  created() {},
  mounted() {
    this.getBeer();
  },
  methods: {
    getBeer() {
      axios.get(`https://api.punkapi.com/v2/beers/${this.id}`).then(response => {
        this.beer = response.data[0];
        console.log(this.beer);
      });
    },
  },
};
