# CSS

This section contains css that should be liked to or added to your University's CSS file.


## Icon Font

Google provides the icons as a font. Instructions on how to install that are located [on their site](http://google.github.io/material-design-icons/).

At a bare minimum, add this:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
```

## Customizations

The code in [icons.css](icons.css) is additional code that is used for sizes and colors of the icons. It needs to be added to the page's CSS.

### Additional Sizes

To add additional sizes, add an additional style to the [icons.css](icons.css) file with the `font-size`. Then add an additional object in the [size.json](../gadget/dist/settings/size.json) file with the format below. the class name should match the class name in the [icons.css](icons.css) file.

```	
{
	"name" : "DisplayName",
	"class" : "xl"
}
```

### Additional Colors

Same process as the sizes. Add colors to [icons.css](icons.css) then add an object to [colors.json](../gadget/dist/settings/colors.json) with the format below:

```	
{
	"name" : "DisplayColor",
	"class" : "yellow"
}
```