import template from './';
import eventMapping from '../shared/eventMapping';
import addListener from './events/addListener';

/**
 * Set HTML attributes on the template
 * @param{ HTMLElement } node
 * @param{ Object } attrs
 */
export default function addDOMAttributes(vNode, domNode, attrs, useProperties) {
	for (let attrName in attrs) {
		const attrVal = attrs[attrName];

		if (attrVal) {
			if (useProperties && eventMapping[attrName]) {
				addListener(vNode, domNode, eventMapping[attrName], attrVal);
			} else {
				template.setProperty(vNode, domNode, attrName, attrVal, useProperties);
			}
		}
	}
}