/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-absolute-path */
import { manage } from '/src/helpers.js';

// DOM settings [data/themes] stuff
const themes = [
	{ // red
		sort: 'rgba(161,16,15,0.95)', inner: 'rgb(175,36,36)', header: 'rgb(139,20,20)',
	},
	{
		sort: 'rgba(16,15,161,0.95)', inner: 'rgb(36,36,175)', header: 'rgb(20,20,119)',
	},
	{
		sort: 'rgba(15,161,16,0.95)', inner: 'rgb(36,175,76)', header: 'rgb(20,139,65)',
	},
	{
		sort: 'rgba(255,255,75,0.7)', inner: 'rgb(255,255,102)', header: 'rgb(255,255,12)',
	},
];

const COG = (() => {
	const settings = manage.elWithClasses('', 'settings-container', '', 'div');
	const settingsTab = manage.elWithClasses('', 'settings-tab', '', 'div');
	const tabs = manage.elWithClasses('', 'settings-tabs', '', 'div');
	const settingsMain = manage.elWithClasses('', 'settings-content', '', 'div');

	// themes content
	const themesCont = manage.elWithClasses('', 'themes-container', '', 'form');
	const themesSelectionPara = manage.createPara('Select theme:', 'lbl-theme');
	const themeRed = manage.createRadio('thred', 'theme-red', 'themes');
	const lblRed = manage.createLabel('red', '', 'lbl-red', 'lbl-colors');
	const themeBlue = manage.createRadio('thblue', 'theme-blue', 'themes');
	const lblBlue = manage.createLabel('blue', '', 'lbl-blue', 'lbl-colors');
	const themeGreen = manage.createRadio('thgreen', 'theme-green', 'themes');
	const lblGreen = manage.createLabel('green', '', 'lbl-green', 'lbl-colors');
	const themeYellow = manage.createRadio('thyellow', 'theme-yellow', 'themes');
	const lblYellow = manage.createLabel('yellow', '', 'lbl-yellow', 'lbl-colors');
	const btnThemes = manage.elWithClasses('', '', 'btn-tabs', 'div');
	const btnClearData = manage.elWithClasses('Clear Local Data', 'clear-data', '', 'button');
	const btnData = manage.elWithClasses('', '', 'btn-tabs', 'div');
	const settingsBtnCont = manage.elWithClasses('', 'settings-btns', '', 'div');

	const btnApply = manage.createSubmit('Apply');
	const btnClose = manage.elWithClasses('Close', 'settings-close', '', 'button');
	return {
		settings,
		settingsTab,
		settingsMain,
		settingsBtnCont,
		themesCont,
		btnClearData,
		btnThemes,
		btnData,
		tabs,
		themesSelectionPara,
		themeRed,
		lblRed,
		themeBlue,
		lblBlue,
		themeGreen,
		lblGreen,
		themeYellow,
		lblYellow,
		btnApply,
		btnClose,

	};
})();

// DOM properties, contents and the appended family tree of the settings section
const visualSettings = () => {
	document.getElementById('content').appendChild(COG.settings);
	COG.settings.append(COG.settingsTab);
	COG.settingsTab.append(COG.tabs, COG.settingsMain);
	COG.tabs.append(COG.btnThemes, COG.btnData);
	COG.btnThemes.appendChild(manage.createPara('Themes', ''));
	COG.btnData.appendChild(manage.createPara('Data', ''));
	COG.settings.style.display = 'none';
	COG.lblRed.appendChild(COG.themeRed);
	COG.lblBlue.appendChild(COG.themeBlue);
	COG.lblGreen.appendChild(COG.themeGreen);
	COG.lblYellow.appendChild(COG.themeYellow);
	COG.themesCont.append(
		COG.themesSelectionPara,
		COG.lblRed, COG.lblBlue,
		COG.lblGreen, COG.lblYellow,
	);
};

export { themes, COG, visualSettings };
