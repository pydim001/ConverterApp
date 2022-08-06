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

export const convert = (field, unit1, unit2, quan) => {
    const converter = require("./assets/rates.json");
    const simFields = require("./assets/simplefields.json");
    const compFields = require("./assets/compfields.json");
    const varFields = require("./assets/varfields.json");
    if (simFields.includes(field)) {
        const cf = converter[field];
        return quan / cf[unit1] * cf[unit2];
    }
}

export const getFormula = (field, unit1, unit2) => {
    const rates = require("./assets/rates.json");
    const cf = rates[field];
    return cf[unit2] / cf[unit1];
}
