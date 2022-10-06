<template>
    <Navbar />
    <section class="w-full h-screen bg-primary px-6 md:px-[85px] py-[50px]">
        <div class="bg-white w-full md:w-[600px] flex flex-col py-12 px-8 md:px-16 gap-2 rounded-xl shadow-md">
            <p class="text-start">Kami harap harimu menyenangkan!</p>
            <h2 class="text-start text-[56px] text-black font-bold mb-2">Sign Up</h2>
            <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2 mb-2">
                <label for="nama">Nama Lengkap</label>
                <input type="text" name="nama" id="nama" placeholder="Fawwas Gaming" class="bg-[#FFF7DE] py-3 px-5 rounded-sm text-black placeholder:text-gray-400" v-model="user.nama">
            </div>
            <div class="input-group flex flex-col text-start text-black text-sm font-light gap-2 mb-2">
                <label for="nim">Nomor Induk Mahasiswa</label>
                <input type="text" name="nim" id="nim" placeholder="192410103069" class="bg-[#FFF7DE] py-3 px-5 rounded-sm text-black placeholder:text-gray-400" v-model="user.nim">
            </div>
            <div class="flex justify-center mt-6">
                <button class="bg-primary text-white py-2 px-6 flex items-center gap-3" @click="next()" style="border-radius: 40px">
                    <p>NEXT</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3.56224 13.4062H17.7466L14.3646 9.11719C14.2685 8.99531 14.3552 8.8125 14.5122 8.8125H16.031C16.2607 8.8125 16.4787 8.91797 16.6193 9.09844L20.463 13.9734C20.8497 14.4656 20.5005 15.1875 19.8747 15.1875H3.56224C3.45912 15.1875 3.37474 15.1031 3.37474 15V13.5938C3.37474 13.4906 3.45912 13.4062 3.56224 13.4062Z" fill="white"/>
                    </svg>
                </button>
            </div>
            <div class="flex gap-2 justify-center mt-4">
                <p>Sudah punya akun?</p>
                <router-link to="/login"><p class="text-primary font-medium">Sign In</p></router-link>
            </div>
        </div>
        <img src="../assets/human-illustration.png" alt="ilustrasi" class="absolute top-32 right-8 hidden md:block">
    </section>
</template>

<script>

import Navbar from '../components/Navbar.vue'

export default {
    name: 'Register',
    components: {
        Navbar
    },
    data() {
        return {
            user: {}
        }
    },
    methods: {
        next() {
            console.log(this.user)
        }
    }
}
</script>