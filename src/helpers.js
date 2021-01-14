/* This file contains custom functions that mainly
are created to manage DOM related stuff a.k.a helpers */
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

	static createTextarea(eClassName, cols, rows, disabled, placeholder) {
		const textarea = document.createElement('textarea');
		textarea.className = eClassName;
		textarea.cols = cols;
		textarea.rows = rows;
		textarea.disabled = disabled;
		textarea.placeholder = placeholder;
		eClassName !== '' ? textarea.className = eClassName : undefined;
		return textarea;
	}

	static createDate(eId, value, min) {
		const date = document.createElement('input');
		date.type = 'date';
		date.value = value;
		date.min = min;
		date.id = eId;
		date.required = true;
		return date;
	}

	static createLabel(forVal, text, eId, eClassName) {
		const label = document.createElement('label');
		label.setAttribute('for', forVal);
		label.textContent = text;
		label.id = eId;
		label.className = eClassName;
		return label;
	}

	static createSelect(eId) {
		const select = document.createElement('select');
		select.id = eId;
		return select;
	}

	static createSelectOption(value, text) {
		const option = document.createElement('option');
		option.value = value;
		option.textContent = text;
		return option;
	}

	static createSubmit(text) {
		const input = document.createElement('input');
		input.type = 'submit';
		input.value = text;
		return input;
	}

	static createRadio(value, eId, name) {
		const input = document.createElement('input');
		input.type = 'radio';
		input.value = value;
		input.id = eId;
		input.name = name;
		return input;
	}

	static createChecklist(eClassName) {
		const input = document.createElement('input');
		input.type = 'checkbox';
		input.className = eClassName;
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
		// eslint-disable-next-line no-param-reassign
		name.id = id;
	}

	static modifyAttr(name, _type, attr) {
		name.setAttribute(_type, attr);
	}
}

export { manage };
