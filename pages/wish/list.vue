<template>
  <main class="wish-list main">
    <h2>Wishlist</h2>
    <table class="whish-list-table">
      <thead>
        <tr>
          <th>
            <span class="nobr"> </span>
          </th>
          <th></th>
          <th>
            <span class="nobr"> Product name </span>
          </th>
          <th>
            <span class="nobr"> Unit price </span>
          </th>
          <th>
            <span class="nobr"> Stock status </span>
          </th>
          <th>
            <span class="nobr"> </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>
            <div class="trash">
              <i
                class="fa-solid fa-trash-can"
                @click="removeToWishList(item.id)"
              ></i>
            </div>
          </td>
          <td>
            <img
              width="120"
              height="120"
              :src="item.urlImage"
              alt="product's image"
            />
          </td>
          <td>{{ item.name }}</td>
          <td class="product-price">${{ item.price }}</td>
          <td>
            <span v-if="item.stock > 0" class="in-stock">In Stock</span>
            <span v-else class="out-of-stock">Out Of Stock</span>
          </td>
          <td class="product-add-to-cart">
            <button class="button-add-product" role="button">
              Add to cart
            </button>
          </td>
        </tr>
        <tr v-if="!products.length">
          <td class="no-product">
            <span>No products added to the wishlist</span>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script>
export default {
  name: 'WishList',
  layout: 'default',
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const wishlist = JSON.parse(localStorage.getItem('wish'))
      this.products = wishlist || []
    }
  },

  methods: {
    removeToWishList(id) {
      if (process.client) {
        const wishlist = JSON.parse(localStorage.getItem('wish'))
        const newWishlist = wishlist.filter((product) => product.id !== id)
        localStorage.setItem('wish', JSON.stringify(newWishlist))
        this.products = newWishlist
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.wish-list {
  h2 {
    text-align: center;
  }
  table {
    width: 80%;
    margin: 0 auto;
    &.whish-list-table {
      font-size: 100%;
      border-color: #e5e5e5;
      margin-bottom: 26px;
      thead {
        th {
          background-color: #f5f5f5;
          font-weight: 400;
          color: #555;
          border-color: #eeeeee;
          padding: 11px 30px;
        }
      }
      tbody {
        tr {
          .no-product {
            padding: 20px;
          }
          td {
            border-bottom: 1px solid #eee;
            text-align: center;
            .trash {
              i {
                font-size: 25px;
                cursor: pointer;
              }
            }
            .in-stock {
              color: #2f8a33;
              font-weight: bold;
            }
            .out-of-stock {
              color: #e31e0a;
              font-weight: bold;
            }
            &.product-price {
              color: #2f8a33;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>
