<template>
  <div class="container">
    <div class="container-logo">
      <div class="div-img">
        <img
          width="150px"
          height="82px"
          class="img"
          src="https://demo4.drfuri.com/farmart2/wp-content/themes/farmart/images/logo.svg"
          alt=""
        />
      </div>
      <div class="items-right">
        <span class="cart-content">
          <svg
            aria-hidden="true"
            role="img"
            focusable="false"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM409.6 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
            ></path>
            <path
              d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4 102.4 45.936 102.4 102.4-45.936 102.4-102.4 102.4zM768 870.4c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
            ></path>
            <path
              d="M898.021 228.688c-12.859-15.181-32.258-23.888-53.221-23.888h-626.846l-5.085-30.506c-6.72-40.315-43.998-71.894-84.869-71.894h-51.2c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6h51.2c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395c6.718 40.314 43.997 71.893 84.867 71.893h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zM862.331 276.694l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
            ></path>
          </svg>
        </span>
        <span class="cart-text">
          <span class="title">Your Cart</span>

          <span class="cart-price-total"
            ><span class="woocommerce-Price-amount amount"
              ><bdi
                ><span class="woocommerce-Price-currencySymbol">$</span
                >0.00</bdi
              ></span
            ></span
          >
        </span>
      </div>
      <input id="check" type="checkbox" />
      <label id="icone" for="check"></label>

      <div class="barra">
        <nav>
          <a href="#">
            <div class="Link">Home</div>
          </a>
          <a href="#">
            <div class="Link">Notícias</div>
          </a>
          <a href="#">
            <div class="Link">Informativos</div>
          </a>
          <a href="#">
            <div class="Link">Curiosidades</div>
          </a>
          <a href="#">
            <div class="Link">Sobre</div>
          </a>
          <label for="menu-hamburguer"></label>
          <div class="mburg">
            <span class="hamburguer"></span>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBarComponent',
}
</script>
<style scoped>
.items-right {
  display: flex;
  align-items: center;
  height: 100%;
  flex: auto;
  text-align: right;
  justify-content: flex-end;
  flex: inherit;
  padding-left: 30px;
}
.header-element--cart .cart-contents .cart-content {
  display: flex;
  align-items: center;
}
.header-element--cart .cart-contents .cart-icon {
  position: relative;
  padding: 0 10px;
  display: block;
  line-height: 1;
}
.items-right svg {
  vertical-align: -0.125em;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
}
.header-element--cart .cart-contents .cart-content {
  display: flex;
  align-items: center;
}

input {
  display: none;
}

a {
  display: none;
}

.img {
  margin-left: 31px;
  margin-top: 14px;
}

.container {
  height: 120px;
  width: 100%;
}

@media (max-width: 1199px) {
  .menu {
    background: #ffffff;
    width: 100%;
    height: 37px;
    padding: 30px 0;
    position: fixed;
    top: 0;
    left: 0;
  }

  .img {
    margin-left: 38%;
  }

  #logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  body {
    background-color: #ffffff;
    font-family: 'Just Another Hand', cursive;
    overflow-x: hidden;
  }

  #check {
    display: none;
  }

  #icone {
    cursor: pointer;
    padding: 32px;
    position: fixed;
    z-index: 1;

    border: 1px #fff solid;
    top: 20px;
    left: 20px;
  }

  .barra {
    background-color: #ffffff;
    height: 100%;
    width: 400px;
    position: fixed;
    transition: all 0.2s linear;
    left: -250px;
  }

  nav {
    width: 100%;
    position: absolute;
    top: 80px;
  }

  nav a {
    text-decoration: none;
  }

  .Link {
    background-color: #ffffff;
    padding: 20px;
    font-family: 'Gotham';
    font-size: 12pt;
    transition: all 0.3s linear;
    color: #000000;
    opacity: 0;
  }

  .Link:hover {
    background-color: #dfcfcf;
    color: #ff0000;
  }

  #check:checked ~ .barra {
    transform: translateX(80%);
  }

  #check:checked ~ .barra nav a .Link {
    opacity: 1;
    transition-delay: 0.1s;
  }

  #banner1 {
    padding-top: 97px;
    width: 100%;
  }

  .mburg {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    position: fixed;
    top: 25px;
    left: 25px;
  }

  .hamburguer {
    position: relative;
    display: block;
    background: rgb(0, 0, 0);
    width: 20px;
    height: 0.5px;
    top: 16px;
    transition: 0.5s ease-in-out;
    border-radius: 6px;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: rgb(0, 0, 0);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -5px;
    border-radius: 6px;
  }

  .hamburguer:after {
    bottom: -6px;
    border-radius: 6px;
  }

  input {
    display: none;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
    top: 8px;
  }

  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    opacity: 0;
  }

  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    top: 8px;
  }
}
</style>
