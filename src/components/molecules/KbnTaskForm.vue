<template>
  <form class="task-form" novalidate>
    <div class="form-item">
      <input v-model="name" type="text" placeholder="タスク..." />
    </div>
    <div class="form-actions">
      <Button
        buttonstyle="primary"
        :disabled="disableAddAction"
        @click="handleAdd"
      >
        追加
      </Button>
      <Button :disabled="progress" @click="handleCancel">
        <span style="font-size:10px;">キャンセル</span>
      </Button>
    </div>
    <div class="messages">
      <p v-if="progress" class="add-progress">
        追加中...
      </p>
      <p v-if="error" class="add-error">
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
import Button from "@/components/atoms/Button.vue"

export default {
  name: "KbnTaskForm",

  components: {
    Button
  },

  props: {
    listId: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      name: "",
      progress: false,
      error: ""
    }
  },

  computed: {
    disableAddAction() {
      return this.name.length === 0 || this.progress
    }
  },

  methods: {
    complete(name) {
      this.$message({
        message: `${name}を追加しました`,
        type: "success"
      })
    },
    handleAdd() {
      this.progress = true
      this.error = ""

      const { name, listId } = this
      return this.$store
        .dispatch("addTask", { name, listId })
        .then(name => {
          this.complete(name)
          this.$emit("close")
        })
        .catch(err => {
          this.error = err.message
        })
        .then(() => {
          this.progress = false
        })
    },

    handleCancel() {
      this.$emit("close")
    }
  }
}
</script>

<style scoped>
.task-form {
  margin: 8px;
  padding: 4px;
  border: thin solid black;
  border-radius: 0.5em;
}
.form-item {
  padding: 4px;
}
input {
  width: 100%;
  padding: 0;
}
.form-actions {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}
</style>
