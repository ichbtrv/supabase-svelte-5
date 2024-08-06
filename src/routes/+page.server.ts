import { getOrCreateUserProfile } from '$lib/auth';
import { db } from '$lib/db/index.js';
import { profiles } from '$lib/db/schema.js';
import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { zfd } from 'zod-form-data';

export const load = async ({ locals }) => {
    const userProfile = await getOrCreateUserProfile(locals);

    return {
        userProfile
    };
};

export const actions = {
    default: async ({ request, locals }) => {
        const userProfile = await getOrCreateUserProfile(locals);

        if (!userProfile) {
            throw error(401, 'You need to be logged in!');
        }

        const schema = zfd.formData({
            firstName: zfd.text(),
            lastName: zfd.text(),
            email: zfd.text()
        });

        const result = schema.safeParse(await request.formData());

        if (!result.success) {
            throw error(400, 'Invalid form data');
        }

        const { data } = result;

        await db
            .update(profiles)
            .set({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                updatedAt: new Date() // Manually set the updatedAt field to the current timestamp
            })
            .where(eq(profiles.id, userProfile.id));

        return { success: true };
    }
};
