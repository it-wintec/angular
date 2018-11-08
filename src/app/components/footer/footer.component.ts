import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {JackService} from "../../Services/jack.service";

import nztm from "nztm";
// import nztm from "../../nztm2000/index";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    @Input() paramOne: any;
    @Input() paramTwo: any;

    @Output()
    initEmit = new EventEmitter<string>();

    constructor(public service: JackService) {
       nztm.test();
    }

    ngOnInit() {
        this.initEmit.emit("son tell parent: i successed");
    }

    childMethod() {
        console.log("print from son");
    }

    showServiceInfo() {
        console.log("print service info"+this.service.info);
    }

}
