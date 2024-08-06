// import { redirect } from '@sveltejs/kit';

// export const actions = {
//     default: async ({ locals, url }) => {
//         const { data } = await locals.supabase.auth.signInWithOAuth({
//             provider: 'github',
//             options: {
//                 redirectTo: url.origin + '/auth/callback'
//             }
//         });

//         if (data.url) {
//             redirect(307, data.url); // use the redirect API for your server framework
//         }

//         return {
//             success: false
//         };
//     }
// };
