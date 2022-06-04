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
            <h2>Farmart Newsletter</h2>
            <p class="formDescription">
              Register now to get updates on promotions and coupns. Dont worry!
              We not spam
            </p>
            <form method="" action="#">
              <label>
                <input
                  type="email"
                  autocomplete="off"
                  placeholder="Your email..."
                  name="email"
                />
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
<style scoped>
.informationArea {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: inherit;
}
.informationContent {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
.informationRow {
  display: flex;
  flex-wrap: nowrap;

  font-family: var(--fontFamily);
  color: var(--fontColor);
}
.cardContact {
  display: flex;
  max-width: 41%;
  height: 100%;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0px;
}
.cardContactTitle {
  padding-bottom: 33px;
}
.cardContactTitle h2 {
  font-size: 18px;
}
.cardContactDescription p {
  font-size: 16px;
  margin: 0px;
  line-height: 30px;
}
.cardContactInfo ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  justify-content: center;
  padding-left: 0px;
}
.cardContactInfo ul li {
  display: list-item;
  display: block;
  flex-direction: row;
  padding-top: 5px;
  padding-bottom: 5px;
}
.cardContactInfo ul li h3 {
  margin-top: 8px;
  margin-left: 23px;
  margin-bottom: 30px;
}
.cardContactInfo ul li span {
  font-size: 20px;
}
.cardMenu {
  max-width: 58%;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.cardMenuContent {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: inherit;
  justify-content: space-between;
  height: 100%;
}
.menu {
  padding-left: 15px;
  padding-right: 15px;
  margin: 0;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  max-width: 25%;
}
.menu h2 {
  font-size: 18px;
  margin: 0px;
  padding-bottom: 33px;
}
.menu ul {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.menu ul li {
  list-style: none;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu ul li a {
  width: 100%;
  text-decoration: none;
  width: 130px;
  white-space: nowrap;
  color: var(--fontColor);
  transition: all 0.5s;
}
.menu ul li a:hover {
  color: var(--colorTheme);
}
.cardForm {
  display: flex;
  max-width: 25%;
  flex-wrap: inherit;
  min-height: 1px;
  padding-left: 19px;
  padding-right: 15px;
}
.cardFormContent {
  display: flex;
  flex-direction: column;
}
.cardFormContent h2 {
  font-family: var(--fontFamily);
  color: var(--fontColor);
  padding: 0px 0px 33px;
  margin: 0px;
}
.cardFormContent p {
  font-family: var(--fontFamily);
  color: var(--fontColor);
  margin-bottom: 24px;
  margin-top: 0px;
  line-height: 30px;
}
.cardFormContent h2 {
  font-size: 18px;
}
.cardFormContent form {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.cardFormContent form label {
  width: 60%;
  display: flex;
  flex-grow: 1;
}
.cardFormContent form label::before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 26px;
  width: 16px;
  height: 16px;
}
.cardFormContent form label input {
  flex-grow: 1;
  height: 45px;
  width: 60%;
  font-size: 20px;
  font-family: var(--fontFamily);
  border: 1.5px solid #555;
  padding: 0px 20px 0px 55px;
  border-right: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.cardFormContent form button {
  width: 40%;
  height: 48px;
  padding: auto;
  border-radius: 0px;
  border: none;
  border-left: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: var(--colorTheme);
  font-weight: 400;
}
.cardFormContent form button:hover {
  cursor: pointer;
}
@media screen and (max-width: 990px) {
  .informationArea {
    padding: 0px;
  }
  .informationContent {
    flex-wrap: wrap;
  }
  .informationRow {
    flex-wrap: wrap;
  }
  .cardForm {
    max-width: 41%;
    margin: 30px 0px 0px;
  }
  .cardContact {
    padding: 0px;
  }
}
@media screen and (max-width: 788px) {
  .cardContact {
    max-width: 100%;
  }
  .cardMenu {
    max-width: 100%;
    padding: 0px;
  }
  .cardForm {
    max-width: 100%;
    width: 100%;
  }
  .cardFormContent {
    width: 100%;
  }
  .cardFormContent form label {
    width: 40%;
  }
  .cardFormContent form label input {
    width: 40%;
  }
  .cardFormContent form button {
    width: 60%;
  }
}
@media screen and (max-width: 490px) {
  .cardMenuContent {
    flex-wrap: wrap;
  }
  .menu {
    max-width: 100%;

    margin-top: 30px;
    justify-content: space-between;
  }
  .menu ul li {
    justify-content: flex-start;
  }
}
</style>
