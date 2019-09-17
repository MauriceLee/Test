<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">待辦事項</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="準備要做的任務"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="addTodo">新增</button>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{'active': visibility == 'all'}"
              @click="visibility = 'all'"
              href="#"
            >全部</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{'active': visibility == 'active'}"
              @click="visibility = 'active'"
              href="#"
            >進行中</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              :class="{'active': visibility == 'completed'}"
              @click="visibility = 'completed'"
              href="#"
            >已完成</a>
          </li>
        </ul>
      </div>
      <ul class="list-group list-group-flush text-left">
        <li
          class="list-group-item"
          v-for="item in filterdTodos"
          :key="item.id"
          @dblclick="editTodo(item)"
        >
          <div class="d-flex" v-if="item.id !== cacheTodo.id">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="item.completed"
                :id="item.id"
              />
              <label
                class="form-check-label"
                :class="{'completed': item.completed}"
                :for="item.id"
              >{{ item.title }}</label>
            </div>
            <button
              type="button"
              class="close ml-auto"
              @click="removeTodo(item)"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <input
            type="text"
            class="form-control"
            v-model="cacheTitle"
            @keyup.esc="cancelEdit"
            @keyup.enter="doneEdit(item)"
            v-if="item.id === cacheTodo.id"
          />
        </li>
      </ul>
      <div class="card-footer d-flex justify-content-between">
        <span>還有 {{ count }} 筆任務未完成</span>
        <a href="#" @click="removeAll">清除所有任務</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      todos: JSON.parse(localStorage.getItem('TodosList')) || [],
      visibility: 'all',
      cacheTodo: {},
      cacheTitle: '',
      count: JSON.parse(localStorage.getItem('count')) || 0
    }
  },
  methods: {
    addTodo: function () {
      let value = this.newTodo.trim()
      let timestamp = Math.floor(Date.now())
      if (!value) {
        return
      }
      this.todos.push({
        id: timestamp,
        title: value,
        completed: false
      })
      this.newTodo = ''
    },
    removeTodo: function (todo) {
      let self = this
      let newIndex = self.todos.findIndex(function (item, key) {
        return todo.id === item.id
      })
      this.todos.splice(newIndex, 1)
    },
    editTodo: function (item) {
      this.cacheTodo = item
      this.cacheTitle = item.title
    },
    cancelEdit: function () {
      this.cacheTodo = {}
    },
    doneEdit: function (item) {
      item.title = this.cacheTitle
      this.cacheTitle = {}
      this.cacheTodo = {}
    },
    removeAll: function () {
      this.todos = []
    }
  },
  computed: {
    filterdTodos: function () {
      if (this.visibility === 'all') {
        return this.todos
      } else if (this.visibility === 'active') {
        let newTodos = []
        this.todos.forEach(function (item) {
          if (!item.completed) {
            newTodos.push(item)
          }
        })
        return newTodos
      } else if (this.visibility === 'completed') {
        let newTodos = []
        this.todos.forEach(function (item) {
          if (item.completed) {
            newTodos.push(item)
          }
        })
        return newTodos
      }
    }
  },
  updated () {
    localStorage.setItem('TodosList', JSON.stringify(this.todos))
    let c = 0
    for (let i = 0; i < this.todos.length; i++) {
      if (!this.todos[i].completed) {
        c++
      }
    }
    this.count = c
    localStorage.setItem('count', JSON.stringify(this.count))
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
