import axios from "axios";

export default {
  name: "Home",
  props: [],
  data() {
    return {
      beers: null,
      page: +this.$route.query.page || +this.$route.params.page || 1,
    };
  },
  created() {},
  mounted() {
    this.getBeers();
  },
  methods: {
    getBeers() {
      axios.get(`https://api.punkapi.com/v2/beers?per_page=20&page=${this.page}`).then(response => {
        console.log(response.data);
        this.beers = response.data;
      });
    },
    onPageChange() {
      this.getBeers();
      this.$router.push({path: "/", query: {page: this.page}});
    },
  },
};
