# A Feature-rich OpenRCT2 plugin with GUI template
## Using: Typescript, FlexUi and more

<img align="right" width="190" height="193" alt="tiger-win" src="https://github.com/user-attachments/assets/1b867798-d4ba-40b2-a0bd-86386dd2784d" />

**This is a fork of [Basssiiie's OpenRCT2-Simple-Typescript-Template](https://github.com/Basssiiie/OpenRCT2-Simple-Typescript-Template),
modified to be more robust and include more things from the start**

> [!WARNING]
> **This is one-man project. I made it to fit my taste. My personal taste might not be the best for you and your project. Be sure to make yourself aware of other options.**
> 
> This template uses GPL-3.0-only license due to incorporation of GPL code (original Simple Typescript Template has MIT)

### Contents of the template
Kindly bear in mind this list lists only additions over original OpenRCT2-Simple-Typescript-Template

#### Fast name, author & version setup
- In `rollup.config.js` simply overwrite given members
```typescript
const pluginOptions = {
	/**
	 * Human-readable name
	 */
	pluginName: "Tiger Plugin Template",

	/**
	 * Author name
	 * warning: this works only for plugins with single author (or for groups such as "ACME authors")
	 * otherwise see plugin.ts around line 9 and use string[] to define a list of authors
	 */
	pluginAuthor: "Your Name",

	/**
	 * Version
	 */
	pluginVersion: "0.0"
}
```
- Name of the plugin will be propagated where necessary (plugin name, menu item, window title) and as stripped of whitespace used to name output .js file
- Version and author's name gets propagated into `plugin.ts`
- Version will be written into file name in case of production build (`npm run build`) 

#### FlexUI with basic window already prepared
  - simply start actually writing GUI in `mainWin.ts`

#### Automated graphics loading system
- this is where the fun begins - fitting bespoke graphics to plugin (buttons with images, for example)
- `img/OpenRCT2-plugin-safe.gpl` provides palette in GIMP format with colours found safe (not getting remapped by primary or water remaps, etc...)
- `img/coloursPalette.png` provides the same as above, but in png
- run `npm run start-graphics` to have graphics from `/img` automatically contained via base64 encoding and decoding functions
- (manual mode: `npx tsx imgToBase64.ts`)
- if using VS Code, there is task configured to run this automatically on folder open (you might be prompted to confirm task auto-run on first time)
  - example: file `img/coloursPalette.png` gets converted to be accessible in code as `pluginGraphics.coloursPalette.image`
    ```typescript
    	button({
            image: pluginGraphics.coloursPalette.image
        })
    ```
    each member of `pluginGraphics` is
    ```typescript
    export type ImageData = {
    	image: number;
    	width: number;
    	height: number;
 	};
    ```
- the contents of `src/graphics` with exempt for `imageFromBase64.ts` are set to be ignored by git, in order not to include base64 graphics encoded data with the source

#### Development build plugin window auto-open
- In `startup.ts` there is a code that forces plugin's main window to open, conditional to the build being development
- Together with hot reload feature this makes your plugin reload in the blink of a eye 

  
_________________

Also supports:
- Automatic plugin reload in OpenRCT2 (hot reload);
- Out of the box minification to improve file sizes;
- Support for external NPM packages.

## How to start

1. Install latest version of [Node](https://nodejs.org/en/) and make sure to include NPM and enable the "Add to PATH" option during installation.
2. Use the green "Use this template" button in the top right corner of this page, or download the project to a location of your choice on your PC.
3. Open a terminal or command prompt.
4. Use `cd` to change your current directory to the root folder of this project.
5. Run `npm install` to install the project's dependencies.
6. Find `openrct2.d.ts` TypeScript API declaration file in OpenRCT2 files. copy it to `./lib/` folder.
   - This file can usually be found in the [OpenRCT2 installation directory](#openrct2-installation-directory).
   - Alternatively you can download the file from Github [here](https://raw.githubusercontent.com/OpenRCT2/OpenRCT2/develop/distribution/openrct2.d.ts).
   - Another option is to make a symbolic link instead of copying the file, which will keep the file up to date whenever you install new versions of OpenRCT2.
7. There is no step 7
8. In `./rollup.config.js`, change the members of `pluginOptions` (plugin name, author and version if you like to)

It is possible to accomplish partially step 2 (clone a repository you have created from this template) skip 3 and 4 and accomplish steps 5 and beyond in VS Code, for which purpose there are tasks configured. 

---

## Commands

The template comes with several terminal commands to make developing plugins easier.

`npm run build`

Creates a release build of your plugin. This version is optimized for sharing with others, using Terser to make the file as small as possible. By default, the plugin will be outputted to `./dist/`. It will fail if graphics materials were not converted first.

`npm run build-graphics`

Encodes any png files in img folder to base64 and prepares them to be used in code under `pluginGraphics.`

`npm run build-all:dev`

Creates a develop build of your plugin. This includes graphics packing. This version is not optimized for sharing, but easier to read in case you want to see the outputted Javascript. By default, the plugin will be outputted in the plugin folder of the default [OpenRCT2 user directory](#openrct2-user-directory).

`npm run build:dev`

Same as above, but excludes the graphics encoding process

`npm run start-graphics`

Will start a script to watch the `img` folder for changes and rebuilds storage of graphics encoded data on change. When opening the template folder in VS Code, this command is configured to be auto-run on folder open (you might be prompted to confirm on first time run)

`npm start` or `npm run start`

Will start a script that will automatically run `npm run build:dev` every time you make a change to any Typescript or Javascript file inside the `./src/` folder.


### Output paths

These output paths can be changed in `rollup.config.js`. In this file you can also change the outputted filename of the plugin.

---

## Access game logs

When your plugin is not loading properly, it may be useful to be able to read the logs of the game to see if there are any errors. Furthermore, if you use the `console.log` function, the resulting logs can be read here as well.

### Windows

1. Navigate to the folder where [OpenRCT2 is installed](#openrct2-installation-directory).
2. Launch the `openrct2.com` file located there (the MS-DOS application).
	- If file extensions are hidden, make sure to [enable them](https://support.microsoft.com/en-us/windows/common-file-name-extensions-in-windows-da4a4430-8e76-89c5-59f7-1cdbbc75cb01).

### MacOS

1. Launch a terminal or another command-line prompt.
2. Using the `cd` command, navigate to the folder where [OpenRCT2 is installed](#openrct2-installation-directory).
3. Run `open OpenRCT2.app/Contents/MacOS/OpenRCT2` to launch OpenRCT2 with logging enabled.

---

## Hot reload

This project supports the [OpenRCT2 hot reload feature](https://github.com/OpenRCT2/OpenRCT2/blob/master/distribution/scripting.md#writing-scripts) for development.

1. Navigate to your [OpenRCT2 user directory](#openrct2-user-directory) and open the `config.ini` file.
2. Enable hot reload by setting `enable_hot_reloading = true` in `config.ini`.
3. Run `npm start` in the directory of this project to start the hot reload server.
4. Start the OpenRCT2 and load a save or start a new game.
5. Each time you save any of the files in `./src/`, the server will compile `./src/registerPlugin.ts` and place compiled plugin file inside your local OpenRCT2 plugin directory.
6. OpenRCT2 will notice file changes and it will reload the plugin.
7. Default to this template, your plugin window will close and reopen.

---

## Folders

### OpenRCT2 installation directory

This is the directory where the game is installed.

- **Windows:** usually `C:/Users/<YOUR NAME>/Documents/OpenRCT2/bin/` when using the launcher or `C:/Program Files/OpenRCT2/` when an installer was used.
- **MacOS:** the folder where the `OpenRCT2.app` application file was placed.
- **Linux:** depends on the distro, but likely either `/usr/share/openrct2` when installed through a package manager, or mounted in `/tmp` when using an AppImage.

### OpenRCT2 user directory

This is the directory where the game stores user data, like save games and plugins.

- **Windows:** usually `Documents/OpenRCT2/` or `C:/Users/<YOUR NAME>/Documents/OpenRCT2/`.
- **MacOS:** usually `/Users/<YOUR NAME>/Library/Application Support/OpenRCT2/`. Note that `Library` is a hidden folder in your user directory, so by default it will not show up in Finder.
- **Linux:** usually `/home/<YOUR NAME>/.config`, `$HOME/.config`, or where the environment variable `$XDG_CONFIG_HOME` points to if it's set.

You can also open this folder from inside OpenRCT2, by selecting "Open custom content folder" in the dropdown under the red toolbox in the main menu.

---

## Dependencies

The following libraries and tools are used in this template:

- **NodeJS** is the JavaScript engine used to develop and run code when the game is not running.
- **NPM** is a library and package manager for JavaScript and TypeScript and can be used to install new packages and update existing packages in the project.
- **TypeScript** is a expansion language to JavaScript that adds type checking when you are writing the code. It allows you to specify rules for how objects and values look like, so TypeScript can report back if your code follows these rules (instead of crashes or errors in-game).
- **Rollup** bundles all source code, runs it through some plugins like TypeScript, and then outputs a single JavaScript plugin file.
- **Nodemon** is the program that can watch a folder for changes and then trigger a specified action. It is used by `npm start` to watch the `./src/` folder and triggers `npm run build:dev` if any changes occur.
