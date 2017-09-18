<template>
  <div class="hello">
    <h1>Select Module</h1>
    <ul>
      <li>
        <a rel="noopener" @click="changeModule('Foo')">Foo</a>
      </li>
      <li>
        <a rel="noopener" @click="changeModule('Bar')">Bar</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    changeModule(newModule) {
      this.$store.commit('setActiveModule', newModule)
      this.$router.push({ name: 'module', params: { module: newModule } })
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
