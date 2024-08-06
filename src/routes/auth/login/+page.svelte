<script>
    import { Button } from '$lib/ui/button';

    import { Card } from '$lib/ui/card';
    import CardContent from '$lib/ui/card/card-content.svelte';
    import CardHeader from '$lib/ui/card/card-header.svelte';
</script>

<Card>
    <CardHeader>Login to the site!</CardHeader>
    <CardContent>
        <Button href="/auth/login/github">sign in with GitHub</Button>
    </CardContent>
</Card>
