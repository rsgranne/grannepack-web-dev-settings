This is the README for GrannePack Web Dev Settings.

# GrannePack Web Dev Settings

This extension of HTML-, CSS-, & SCSS-related *settings* & *keyboard shortcuts* is aimed at students in [Scott Granneman’s](https://www.granneman.com/) beginning Web Development courses. Other languages may be added at later times.

A list of all settings & keyboard shortcuts are further below.

## Other extension packs by Scott Granneman for beginning Web Development courses

I have also created extension packs of *extensions*, also for students in [my](https://www.granneman.com/) beginning Web Development courses:

* [GrannePack HTML](https://marketplace.visualstudio.com/items?itemName=granneman.grannepack-html)
* [GrannePack CSS](https://marketplace.visualstudio.com/items?itemName=granneman.grannepack-css)
* [GrannePack Git](https://marketplace.visualstudio.com/items?itemName=granneman.grannepack-git)
* [GrannePack Markdown](https://marketplace.visualstudio.com/items?itemName=granneman.grannepack-markdown)

In addition, I made an extension that installs snippets for HTML, CSS, & SCSS: [GrannePack Web Dev Snippets](https://marketplace.visualstudio.com/items?itemName=granneman.grannepack-web-dev-snippets).

## Settings

This extension sets the following preferences:

```json
{
  "breadcrumbs.enabled": true,
  "colorHelper.formatsOrder": [
    "hsl",
    "hex",
    "named"
  ],
  "css.format.spaceAroundSelectorSeparator": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "editor.acceptSuggestionOnEnter": "on",
  "editor.bracketPairColorization.enabled": true,
  "editor.columnSelection": false,
  "editor.cursorSurroundingLines": 3,
  "editor.detectIndentation": false,
  "editor.fontFamily": "SourceCodePro, Menlo, Consolas, FiraMono, Courier, monospace",
  "editor.fontSize": 11,
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.guides.bracketPairs": true,
  "editor.hover.delay": 2000,
  "editor.inlineSuggest.enabled": true,
  "editor.lineHeight": 0,
  "editor.linkedEditing": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.padding.bottom": 25,
  "editor.padding.top": 25,
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.renderWhitespace": "selection",
  "editor.snippetSuggestions": "bottom",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "editor.wrappingIndent": "indent",
  "emmet.preferences": {
    "format.forceIndentationForTags": [
      "address",
      "article",
      "aside",
      "audio",
      "blockquote",
      "body",
      "canvas",
      "div",
      "dl",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "head",
      "header",
      "iframe",
      "main",
      "map",
      "nav",
      "object",
      "ol",
      "p",
      "pre",
      "script",
      "section",
      "style",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "tr",
      "ul",
      "video"
    ]
  },
  "emmet.showSuggestionsAsSnippets": true,
  "explorer.compactFolders": false,
  "extensions.ignoreRecommendations": true,
  "files.exclude": {
    "**/._*": true
  },
  "files.insertFinalNewline": true,
  "html-css-class-completion.enableEmmetSupport": true,
  "html.format.endWithNewline": true,
  "html.format.extraLiners": "body",
  "html.format.indentInnerHtml": true,
  "html.format.unformatted": "b,em,i,span,strong,wbr",
  "html.format.wrapLineLength": 0,
  "htmlhint.options": {
    "alt-require": true,
    "attr-lowercase": [
      "allowReorder",
      "attributeName",
      "attributeType",
      "autoReverse",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPath",
      "clipPathUnits",
      "contentScriptType",
      "contentStyleType",
      "diffuseConstant",
      "edgeMode",
      "externalResourcesRequired",
      "filterRes",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "onBlur",
      "onChange",
      "onClick",
      "onFocus",
      "onKeyUp",
      "onLoad",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ],
    "attr-no-duplication": true,
    "attr-no-unnecessary-whitespace": true,
    "attr-value-double-quotes": true,
    "attr-whitespace": true,
    "doctype-first": true,
    "empty-tag-not-self-closed": true,
    "html-lang-require": true,
    "id-unique": true,
    "inline-style-disabled": true,
    "src-not-empty": true,
    "tag-pair": true,
    "tagname-lowercase": [
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "linearGradient",
      "radialGradient",
      "textPath"
    ],
    "tagname-specialchars": true,
    "title-require": true
  },
  "http.systemCertificates": false,
  "livePreview.openPreviewTarget": "External Browser",
  "livePreview.autoRefreshPreview": "On Changes to Saved Files",
  "livePreview.tasks.browserPreviewLaunchServerLogging": false,
  "liveSassCompile.settings.generateMap": false,
  "[markdown]": {
    "editor.tabSize": 4
  },
  "placeholderImages.quoteStyle": "double",
  "window.restoreWindows": "preserve",
  "window.zoomLevel": 1.25,
  "workbench.activityBar.visible": true,
  "workbench.colorCustomizations": {
    "editorIndentGuide.activeBackground": "#FFA500"
  },
  "workbench.editor.enablePreview": false,
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.tabSizing": "shrink",
  "workbench.settings.openDefaultSettings": true,
  "workbench.settings.useSplitJSON": true,
  "workbench.startupEditor": "none"
}
```

## Keyboard shortcuts

This extension sets the following keyboard shortcuts.

* `editor.action.joinLines`: `ctrl+j` (Windows/Linux/macOS)
* `editor.emmet.action.balanceIn`
  * `ctrl+e ctrl+DownArrow` (Windows/Linux)
  * `cmd+e cmd+DownArrow` (macOS)
* `editor.emmet.action.balanceOut`
  * `ctrl+e ctrl+UpArrow` (Windows/Linux)
  * `cmd+e cmd+UpArrow` (macOS)
* `editor.emmet.action.updateImageSize`
  * `ctrl+e ctrl+i` (Windows/Linux)
  * `cmd+e cmd+i` (macOS)
* `editor.emmet.action.wrapWithAbbreviation`
  * `ctrl+e ctrl+r` (Windows/Linux)
  * `cmd+e cmd+r` (macOS)
* `workbench.action.togglePanel`
  * `ctrl+alt+j` (Windows/Linux)
  * `ctrl+option+j` (macOS)
