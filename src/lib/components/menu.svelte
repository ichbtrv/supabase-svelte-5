<script lang="ts">
    import { Button } from '$lib/ui/button';
    import LightSwitch from './light-switch.svelte';

    import { Input } from '$lib/ui/input';

    export { className as class };
</script>

<nav class="fixed flex w-full h-12 justify-between items-center py-1 bg-background px-2 z-50 border-b overflow-hidden">
    <div class="flex justify-center">
        <Button href="/" variant="ghost">Calendar</Button>
    </div>
    <div class="flex items-center gap-1 overflow-hidden">
        <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <LightSwitch />
        </div>
    </div>
</nav>
