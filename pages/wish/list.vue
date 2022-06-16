<template>
  <div class="wish-list">
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
              <i class="fa-solid fa-trash-can"></i>
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
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'WishList',
  layout: 'default',
  data() {
    return {
      products: [
        {
          urlImage:
            'https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?resize=300%2C300&amp;ssl=1',
          name: 'Soft Mochi Galeto Ice Cream',
          price: 200,
          stock: 10,
        },
        {
          urlImage:
            'https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?resize=300%2C300&amp;ssl=1',
          name: 'Soft Mochi Galeto Ice Cream',
          price: 200,
          stock: 10,
        },
        {
          urlImage:
            'https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?resize=300%2C300&amp;ssl=1',
          name: 'Soft Mochi Galeto Ice Cream',
          price: 200,
          stock: 0,
        },
      ],
    }
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
