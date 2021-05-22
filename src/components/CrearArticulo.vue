<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Dar de alta un articulo</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mb-4">
        <form v-on:submit.prevent="guardarArticulo()">
          <v-text-field
            v-model="articulo.descripcion"
            label="Descripción"
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="articulo.precio"
            type="number"
            prefix="$"
            label="Precio"
            outlined
            required
          >
          </v-text-field>
          <v-text-field
            v-model="articulo.stock"
            type="number"
            label="Stock"
            outlined
            required
          >
          </v-text-field>

          <v-card-actions>
            <v-btn color="warning" class="mb-4" type="submit">Guardar</v-btn>
          </v-card-actions>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "crearArticulo",
  data() {
    return {
      articulo: {
        descripcion: "",
        precio: "",
        stock: "",
      },
    };
  },
  methods: {
    guardarArticulo() {
      const data = new FormData();
      const router = this.$router;

      data.append("descripcion", this.articulo.descripcion);
      data.append("precio", this.articulo.precio);
      data.append("stock", this.articulo.stock);

      axios.post('http://localhost/vue-crud/public/apirest/articulos.php', data)
      .then(() => {
        router.push('/articulos');
      })
      .catch(err => console.error(err));
    },
  },
};
</script>