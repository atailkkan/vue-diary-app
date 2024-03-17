<template>
    <main class="w-full flex-grow p-6 py-12">
        <div class="max-w-[700px] w-full m-auto text-center form-group">
            <h2 class="text-[125%] font-semibold mb-4">Günlüğünüz için yeni yazı ekleyin</h2>
            <form v-on:submit.prevent="submitForm">
                <div class="form-item mb-4">
                    <input v-model="title" type="text" class="w-full outline-none border-2 border-slate-300 duration-200 focus:border-slate-500 text-center p-3 rounded-lg" placeholder="Başlık giriniz" />
                </div>
                <div class="form-item mb-4">
                    <textarea v-model="detail" class="w-full h-[200px] block outline-none border-2 border-slate-300 duration-200 focus:border-slate-500 text-center p-3 rounded-lg" placeholder="İçerik giriniz"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-4 form-item">
                    <button type="submit" class="col-span-1 font-semibold bg-lime-300 duration-200 hover:bg-lime-400 p-3 px-6 rounded-lg">Yazı ekle</button>
                    <button v-on:click.prevent="cancelHandler" class="col-span-1 font-semibold bg-red-300 duration-200 hover:bg-red-400 p-3 px-6 rounded-lg">İptal et</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import { useDiaryStore } from '../stores/DiaryStore.js'
    import slugify from 'slugify'
    import moment from 'moment'
    export default {
        data() {
            const diary = useDiaryStore()
            return {
                title: '',
                detail: '',
                diary
            }
        },
        methods: {
            submitForm() {
                const newDiary = {
                    id: this.diary.list.length + 1,
                    title: this.title,
                    slug: slugify(this.title, { lower: true }),
                    detail: this.detail,
                    created_at: moment().format('DD.MM.YYYY')
                }
                if(this.title.length > 0 && this.detail.length > 0) {
                    this.diary.createNewDiary(newDiary)
                    this.$router.push('/')
                }
            },
            cancelHandler() {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>

</style>