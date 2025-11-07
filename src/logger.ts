/**
 * Logging unit
 */

//**
// Based on OpenRCT2-ProxyPather by Basssiiie, 
// https://github.com/Basssiiie/OpenRCT2-ProxyPather
// 
// originally licensed under MIT License
// see licenses directory */

import { build } from "./environment";

/**
 * Logs a message if plugin is build with dev option, or does nothing otherwise.
 * @param message The error message to be logged.
 */
export function debug(message: string): void
{
	if (build.isDevelopment)
	{
		console.log(message);
	}
}


/**
 * Logs an error message with an optional method name for specifying the origin.
 * @param message The error message to be logged.
 * @param method The method specifying where the error occurred.
 */
export function error(message: string, method?:string): void
{
	console.log((method)
		? `Error (${method}): ${message}`
		: `Error: ${message}`);
}