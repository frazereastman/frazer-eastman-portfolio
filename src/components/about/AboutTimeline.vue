<script setup>
    import { timelineDetails } from '@/constants/constants';
</script>

<template>
	<h1 class="text-[3rem]">
		My Timeline
	</h1>
	<v-timeline align="start" side="end" class="overflow-hidden">
		<v-timeline-item
			v-for="(timelineEntry, i) in timelineDetails"
			:key="i"
			:dot-color="timelineEntry.dot ? timelineEntry.dot : 'white'"
			size="small"
        >
			<template v-slot:opposite>
				<div
					:class="`pt-1 headline font-weight-bold`"
					v-text="timelineEntry.date"
                ></div>
			</template>
			<div>
				<h2 :class="`mt-n1 headline font-weight-bold mb-4`">
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