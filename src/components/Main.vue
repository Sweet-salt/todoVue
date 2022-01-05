<template>
    <div class="page">
        <header>
            <h1>Vue Todo</h1>
        </header>
        <main>
            <div class="todos">
                <transition name="fade">
                    <!-- Add Mode -->
                    <div class="write" v-if="writeState === 'add'">
                        <input type="text" 
                        v-model="addItemText" 
                        @keyup.enter="addItem" 
                        ref="cursorFocus"
                        autofocus/>
                        <button 
                        @click="addItem"
                        class="btn add">
                            Add
                        </button>
                    </div>
                    <!-- edit Mode -->
                    <div class="write" v-else>
                        <input type="text" 
                        v-model="todos[crrEditItem].text" 
                        @keyup.enter="editSave" 
                        ref="cursorFocus"
                        autofocus/>
                        <button 
                        @click="editSave"
                        class="btn add">
                            Save
                        </button>
                    </div>
                </transition>
                <ul :class="[writeState, 'list']" >
                    <li v-for="(todo, i) in todos" :key="i">
                        <i  
                        :class="[ todo.state === 'yet'? 'far' : 'fas', 'fa-check-square']"
                        @click="checkItem(i)"
                        ></i>
                        <span > {{ todo.text }}
                            <b>
                                <a href="#" @click.prevent="editShow(i)">Edit</a>
                                <a href="#" @click.prevent="deleteItem(i)">Del</a>
                            </b>
                        </span>
                    </li>
                </ul>
            </div>

        </main>
    </div>
</template>

<script>
import {db} from '../firebase/db';
export default {
    data() {
        return {
            todos: [],
            addItemText: '',
            writeState: 'add',
            crrEditItem: '',
            
        }
    },
    methods: {
        addItem() {
            if(this.addItemText === '') return;
            this.todos.push({text: this.addItemText, state: 'yet'});
            this.addItemText = '';
            this.$ref.cursorFocus.focus();
        },
        checkItem(i) {
            if(this.todos[i].state === 'yet') {
                this.todos[i].state = 'done'
            }else{
                this.todos[i].state = 'yet'
            }
        },
        editSave() {
            this.writeState = 'add';
           
        },
        editShow(index) {
            this.crrEditItem = index;
            this.writeState = 'edit';
            this.$ref.list.className = "edit";
        },
        deleteItem(index){
            this.todos.splice(index, 1);
        }
    },
    mount() {

    },
    firestore: {
        todos: db.collection('TodoList')
    }
}
</script>