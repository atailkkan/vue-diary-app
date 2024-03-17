<template>
    <main class="w-full flex-grow p-6 py-12">
        <div class="max-w-[700px] w-full m-auto diary-detail">
            <div class="mb-8">
                <h1 class="text-[250%] font-semibold leading-[1.2]">{{ (diary.getSingleDiary(slug)).title }}</h1>
                <small class="block text-right mt-4 opacity-50">{{ (diary.getSingleDiary(slug)).created_at }}</small>
            </div>
            <div class="text-justify">
                {{ (diary.getSingleDiary(slug)).detail }}
            </div>
        </div>
    </main>
</template>

<script>
    import { useDiaryStore } from '../stores/DiaryStore.js'
    export default {
        data() {
            const diary = useDiaryStore()
            return {
                diary,
                slug: this.$route.params.slug
            }
        },
        created() {
            this.diary.getSingleDiary(this.slug)
        }
    }
</script>

<style scoped>

</style>