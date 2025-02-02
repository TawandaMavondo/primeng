import { Component } from '@angular/core';
import { AccessibilityDoc } from '../../doc/listbox/accessibilitydoc';
import { BasicDoc } from '../../doc/listbox/basicdoc';
import { DisabledDoc } from '../../doc/listbox/disableddoc';
import { EventsDoc } from '../../doc/listbox/eventsdoc';
import { FilterDoc } from '../../doc/listbox/filterdoc';
import { GroupDoc } from '../../doc/listbox/groupdoc';
import { ImportDoc } from '../../doc/listbox/importdoc';
import { InvalidDoc } from '../../doc/listbox/invaliddoc';
import { MultipleDoc } from '../../doc/listbox/multipledoc';
import { PropsDoc } from '../../doc/listbox/propsdoc';
import { StyleDoc } from '../../doc/listbox/styledoc';
import { TemplateDoc } from '../../doc/listbox/templatedoc';
import { TemplatesDoc } from '../../doc/listbox/templatesdoc';
@Component({
    templateUrl: './listboxdemo.html'
})
export class ListboxDemo {
    docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'filter',
            label: 'Filter',
            component: FilterDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
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
        },
        {
            id: 'events',
            label: 'Events',
            component: EventsDoc
        },
        {
            id: 'templates',
            label: 'Templates',
            component: TemplatesDoc
        }
    ];
}
