const { createApp } = Vue;

createApp({
    data() {
        return {
            text_task: "",
            myList: [
                {
                    text: "Dare da mangiare ai draghi di Daenerys",
                    done: true,
                },
                {
                    text: "Incontrare Tyrion Lannister",
                    done: false,
                },
                {
                    text: "Consegnare una spada nuova a John Snow",
                    done: true,
                },
                {
                    text: "Visitare Approdo del Re",
                    done: false,
                },
                {
                    text: "Scoprire cosa c'è oltre la Barriera di Ghiaccio",
                    done: false,
                },
            ],
        };
    },
    methods: {
        toggleDone(index) {
            this.myList[index].done = !this.myList[index].done;
        },
        removeTodo(index) {
            this.myList.splice(index, 1);
        },
        addTask() {
            this.myList.push({
                text: this.text_task,
                done: false 
            });

            this.text_task = "";
        },
    },
}).mount("#app");
