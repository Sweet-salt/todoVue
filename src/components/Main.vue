<template>
    <div class="page">
        <header>
            <h1>Vue Todo</h1>
        </header>
        <main>
            <div class="todos">
                <div class="write">
                    <input type="text" />
                    <button class="btn add">Add</button>
                </div>
                <ul class="list">
                    <li v-for="(todo, i) in todos" :key="i">
                        <i  :class="[ todo.state === 'yet'? 'far' : 'fas', 'fa-check-square']"></i>
                        <span > {{ todo.text }}
                            <b>
                                <a href="#">Edit</a>
                                <a href="#">Del</a>
                            </b>
                        </span>
                    </li>
                </ul>
            </div>

        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [
                {
                    text: '공부하기',
                    state: 'yet'
                },
                {
                    text: '운동',
                    state: 'done'
                },
                {
                    text: 'watch',
                    state: 'done'
                }
            ]
        }
    }
}
</script>