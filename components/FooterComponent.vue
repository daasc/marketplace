<template>
  <footer>
    <div class="left">
      <p>Marketplace &copf; Todos os direitos reservados.</p>
    </div>
    <div class="right">
      <p>Mantenha-se conectado:</p>
      <ul>
        <li>
          <a href=""><i class="fa-brands fa-facebook-f"></i></a>
        </li>
        <li>
          <a href=""><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a href=""><i class="fab fa-instagram"></i></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>
<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px 20px;
  align-items: center;
  border-top: 1px solid;
}

footer ul {
  display: flex;
  list-style: none;
}

footer ul li {
  padding: 0 10px;
}

footer ul li a {
  color: #000;
  font-size: 24px;
}

footer p {
  color: #000;
  font-size: 18px;
}

footer .left {
  float: left;
  width: 100%;
  text-align: center;
  align-items: center;
}

footer .right {
  margin-top: 10px;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  float: right;
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  footer {
    flex-direction: row;
  }

  footer .left {
    text-align: left;
    width: 50%;
  }

  footer .right {
    margin-top: 0;
    width: 50%;
    justify-content: flex-end;
    flex-direction: row;
  }
}
</style>
