/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ClarityDocComponent} from "../clarity-doc";
import {Component} from "@angular/core";

const HTML_EXAMPLE_CLICKABLE_ROWS = `
<clr-treetable>
    <clr-datagrid>
        <clr-dg-column>Name</clr-dg-column>
        <clr-dg-column>Role</clr-dg-column>
        <clr-dg-column>Random Number</clr-dg-column>
        <clr-dg-column>Random Date</clr-dg-column>

        <clr-tt-row>
            <clr-dg-cell>David Wallace</clr-dg-cell>
            <clr-dg-cell>CFO</clr-dg-cell>
            <clr-dg-cell>2</clr-dg-cell>
            <clr-dg-cell>2nd of August</clr-dg-cell>

            <clr-tt-row>
                <clr-dg-cell>Michael Scott</clr-dg-cell>
                <clr-dg-cell>Regional Manager</clr-dg-cell>
                <clr-dg-cell>19</clr-dg-cell>
                <clr-dg-cell>3rd of April</clr-dg-cell>

                <clr-tt-row>
                    <clr-dg-cell>Dwight K. Schrute</clr-dg-cell>
                    <clr-dg-cell>Assistant to the Regional Manager</clr-dg-cell>
                    <clr-dg-cell>290</clr-dg-cell>
                    <clr-dg-cell>17th of May</clr-dg-cell>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Jim Halpert</clr-dg-cell>
                    <clr-dg-cell>Head of Sales</clr-dg-cell>
                    <clr-dg-cell>Lucky 7</clr-dg-cell>
                    <clr-dg-cell>21st of December</clr-dg-cell>

                    <clr-tt-row>
                        <clr-dg-cell>Andy Bernard</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell>13</clr-dg-cell>
                        <clr-dg-cell>1st of December</clr-dg-cell>
                    </clr-tt-row>

                    <clr-tt-row>
                        <clr-dg-cell>Stanley Hudson</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell>3</clr-dg-cell>
                        <clr-dg-cell>15th of November</clr-dg-cell>
                    </clr-tt-row>

                    <clr-tt-row>
                        <clr-dg-cell>Phyllis Vance</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                    </clr-tt-row>

                    <clr-tt-row>
                        <clr-dg-cell>Todd Packer</clr-dg-cell>
                        <clr-dg-cell>The Packman</clr-dg-cell>
                        <clr-dg-cell>96</clr-dg-cell>
                        <clr-dg-cell>6th of September</clr-dg-cell>
                    </clr-tt-row>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Angela Martin</clr-dg-cell>
                    <clr-dg-cell>Head of Accounting</clr-dg-cell>
                    <clr-dg-cell>29</clr-dg-cell>
                    <clr-dg-cell>7th of September</clr-dg-cell>

                    <clr-tt-row>
                        <clr-dg-cell>Kevin Malone</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell>10</clr-dg-cell>
                        <clr-dg-cell>4th of June</clr-dg-cell>
                    </clr-tt-row>

                    <clr-tt-row>
                        <clr-dg-cell>Oscar Martinez</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell>11</clr-dg-cell>
                        <clr-dg-cell>9th of June</clr-dg-cell>
                    </clr-tt-row>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Kelly Kapoor</clr-dg-cell>
                    <clr-dg-cell>Head of Customer Service</clr-dg-cell>
                    <clr-dg-cell>1</clr-dg-cell>
                    <clr-dg-cell></clr-dg-cell>

                    <clr-tt-row>
                        <clr-dg-cell>Ryan Howard</clr-dg-cell>
                        <clr-dg-cell>Temp</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                    </clr-tt-row>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Creed Bratton</clr-dg-cell>
                    <clr-dg-cell>Quality Assurance</clr-dg-cell>
                    <clr-dg-cell>3</clr-dg-cell>
                    <clr-dg-cell>Early 1900s</clr-dg-cell>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Meredith Palmer</clr-dg-cell>
                    <clr-dg-cell>Supplier Relations</clr-dg-cell>
                    <clr-dg-cell></clr-dg-cell>
                    <clr-dg-cell></clr-dg-cell>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Toby Flenderson</clr-dg-cell>
                    <clr-dg-cell>Human Resources</clr-dg-cell>
                    <clr-dg-cell>0</clr-dg-cell>
                    <clr-dg-cell>Ugh...</clr-dg-cell>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Pam Beesly</clr-dg-cell>
                    <clr-dg-cell>Reception</clr-dg-cell>
                    <clr-dg-cell>10</clr-dg-cell>
                    <clr-dg-cell>4th of July</clr-dg-cell>
                </clr-tt-row>

                <clr-tt-row>
                    <clr-dg-cell>Darryl Philbin</clr-dg-cell>
                    <clr-dg-cell>Warehouse</clr-dg-cell>
                    <clr-dg-cell>99</clr-dg-cell>
                    <clr-dg-cell>31st of August</clr-dg-cell>
                </clr-tt-row>
            </clr-tt-row>
        </clr-tt-row>
        <clr-tt-row>
            <clr-dg-cell>Some Dude - you probably know him, but he definitely knows you!</clr-dg-cell>
            <clr-dg-cell>N/A</clr-dg-cell>
            <clr-dg-cell>-1</clr-dg-cell>
            <clr-dg-cell>1st of April</clr-dg-cell>
        </clr-tt-row>
    </clr-datagrid>
</clr-treetable>`;

const HTML_EXAMPLE_CLICKABLE_CARET = `
<clr-treetable [clrClickableRows]="false">
    <clr-datagrid>
        <clr-dg-column>Name</clr-dg-column>
        <clr-dg-column>Role</clr-dg-column>
        <clr-dg-column>Actor</clr-dg-column>
    
        <clr-tt-row [clrExpanded]="true">
            <clr-dg-cell>David Wallace</clr-dg-cell>
            <clr-dg-cell>CFO</clr-dg-cell>
            <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
    
            <clr-tt-row>
                <clr-dg-cell>Michael Scott</clr-dg-cell>
                <clr-dg-cell>Regional Manager</clr-dg-cell>
                <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
    
                <clr-tt-row>
                    <clr-dg-cell>Dwight K. Schrute</clr-dg-cell>
                    <clr-dg-cell>Assistant to the Regional Manager</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Jim Halpert</clr-dg-cell>
                    <clr-dg-cell>Head of Sales</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
    
                    <clr-tt-row>
                        <clr-dg-cell>Andy Bernard</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
    
                    <clr-tt-row>
                        <clr-dg-cell>Stanley Hudson</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
    
                    <clr-tt-row>
                        <clr-dg-cell>Phyllis Vance</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
    
                    <clr-tt-row>
                        <clr-dg-cell>Todd Packer</clr-dg-cell>
                        <clr-dg-cell>The Packman</clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Angela Martin</clr-dg-cell>
                    <clr-dg-cell>Head of Accounting</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
    
                    <clr-tt-row>
                        <clr-dg-cell>Kevin Malone</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
    
                    <clr-tt-row>
                        <clr-dg-cell>Oscar Martinez</clr-dg-cell>
                        <clr-dg-cell></clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Kelly Kapoor</clr-dg-cell>
                    <clr-dg-cell>Head of Customer Service</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
    
                    <clr-tt-row>
                        <clr-dg-cell>Ryan Howard</clr-dg-cell>
                        <clr-dg-cell>Temp</clr-dg-cell>
                        <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                    </clr-tt-row>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Creed Bratton</clr-dg-cell>
                    <clr-dg-cell>Quality Assurance</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Meredith Palmer</clr-dg-cell>
                    <clr-dg-cell>Supplier Relations</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Toby Flenderson</clr-dg-cell>
                    <clr-dg-cell>Human Resources</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Pam Beesly</clr-dg-cell>
                    <clr-dg-cell>Reception</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                </clr-tt-row>
    
                <clr-tt-row>
                    <clr-dg-cell>Darryl Philbin</clr-dg-cell>
                    <clr-dg-cell>Warehouse</clr-dg-cell>
                    <clr-dg-cell><a target="_blank" href="https://www.google.com">Some actor</a></clr-dg-cell>
                </clr-tt-row>
            </clr-tt-row>
        </clr-tt-row>
        <clr-tt-row>
            <clr-dg-cell>Some Dude</clr-dg-cell>
            <clr-dg-cell>N/A</clr-dg-cell>
            <clr-dg-cell>You know him, nothing more to see</clr-dg-cell>
        </clr-tt-row>
    </clr-datagrid>
</clr-treetable>`;

const HTML_EXAMPLE_NOSCROLL = `
<clr-treetable class="clr-treetable-noscroll">
    <clr-datagrid>
        <clr-dg-column class="col-xs-9">Some column</clr-dg-column>
        <clr-dg-column class="col-xs-3">Some other column</clr-dg-column>

        <clr-tt-row>
            <clr-dg-cell class="col-xs-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut cumque ex libero, minus ...</clr-dg-cell>
            <clr-dg-cell class="col-xs-3">1</clr-dg-cell>
        </clr-tt-row>

        <clr-tt-row>
            <clr-dg-cell class="col-xs-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus dignissimos, ducimus...</clr-dg-cell>
            <clr-dg-cell class="col-xs-3">2</clr-dg-cell>

            <clr-tt-row>
                <clr-dg-cell class="col-xs-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda, at atque dignissimos ...</clr-dg-cell>
                <clr-dg-cell class="col-xs-3">3</clr-dg-cell>
            </clr-tt-row>
        </clr-tt-row>
    </clr-datagrid>
</clr-treetable>`;

@Component({
    selector: "clr-treetable-demo",
    templateUrl: "./treetable.demo.html",
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class TreetableDemo extends ClarityDocComponent {
    htmlExampleClickableRows = HTML_EXAMPLE_CLICKABLE_ROWS;
    htmlExampleClickableCaret = HTML_EXAMPLE_CLICKABLE_CARET;
    htmlExampleNoscroll = HTML_EXAMPLE_NOSCROLL;

    amount: number;

    constructor() {
        super("treetable");
    }
}