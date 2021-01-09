'use strict'
//This file consist of custom function that mainly create or manage DOM-related stuff a.k.a helpers
class manage {
    static createPara(txt, eId) {
        const el = document.createElement('p');
        eId !== '' ? this.elementAddId(eId, el) : undefined;
        el.textContent = txt;
        return el;
    }
    static createInput(_type, eId, eClassName, placeholder, required) {
        const input = document.createElement('input');
        input.id = eId;
        input.placeholder = placeholder;
        input.className = eClassName;
        input.required = required;
        eId !== '' ? this.elementAddId(eId, input) : undefined;
        eClassName !== '' ? input.className = eClassName : undefined;
        return input;
    }
    static elWithClasses(txt = '', eId, eClassName, eTag) {
        const el = document.createElement(eTag);
        el.textContent = txt;
        el.className = eClassName;
        eId !== '' ? this.elementAddId(eId, el) : undefined;
        eClassName !== '' ? el.className = eClassName : undefined;
        return el;
    }
    static elementAddId(id, name) {
        name.id = id;
    }
    static appendMultipleEl(parent, child) {

        parent.append(child);
        console.log('debug purposes');
    }
    static modifyAttr(name, _type, attr) {
        name.setAttribute(_type, attr);
    }
}

export { manage }