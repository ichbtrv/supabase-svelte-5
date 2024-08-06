<script lang="ts">
    import { toggleMode } from 'mode-watcher';

    import { Button } from '$lib/ui/button';
    import Moon from 'svelte-radix/Moon.svelte';
    import Sun from 'svelte-radix/Sun.svelte';
</script>

<Button on:click={toggleMode} variant="ghost" size="icon" class="">
    <Sun class="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon class="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
</Button>
