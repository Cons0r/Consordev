<script lang=ts>
    import { page } from '$app/stores'
    import { derived } from 'svelte/store';
    export let link: string = '/';
    export let type: 'main' | 'mobile' = 'main';
    export let simplename: string = "Home"
    let selected = derived([page], ([p]) => p.url.pathname == link)
</script>

{#if type == 'main'}
    {#if $selected}
        <a href="{link}" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            <span class="sr-only">{simplename}, This page is open</span>
            <slot />
        </a>
    {:else}
        <a href="{link}" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            <span class="sr-only">{simplename}, This page is not open</span>
            <slot />
        </a>
    {/if}
{:else if type == 'mobile'}
    {#if $selected}
        <a href="{link}" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <span class="sr-only">{simplename}, This page is open</span>
            <slot />
        </a>
    {:else}
        <a href="{link}" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
            <span class="sr-only">{simplename}, This page is not open</span>
            <slot />
        </a>
    {/if}
{/if}