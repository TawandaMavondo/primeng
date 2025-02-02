import { Component } from '@angular/core';
import { DisabledDoc } from '../../doc/rating/disableddoc';
import { BasicDoc } from '../../doc/rating/basicdoc';
import { ImportDoc } from '../../doc/rating/importdoc';
import { NumberOfStarsDoc } from '../../doc/rating/numberofstarsdoc';
import { ReadOnlyDoc } from '../../doc/rating/readonlydoc';
import { TemplateDoc } from '../../doc/rating/templatedoc';
import { WithoutCancelDoc } from '../../doc/rating/withoutcanceldoc';
import { StyleDoc } from '../../doc/rating/styledoc';
import { PropsDoc } from '../../doc/rating/propsdoc';
import { EventsDoc } from '../../doc/rating/eventsdoc';
import { AccessibilityDoc } from '../../doc/rating/accessibilitydoc';

@Component({
    templateUrl: './ratingdemo.html'
})
export class RatingDemo {
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
            id: 'withoutcancel',
            label: 'Without Cancel',
            component: WithoutCancelDoc
        },
        {
            id: 'numberofstars',
            label: 'Number of Stars',
            component: NumberOfStarsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
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
        }
    ];
}
