const vscode = require('vscode');

function updateSettings() {
  let config = vscode.workspace.getConfiguration();

  config.update('breadcrumbs.enabled', true, vscode.ConfigurationTarget.Global);
  config.update('colorHelper.formatsOrder', [
    "hsl",
    "hex",
    "named"
  ], vscode.ConfigurationTarget.Global);
  config.update('css.format.spaceAroundSelectorSeparator', true, vscode.ConfigurationTarget.Global);
  config.update('diffEditor.ignoreTrimWhitespace', false, vscode.ConfigurationTarget.Global);
  config.update('editor.acceptSuggestionOnEnter', "on", vscode.ConfigurationTarget.Global);
  config.update('editor.bracketPairColorization.enabled', true, vscode.ConfigurationTarget.Global);
  config.update('editor.columnSelection', false, vscode.ConfigurationTarget.Global);
  config.update('editor.cursorSurroundingLines', 3, vscode.ConfigurationTarget.Global);
  config.update('editor.detectIndentation', false, vscode.ConfigurationTarget.Global);
  config.update('editor.fontFamily', "SourceCodePro, Menlo, Consolas, FiraMono, Courier, monospace", vscode.ConfigurationTarget.Global);
  config.update('editor.fontSize', 11, vscode.ConfigurationTarget.Global);
  config.update('editor.formatOnPaste', true, vscode.ConfigurationTarget.Global);
  config.update('editor.formatOnSave', true, vscode.ConfigurationTarget.Global);
  config.update('editor.guides.bracketPairs', true, vscode.ConfigurationTarget.Global);
  config.update('editor.hover.delay', 2000, vscode.ConfigurationTarget.Global);
  config.update('editor.inlineSuggest.enabled', true, vscode.ConfigurationTarget.Global);
  config.update('editor.lineHeight', 0, vscode.ConfigurationTarget.Global);
  config.update('editor.linkedEditing', true, vscode.ConfigurationTarget.Global);
  config.update('editor.multiCursorModifier', "ctrlCmd", vscode.ConfigurationTarget.Global);
  config.update('editor.padding.bottom', 25, vscode.ConfigurationTarget.Global);
  config.update('editor.padding.top', 25, vscode.ConfigurationTarget.Global);
  config.update('editor.quickSuggestions', {
    "other": true,
    "comments": true,
    "strings": true
  }, vscode.ConfigurationTarget.Global);
  config.update('editor.renderWhitespace', "selection", vscode.ConfigurationTarget.Global);
  config.update('editor.snippetSuggestions', "bottom", vscode.ConfigurationTarget.Global);
  config.update('editor.tabSize', 2, vscode.ConfigurationTarget.Global);
  config.update('editor.wordWrap', "on", vscode.ConfigurationTarget.Global);
  config.update('editor.wrappingIndent', "indent", vscode.ConfigurationTarget.Global);
  config.update('emmet.preferences', {
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
  }, vscode.ConfigurationTarget.Global);
  config.update('emmet.showSuggestionsAsSnippets', true, vscode.ConfigurationTarget.Global);
  config.update('explorer.compactFolders', false, vscode.ConfigurationTarget.Global);
  config.update('extensions.ignoreRecommendations', true, vscode.ConfigurationTarget.Global);
  config.update('files.exclude', {
    "**/._*": true
  }, vscode.ConfigurationTarget.Global);
  config.update('files.insertFinalNewline', true, vscode.ConfigurationTarget.Global);
  config.update('html-css-class-completion.enableEmmetSupport', true, vscode.ConfigurationTarget.Global);
  config.update('html.format.endWithNewline', true, vscode.ConfigurationTarget.Global);
  config.update('html.format.extraLiners', "body", vscode.ConfigurationTarget.Global);
  config.update('html.format.indentInnerHtml', true, vscode.ConfigurationTarget.Global);
  config.update('html.format.unformatted', "abbr,b,em,i,mark,s,small,span,strong,sub,sup,var,wbr", vscode.ConfigurationTarget.Global);
  config.update('html.format.wrapLineLength', 0, vscode.ConfigurationTarget.Global);
  config.update('htmlhint.options', {
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
  }, vscode.ConfigurationTarget.Global);
  config.update('http.systemCertificates', false, vscode.ConfigurationTarget.Global);
  config.update('livePreview.openPreviewTarget', "External Browser", vscode.ConfigurationTarget.Global);
  config.update('livePreview.autoRefreshPreview', "On Changes to Saved Files", vscode.ConfigurationTarget.Global);
  config.update('livePreview.tasks.browserPreviewLaunchServerLogging', false, vscode.ConfigurationTarget.Global);
  config.update('liveSassCompile.settings.generateMap', false, vscode.ConfigurationTarget.Global);
  config.update('[markdown]', {
    "editor.tabSize": 4
  }, vscode.ConfigurationTarget.Global);
  config.update('placeholderImages.quoteStyle', "double", vscode.ConfigurationTarget.Global);
  config.update('window.restoreWindows', "preserve", vscode.ConfigurationTarget.Global);
  config.update('window.zoomLevel', 1.25, vscode.ConfigurationTarget.Global);
  config.update('workbench.activityBar.visible', true, vscode.ConfigurationTarget.Global);
  config.update('workbench.colorCustomizations', {
    "editorIndentGuide.activeBackground": "#FFA500"
  }, vscode.ConfigurationTarget.Global);
  config.update('workbench.editor.enablePreview', false, vscode.ConfigurationTarget.Global);
  config.update('workbench.editor.enablePreviewFromQuickOpen', false, vscode.ConfigurationTarget.Global);
  config.update('workbench.editor.highlightModifiedTabs', true, vscode.ConfigurationTarget.Global);
  config.update('workbench.editor.tabSizing', "shrink", vscode.ConfigurationTarget.Global);
  config.update('workbench.settings.openDefaultSettings', true, vscode.ConfigurationTarget.Global);
  config.update('workbench.settings.useSplitJSON', true, vscode.ConfigurationTarget.Global);
  config.update('workbench.startupEditor', "none", vscode.ConfigurationTarget.Global);
  // config.update('', , vscode.ConfigurationTarget.Global);
}

function activate(context) {
  console.log('Your extension "GrannePack - Web Dev Settings" is now active!');

  // Call the updateSettings function when the extension is activated
  updateSettings();

  // You can also add commands, event listeners, and more to your extension here
  // ...
}

function deactivate() {
  // This function is called when your extension is deactivated
  // You can clean up resources, save data, and perform other tasks here if needed
}

module.exports = {
  activate,
  deactivate
};
