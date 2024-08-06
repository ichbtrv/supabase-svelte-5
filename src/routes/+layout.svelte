<svelte:options runes={true} />

<script lang="ts">
    import { goto, invalidate } from '$app/navigation';
    import { ModeWatcher } from 'mode-watcher';
    import '../app.pcss';
    import Menu from '$lib/components/menu.svelte';

    const { data: propsData, children } = $props();

    const { supabase, session } = propsData;

    $effect(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (!newSession) {
                /**
                 * Queue this as a task so the navigation won't prevent the
                 * triggering function from completing
                 */
                setTimeout(() => {
                    goto('/', { invalidateAll: true });
                });
            }
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });

        return () => data.subscription.unsubscribe();
    });
</script>

<ModeWatcher />

<Menu />
{@render children()}
