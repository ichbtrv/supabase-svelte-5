<script lang="ts">
    import { enhance } from '$app/forms';
    import { invalidate } from '$app/navigation';
    import { Button } from '$lib/ui/button';
    import { Card } from '$lib/ui/card';
    import CardContent from '$lib/ui/card/card-content.svelte';
    import CardHeader from '$lib/ui/card/card-header.svelte';
    import Input from '$lib/ui/input/input.svelte';
    import Label from '$lib/ui/label/label.svelte';
    import { onMount } from 'svelte';

    export let data: { userProfile: { firstName: string; lastName: string; email: string } | null };
    const { userProfile } = data;

    let firstName = '';
    let lastName = '';
    let email = '';

    onMount(() => {
        if (userProfile) {
            firstName = userProfile.firstName;
            lastName = userProfile.lastName;
            email = userProfile.email;
        }
    });
</script>

{#if userProfile}
    <Card>
        <CardHeader>Manage your profile</CardHeader>
        <CardContent>
            <form
                method="post"
                use:enhance={({ formData }) => {
                    formData.set('firstName', firstName);
                    formData.set('lastName', lastName);
                    formData.set('email', email);
                    return ({ result }) => {
                        if (result.type === 'success') {
                            invalidate('/');
                            alert('UPDATED!');
                        } else {
                            alert('ERROR!');
                        }
                    };
                }}
            >
                <div>
                    <Label>Email</Label>
                    <Input bind:value={email} />
                </div>
                <div>
                    <Label>First Name</Label>
                    <Input bind:value={firstName} />
                </div>
                <div>
                    <Label>Last Name</Label>
                    <Input bind:value={lastName} />
                </div>
                <div>
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </CardContent>
    </Card>
    <Button href="/auth/logout">Logout</Button>
{:else}
    <Button href="/auth/login">Login to the site!</Button>
{/if}
