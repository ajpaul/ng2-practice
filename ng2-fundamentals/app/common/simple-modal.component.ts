import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core'
import { JQ_TOKEN } from './index'

@Component({
    selector: 'simple-modal',
    template: `
    <div id="{{elementId}}" class="modal fade" #modalContainer tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close"
                        data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [
        `
        .modal-body {height: 250px; overflow-y: scroll}
        `
    ]
})


//he is using modal.body instead of modal-body for the class up there
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalContainer') containerEl: ElementRef;
    //ViewChildren could be used if you had a ngFor and you needed the whole collection
    //ContentChild is used for projected content
    @Input() closeOnBodyClick: string;

    constructor(@Inject(JQ_TOKEN) private $: any) {

    }

    closeModal() {
        //access specific dom node by getting the #modalContainer ref on the dom node
        if(this.closeOnBodyClick.toLocaleLowerCase() === "true")
            this.$(this.containerEl.nativeElement).modal('hide');
    }
}