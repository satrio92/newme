<template>
  <div class="hero">
    <div class="hero-content">
      <h1 class="title">Selamat Datang, Laosars!</h1>
      <p>
        UKM LAOS adalah unit kegiatan mahasiswa yang berfokus sebagai wadah
        untuk memajukan kreatifitas dalam pengembangan Linux dan Open Source di
        Fakultas Ilmu Komputer Universitas Jember.
      </p>
      <img src="../assets/saly.png" class="mx-auto lg:absolute" />
      <a class="btn btn-secondary"
        >Yuk Cari Tau <font-awesome-icon icon="fas fa-arrow-right" class="pl-2"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap");

.hero {
  @apply h-screen p-4 lg:p-0;
}

.hero-content {
  @apply h-full relative bg-gradient-to-br from-[#2DCC70] rounded-3xl lg:rounded-none flex flex-col;
  align-items: flex-start !important;
  max-width: 100% !important;
  width: 100%;
}

.hero .title {
  @apply text-4xl lg:max-w-xl font-bold;
  line-height: 54px;
  text-align: left;
  color: #ffe595;
}

.hero p {
  @apply text-xs lg:text-sm lg:max-w-xl text-left;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
}

.hero .btn {
  @apply text-primary w-full lg:w-auto;
  border-radius: 10px;
  text-transform: capitalize;
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 5rem !important; /* 32px */
  }

  .hero .title {
    font-size: 4rem; /* 64px */
    line-height: 96px;
  }

  .hero img {
    bottom: 0;
    width: 40em; /* 640px */
    right: 1rem;
  }
}
</style>
