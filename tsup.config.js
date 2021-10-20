/**
 * @type {import("tsup").Options}
 */
module.exports = {
	clean: true,
	dts: true,
	entryPoints: ['src/index.ts'],
	format: ['esm', 'cjs'],
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: 'inline',
	target: 'es2015',
};
