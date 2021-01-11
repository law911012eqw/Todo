'use strict'
//This file consist of custom function that mainly create or manage DOM-related stuff a.k.a helpers
class manage {
    static createPara(txt, eId) {
        const el = document.createElement('p');
        eId !== '' ? this.elementAddId(eId, el) : undefined;
        el.textContent = txt;
        return el;
    }
    static createInput(_type, eId, eClassName, placeholder, required, l) {
        const input = document.createElement('input');
        input.id = eId;
        input.placeholder = placeholder;
        input.className = eClassName;
        input.required = required;
        input.maxLength = l;
        eId !== '' ? this.elementAddId(eId, input) : undefined;
        eClassName !== '' ? input.className = eClassName : undefined;
        return input;
    }
    static createTextarea(eClassName, cols, rows){
        const textarea = document.createElement('textarea');
        textarea.className = eClassName;
        textarea.cols = cols;
        textarea.rows = rows;
        eClassName !== '' ? textarea.className = eClassName : undefined;
        return textarea;
    }
    static createLabel(forVal, text){
        const label = document.createElement('label');
        label.setAttribute("for",forVal);
        label.textContent = text;
    }
    static createSelect(eId)
    static createChecklist(eClassName, checked){
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = checked;
        input.ClassName = eClassName;
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