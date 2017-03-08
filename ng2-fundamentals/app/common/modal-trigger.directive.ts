import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
//ElementRef listens to a specific element
import { JQ_TOKEN } from './jQuery.service'

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input('modal-trigger') modalId: string //alias because dashes aren't allowed

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any){
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({}) //empty configuration object...you could config this
        })
    }
}