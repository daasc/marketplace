<template>
  <div class="Login">
    <h1>Login</h1>
    <br />
    <input type="text" placeholder="Name" required />
    <br />
    <br />
    <input type="email" placeholder="Email" required />
    <br />
    <br />
    <div class="Bt">
      <button>Log In</button>
    </div>
    <br />
    <section>
      <p style="text-align: center">Or login width</p>
    </section>
    <br />
    <div class="social">
      <i class="fa-brands fa-google"></i
      ><a style="text-decoration: none" href="#"
        >Sing In <b style="color: black">Google</b></a
      >
    </div>
  </div>
</template>

<script></script>

<style scoped>
.Login h1 {
  text-align: center;
}

.Login {
  margin: 150px;
  margin-left: 35%;
  border-radius: 8px;
  border: solid rgb(202, 201, 201);
  background-color: rgb(239, 236, 236);
  height: 180px;
  padding: 50px;
  margin-right: 35%;
}

.Login input {
  text-align: center;
  width: 80%;
  margin-left: 7%;
}

.social {
  border-radius: 2px;
  border: solid rgb(211, 208, 208) 1px;
  text-align: center;
  background-color: rgb(173, 170, 170);
  width: 80%;
  margin-left: 7%;
  height: 20px;
}

.social a {
  color: rgb(255, 255, 255);
}

.Bt button {
  cursor: pointer;
  background-color: rgb(255, 243, 8);
  width: 50%;
  margin-left: 25%;
  border-radius: 2px;
  border: solid 1px yellow;
  border-radius: 5px;
}

.Login p {
  text-decoration: overline;
}
</style>
