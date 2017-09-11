# Co-op Front-end Toolkit

The Co-op Front-end Toolkit contains all the core assets needed to build Co-op-branded digital content.

For more information on all the available styles and modules, please refer to the [Co-op Style Guide](https://coop-design-manual.herokuapp.com/).

## Installation

Install the Toolkit by adding it as a NPM package to your project:

```
npm install coop-frontend-toolkit --save
```

---

### Older version of the Toolkit

The base styles provided by the Toolkit changed quite a bit between version 1.1.3 and version >= 2.0.0, unfortunately resulting in a couple of breaking changes. The older versions (up to 1.1.3) are available on the Co-op Digital organisation repository on Github.

If you need to carry on using the older styles, you need to make sure you are using version 1.1.3 of the Toolkit. To do so use the full github URL, including the version number:

```json
{
  "name": "project-name",
  "dependencies": {
    "coop-frontend-toolkit": "coopdigital/coop-frontend-toolkit#1.1.3"
  }
}
```

#### Breaking changes between 1.1.3 and 2.0.0

If you want to update to version 2, you need to be aware of the following breaking changes.

##### Typographic scale

If you have set a custom typographic scale, this will need to be updated to contain all the necessary `base` properties. Here are the defaults now set, all of which need to be present in the `base` property of your custom scale:

```css
$typographic-scale: (
  base: (
    body: 16px,
    h-mega: 46px,
    h1: 30px,
    h2: 20px,
    h3: 18px,
    h4: 18px,
    h5: 18px,
    h6: 13px,
    blockquote: 20px,
    lead: 20px,
    small: 13px,
    base-line-height: 1.7,
    base-spacing-unit: 32px,
  )
}
```

##### Checkboxes and Radio buttons

Checkboxes and radio buttons followed directly by a `<label>` element will need a small tweak to display on the same line. The following CSS handles this realignment:

```css
input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  display: inline-block;
  margin: 0 0 0 5px;
  vertical-align: middle;
}
```

##### JavaScript modules

The Javascript modules (Tabs and Toggles) have been removed from the Toolkit. If you wish to carry on using those, you will need to copy them over from version 1.1.3 to your project manually, as well as the modules loader.

---

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

### Static assets

The static assets contain the necessary fonts (Avenir, Coopicons) used by the styles, as well as SVG and PNG versions of the Co-op logo. These should be copied over to your project's assets directory by whichever task runner or asset pipeline you are using.


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) guidelines.

## Changelog

###### 2.0.2
- Updated README

###### 2.0.1
- Added missing fonts
- Link hover colour
- Tweaked list spacing
- Tiles hover states

###### 2.0.0
- Public release
- Major update to styles
- Removal of JavaScript modules

###### 1.1.3
- Fix tables content copy colour
- Add `nowrap` helper

###### 1.1.2
- Added info banner component

###### 1.1.1
- Travis CI integration

###### 1.1.0
- Customisable typographic scale
- Toggles modules
- More consistent JS test fixtures
- Darker default body text
- Video wrapper module
- Freeform media queries
- Several tweaks and fixes

###### 1.0.0
- 'Public' release

###### 0.1.5
- Added JS modules

###### 0.1.4
- Main logo aligned to the left.

###### 0.1.3
- Updated package links in README.

###### 0.1.2
- Added option to install as NPM package.

###### 0.1.1
- Added minimal scripts.

###### 0.1.0
- Initial release: streamlined version of the Co-op Styleguide styles.
