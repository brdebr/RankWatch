<template>
  <v-dialog v-model="dialog" max-width="800">
    <template v-slot:activator="{ on }">
      <v-flex shrink>
        <div class="hero-portrait-wrapper new-hero">
          <div class="hero-portrait">
            <v-btn depressed block color="green darken-4" v-on="on">
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </div>
        </div>
      </v-flex>
    </template>
    <hero-form @heroCreated="closeDialog" />
  </v-dialog>
</template>

<script>
import HeroForm from '@/components/Hero/Form/HeroForm'
export default {
  components: {
    HeroForm
  },
  props: {
    hero: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss">
.hero-portrait-wrapper {
  &.new-hero {
    &:hover {
      border: 4px solid #f6f6f6;
      cursor: initial;
    }
    .hero-portrait {
      & {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .v-btn {
          height: 100%;
        }
      }
    }
  }
}
</style>
