/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  ItemType: () => ItemType,
  default: () => RecursiveItemCopyPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var ItemType = /* @__PURE__ */ ((ItemType2) => {
  ItemType2["File"] = "file";
  ItemType2["Folder"] = "folder";
  return ItemType2;
})(ItemType || {});
var RecursiveItemCopyPlugin = class extends import_obsidian.Plugin {
  async onload() {
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        menu.addItem((item) => {
          item.setTitle("Copy contents (recursive)").setIcon("copy").onClick(async () => {
            await this.handleCopyContents([file]);
          });
        });
      })
    );
    this.registerEvent(
      this.app.workspace.on("files-menu", (menu, files) => {
        menu.addItem((item) => {
          item.setTitle("Copy contents of selected items (recursive)").setIcon("copy").onClick(async () => {
            await this.handleCopyContents(files);
          });
        });
      })
    );
  }
  // Updated method to handle copying contents of selected files or folders
  async handleCopyContents(files) {
    if (files.length === 0) {
      new import_obsidian.Notice("No files or folders selected.");
      return;
    }
    const items = [];
    for (const file of files) {
      if (file instanceof import_obsidian.TFolder) {
        items.push(...await this.getFolderContents(file));
      } else if (file instanceof import_obsidian.TFile) {
        const content = await this.app.vault.read(file);
        items.push({
          type: "file" /* File */,
          path: file.path,
          content
        });
      }
    }
    const uniqueItems = this.removeDuplicates(items);
    const copyInfo = {
      items: uniqueItems,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    await navigator.clipboard.writeText(JSON.stringify(copyInfo, null, 2));
    new import_obsidian.Notice(`Contents of ${uniqueItems.length} unique item(s) copied to clipboard in JSON format!`);
  }
  // Updated method to get contents of a folder
  async getFolderContents(folder) {
    const items = [{
      type: "folder" /* Folder */,
      path: folder.path
    }];
    for (const child of folder.children) {
      if (child instanceof import_obsidian.TFile) {
        const content = await this.app.vault.read(child);
        items.push({
          type: "file" /* File */,
          path: child.path,
          content
        });
      } else if (child instanceof import_obsidian.TFolder) {
        items.push(...await this.getFolderContents(child));
      }
    }
    return items;
  }
  // Updated method to remove duplicates
  removeDuplicates(items) {
    const uniqueItems = [];
    const seenPaths = /* @__PURE__ */ new Set();
    for (const item of items) {
      if (!seenPaths.has(item.path)) {
        seenPaths.add(item.path);
        uniqueItems.push(item);
      }
    }
    return uniqueItems;
  }
};

/* nosourcemap */