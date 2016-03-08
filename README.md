# Co-op Front-end Toolkit

The Front-end toolkit contains all the core assets needed to build Co-op-branded digital content.

## Installation

Install the toolkit by adding it as a [Bower](http://bower.io/) dependency to your project:

```
bower install https://github.com/coopdigital/frontend-toolkit.git#0.1.0
```

## Usage

These assets should be compiled into production-ready versions (minified for CSS/JS, optimised for images), using a task runner or an asset pipeline.

This repository will eventually contains a set of best practices and recommendations for serving fast, optimised web pages to the users.

## Available assets

This Toolkit contains SASS stylesheets, JavaScripts and static assets (fonts and images).

### Stylesheets

The core styles are available as SASS stylesheets; most are available as mixins only, so you can choose to apply the styles to your own classnames without generating a lot of class names your project will not make use of. The main stylesheet [coop-toolkit.scss](styles/coop-toolkit.scss) contains the complete collection of available core styles and components and is a good starting point for building your project's final stylesheet.

#### IE-specific styles

Some stylesheets may need to contain Internet Explorer-specific styles, to cater for the older versions of IE that still require support. This is done through the use of the [`ie($version)` mixin](styles/mixins/_helpers.scss:24), which adds the styles to the outputted CSS if the variable `$ie` is lower than the specified version. To make use of those styles, a separate stylesheet should be created for IE browsers, which should be served using conditional comments:

```html
<!-- This stylesheet will be served to IE less than or equal to version 8: -->
<!--[if lte IE 8]><link rel="stylesheet" type="text/css" href="/css/ie.css"><![endif]-->

<!-- This stylesheet will be served to all other browsers: -->
<!--[if gt IE 8]><!--><link rel="stylesheet" type="text/css" href="/css/main.css"><!--<![endif]-->
```

### Scripts

The scripts are currently a very basic jQuery implementation, all contained within [coop-toolkit.js](scripts/coop-toolkit.js). These will in time be moved to a modular approach, including tests.

### Static assets

The static assets contain the necessary fonts (Avenir, Coopicons) used by the styles, as well as PNG versions of the Co-op logo.
