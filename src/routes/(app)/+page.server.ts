import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	// submitpost: async (e) => {
	// 	if (!e.locals.user) {
	// 		return fail(401, { error: 'You must be logged in to create a post' });
	// 	}
	// 	const data = await e.request.formData();
	// 	const postcontent = data.get('postcontent');
	// 	if (!postcontent) {
	// 		return fail(400, { error: 'Post content is required' });
	// 	}
	// 	if (typeof postcontent !== 'string') {
	// 		return fail(400, { error: 'Post content must be a string' });
	// 	}
	// 	if (postcontent.length > 280) {
	// 		return fail(400, { error: 'Post content must be 280 characters or less' });
	// 	}
	// 	await createPost(e.locals.user.id, postcontent);
	// }
} satisfies Actions;
