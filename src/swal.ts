import { IAlertConcept, IsObject } from '@benbraide/inlinejs';

import Swal from 'sweetalert2'

function TransformNotifyOptions(options: any){
    if (IsObject(options)){
        options['icon'] = (options['icon'] || (options['error'] ? 'error' : (options['type'] || options['code'] || 'success')));
        options['text'] = (options['text'] || options['message']);
        options['toast'] = (!!options['toast'] || !!options['asToast']);
        options['position'] = (options['position'] || (options['toast'] ? 'top-end' : 'center'));
        options['timer'] = (options['timer'] || ((typeof options['duration'] === 'number') ?  options['duration'] : ((options['duration'] === false) ? undefined : 5000)));

        ['error', 'type', 'code', 'success', 'message', 'asToast', 'duration'].forEach((key) => {
            delete options[key];
        });
    }
    else{
        options = {
            icon: 'info',
            title: 'Information',
            text: ((typeof options === 'string') ? options : 'Sample notification'),
            position: 'center',
        };
    }
    
    return options;
}

function TransformConfirmOptions(options: any){
    if (IsObject(options)){
        options['icon'] = (options['icon'] || 'warning');
        options['title'] = (options['title'] || 'Please confirm your action');
        options['text'] = (options['text'] || options['message']);
        options['confirmButtonText'] = (options['confirmButtonText'] || 'Yes, continue');
        options['position'] = (options['position'] || 'center');
        options['toast'] = false;

        delete options['timer'];
        delete options['message'];
    }
    else{
        options = {
            icon: 'warning',
            title: 'Please confirm your action',
            text: ((typeof options === 'string') ? options : 'Are you sure you want to continue?'),
            confirmButtonText: 'Yes, continue',
            position: 'center',
        };
    }
    
    return options;
}

function TransformPromptOptions(options: any){
    if (IsObject(options)){
        options['icon'] = (options['icon'] || 'info');
        options['title'] = (options['title'] || 'Please enter details below');
        options['text'] = (options['text'] || options['message']);
        options['confirmButtonText'] = (options['confirmButtonText'] || 'Submit');
        options['position'] = (options['position'] || 'center');
        options['input'] = (options['input'] || options['type'] || 'text');
        options['toast'] = false;

        delete options['timer'];
        ['message', 'type'].forEach((key) => {
            delete options[key];
        });
    }
    else{
        options = {
            icon: 'info',
            title: 'Please enter details below',
            text: ((typeof options === 'string') ? options : 'Use the input field below to enter details'),
            confirmButtonText: 'Submit',
            position: 'center',
            input: 'text',
        };
    }

    return options;
}

export class SwalAlert implements IAlertConcept{
    public Notify(options: any): Promise<any>{
        return Swal.fire(TransformNotifyOptions(options));
    }

    public Confirm(options: any): Promise<any>{
        return Swal.fire(TransformConfirmOptions(options));
    }

    public Prompt(options: any): Promise<any>{
        return Swal.fire(TransformPromptOptions(options));
    }
}
