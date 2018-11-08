import {Component, OnInit} from '@angular/core';
import {JackService} from "../../Services/jack.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    ngOnInit() {
    }

    title = 'ng-app';
    name = 'Jack';

    paramOneVal: any = 'Data1 of Parent to Son';
    paramTwoVal: any = 'Data2 of Parent to Son';

    private RESTUrl = '/api/angluar';

    constructor(public service: JackService,
                private http: HttpClient) {
    }

    getData() {
        this.http.post(this.RESTUrl, null)
            .subscribe(res => {
                console.log(res);
                if ('name' in res) {
                    this.name = res['name'];
                }
            });
    }

    accept(msg: string) {
        console.log(msg);
    }

    changeServiceInfo() {
        this.service.info = this.service.info + "1234";
        console.log("already edit the service info");

    }

}
