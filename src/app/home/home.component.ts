import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputControlComponent } from '../common/form-input/input-control/input-control.component';
import { ArrayDataSource } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import { SlideDialogService } from '../common/slide-dialog/slide-dialog.service';
import { DataService } from '../common/services/data/data.service';
import { AssignmentRule, CSharpCodeRule, IfElseRuleSet, ITGRule, ITGRuleSet, ReferenceRule, ValidationRule } from '../common/api-services/application-api/application-api.classes';
import { FormsModule } from '@angular/forms';
import { XSpinnerComponent } from "../common/load-spinner/spinner.component";
import { AdminApiService } from '../common/api-services/application-api/admin-api.service';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-home',
  imports: [InputControlComponent, CdkTreeModule, MatIconModule, MatButtonModule, CommonModule, FormsModule, XSpinnerComponent,MatCheckboxModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeComponent {
  parentData: any
  dataList = {
    "type": "ITGRuleSet",
    "rules": [
      {
        "type": "ITGRuleSet",

        "rules": [
          {
            "type": "ValidationRule",
            "message": "Application details not found.",
            "expression": "ctx.Application == null",
            "continueOnError": false,
            "id": "67ac7800cf6d9f9573c0b1cc",
            "name": "Application details not found",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "ValidationRule",
            "message": "Requested amount should be greater than zero.",
            "expression": "ctx.Application.RequestedAmount <= 0",
            "continueOnError": true,
            "id": "67ac7800cf6d9f9573c0b1cd",
            "name": "Requested Amount Greater Than Zero",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "ValidationRule",
            "message": "Member details missing in the application",
            "expression": "ctx.Application.Member == null",
            "continueOnError": false,
            "id": "67ac7800cf6d9f9573c0b1ce",
            "name": "Member details Missing",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "ValidationRule",
            "message": "Member is currently not active",
            "expression": "ctx.Application.Member.Status != 0",
            "continueOnError": true,
            "id": "67ac7800cf6d9f9573c0b1cf",
            "name": "Member should be Active",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "ValidationRule",
            "message": "Member does not have enough balance in account",
            "expression": "ctx.Application.Member.Account != null && ctx.Application.Member.Account.Balance <= 0",
            "continueOnError": false,
            "id": "67ac7800cf6d9f9573c0b1d0",
            "name": "Member should have balance in account.",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "ValidationRule",
            "message": "Member has active loans.",
            "expression": "ctx.Application.Member.Loans != null && (ctx.Application.Member.Loans.Any(x=>x.Status == 0))",
            "continueOnError": true,
            "id": "67ac7800cf6d9f9573c0b1d1",
            "name": "Member should not have active loans",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          }
        ],
        "id": "67ac7800cf6d9f9573c0b1d2",
        "name": "Basic Validation",
        "status": 0,
        "description": "Basic Validation",
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "ITGRuleSet",
        "rules": [],
        "id": "67ac7800cf6d9f9573c0b1d3",
        "name": "Validate Loans and balance",
        "status": 0,
        "description": "Validate Loans and balance",
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "IfElseRuleSet",
        "rules": [
          {
            "type": "IFElseRule",
            "successRules": [
              {
                "type": "AssignmentRule",
                "expression": "ctx.Application.InterestPercentage = 2",
                "id": "67ac7800cf6d9f9573c0b1d4",
                "name": "Assign 2020 interest Rate",
                "status": 0,
                "description": null,
                "application": null,
                "module": null,
                "enabled": true,
                "ruleParserType": 0,
                "version": null,
                "lastModifiedBy": null,
                "lastModifiedDate": null,
                "referenceRulesLink": null,
                "versionOwner": null
              }
            ],
            "expression": "DateTime.Now.Year == 2020",
            "ifElseRuleType": 0,
            "id": "67ac7800cf6d9f9573c0b1d5",
            "name": "Current Year 2020",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "IFElseRule",
            "successRules": [
              {
                "type": "AssignmentRule",
                "expression": "ctx.Application.InterestPercentage = 1.5",
                "id": "67ac7800cf6d9f9573c0b1d6",
                "name": "Assign 2022 interest Rate",
                "status": 0,
                "description": null,
                "application": null,
                "module": null,
                "enabled": true,
                "ruleParserType": 0,
                "version": null,
                "lastModifiedBy": null,
                "lastModifiedDate": null,
                "referenceRulesLink": null,
                "versionOwner": null
              }
            ],
            "expression": "DateTime.Now.Year == 2020",
            "ifElseRuleType": 0,
            "id": "67ac7800cf6d9f9573c0b1d7",
            "name": "Current Year 2020",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          },
          {
            "type": "IFElseRule",
            "successRules": [
              {
                "type": "ValidationRule",
                "message": "Default interest rate Already assigned and cannot be changed",
                "expression": "ctx.Application.InterestPercentage > 0",
                "continueOnError": false,
                "id": "67ac7800cf6d9f9573c0b1d8",
                "name": "Default Interest Rate Assignment validation",
                "status": 0,
                "description": null,
                "application": null,
                "module": null,
                "enabled": true,
                "ruleParserType": 0,
                "version": null,
                "lastModifiedBy": null,
                "lastModifiedDate": null,
                "referenceRulesLink": null,
                "versionOwner": null
              },
              {
                "type": "AssignmentRule",
                "expression": "ctx.Application.InterestPercentage = 1.2",
                "id": "67ac7800cf6d9f9573c0b1d9",
                "name": "Default interest Rate Assignment",
                "status": 0,
                "description": null,
                "application": null,
                "module": null,
                "enabled": true,
                "ruleParserType": 0,
                "version": null,
                "lastModifiedBy": null,
                "lastModifiedDate": null,
                "referenceRulesLink": null,
                "versionOwner": null
              }
            ],
            "expression": "",
            "ifElseRuleType": 1,
            "id": "67ac7800cf6d9f9573c0b1da",
            "name": "Default interest Rate",
            "status": 0,
            "description": null,
            "application": null,
            "module": null,
            "enabled": true,
            "ruleParserType": 0,
            "version": null,
            "lastModifiedBy": null,
            "lastModifiedDate": null,
            "referenceRulesLink": null,
            "versionOwner": null
          }
        ],
        "id": "67ac7800cf6d9f9573c0b1db",
        "name": "Assign Interest Rate",
        "status": 0,
        "description": null,
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "AssignmentRule",
        "expression": "ctx.Application.RequestedAmount = ((ctx.Application.RequestedAmount/100)*(ctx.Application.InterestPercentage))",
        "id": "67ac7800cf6d9f9573c0b1dc",
        "name": "Calculate Withdrawal Amount",
        "status": 0,
        "description": null,
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "CSharpCodeRule",
        "nameSpace": "",
        "code": "RuleEngineUtil.SetInCtx(ctx,\"ProcessedUTC_Date\",DateTime.UtcNow);\r\n",
        "referenceDLLs": [],
        "id": "67ac7800cf6d9f9573c0b1dd",
        "name": "Executing custom code logic on Application",
        "status": 0,
        "description": null,
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "CSharpCodeRule",
        "nameSpace": "",
        "code": "ctx.Application.CallFromCustomCode();\r\n",
        "referenceDLLs": [],
        "id": "67ac7800cf6d9f9573c0b1de",
        "name": "Executing custom code logic on Application and call application metod",
        "status": 0,
        "description": null,
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "CSharpCodeRule",
        "nameSpace": "",
        "code": " result.Status = RuleStatus.Pass;\r\n",
        "referenceDLLs": [],
        "id": "67ac7800cf6d9f9573c0b1df",
        "name": "Set Rule Status from custom code",
        "status": 0,
        "description": null,
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      },
      {
        "type": "CSharpCodeRule",
        "nameSpace": "",
        "code": "RuleEngineUtil.SetErrorMessage(ctx,\"adding some junk message\");\r\n",
        "referenceDLLs": [],
        "id": "67ac7800cf6d9f9573c0b1e0",
        "name": "Add error messages to ctx",
        "status": 0,
        "description": null,
        "application": null,
        "module": null,
        "enabled": true,
        "ruleParserType": 0,
        "version": null,
        "lastModifiedBy": null,
        "lastModifiedDate": null,
        "referenceRulesLink": null,
        "versionOwner": null
      }
    ],
    "id": "67ac7800cf6d9f9573c0b1e1",
    "name": "Test1",
    "status": 0,
    "description": "Test rule Sets",
    "application": "VNPF",
    "module": "Withdrawal",
    "enabled": true,
    "ruleParserType": 0,
    "version": null,
    "lastModifiedBy": null,
    "lastModifiedDate": null,
    "referenceRulesLink": null,
    "versionOwner": null
  }
  // ruleSets = new ArrayDataSource<any>([])
  public ruleSets = new ArrayDataSource<any>([this.dataList]);


  @ViewChild('addRuleSet', { static: false })
  addRuleSet!: TemplateRef<any>;

  treeControl = new NestedTreeControl<any>((node: any) => node.rules || node.successRules);
  hasChild = (_: number, node: any) => (!!node.rules && node.rules.length > 0) || (!!node.successRules && node.successRules.length > 0);

  value = [
    {
      "description": "AssignMent Rule",
      "code": "AssignmentRule",
    },
    {
      "description": "CS Share Rule",
      "code": "CSharpCodeRule",
    },
    {
      "description": "ITG Rule",
      "code": "ITGRuleSet",
    },
    {
      "description": "Reference Rule",
      "code": "ReferenceRule",
    },
    {
      "description": "Validation Rule",
      "code": "ValidationRule",
    },
    {
      "description": "If Else Rule",
      "code": "IfElseRuleSet",
    },
  ]


  constructor(
    public slideDialog: SlideDialogService,
    public data: DataService,
    public api: AdminApiService
  ) {
    this.getTypeProperty()
  }


  getData: any;
  itgRule: any;
  itgRuleRaw = new ITGRule();
  typeObj = '';
  ruleMap: any = {}

  getTypeProperty(val?: any) {
    this.ruleMap = {
      'AssignmentRule': AssignmentRule,
      'CSharpCodeRule': CSharpCodeRule,
      'ITGRuleSet': ITGRuleSet,
      'ReferenceRule': ReferenceRule,
      'ValidationRule': ValidationRule,
      'IfElseRuleSet': IfElseRuleSet,
    };

    this.itgRule = this.ruleMap[val] ? new this.ruleMap[val]() : new ITGRule();
    this.itgRuleRaw = this.ruleMap[val] ? new this.ruleMap[val]() : new ITGRule();
    this.getData = this.ruleMap[val] ? new this.ruleMap[val]() : new ITGRule();
    // this.parentData = this.ruleMap[val] ? new this.ruleMap[val]() : new ITGRule();

  }

  addRule(val: any) {
    debugger
    this.ruleSets.connect().subscribe(data => {
      this.parentData = data
    });
    this.getData = val
    this.itgRule = { ...this.itgRuleRaw }
  }

  doSlideClose() {
    this.data.slideDialogRef?.close();
  }

  loadSpinner = false

  saveRuleSet() {
    debugger
    this.loadSpinner = true;
    if (this.getData.type === 'IFElseRule') {
      this.getData.successRules.push(this.itgRule);
    } else {
      this.getData.rules.push(this.itgRule);
    }
    setTimeout(() => {
      this.parentData[0].rules.forEach((element: any) => {
        if (element.id === this.getData.id) {
          element = this.getData
        }
      });
      this.ruleSets.connect().subscribe(data => {
        this.ruleSets = new ArrayDataSource<any>(data);
      });
      this.loadSpinner = false
    }, 1500)
    this.doSlideClose()
  }

  clearRule() {
    this.itgRule = { ...this.itgRuleRaw }
  }

  openRule(val: any) {
    this.itgRule = val
    console.log(val)
  }
  bulkSave() {
    this.ruleSets.connect().subscribe(data => {
      if (data.length > 0) {
        console.log('First Element:', data[0]); // Access first element
        this.itgRule = data[0]
      }
    });
    this.api.saveRuleSet(this.itgRule).subscribe((success) =>{

    })
  }



}
