import { Component } from '@angular/core';
import { AccessibilityDoc } from '../../doc/keyfilter/accessibilitydoc';
import { ImportDoc } from '../../doc/keyfilter/importdoc';
import { PresetsDoc } from '../../doc/keyfilter/presetsdoc';
import { PropsDoc } from '../../doc/keyfilter/propsdoc';
import { RegexDoc } from '../../doc/keyfilter/regexdoc';

@Component({
    templateUrl: './keyfilterdemo.html'
})
export class KeyFilterDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'presets',
            label: 'Presets',
            component: PresetsDoc
        },
        {
            id: 'regex',
            label: 'Regex',
            component: RegexDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        }
    ];

    apiDocs = [
        {
            id: 'properties',
            label: 'Properties',
            component: PropsDoc
        }
    ];
}
