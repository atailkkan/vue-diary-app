import { defineStore } from 'pinia'

export const useDiaryStore = defineStore('diaryStore', {
    state: () => ({
        list: [
            { 
                id: 1,
                title: 'Lorem ipsum dolor sit amet.',
                slug: 'lorem-ipsum-dolor-sit-amet',
                detail: 'Mauris lacinia neque odio, non ultricies ipsum aliquam in. Suspendisse porttitor maximus metus a sodales. Maecenas eu leo turpis. Curabitur suscipit nunc at mi vestibulum rhoncus. Vestibulum diam sem, congue dapibus diam eget, euismod venenatis dui. Donec consectetur ornare gravida. Nunc vehicula leo tellus, at dapibus nisl tristique vel.',
                isFav: false,
                created_at: '17.03.2024'
            },
            { 
                id: 2,
                title: 'Morbi augue nunc, mollis ac metus sit amet.',
                slug: 'morbi-augue-nunc-mollis-ac-metus-sit-amet',
                detail: 'Mauris lacinia neque odio, non ultricies ipsum aliquam in. Suspendisse porttitor maximus metus a sodales. Maecenas eu leo turpis. Curabitur suscipit nunc at mi vestibulum rhoncus. Vestibulum diam sem, congue dapibus diam eget, euismod venenatis dui. Donec consectetur ornare gravida. Nunc vehicula leo tellus, at dapibus nisl tristique vel.',
                isFav: true,
                created_at: '17.03.2024'
            },
            { 
                id: 3,
                title: 'Quisque varius enim a turpis vehicula.',
                slug: 'quisque-varius-enim-a-turpis-vehicula',
                detail: 'Mauris lacinia neque odio, non ultricies ipsum aliquam in. Suspendisse porttitor maximus metus a sodales. Maecenas eu leo turpis. Curabitur suscipit nunc at mi vestibulum rhoncus. Vestibulum diam sem, congue dapibus diam eget, euismod venenatis dui. Donec consectetur ornare gravida. Nunc vehicula leo tellus, at dapibus nisl tristique vel.',
                isFav: false,
                created_at: '17.03.2024'
            }
        ]
    }),
    getters: {
        favs() {
            return this.list.filter(item => item.isFav)
        }
    },
    actions: {
        getSingleDiaryById(id) {
            return this.list.find(item => item.id === id)
        },
        getSingleDiary(slug) {
            return this.list.find(item => item.slug === slug)
        },
        createNewDiary(data) {
            this.list.push(data)
        },
        deleteDiaryById(id) {
            const selectedItem = this.list.find(item => item.id === id)
            this.list.splice(this.list.indexOf(selectedItem), 1)
        },
        addToFav(id) {
            const selectedItem = this.list.find(item => item.id === id)
            selectedItem.isFav = !selectedItem.isFav
        }
    }
})
