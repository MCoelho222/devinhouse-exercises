<template>

<div class="container">
    <h1>Black-Jack</h1>
    <div class="new-game">
        <button type="button" class="btn btn-primary" @click="reset">Play again</button>
    </div>
    <div class="result">
        <p class="status-msg" v-if="counter > 0 && counter < 5" style="background-color: aliceblue">You're doing well!!</p>
        <p class="status-msg" v-else-if="counter === 5" v-text="finalMsg" :style="estilo"></p>
    </div>
    <hr>
    <div class="score">
        <p class="score-p">Adversary: {{ enemyScore }}</p>
        <p class="score-p">Player: {{ currentScore }}</p>
        <p class="score-p">Cards left: {{ cardsLeft }}</p>
    </div>
    <hr>
    <div class="actions">
    <h3>Card: <span v-text="card"></span></h3>
    <button type="button" class="btn btn-primary" @click="randCard" v-show="cards.length < 5">Card</button>
    <button type="button" class="btn btn-danger" @click="reset" v-show="cards.length < 5">Stop</button>
    </div>
</div>
</template>
<script>
export default {
    props: {
        
    }, 
    data() {
        return {
            enemyScore: 17,
            card: null,
            cards: [], 
            finalScore: 0,
            counter: 0,
            estilo: null
        }
    },
    computed: {
        currentScore() {
            return this.cards.reduce((acc, item) => item + acc, 0)
        },
        cardsLeft() {
            return 5 - this.cards.length
        },
        finalMsg() {
            return this.finalScore > this.enemyScore && this.finalScore <=21 ? 'You WIN!!' : 'You LOOSE!!'
        }
    },
    methods: {
        randCard() {
            let min = Math.ceil(1)
            let max = Math.floor(10)
            let card = Math.random() * (max - min + 1) + min
            this.card = Math.floor(card)
            this.cards.push(this.card)
            this.counter += 1
            if (this.counter === 5) {
                this.finalScore = this.cards.reduce((acc, item) => item + acc, 0)
                if (this.finalScore > this.enemyScore && this.finalScore <= 21) {
                    this.estilo = 'background-color: aqua'
                } else if (this.finalScore < this.enemyScore || this.finalScore > 21) {
                    this.estilo = 'background-color: red'
                }
            }
        },
        reset() {
            this.card = null
            this.cards = []
            this.counter = 0
        }
    }
}
</script>
<style scoped>
.container {
    margin-bottom: 60px;
}
.actions {
    padding-bottom: 60px;
}
.score-p {
    font-weight: bold;
}

</style>