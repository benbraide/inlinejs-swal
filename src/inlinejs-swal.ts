import { GetGlobal, WaitForGlobal } from '@benbraide/inlinejs';

import { SwalAlert } from './swal';

WaitForGlobal().then(() => {
    GetGlobal().GetConcept<any>('alert')?.SetName('swal');
    GetGlobal().SetConcept('swal', new SwalAlert);
});
