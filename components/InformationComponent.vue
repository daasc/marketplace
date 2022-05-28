<template>
  <section class="informationArea">
    <div class="informationContent">
      <div class="informationRow">
        <div class="cardContact">
          <div class="cardContactContent">
            <div class="cardContactTitle">
              <h2>Farmart – Your Online Foods & Grocery</h2>
            </div>
            <div class="cardContactDescription">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus viverra iaculis. Etiam vulputate et justo eget
                scelerisque.
              </p>
            </div>
            <div class="cardContactInfo">
              <ul>
                <li>
                  <span class="material-symbols-outlined"> call </span>
                  Hotline 24/7:
                  <h3>(+965) 7492-4277</h3>
                </li>
                <li>
                  <span class="material-symbols-outlined"> home </span>
                  959 Homestead Street Eastlake, NYC
                </li>
                <li>
                  <span class="material-symbols-outlined"> mail </span>

                  support@farmart.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cardMenu">
          <div class="cardMenuContent">
            <div class="menu">
              <h2>Useful Links</h2>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#"> Contact</a></li>
                <li><a href="#">Help Center </a></li>
                <li><a href="#">Carrer</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Flash Scale</a></li>
                <li><a href="#">Official</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </div>
            <div class="menu">
              <h2>Help Center</h2>
              <ul>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Shippinng</a></li>
                <li><a href="#">Product Returns</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">Other Issues</a></li>
              </ul>
            </div>
            <div class="menu">
              <h2>Farmat Busisnes</h2>
              <ul>
                <li><a href="#">Sell on Farmart</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Our Suppliers</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Advertise With Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cardForm">
          <div class="cardFormContent">
            <h2>Farmart Newsletter </h2>
            <p class="formDescription">Register now to get updates on promotions and coupns. Dont worry! We not spam</p>
            <form method="" action="#">
              <label>
                <input type="email" autocomplete="off" placeholder="Your email..." name="email">
              </label>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'InformationComponent',
}
</script>
<style lang="scss">
@import 'assets/scss/informationArea';
</style>
