<template>
  <nav class="nav-bar">
    <div class="container-left">
      <div class="div-img">
        <router-link to="/" class="logo">
          <img
            src="https://demo4.drfuri.com/farmart2/wp-content/themes/farmart/images/logo.svg"
            class="img"
            alt=""
          />
        </router-link>
      </div>
    </div>
    <div class="container-right">
      <div class="login">
        <router-link
          id="fm-login"
          to=""
          href="https://demo4.drfuri.com/farmart2/my-account/"
        >
          <span class="login-icon"
            ><svg
              aria-hidden="true"
              role="img"
              focusable="false"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
              ></path>
              <path
                d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
              ></path></svg
          ></span>
        </router-link>
      </div>
      <router-link to="/wish/list" class="wishlist">
        <span
          class="wishlist-icon"
          href="https://demo4.drfuri.com/farmart2/wishlist/"
        >
          <span class="min-intem">0</span>
          <span class="wishlist-min-icon"
            ><svg
              aria-hidden="true"
              role="img"
              focusable="false"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M486.4 972.8c-4.283 0-8.566-1.074-12.434-3.222-4.808-2.67-119.088-66.624-235.122-171.376-68.643-61.97-123.467-125.363-162.944-188.418-50.365-80.443-75.901-160.715-75.901-238.584 0-148.218 120.582-268.8 268.8-268.8 50.173 0 103.462 18.805 150.051 52.952 27.251 19.973 50.442 44.043 67.549 69.606 17.107-25.565 40.299-49.634 67.55-69.606 46.589-34.147 99.878-52.952 150.050-52.952 148.218 0 268.8 120.582 268.8 268.8 0 77.869-25.538 158.141-75.901 238.584-39.478 63.054-94.301 126.446-162.944 188.418-116.034 104.754-230.314 168.706-235.122 171.376-3.867 2.149-8.15 3.222-12.434 3.222zM268.8 153.6c-119.986 0-217.6 97.614-217.6 217.6 0 155.624 120.302 297.077 221.224 388.338 90.131 81.504 181.44 138.658 213.976 158.042 32.536-19.384 123.845-76.538 213.976-158.042 100.922-91.261 221.224-232.714 221.224-388.338 0-119.986-97.616-217.6-217.6-217.6-87.187 0-171.856 71.725-193.314 136.096-3.485 10.453-13.267 17.504-24.286 17.504s-20.802-7.051-24.286-17.504c-21.456-64.371-106.125-136.096-193.314-136.096z"
              ></path></svg
          ></span>
        </span>
      </router-link>
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
                    0.00
                  </bdi>
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavBarComponent',
}
</script>
<style lang="css" scoped>
.price {
  color: black;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  display: block;
  font-family: 'Muli', sans-serif;
}

a {
  text-decoration: none;
}

.car-content {
  display: flex;
  align-items: center;
}

.car-text {
  margin-left: 12px;
  line-height: 1;
}

bdi {
  unicode-bidi: isolate;
}

.title {
  line-height: 1;
  display: block;
  margin-bottom: 7px;
  font-size: 11px;
  color: #777;
  text-decoration: none;
  font-family: 'Muli', sans-serif;
}

.img {
  width: 150px;
  display: inline-block;
  vertical-align: middle;
  height: auto;
  max-width: 100%;
  border-style: none;
  border: 0;
}

svg:not(:root) {
  overflow: hidden;
}

.min-icon,
svg {
  vertical-align: -0.125em;
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  fill: currentColor;
}

.nav-bar {
  padding: 0px 0px;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  margin-bottom: 101px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
  align-items: center;
}

.container-left {
  padding-left: 30px;
  padding-right: 30px;
  outline: none;
  display: flex;
  justify-items: left;
  flex: auto;
  height: 34px;
  align-items: center;
}

.container-right {
  text-align: right;
  justify-content: end;
  flex: inherit;
  padding-left: 30px;
  padding-right: 30px;
  outline: none;
  display: flex;
  align-items: center;
  flex: auto;
}

.car-icon,
.wishlist-icon,
.login-icon {
  position: relative;
  padding: 0 12px;
  display: block;
  line-height: 1;
  color: black;
}

.min-icon span svg {
  vertical-align: -0.125em;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
}

.min-intem {
  position: absolute;
  right: 0;
  top: -11px;
  display: block;
  text-align: center;
  background-color: orange;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  color: black;
  padding: 4px 4px 4px;
  line-height: 1;
  font-family: 'Muli', sans-serif;
  min-width: 10px;
  cursor: pointer;
  z-index: 10;
}

@media (max-width: 1199px) {
  ul {
    list-style: none;
  }

  span {
    position: relative;
  }

  .car-icon,
  .wishlist-icon,
  .login-icon {
    position: relative;
    padding: 0 5px;
    display: block;
    line-height: 1;
    color: black;
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    position: fixed;
    background-color: #fff;
    height: 82px;
    color: black;
    padding: 0;
    z-index: 100;
    align-items: center;
  }

  .container-left {
    padding-left: 30px;
    padding-right: 30px;
    outline: none;
    display: flex;
    justify-items: left;
    flex: auto;
    height: 34px;
    align-items: center;
  }

  .container-right {
    text-align: center;
    justify-content: flex-end;
    padding-left: 30px;
  }

  .img {
    width: 150px;
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
    color: black;
  }

  .car-icon {
    display: flex;
    flex-direction: column;
  }

  .min-icon,
  svg {
    vertical-align: -0.125em;
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    fill: currentColor;
  }
}
</style>
