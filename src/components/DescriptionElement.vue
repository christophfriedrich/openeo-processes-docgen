<template>
	<div class="description" v-html="markup(description)"></div>
</template>

<script>
import commonmark from 'commonmark';

export default {
	name: 'DescriptionElement',
	props: ['description'],
	methods: {
		markup(text) {
			var reader = new commonmark.Parser();
			var writer = new commonmark.HtmlRenderer();
			var parsed = reader.parse(text);
			return writer.render(parsed);
		},
	}
}
</script>