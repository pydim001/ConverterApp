//this file contains helper functions for any calculations

export const writeCustom = (fieldName, name, convertRate) => {
    const readfile = require("./assets/custom.json");
    const path = './assets/custom.json';
    console.log(path)
    let form = {};
    let writable = {}
    form[name] = convertRate;
    writable[fieldName] = form;
}

export function writeColor(type, color) {
    const settings = require("./assets/settings.json");
    settings["color"] = [type, color]

}

export const validHex = (hex) => {
    const valid = "0123456789abcdef"
    for (let char of hex) {
        if (!valid.includes(char)) {
            return false;
        }
    } return true;
}