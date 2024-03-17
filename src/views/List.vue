<template>
    <main class="w-full flex-grow p-6 py-12">
        <div class="max-w-[700px] text-[80%] w-full m-auto flex justify-between mb-4 options">
            <div class="flex">
                <button v-on:click="filter='all'" class="duration-200 hover:text-violet-500" v-bind:class="[filter === 'all' && 'text-violet-500 underline underline-offset-4 decoration-dotted']">Tüm Eklenenler</button>
                <span class="block mx-2">&</span>
                <button v-on:click="filter='favs'" class="duration-200 hover:text-violet-500" v-bind:class="[filter === 'favs' && 'text-violet-500 underline underline-offset-4 decoration-dotted']">Favoriye Eklenenler</button>
            </div>
            <div>
                <router-link to="/create" class="text-lime-500 duration hover:underline hover:underline-offset-4 hover:decoration-dotted">
                    <i class="ri-add-circle-line"></i>
                    <span class="ml-1">Yazı Ekle</span>
                </router-link>
            </div>
        </div>
        <div class="max-w-[700px] w-full m-auto diary-list" v-if="filter === 'all'">
            <div class="text-[80%] w-full m-auto border-t border-slate-200 text-right py-4">
                Toplam {{ diary.list.length }} kayıt bulunmaktadır.
            </div>
            <div v-for="diary in diary.list" v-bind:key="diary.id" class="w-full bg-pink-100 border-2 border-pink-200 rounded-lg flex justify-between mb-4 p-6">
                <div>
                    <router-link v-bind:to="'/detail/' + diary.slug" class="block duration-200 hover:text-violet-500">
                        <span class="block font-medium">{{ diary.title }}</span>
                    </router-link>
                    <small class="text-fuchsia-900 font-medium opacity-50">{{ diary.created_at }}</small>
                </div>
                <div class="flex">
                    <button v-on:click="addToFav(diary.id)" class="w-[40px] h-[40px] text-gray-300 border-2 border-pink-200 duration-200 hover:border-pink-400 rounded-full flex items-center justify-center bg-white mr-1" v-bind:class="[diary.isFav && 'text-red-600 border-pink-400']"><i class="ri-heart-3-line"></i></button>
                    <button v-on:click="deleteDiaryById(diary.id)" class="w-[40px] h-[40px] text-red-500 border-2 border-pink-200 duration-200 hover:border-pink-400 rounded-full flex items-center justify-center bg-white"><i class="ri-delete-bin-fill"></i></button>
                </div>
            </div>
        </div>
        <div class="max-w-[700px] w-full m-auto diary-list" v-if="filter === 'favs'">
            <div class="text-[80%] w-full m-auto border-t border-slate-200 text-right py-4">
                Toplam {{ diary.favs.length }} kayıt bulunmaktadır.
            </div>
            <div v-for="diary in diary.favs" v-bind:key="diary.id" class="w-full bg-pink-100 border-2 border-pink-200 rounded-lg flex justify-between mb-4 p-6">
                <div>
                    <router-link v-bind:to="'/detail/' + diary.slug" class="block duration-200 hover:text-violet-500">
                        <span class="block font-medium">{{ diary.title }}</span>
                    </router-link>
                    <small class="text-fuchsia-900 font-medium opacity-50">{{ diary.created_at }}</small>
                </div>
                <div class="flex">
                    <button v-on:click="addToFav(diary.id)" class="w-[40px] h-[40px] text-gray-300 border-2 border-pink-200 duration-200 hover:border-pink-400 rounded-full flex items-center justify-center bg-white mr-1" v-bind:class="[diary.isFav && 'text-red-600 border-pink-400']"><i class="ri-heart-3-line"></i></button>
                    <button v-on:click="deleteDiaryById(diary.id)" class="w-[40px] h-[40px] text-red-500 border-2 border-pink-200 duration-200 hover:border-pink-400 rounded-full flex items-center justify-center bg-white"><i class="ri-delete-bin-fill"></i></button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { useDiaryStore } from '@/stores/DiaryStore'
    export default {
        data() {
            const diary = useDiaryStore()
            const filter = 'all'
            return { diary, filter }
        },
        methods: {
            addToFav(id) {
                this.diary.addToFav(id)
            },
            deleteDiaryById(id) {
                this.diary.deleteDiaryById(id)
            }
        }
    }
</script>

<style scoped>

</style>