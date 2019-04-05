<template>
  <v-input
    class="align-center sr-input"
    hide-details
    hide-messages
  >
    <v-text-field ref="field" v-model="sr" v-stream:input="field$" type="number" />
    <template v-slot:append>
      <span class="mx-1">
        {{ diffSr }}
      </span>
      <v-icon :class="diffSr > 0 ? 'green--text' : 'red--text'">
        {{ diffSr > 0 ? 'add' : 'remove' }}
      </v-icon>
    </template>
  </v-input>
</template>

<script>
import { pluck, map, delay, tap } from 'rxjs/operators' // eslint-disable-line

export default {
  domStreams: ['field$'],
  subscriptions() {
    const cappedSr$ = this.field$.pipe(
      pluck('event', 'msg'),
      map(val => {
        if (val <= 0) return 0
        else if (val >= 5000) return 5000
        else return val
      }),
      delay(50),
      tap(val => {
        this.diffSr = val - this.lastSr
        this.sr = val > 5000 ? 5000 : val
      })
    )
    return {
      cappedSr: cappedSr$
    }
  },
  data() {
    return {
      sr: null,
      lastSr: 2500,
      diffSr: 0,
      ranks: [
        {
          name: 'gold',
          icon: '1',
          min: 2000,
          max: 2499
        },
        {
          name: 'platinum',
          icon: '2',
          min: 2500,
          max: 2499
        },
        {
          name: 'diamond',
          icon: '3',
          min: 3000,
          max: 3499
        },
        {
          name: 'master',
          icon: '4',
          min: 3500,
          max: 3999
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.sr-input {
  .v-input__append-outer {
    align-items: center;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
