<template>
  <v-data-table
    :headers="headers"
    :items="matches"
    light
    class="elevation-1 match-list"
    :rows-per-page-items="[10,20,50,{&quot;text&quot;:&quot;$vuetify.dataIterator.rowsPerPageAll&quot;,&quot;value&quot;:-1}]"
    item-key="_id"
  >
    <template v-slot:items="props">
      <td class="text-xs-center">
        {{ props.item.order }}
      </td>
      <td class="text-xs-center">
        {{ props.item.result }}
      </td>
      <td class="text-xs-center">
        {{ props.item.variance }}
      </td>
      <td class="text-xs-center">
        {{ $moment(props.item.datetime).format('dddd - DD/MM/YYYY - HH:ss') }}
      </td>
      <td class="text-xs-center">
        {{ props.item.season }}
      </td>
      <td class="text-xs-center">
        {{ props.item.map }}
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    matches: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      headers: [
        {
          text: 'Order',
          value: 'order',
          align: 'center',
          sortable: true
        },
        {
          text: 'Result',
          value: 'result',
          align: 'center',
          sortable: true
        },
        {
          text: 'Variance',
          value: 'variance',
          align: 'center',
          sortable: true
        },
        {
          text: 'Date',
          value: 'datetime',
          align: 'center',
          sortable: true
        },
        {
          text: 'Season',
          value: 'season',
          align: 'center',
          sortable: true
        },
        {
          text: 'Map',
          value: 'map.name',
          align: 'center',
          sortable: true
        }
      ]
    }
  }
}
</script>
