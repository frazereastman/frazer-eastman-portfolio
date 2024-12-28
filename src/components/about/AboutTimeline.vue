<script setup>
    import { timelineDetails } from '@/constants/constants';
</script>

<template>
	<v-timeline align="start" side="end" class="overflow-hidden">
		<v-timeline-item
			v-for="(timelineEntry, i) in timelineDetails"
			:key="i"
			dot-color="white"
			size="small"
        >
			<template v-slot:opposite>
				<div
					:class="`pt-1 headline font-weight-bold text-white`"
					v-text="timelineEntry.date"
                ></div>
			</template>
			<div>
				<h2 :class="`mt-n1 headline font-weight-light mb-4 text-white`">
                    {{ timelineEntry.title }}
                </h2>
				<div>
					{{ timelineEntry.description }}
				</div>
			</div>
		</v-timeline-item>
	</v-timeline>
</template>

<style scoped></style>