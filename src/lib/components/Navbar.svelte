<script lang=ts>
    import type { Typewind } from '$lib/nwpp';
    import { writable, type Writable } from 'svelte/store';
    import { slide } from 'svelte/transition';
    import DarkToggle from './DarkToggle.svelte';
    import Navlink from './Navlink.svelte';
    export let nightwind: Typewind;
    export let loaded: Writable<boolean>;
    let mobileMenuOpen = writable(false);

    let pages = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' }
    ];
</script>

<div class="bg-primarylight-900 w-full h-8 text-center">Consor</div>
<nav class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="/logo/small.png" alt="Workflow">
            <img class="hidden lg:block h-8 w-auto" src="/logo/text.png" alt="Workflow">
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              {#each pages as page }
                <Navlink simplename={page.name} link={page.link}>{page.name}</Navlink>
              {/each}
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <DarkToggle {nightwind} {loaded}></DarkToggle>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          <!-- Mobile menu button -->
          <DarkToggle {nightwind} {loaded}></DarkToggle>
          <button type="button" on:click={_=>mobileMenuOpen.update(_=>!_)} class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.
  
              Heroicon name: outline/menu
  
              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="h-6 w-6" class:block={!$mobileMenuOpen} class:hidden={$mobileMenuOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.
  
              Heroicon name: outline/x
  
              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="h-6 w-6" class:hidden={!$mobileMenuOpen} class:block={$mobileMenuOpen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    <!-- Mobile menu, show/hide based on menu state. -->
    {#if $mobileMenuOpen}
    <div class="sm:hidden" transition:slide id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">
          {#each pages as page }
            <Navlink type="mobile" simplename={page.name} link={page.link}>{page.name}</Navlink>
          {/each}
        </div>
    </div>
    {/if}
  </nav>
  