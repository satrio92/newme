<template>
  <!-- 
    TODO : 1. Membenarkan gradient pada hero section agar sesuai dengan tampilan figma
           2. Membuat carousel proker sesuai dengan tampilan figma
           3. Koneksi ke API BE (Proker)
   -->
  <Navbar />
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">Selamat Datang, Laosars!</h1>
      <p>
        UKM LAOS adalah unit kegiatan mahasiswa yang berfokus sebagai wadah
        untuk memajukan kreatifitas dalam pengembangan Linux dan Open Source di
        Fakultas Ilmu Komputer Universitas Jember.
      </p>
      <img src="../assets/saly.png" class="mx-auto lg:absolute w-1/2 -z-10" />
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
      <div class="content flex">
        <div class="item flex-col max-w-xs">
          <img
            src="../assets/trophy.png"
            alt="Trophy"
            class="mx-auto lg:mb-4"
          />
          <p class="title">Relasi</p>
          <p>
            Dapat menambah wawasan membuat terbebas dari permasalahan, relasi
            yang tepat bisa menemukan ide menyelesaikan masalah dan menambah
            pengalaman
          </p>
        </div>
        <div class="item flex-col max-w-xs">
          <img
            src="../assets/computer.png"
            alt="Computer"
            class="mx-auto lg:mb-4"
          />
          <p class="title">Bakat</p>
          <p>
            Meningkatkan dan mengembangkan potensi yang ada pada setiap
            mahasiswa secara optimal melalui berbagai kegiatan
          </p>
        </div>
        <div class="item flex-col max-w-xs">
          <img src="../assets/file.png" alt="File" class="mx-auto lg:mb-4" />
          <p class="title">Sertifikat</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="container mx-auto">
    <div class="section">
      <div class="header">
        <h2 class="title">Program Kerja</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
      </div>
      <div class="h-60 lg:h-96 bg-[#F8F8F8] py-12 rounded-3xl shadow-inner">
        <swiper
          :slidesPerView="2"
          :spaceBetween="30"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="h-full w-full"
        >
          <swiper-slide class="bg-gradient-to-br from-[#B65EBA] to-[#2E8DE1]"
            >Slide 1</swiper-slide
          ><swiper-slide>Slide 2</swiper-slide
          ><swiper-slide>Slide 3</swiper-slide
          ><swiper-slide>Slide 4</swiper-slide
          ><swiper-slide>Slide 5</swiper-slide
          ><swiper-slide>Slide 6</swiper-slide
          ><swiper-slide>Slide 7</swiper-slide
          ><swiper-slide>Slide 8</swiper-slide
          ><swiper-slide>Slide 9</swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <section class="container mx-auto">
    <div class="section">
      <div class="header">
        <h2 class="title">Divisi Kami</h2>
        <p>Membangun dan menggerakan kegiatan UKM LAOS</p>
      </div>
      <!-- Desktop -->
      <div class="content hidden lg:flex">
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/humas.png"
            alt="Logo Humas"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Humas</p>
            <p class="lg:text-left">
              Divisi yang bertanggung jawab dalam perihal penyebaran informasi
              terutama di lingkup Fakultas Ilmu Komputer Univesitas Jember.
            </p>
          </div>
        </div>
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/pemrograman.png"
            alt="Logo Pemrograman"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Pemrograman</p>
            <p class="lg:text-left">
              Divisi yang berfokus pada pemrograman untuk mewujudkan tujuan dari
              UKM LAOS yaitu turut andil dalam menyebarkan open source.
            </p>
          </div>
        </div>
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/os.png"
            alt="Logo Os & Jaringan"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Os & Jaringan</p>
            <p class="lg:text-left">
              Divisi yang memberikan wawasan mengenai Linux, jaringan komputer
              (cloud computing), hingga keamanan siber.
            </p>
          </div>
        </div>
        <div class="item flex-col lg:flex-row max-w-lg">
          <img
            src="../assets/multimedia.png"
            alt="Logo Multimedia"
            class="mx-auto lg:mr-4"
          />
          <div class="flex flex-col justify-center">
            <p class="title lg:text-left">Multimedia</p>
            <p class="lg:text-left">
              Divisi yang berfokus pada bidang desain dan UI/UX dalam web maupun
              aplikasi serta mengelola poster yang di sebarkan di sosial media
              UKM LAOS.
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="content flex lg:hidden">
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/humas.png"
            alt="Logo Humas"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Humas</p>
          <p>
            Divisi yang bertanggung jawab dalam perihal penyebaran informasi
            terutama di lingkup Fakultas Ilmu Komputer Univesitas Jember.
          </p>
        </div>
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/pemrograman.png"
            alt="Logo Pemrograman"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Pemrograman</p>
          <p>
            Divisi yang berfokus pada pemrograman untuk mewujudkan tujuan dari
            UKM LAOS yaitu turut andil dalam menyebarkan open source.
          </p>
        </div>
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/os.png"
            alt="Logo Os & Jaringan"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Os & Jaringan</p>
          <p>
            Divisi yang memberikan wawasan mengenai Linux, jaringan komputer
            (cloud computing), hingga keamanan siber.
          </p>
        </div>
        <div class="item flex-col lg:flex-row max-w-xs">
          <img
            src="../assets/multimedia.png"
            alt="Logo Multimedia"
            class="mx-auto lg:mr-4"
          />
          <p class="title">Multimedia</p>
          <p>
            Divisi yang berfokus pada bidang desain dan UI/UX dalam web maupun
            aplikasi serta mengelola poster yang di sebarkan di sosial media UKM
            LAOS.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Navbar from '../components/Navbar.vue'

export default {
  name: "Homepage",
  components: {
    Swiper,
    SwiperSlide,
    Navbar
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
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
  @apply flex-wrap justify-center lg:justify-around gap-12;
}

.section .content .item {
  @apply flex justify-center;
}

.section .content .item .title {
  @apply order-first lg:order-none lg:my-4 text-[20px] lg:text-3xl font-bold;
}

.section .content .item img {
  @apply my-4 lg:my-0;
  max-width: 200px;
}

.swiper-slide {
  @apply max-h-72 rounded-3xl;
  background: pink;
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
}
</style>
