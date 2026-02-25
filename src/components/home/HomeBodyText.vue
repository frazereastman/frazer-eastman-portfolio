<script setup></script>

<template>
	<div>
		<h1 class="neon-text">
			Hello, my name is <br />
			<span class="home-body-name"> Frazer Eastman. </span>
		</h1>

		<p class="body-text">
			I'm a passionate front end developer, who specialises in creating 
			modern, responsive web components and pages in Vue.js
		</p>
	</div>
</template>

<style scoped>

	@property --＠color-1 {
		syntax: "<color>";
		inherits: false;
		initial-value: hsl(98 100% 62%);
	}

	@property --＠color-2 {
		syntax: "<color>";
		inherits: false;
		initial-value: hsl(204 100% 59%);
	}

	/* keyframes that change the color variable */
	@keyframes gradient-change {
	to {
		--＠color-1: hsl(210 100% 59%);
		--＠color-2: hsl(310 100% 59%);
		}
	}

	.neon-text {
		/* apply variable changes over time */
		font-family: "League Spartan", sans-serif;
		font-weight: 800;
		font-size: 2rem;
		line-height: 2.8rem;
		animation: gradient-change 2s linear infinite alternate;
		background: linear-gradient(
			/* 
			in oklch produces more vibrant gradient results 
			learn more https://developer.chrome.com/docs/css-ui/access-colors-spaces#color_interpolation
			*/
			to right in oklch, 
			/* use the variables in a gradient (or wherever!) */
			var(--＠color-1), 
			var(--＠color-2)
		);
	
		/* old browser support */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		
		/* modern browser version */
		background-clip: text;
		color: transparent;
	}

	.home-body-name {
		font-size: 3rem;
	}

	.body-text {
		font-family: "League Spartan", sans-serif;
		font-weight: 500;
		font-size: 1.25rem;
	}
</style>
