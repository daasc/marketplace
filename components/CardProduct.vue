<template>
  <div class="card-product">
    <div class="content-image">
      <img :src="urlImage" alt="" />
    </div>
    <div class="content-description">
      <div class="name-company">
        <span>Format</span>
        <i
          v-if="isWish"
          class="fa-solid fa-heart"
          @click="removeToWishList()"
        ></i>
        <i v-else class="fa-regular fa-heart" @click="addToWishList()"></i>
      </div>
      <div class="name-product">{{ name }}</div>
      <div class="star-product">
        <StarComponent
          v-for="(item, index) in star"
          :key="index"
        ></StarComponent>
      </div>
      <div class="weight-product">{{ weight }}g</div>
      <div class="price-product">${{ price }}</div>
    </div>
    <div class="content-add-product">
      <div class="add-product">
        <div class="quantity buttons_added">
          <input
            type="button"
            value="-"
            class="minus"
            @click="minusCounter()"
          />
          <input
            type="number"
            step="1"
            min="1"
            max=""
            name="quantity"
            :value="counter"
            title="Qty"
            class="input-text qty text"
            size="4"
            pattern=""
            inputmode=""
          />
          <input type="button" value="+" class="plus" @click="plusCounter()" />
        </div>
        <div class="total-price">
          Total: <span>${{ totalPrice }}</span>
        </div>
      </div>
      <button class="button-add-product" role="button">Add to cart</button>
    </div>
  </div>
</template>
<script>
import StarComponent from './StarComponent.vue'
export default {
  name: 'CardProduct',
  components: { StarComponent },
  props: {
    urlImage: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      star: [1, 1, 1, 1, 1],
      counter: 1,
      totalPrice: this.price,
      isWish: false,
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const wishlist = JSON.parse(localStorage.getItem('wish')) || []
      const findProduct = wishlist.find((product) => product.id === this.id)
      if (findProduct) {
        this.isWish = true
      }
    }
  },

  methods: {
    minusCounter() {
      if (this.counter > 1) {
        this.counter--
      }
      this.totalPrice = Number(this.price * this.counter).toFixed(2)
    },
    plusCounter() {
      this.counter++
      this.totalPrice = Number(this.price * this.counter).toFixed(2)
    },
    removeToWishList() {
      if (process.client) {
        const wishlist = JSON.parse(localStorage.getItem('wish'))
        const newWishlist = wishlist.filter((product) => product.id !== this.id)
        localStorage.setItem('wish', JSON.stringify(newWishlist))
        this.isWish = false
      }
    },
    addToWishList() {
      if (process.client) {
        const wishlist = JSON.parse(localStorage.getItem('wish')) || []
        wishlist.push({
          id: this.id,
          name: this.name,
          urlImage: this.urlImage,
          weight: this.weight,
          stock: this.stock,
          price: this.price,
        })
        localStorage.setItem('wish', JSON.stringify(wishlist))
        this.isWish = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.card-product {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 335px;
  // max-height: 450px;
  padding: 10px;
  border: 1px solid #c9c9c9;

  &:hover {
    .content-add-product {
      display: block;
    }
  }
  .content-add-product {
    transition: 0.5s ease-out;
    display: none;

    .add-product {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      .total-price {
        font-size: 12px;
        color: #a1a1a1;
        span {
          color: #659900;
          font-weight: bold;
        }
      }
      .quantity {
        display: inline-block;
        .input-text.qty {
          width: 35px;
          height: 39px;
          padding: 0 5px;
          text-align: center;
          background-color: transparent;
          border: 1px solid #efefef;
        }
        &.buttons_added {
          text-align: left;
          position: relative;
          white-space: nowrap;
          vertical-align: top;
        }

        &.buttons_added input {
          display: inline-block;
          margin: 0;
          vertical-align: top;
          box-shadow: none;
        }

        &.buttons_added .minus,
        &.buttons_added .plus {
          padding: 7px 8px 8px;
          height: 41px;
          background-color: #ffffff;
          border: 1px solid #efefef;
          cursor: pointer;
        }

        &.buttons_added .minus {
          border-right: 0;
        }

        &.buttons_added .plus {
          border-left: 0;
        }

        &.buttons_added .minus:hover,
        &.buttons_added .plus:hover {
          background: #eeeeee;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          margin: 0;
        }
        &.buttons_added .minus:focus,
        &.buttons_added .plus:focus {
          outline: none;
        }
      }
    }
  }

  .content-image {
    width: 212px;
    height: 212px;
    align-self: center;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
  .content-description {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 120px;
    .name-product {
      color: #09f;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
    }
    .name-company {
      display: flex;
      justify-content: space-between;

      .fa-solid,
      .fa-regular {
        color: red;
        cursor: pointer;
      }
    }
    .star-product {
      display: flex;
    }
    .weight-product {
      color: #a1a1a1;
      font-size: 13px;
    }
    .price-product {
      color: #659900;
      font-weight: bold;
      font-size: 17px;
    }
  }
}
</style>
