<template>
<div class="child">
        X : <input type="text" v-model="x" /><br />
        Y : <input type="text" v-model="y" /><br />
		Z : <input type="text" v-model="z" /><br />
        <slot name="type1" :cx="x" :cy="y"></slot>
        <slot name="type2" :cx="x" :cz="z"></slot>
</div>
</template>

<script>
export default {
	data() {
		return {
			x : 4,
			y : 5,
			z : 2
		}
	},
}
</script>

<style scoped>
	.child {
		padding : 5px;
		border : 1px solid gray;
	}
</style>
