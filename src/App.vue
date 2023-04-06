<script setup lang="ts">
const price = ref(0)
const quantity = ref(1)
const state = ref(8.25)

const htValue = computed(() => price.value * quantity.value)
const taxValue = computed(() => state.value * htValue.value / 100)

const totalPrice = computed(() => htValue.value + taxValue.value)

const discount = (price: number, percent: number) => price - (price * percent / 100)

const discount2 = (price: number) => {
  if (price < 7000) return price
  if (price < 10000) return discount(price, 7)
  if (price < 50000) return discount(price, 10)
  return discount(price, 15)
}

const discounted = computed<number>(() => discount2(totalPrice.value))
</script>

<template>
  <div>
    <label>
      Prix unitaire ($)
      <input type="number" v-model="price" />
    </label>
    <label>
      Quantité
      <input type="number" v-model="quantity" />
    </label>
    <label>
      <select v-model="state">
        <option value="8.25">CA</option>
        <option value="6.25">TX</option>
        <option value="8">NV</option>
        <option value="4">AL</option>
        <option value="6.85">UT</option>
      </select>
    </label>
    <div>
      Total price: ${{ totalPrice }}
    </div>
    <div>
      Discounted price: ${{ discounted }}
    </div>
  </div>
</template>
