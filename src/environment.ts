/**
 * Build environment, name and version substitution and observation
 */ 

/** 
 * All this depends on @rollup/plugin-replace replacing contents 
 * of the underscored constants at roll-up time 
 * see rollup.config.js around line 74 for definition
 */

/** Plugin name in human readable form */
export const pluginName = "__PLUGIN_NAME__"

/** Primary version designation */
const version : string = "__PLUGIN_VERSION__"

/**
 * 
 * @returns en empty string in case of production build, -dev suffix otherwise 
 */
function suffix(): string{
    if (build.isDevelopment) {
        return "-dev"
    }
    else {
        return ""
    }
}

/** plugin version with 'v' prefix */
export const pluginVersion = `v${version}${suffix()}`



/**
 * Based on OpenRCT2-ProxyPather and OpenRCT2-RideVehicleEditor by Basssiiie, 
 * https://github.com/Basssiiie/OpenRCT2-ProxyPather
 * https://github.com/Basssiiie/OpenRCT2-RideVehicleEditor 
 * Originally licensed under MIT License
 * see licenses folder
 */


/**
 * Returns the build configuration of the plugin.
 */
const buildConfiguration = "__BUILD_CONFIGURATION__";

/**
 * Build type definition
 */
export const build = {
    /**
     * Returns true if the current build is a production build.
     */
    // @ts-expect-error: boolean expression is affected by build variable replacement.
    isProduction: (buildConfiguration === "production"),


    /**
     * Returns true if the current build is a production build.
     */
    // @ts-expect-error: boolean expression is affected by build variable replacement.
    isDevelopment: (buildConfiguration === "development"),

}

/**
 * Returns true if the player is in a multiplayer server, or false if it is a singleplayer game.
 */
export function isMultiplayer(): boolean
{
	return (network.mode !== "none");
}

/**
 * Returns true if this instance of plugin is loaded by multiplayer server.
 */
export function isServer(): boolean {
    return (network.mode === "server")
}

