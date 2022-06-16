<template>
  <form>
    <div class="Login">
      <h1>LOG IN</h1>
      <br />
      <hr class="hr1" />
      <br />

      <p>Log In To Your Account</p>
      <br />
      <br />

      <input type="text" placeholder="Username or email adress" required />
      <br />
      <br />

      <input type="email" placeholder="Password" required />
      <br />
      <br />

      <div class="um">
        <input type="checkbox" checked />
        <label>Remember to me</label>
      </div>

      <div class="Bt">
        <button>Log In</button>
      </div>
      <br />

      <section>
        <div class="linhaComTexto">
          <span>Or Login Widht</span>
        </div>
      </section>
      <br />

      <div class="social">
        <button style="color: grey">
          <i class="fa-brands fa-google"></i
          >&ensp;&ensp;&ensp;&ensp;&emsp;&emsp;Continue With
          <b style="font-size: 18px">Google</b>
        </button>
      </div>
    </div>
  </form>
</template>

<script></script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 20px;
}

.Login {
  background-color: rgb(237, 233, 233);
  border: 1px solid rgb(252, 248, 248);
  width: 28%;
  text-align: center;
  height: 50%;
  padding: 90px 0;
  position: relative;
  left: 35%;
}

.Login h1 {
  text-align: center;
  font-size: 25px;
}

.Login p {
  position: absolute;
  left: 30px;
  font-size: 15px;
}

.hr1 {
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(219, 216, 216),
    transparent
  );
}

::-webkit-input-placeholder {
  font-size: 10px;
  position: absolute;
  top: 10px;
  left: 10px;
}

.Login input {
  font-size: 25px;
  border: 1px solid rgb(216, 213, 213);
  border-radius: 3px;
  width: 82%;
}

.um {
  position: relative;
  padding-left: 10px;
  display: block;
  right: 140px;
  margin-bottom: 8px;
  cursor: pointer;
}

.um label {
  padding-left: 20px;
  position: absolute;
  right: 70px;
  font-size: 12px;
  bottom: 4px;
}

.Bt button {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 15px;
  color: black;
  width: 85%;
  height: 40px;
  cursor: pointer;
  background-color: rgb(221, 181, 3);
  border: 1px solid rgb(221, 181, 3);
  border-radius: 2px;
  transition: 0.5s;
}

.Bt button:hover {
  background-color: rgb(229, 206, 0);
}

.linhaComTexto {
  width: 100%;
  height: 2px;
  text-align: center;
  background-image: linear-gradient(to right, transparent, #ccc, transparent);
}

.linhaComTexto > span {
  position: relative;
  bottom: 10px;
  font-size: 15px;
  background-color: rgb(237, 233, 233);
  padding: 0 10px;
}

.social button {
  width: 80%;
  font-size: 15px;
  height: 35px;
  color: #ccc;
  cursor: pointer;
  border: solid 0px;
  box-shadow: 10px;
}

@media screen and (max-width: 1000px) {
  .Login {
    width: 50%;
    margin-bottom: 20px;
  }
}
</style>
