# gadget-material-icons - [![Build Status](https://travis-ci.org/jessgusclark/gadget-material-icons.svg?branch=master)](https://travis-ci.org/jessgusclark/gadget-material-icons)

A OUCampus gadget and xsl transformation that allows users to insert Google's Material icons.

This repository contains three sections:

- **CSS** is code that needs to be added to the University's master CSS file or linked to.
- **XSL** is a XSL transformation snippet that needs to be added to the snippets file and handles converting the table into the icon code.
- **gadget** is the gadget that the end users will use to insert [Google's Material Icons](https://design.google.com/icons/) into their sites.


## Quick Install

Just want to play around with the gadget? Start here

### Step 1: Add CSS to your templates

Add Google's Material Icon Font to your stylesheet:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

Add [css/icons.css](custom color and sizes) code to your css or link to this file:

```
<link href="https://jessgusclark.github.io/gadget-material-icons/css/icons.css" stylesheet" />
```

See [css/](CSS Readme File) for more information.

### Step 2: Add XSL Transformation

Add the [xsl/snippet-icon.xsl](xsl transformation) to your XSL folder. If you have a test area, please test it first. Next, link to it in your templates with this code:

```
<xsl:import href="snippet-icon.xsl"/>
```

See [/xsl](XSL Readme File) for more information.

### Step 3: Install the Gadget via GitHub pages

Follow [OU's instructions](http://support.omniupdate.com/oucampus10/setup/gadgets/new-gadget.html) for installing a gadget and when asked for the URL please use: https://jessgusclark.github.io/gadget-material-icons/gadget/dist/


## Install Locally

Installing locally will allow you to customize the colors sizes and icons. 

Clone the repo and install locally. The Nyan cat should run and tests should all pass.

Publish `/gadget/dist` folder on your server. Add the gadget using [OU's instructions](http://support.omniupdate.com/oucampus10/setup/gadgets/new-gadget.html). 

Add CSS from Step 1 and XSL from Step 2 Above.

``` 

npm install

gulp build

```

## Contribute

Contributions are welcomed, if writing JS, please use existing object oriented formatting and write tests to validate code. 

Changes to the colors and sizes files should be discussed first. Custom sizes and colors should be done with an individual installation.

Documentation contributions are also welcomed! 