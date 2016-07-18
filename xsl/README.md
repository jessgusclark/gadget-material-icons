# XSL Transformation 

## Install:

Add the code from [snippet-icon.xsl](snippet-icon.xsl) to your XSL or add this file and link to it with this code:

`<xsl:import href="snippet-icon.xsl"/>`

## Why use a transformation

The final code looks something like this: `<i class="material-icons xl gold">account_balance_wallet</i>`. The WYSIWYG editor does not do well with `div`s especially when trying to add content before or after. Many times the mouse click will click inside of the div and this content will not be displayed.

## Why an Image?

The original idea was a table transformation but a table is a block element and by using an image, users can add icons as inline elements. This also allows the end user the ability to modify the icon after the image has been added:

![Insert/Edit Image][https://raw.githubusercontent.com/jessgusclark/gadget-material-icons/master/xsl/edit-image.jpg]

* ** Source ** - placeholder image
* ** Description ** - icon name
* ** Class ** - material-icons will be in all icons, then the size and color can be modified from here.