<template>
  <v-card>
    <img :src="beer.image_url">
        <div>
            <h3>{{beer.name}}</h3>
            <p>{{beer.description}}</p>
            <router-link :to="{path: `/beer/${beer.id}`}">
                <v-btn color="primary" elevation="2">
                    View details
                </v-btn>
            </router-link>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "Card",
    props: ["beer"]
}
</script>

<style>
.v-card div {
  padding: 0.5rem 1rem;
}

.v-card img {
  width: 100%;
  max-height: 250px;
  object-fit: contain;
  margin: 1rem 0;
}

.v-card p {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.v-card button {
  margin-bottom: 1rem;
}
</style>