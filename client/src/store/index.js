import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  getters: {
    getTodos: (state) => state.todos,
    getTodoByID: (state) => (_id) => state.todos.find((todo) => todo._id === _id),
  },
  mutations: {
    populateTodos(state, payload){
      payload.forEach((el) => {
        state.todos.push(el);
      })
    },
    addTodo(state, payload){
      state.todos.push(payload);
    },
    updateTodo(state, payload){
      state.todos[state.todos.findIndex((todo) => todo._id === payload._id)] = payload;
    },
    deleteTodo(state, payload){
      state.todos.splice(state.todos.findIndex((todo) => todo._id === payload), 1);
    },
    flushTodos(state){
      state.todos = [];
    }
  },
  actions: {
    getTodos(state) {
      axios
        .get('/api')
        .then((res) => state.commit('populateTodos', res.data))
        .catch((err) => console.log(err));
    },
    addTodo(state, payload) {
      axios
        .post('/api', payload)
        .then((res) => state.commit('addTodo', res.data))
        .catch((err) => console.log(err));
    },
    updateTodo(state, payload) {
      axios
        .put(`/api?_id=${payload._id}`, payload)
        .then(() => state.commit('updateTodo', payload))
        .catch((err) => console.log(err));
    },
    deleteTodo(state, payload) {
      axios
        .delete(`/api?_id=${payload}`)
        .then(() => {
          state.commit('deleteTodo', payload)
        })
        .catch((err) => console.log(err));
    }
  },
  modules: {},
});
