<script>
	import '../app.css';
	import { navigating } from '$app/stores';
	import SveltePreload from '$lib/components/SveltePreload.svelte';
	import { onMount } from 'svelte'
	import nightwind from '$lib/nwpp'
	import { writable } from 'svelte/store';
	import Navbar from '$lib/components/Navbar.svelte';
    let hasmounted = writable(false);
	onMount(()=>{
		$hasmounted = true
        nightwind.mount();
    })
</script>

{#if $navigating && $navigating.to}
	<SveltePreload />
{/if}

<main class="text-black bg-bglight-900">
	<Navbar {nightwind} loaded={hasmounted}></Navbar>
	<slot />
</main>
