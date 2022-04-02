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
      search: this.$route.query.search || this.$route.params.search || "",
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
      if (this.search == "") {
        axios.get(`https://api.punkapi.com/v2/beers?per_page=20&page=${this.page}`).then(response => {
          this.beers = response.data;
        });
        this.$router.push({path: "/", query: {page: this.page}});
      } else {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.search}`).then(response => {
          this.beers = response.data;
        });
        this.$router.push({path: "/", query: {page: this.page, search: this.search}});
      }
    },
    onPageChange() {
      this.getBeers();
      this.$router.push({path: "/", query: {page: this.page, search: this.search}});
    },
  },
};
