<template>
  <div class="container">
    <input id="check" type="checkbox" />
    <label id="icone" for="check"></label>
    <img
      width="150px"
      height="82px"
      class="img"
      src="https://demo4.drfuri.com/farmart2/wp-content/themes/farmart/images/logo.svg"
      alt=""
    />
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
      </nav>
    </div>
    <label for="menu-hamburguer"></label>
    <div class="mburg">
      <span class="hamburguer"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBarComponent',
}
</script>
<style scoped>
template {
  justify-items: right;
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

@media (max-width: 1100px) {
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
    width: 250px;
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
    transform: translateX(250px);
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
