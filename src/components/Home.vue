<template>
  <section class="hero">
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
  </section>
  <section class="container mx-auto">
    <div class="section">
      <div class="header">
        <h2 class="title">Manfaat Laosars</h2>
        <p>
          Perkembangan digital ini adalah hal yang baik untuk pengusaha, semua
          orang mendapatkan hak yang sama dalam berkompetisi.
        </p>
      </div>
      <div class="content">
        <div class="item">
          <img src="../assets/trophy.png" alt="Trophy" />
          <p class="title">Relasi</p>
          <p>
            Dapat menambah wawasan membuat terbebas dari permasalahan, relasi
            yang tepat bisa menemukan ide menyelesaikan masalah dan menambah
            pengalaman
          </p>
        </div>
        <div class="item">
          <img src="../assets/computer.png" alt="Computer" />
          <p class="title">Bakat</p>
          <p>
            Meningkatkan dan mengembangkan potensi yang ada pada setiap
            mahasiswa secara optimal melalui berbagai kegiatan
          </p>
        </div>
        <div class="item">
          <img src="../assets/file.png" alt="File" />
          <p class="title">Sertifikat</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
    </div>
  </section>
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

.section {
  @apply px-2 py-4;
}

.section .header {
  @apply my-16;
}

.section .header .title {
  @apply text-2xl lg:text-5xl mb-4;
  color: #000000;
  font-weight: 600;
}

.section p {
  @apply text-[10px] lg:text-sm;
  color: #000000;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
}

.section .header p {
  @apply text-xs lg:text-sm max-w-3xl mx-auto;
}

.section .content {
  @apply flex flex-wrap justify-center lg:justify-between gap-12;
}

.section .content .item {
  @apply flex flex-col justify-center;
  max-width: 210px;
}

.section .content .item .title {
  @apply order-first lg:order-none lg:mb-4 text-[20px] lg:text-3xl font-bold;
}

.section .content .item img {
  @apply my-4 lg:my-0 lg:mb-4 mx-auto;
  max-width: 190px;
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 2rem !important; /* 32px */
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

  .section .content .item {
    max-width: 306px;
  }
}
</style>
