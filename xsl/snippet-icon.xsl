<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xsl:stylesheet>
<!-- 
Implementations Skeletor v3 - 5/10/2014

Contributors: Jesse Clark <jesse.clark@unco.edu>
Last Updated: 7/18/16
-->
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:ou="http://omniupdate.com/XSL/Variables"
  xmlns:fn="http://omniupdate.com/XSL/Functions"
  xmlns:ouc="http://omniupdate.com/XSL/Variables"
  exclude-result-prefixes="xs ou fn ouc">
    
    <!-- Convert img to icon -->
	<xsl:template match="img[starts-with(@class, 'material-icons')]">
        <i class="{@class}"><xsl:value-of select="@alt" /></i>
	</xsl:template>
	
</xsl:stylesheet>
