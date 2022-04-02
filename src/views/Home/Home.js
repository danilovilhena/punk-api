import axios from "axios";
import Card from "../../components/Card.vue";

export default {
  name: "Home",
  props: [],
  components: {
    Card,
  },
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
        this.beers = response.data;
      });
    },
    onPageChange() {
      this.getBeers();
      this.$router.push({path: "/", query: {page: this.page}});
    },
  },
};
