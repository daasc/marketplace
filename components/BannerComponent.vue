<template>
  <section class="banner">
    <div id="slide" class="slide">
      <div class="info">
        <p id="title" class="title">
          Active Summer With
          <br />
          Juice Milk 300ml
        </p>
        <p id="description" class="description">
          New arrivals with naturre fruits, juice,
          <br />
          milks, essential for summer
        </p>
        <div class="btn">
          <a href="">Shop Now</a>
        </div>
      </div>
      <div class="arrows">
        <button id="back" class="btn" @click="back()">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" class="btn" @click="next()">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="saleoff">
      <div class="info">
        <h3 class="title">20% SALE OFF</h3>
        <p class="description">
          Synthetic seeds
          <br />
          Net 2.0 OZ
        </p>
        <div class="btn">
          <a href="">Shop Now</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'BannerComponent',
  data() {
    return {
      images: [
        'https://i.ibb.co/JR1w3cP/slide1.jpg',
        'https://i.ibb.co/CBTYCM2/slide2.jpg',
      ],
      count: 1,
      pass: true,
      carouselInterval: null,
    }
  },
  mounted() {
    this.startInterval()
  },
  methods: {
    startInterval() {
      this.carouselInterval = setInterval(() => {
        if (this.pass) {
          this.count = this.count + 1
          if (this.count > this.images.length) {
            this.count = 1
          }
          // eslint-disable-next-line nuxt/no-globals-in-created
          document.getElementById('slide').style.backgroundImage =
            'url(' + this.images[this.count - 1] + ')'
          this.update()
          this.buttonDisabled()
        } else {
          this.pass = true
        }
      }, 10000)
    },
    buttonDisabled() {
      document.getElementById('back').disabled = true
      document.getElementById('next').disabled = true
      setTimeout(function () {
        document.getElementById('back').disabled = false
        document.getElementById('next').disabled = false
      }, 500)
    },
    updateValues({ colorTitle, colorDescription, textTitle }) {
      document.getElementById('title').style.color = colorTitle
      document.getElementById('description').style.color = colorDescription
      document.getElementById('title').innerHTML = textTitle
    },
    update() {
      if (
        this.images[this.count - 1] === 'https://i.ibb.co/CBTYCM2/slide2.jpg'
      ) {
        this.updateValues({
          colorTitle: '#FFF',
          colorDescription: '#FFF',
          textTitle: 'Farmart<br>Food Takeaway',
        })
      } else if (
        this.images[this.count - 1] === 'https://i.ibb.co/JR1w3cP/slide1.jpg'
      ) {
        this.updateValues({
          colorTitle: '#000',
          colorDescription: '#000',
          textTitle: 'Active Summer With<br>Juice Milk 300ml',
        })
      }
    },
    back() {
      this.count = this.count - 1
      if (this.count <= 0) {
        this.count = 2
      }
      this.pass = false
      document.getElementById('slide').style.backgroundImage =
        'url(' + this.images[this.count - 1] + ')'
      this.update()
      this.buttonDisabled()
    },
    next() {
      this.count = this.count + 1
      if (this.count > this.images.length) {
        this.count = 1
      }
      this.pass = false
      document.getElementById('slide').style.backgroundImage =
        'url(' + this.images[this.count - 1] + ')'
      this.update()
      this.buttonDisabled()
    },
  },
}
</script>
<style scoped>
.banner {
  background-image: url(@/assets/images/backgroud.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  padding: 40px 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.banner .slide {
  display: flex;
  min-height: 52vh;
  flex-basis: 100%;
  background-image: url(@/assets/images/slide1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-bottom: 15px;
  justify-content: center;
  transition: ease 0.5s;
}
.banner .info {
  margin: auto 10px;
  text-align: left;
  width: 70%;
}
.banner .info .btn a {
  color: #000;
  border-color: #000;
  padding: 15px 30px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  border-radius: 3px;
  transition: ease 0.5s;
}
.banner .info .btn a:hover {
  box-shadow: 0 0.5em 0.5em -0.5em #000;
}
.slide .info .title {
  margin-bottom: 15px;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -1px;
  font-weight: 700;
  color: #2a4356;
  transition: ease 0.5s;
}

.slide .info .description {
  margin-bottom: 45px;
  font-size: 16px;
  line-height: 26px;
  color: #2a4356;
  transition: ease 0.5s;
}
.banner .slide .arrows {
  margin-top: auto;
  margin-bottom: 20px;
}
.banner .slide .arrows .btn {
  width: 26px;
  height: 26px;
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  border-radius: 3px;
  color: #222;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: ease 0.5s;
  cursor: pointer;
}
.banner .slide .arrows .btn:hover {
  background-color: #fac250;
  border: none;
}

.banner .saleoff {
  display: flex;
  background-color: #fac250;
  min-height: 40vh;
  flex-basis: 100%;
  background-image: url(@/assets/images/saleoff.jpg);
  background-position: bottom right;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-top: 15px;
  justify-content: center;
}
.saleoff .info .title {
  margin-bottom: 3px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: -1.5px;
}
.saleoff .info .description {
  margin-bottom: 87px;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -1px;
}

@media (min-width: 900px) {
  .banner {
    padding: 54px 15px;
  }
  .banner .info {
    width: 82%;
  }
  .banner .slide {
    flex-basis: 65%;
    min-height: 55vh;
    margin: auto;
  }
  .banner .saleoff {
    flex-basis: 31%;
    min-height: 55vh;
    margin: auto;
  }
  .slide .info .title {
    font-size: 36px;
    margin-bottom: 33px;
    line-height: 48px;
  }
  .slide .info .description {
    margin-bottom: 80px;
  }
  .saleoff .info .title {
    font-size: 40px;
    margin-bottom: 33px;
  }
  .saleoff .info .description {
    margin-bottom: 120px;
  }
}
</style>
