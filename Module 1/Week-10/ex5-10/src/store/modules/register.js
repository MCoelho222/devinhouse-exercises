export default {
    state() {
        return {
            usersList: []
        }
    },
    mutations: {
        insertUser(state, user) {
            console.log(user)
            state.usersList.push(user)
            if (state.usersList.length > 1) {
                let ages = []
                let orderedList = []
                state.usersList.forEach(item => ages.push(Date.parse(item.userBirthday)))
                let orderedAges = ages.sort()
                for (let i = 0; i < orderedAges.length; i++) {
                    const element = orderedAges[i];
                    state.usersList.forEach(item => {
                        if (Date.parse(item.userBirthday) === element) {
                            orderedList.push(item)
                        }
                    })

                    
                }
                state.usersList = orderedList.reverse()
            }
        },
        delUser(state, index) {
            state.usersList.splice(index, 1)
        }
    }
}