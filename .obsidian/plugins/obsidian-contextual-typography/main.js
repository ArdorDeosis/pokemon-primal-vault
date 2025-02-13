/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var imageExt = ["bmp", "png", "jpg", "jpeg", "gif", "svg", "webp"];
var audioExt = ["mp3", "wav", "m4a", "3gp", "flac", "ogg", "oga"];
var videoExt = ["mp4", "webm", "ogv"];
function isInternalEmbed(node) {
    var _a;
    if (node.nodeType === 3) {
        return false;
    }
    var child = node.firstChild;
    return child && ((_a = child.classList) === null || _a === void 0 ? void 0 : _a.contains("internal-embed"));
}
function getEmbedType(node) {
    var _a;
    if (node.nodeType === 3) {
        return null;
    }
    var child = node.firstChild;
    var src = child.getAttr("src");
    if (!src) {
        return null;
    }
    var ext = (_a = src.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (imageExt.contains(ext))
        return "image";
    if (audioExt.contains(ext))
        return "audio";
    if (videoExt.contains(ext))
        return "video";
    if (/#\^[^\^]+$/.test(src))
        return "block";
    if (/#[^#]+$/.test(src))
        return "heading";
    return "page";
}
function isExternalImageEmbed(node) {
    var _a;
    if (node.nodeType === 3) {
        return false;
    }
    var child = node.firstChild;
    return child && ((_a = child.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "img";
}
function getBlockLanguage(node) {
    if (node.nodeType === 3) {
        return null;
    }
    var lang = null;
    node.classList.forEach(function (cls) {
        if (cls.startsWith("block-language")) {
            lang = cls.replace(/^block\-language\-/, "");
        }
    });
    return lang;
}
function fixMarkdownLinkEmbeds(node) {
    if (node.children.length <= 1) {
        return;
    }
    var containsNakedEmbed = false;
    var childNodes = [];
    node.childNodes.forEach(function (n) {
        var _a;
        if (n.nodeValue === "\n")
            return;
        switch (n.nodeName) {
            case "P": {
                if (n.children.length === 0) {
                    return;
                }
                else {
                    n.childNodes.forEach(function (pn) {
                        if (pn.nodeName !== "BR" && pn.nodeValue !== "\n")
                            childNodes.push(pn);
                    });
                    return;
                }
            }
            case "BR": {
                return;
            }
        }
        if (n.nodeType === 1 &&
            ((_a = n.classList) === null || _a === void 0 ? void 0 : _a.contains("internal-embed"))) {
            containsNakedEmbed = true;
        }
        childNodes.push(n);
    });
    if (!containsNakedEmbed)
        return;
    node.empty();
    node.createEl("p", {}, function (p) {
        childNodes.forEach(function (c, i, arr) {
            var _a;
            p.append(c);
            var nodeIsEmbed = c.nodeType === 1 &&
                !!c.getAttribute("src") &&
                i < arr.length - 1;
            var nodeIsTextFollowedByEmbed = c.nodeType === 3 &&
                ((_a = arr[i + 1]) === null || _a === void 0 ? void 0 : _a.nodeType) === 1 &&
                !!arr[i + 1].getAttribute("src");
            if (nodeIsEmbed || nodeIsTextFollowedByEmbed) {
                p.createEl("br");
            }
        });
    });
}
function tagNode(node, ctx) {
    if (node.nodeType === 3) {
        return;
    }
    var nodeEl = node;
    var isPrint = nodeEl.hasClass("markdown-preview-view");
    if (!isPrint &&
        !nodeEl.dataset.tagName &&
        nodeEl.hasChildNodes() &&
        nodeEl.firstChild.nodeType !== 3) {
        fixMarkdownLinkEmbeds(nodeEl);
        var childEl_1 = node.firstChild;
        Object.keys(childEl_1.dataset).forEach(function (k) { return (nodeEl.dataset[k] = childEl_1.dataset[k]); });
        nodeEl.findAll("a.tag").forEach(function (tagEl) {
            var tag = tagEl.innerText
                .slice(1)
                .replace("/", "");
            nodeEl.addClass("tag-" + tag);
        });
        var tagName = childEl_1.tagName.toLowerCase();
        if (isExternalImageEmbed(childEl_1)) {
            nodeEl.dataset.isEmbed = "true";
            nodeEl.dataset.embedType = "image";
            nodeEl.addClass("el-embed-image");
        }
        else if (isInternalEmbed(childEl_1)) {
            var embedType = getEmbedType(childEl_1);
            nodeEl.dataset.isEmbed = "true";
            nodeEl.dataset.embedType = embedType;
            nodeEl.addClass("el-embed-" + embedType);
        }
        else {
            var blockLang = getBlockLanguage(childEl_1);
            if (blockLang) {
                nodeEl.dataset.blockLanguage = blockLang;
                nodeEl.addClass("el-lang-" + blockLang);
            }
        }
        nodeEl.dataset.tagName = tagName;
        nodeEl.addClass("el-" + tagName);
    }
    else if (isPrint && nodeEl.children.length > 0) {
        var children = nodeEl.children;
        var _loop_1 = function (i) {
            var child = children[i];
            child.findAll("a.tag").forEach(function (tagEl) {
                var tag = tagEl.innerText
                    .slice(1)
                    .replace("/", "");
                child.addClass("tag-" + tag);
            });
        };
        for (var i = 0; i < children.length; i++) {
            _loop_1(i);
        }
    }
}
var ContextualTypography = /** @class */ (function (_super) {
    __extends(ContextualTypography, _super);
    function ContextualTypography() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextualTypography.prototype.onload = function () {
        document.body.classList.add("contextual-typography");
        this.registerMarkdownPostProcessor(tagNode);
    };
    ContextualTypography.prototype.unload = function () {
        document.body.classList.remove("contextual-typography");
    };
    return ContextualTypography;
}(obsidian.Plugin));

module.exports = ContextualTypography;


/* nosourcemap */