import handler, {
	createScheduledHandler,
	EmDashRoom,
	EmDashRoomSite,
	PluginBridge,
} from "@emdash-cms/cloudflare/worker";

export { EmDashRoom, EmDashRoomSite, PluginBridge };

const CMS_HOST = "agenthrocms.creativelabth.com";
const SITE_ORIGIN = "https://agenthro.creativelabth.com";

export default {
	...handler,
	fetch(request, env, ctx) {
		if (new URL(request.url).hostname === CMS_HOST) {
			return Response.redirect(`${SITE_ORIGIN}/_emdash/admin`, 302);
		}
		return handler.fetch(request, env, ctx);
	},
	scheduled: createScheduledHandler(),
} satisfies ExportedHandler;
