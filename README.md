# Co-op Front-end Toolkit

The Co-op Front-end Toolkit contains all the core assets needed to build Co-op-branded digital content.

For more information on all the available styles and modules, please refer to the [Co-op Style Guide](http://single-site-styleguide.herokuapp.com/front-end-elements/).

## Installation

Install the Toolkit by adding it as a [Bower](http://bower.io/) or NPM package to your project:

```
bower install git@github.com:coopdigital/coop-frontend-toolkit.git --save
```

_or_

```
npm install coopdigital/coop-frontend-toolkit --save
```

_Note: if you are installing via Bower, in order for the dependency to be saved in your project, you may first need to run `bower init` to create the `bower.json` file._

Alternatively, you can add the dependency to your project's `bower.json` or `package.json` directly then run `bower install` or `npm install`:

```json
{
  "name": "project-name",
  "dependencies": {
    "coop-frontend-toolkit": "git@github.com:coopdigital/coop-frontend-toolkit.git"
  }
}
```

## Usage

These assets should be compiled into production-ready versions (minified for CSS/JS, optimised for images), using a task runner or an asset pipeline. [An example using Gulp](https://github.com/coopdigital/single-site-styleguide/blob/master/gulpfile.js) can be found in the Co-op Style Guide repository.

This repository will eventually contains a set of best practices and recommendations for serving fast, optimised web pages to the users.

## Available assets

This Toolkit contains SASS stylesheets, JavaScripts and static assets (fonts and images).

### Stylesheets

The [core styles](styles) are available as SASS stylesheets. Most are available as [mixins](styles/mixins), so you can choose to apply the styles using your own class names. The main stylesheet [_coop-toolkit.scss](styles/_coop-toolkit.scss) contains the complete collection of available core styles and components and is a good starting point for building your project's final stylesheet.

#### IE-specific styles

Some stylesheets may need to contain Internet Explorer-specific styles, to cater for the older versions of IE that still require support. This is done through the use of the [`ie($version)` mixin](styles/mixins/_helpers.scss#L24), which adds the styles to the outputted CSS if the variable `$ie` is lower than the specified version. To make use of those styles, a separate stylesheet should be created for IE browsers, which should be served using conditional comments:

```html
<!-- This stylesheet will be served to IE less than or equal to version 8: -->
<!--[if lte IE 8]><link rel="stylesheet" type="text/css" href="/css/ie-lte8.css"><![endif]-->

<!-- This stylesheet will be served to IE 9: -->
<!--[if IE 9]><link rel="stylesheet" type="text/css" href="/css/ie-9.css"><![endif]-->

<!-- This stylesheet will be served to all other browsers: -->
<!--[if gt IE 9]><!--><link rel="stylesheet" type="text/css" href="/css/main.css"><!--<![endif]-->
```

### Scripts

The toolkit scripts are based on [modules](scripts/modules), all loaded by calling the `init` method from the main [coop-toolkit.js](scripts/coop-toolkit.js) script. Typically, you should only have to load the scripts for the modules your application will require; for an example, refer to the [Single Site Styleguide implementation](https://github.com/coopdigital/single-site-styleguide/blob/master/src/_js/main.js).

### Static assets

The static assets contain the necessary fonts (Avenir, Coopicons) used by the styles, as well as SVG and PNG versions of the Co-op logo. These should be copied over to your project's assets directory by whichever task runner or asset pipeline you are using.


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## Changelog

###### 1.1.3
Fix tables content copy colour
Add `nowrap` helper
###### 1.1.2
Added info banner component
###### 1.1.1
Travis CI integration
###### 1.1.0
Customisable typographic scale
Toggles modules
More consistent JS test fixtures
Darker default body text
Video wrapper module
Freeform media queries
Several tweaks and fixes
###### 1.0.0
'Public' release
###### 0.1.5
Added JS modules
###### 0.1.4
Main logo aligned to the left.
###### 0.1.3
Updated package links in README.
###### 0.1.2
Added option to install as NPM package.
###### 0.1.1
Added minimal scripts.
###### 0.1.0
Initial release: streamlined version of the Co-op Styleguide styles.
