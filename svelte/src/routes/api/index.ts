import connect from "$lib/database/dbmongoose";
import type { RequestHandler } from "@sveltejs/kit";
import mongoose from "mongoose";
import Blog from "$lib/models/Blog.Model";

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
 export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
    await connect
	const { slug } = params;
	const article = await Blog.find();

	if (article) {
		return {
			body: {
				article
			}
		};
	}
}