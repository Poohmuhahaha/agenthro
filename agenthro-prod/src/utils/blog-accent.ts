export const BLOG_ACCENTS = [
	"var(--ag-sky)",
	"var(--ag-mint)",
	"var(--ag-coral)",
	"var(--ag-peach)",
] as const;

export function blogAccent(seed: string): string {
	const hash = [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 0);
	return BLOG_ACCENTS[hash % BLOG_ACCENTS.length];
}
