<template>
  <div class="container">
    <div class="container-left">
      <div class="menu-mobile">
        <input id="checkbox-menu" type="checkbox" />
        <label class="label-menu" for="checkbox-menu">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div class="menu-box">
          <div class="menu-top">
            <input id="checkbox-menu" type="checkbox" />
            <span class="menu-go-back">
              <svg
                aria-hidden="true"
                role="img"
                focusable="false"
                viewBox="0 0 32 32"
              >
                <path
                  d="M1.034 16.234l9.6-9.6c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-8.234 8.234h26.069c0.442 0 0.8 0.358 0.8 0.8s-0.358 0.8-0.8 0.8h-26.069l8.234 8.234c0.312 0.312 0.312 0.819 0 1.131-0.156 0.156-0.361 0.234-0.566 0.234s-0.409-0.078-0.566-0.234l-9.6-9.6c-0.312-0.312-0.312-0.819 0-1.131z"
                ></path>
              </svg>
            </span>
          </div>
          <nav class="menu-nav">
            <ul class="menu-ul">
              <li class="menu-li">jrrjj</li>
              <li class="menu-li">jdm</li>
              <li class="menu-li">nfnfmn</li>
              <li class="menu-li">mnnn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
              <li class="menu-li">nffn</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="div-img">
        <a href="" class="logo">
          <img
            src="https://demo4.drfuri.com/farmart2/wp-content/themes/farmart/images/logo.svg"
            class="img"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="container-center"></div>
    <div class="container-right">
      <div class="cart">
        <a href="">
          <span class="car-content">
            <span class="car-icon">
              <span class="min-intem">0</span>
              <span class="min-icon">
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
            </span>
            <span class="car-text">
              <span class="title">Your Cart</span>
              <span class="car-total">
                <span class="price">
                  <bdi>
                    <span class="price-simbol">$</span>
                    "0.00"
                  </bdi>
                </span>
              </span>
            </span>
          </span>
        </a>
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
@media (max-width: 1199px) {
  * {
    padding: 0px;
    margin: 0px;
  }
  ul {
    list-style: none;
  }
  .container {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    position: relative;
    background-color: #fff;
    height: 82px;
  }
  .container-left {
    display: flex;
    flex-direction: row;
  }
  .container-right {
    flex: 1;
    text-align: right;
    justify-content: flex-end;
  }
  .img {
    width: 150px;
    height: 50px;
  }
  .div-img {
    margin-left: 149%;
    margin-top: 17px;
  }
  .min-icon {
    vertical-align: -0.125em;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
  }
  .car-content {
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .car-text {
    display: flex;
    flex-direction: column;
  }
  .car-icon {
    display: flex;
    flex-direction: column;
  }
  .menu-mobile {
    height: 100%;
    width: 25px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 19px;
  }
  .menu-mobile input:checked {
  }
  .menu-mobile label {
    position: relative;
    z-index: 1;
    margin-top: 19px;
  }
  .menu-nav ul {
    position: absolute;
    width: 100%;
  }
  .menu-go-back {
    vertical-align: -0.125em;
    width: 1.4em;
    height: 1em;
    display: inline-block;
    fill: currentColor;
    margin-left: 19px;
    margin-top: 19px;
  }
  .menu-box {
    width: 78%;
    height: 100%;
    left: -78%;
    position: absolute;
    color: black;
    background-color: white;
  }
  .menu-box nav {
    padding: 25px 20px 28px;
    width: 78%;
  }
  .menu-box li {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    width: 97%;
  }
  input:checked ~ .menu-box {
    left: 0;
    margin-top: 0;
    position: fixed;
  }
  input:checked ~ .menu-box div {
    background-color: #fab528;
    width: 100%;
    height: 65px;
  }

  .menu-mobile input {
    display: none;
  }
  .checkbox-menu {
    opacity: 0;
  }
  .label-menu {
    position: absolute;
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 30px;
  }
  .label-menu span {
    position: absolute;
    display: block;
    height: 0.5px;
    width: 100%;
    margin-top: 17px;
    border-radius: 30px;
    background: #000000;
    transition: 0.25s ease-in-out;
  }
  .label-menu span:nth-child(1) {
    top: 0;
    width: 19px;
  }

  .label-menu span:nth-child(2) {
    top: 6px;
    width: 19px;
  }

  .label-menu span:nth-child(3) {
    top: 12px;
    width: 19px;
  }
  #checkbox-menu:checked + label span:nth-child(1) {
    display: none;
  }

  #checkbox-menu:checked + label span:nth-child(2) {
    display: none;
  }

  #checkbox-menu:checked + label span:nth-child(3) {
    display: none;
  }
}
</style>
