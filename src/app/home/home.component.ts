import { Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputControlComponent } from '../common/form-input/input-control/input-control.component';
import { ArrayDataSource } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {  CdkTreeModule, NestedTreeControl } from '@angular/cdk/tree';
import { SlideDialogService } from '../common/slide-dialog/slide-dialog.service';
import { DataService } from '../common/services/data/data.service';
import { ITGRule, ValidationRule } from '../common/api-services/application-api/application-api.classes';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from '../common/full-spinner/full-spinner.component';

@Component({
  selector: 'app-home',
  imports: [InputControlComponent,CdkTreeModule,MatIconModule,MatButtonModule,CommonModule, FormsModule,SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  parentData:any

  public vehicles = new ArrayDataSource<any>([
    {
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
  
  ]);

  
    @ViewChild('addRuleSet', { static: false })
    addRuleSet!: TemplateRef<any>;

  treeControl = new NestedTreeControl<any>((node: any) => node.rules || node.successRules);
  hasChild = (_: number, node: any) => (!!node.rules && node.rules.length > 0) || (!!node.successRules && node.successRules.length > 0);

  value = [
        {
          "description": "AssignMent Rule",
          "code": "ASRUL",
        },
        {
          "description": "CS Share Rule",
          "code": "SHRUL",
        },
        {
          "description": "ITG Rule",
          "code": "ITGRU",
        },
        {
          "description": "IFElse Rule",
          "code": "IFRUL",
        },
        {
          "description": "Reference Rule",
          "code": "RERUL",
        },
        {
          "description": "Validation Rule",
          "code": "ASRUL",
        },

  ]

  typeObj = ''

  constructor (
    public slideDialog : SlideDialogService,
    public data : DataService
  ){

  }

  getData:any;
  itgRule = new ValidationRule();
  itgRuleRaw = new ValidationRule();
  // ifRule = new 

  addRule(val:any){
    this.vehicles.connect().subscribe(data => {
      this.parentData = data
      console.log(data, val);
      
    });
    // const parentIndex = this.vehicles.data.findIndex((node: any) => node.id === this.getData.id);
// console.log(parentIndex);
    this.getData = val
    this.itgRule = {...this.itgRuleRaw}
    console.log(this.itgRule);
    
    this.data.slideDialogRef = this.slideDialog.open({
      data: {
        template: this.addRuleSet,
      },
    });
  }

  doSlideClose() {
    this.data.slideDialogRef?.close();
  }

  loadSpinner = false

  saveRuleSet(){      
    this.loadSpinner = true;
    debugger
      if( this.getData.type === 'IFElseRule'){
        this.getData.successRules.push(this.itgRule);
      } else {
          this.getData.rules.push(this.itgRule);
        }
        console.log(this.getData)
        debugger

        setTimeout(()=>{
          this.parentData[0].rules.forEach((element:any) => {
            if(element.id === this.getData.id ){
              element = this.getData
            }
         });
         this.vehicles.connect().subscribe(data => {
           this.vehicles = new ArrayDataSource<any>(data);
         });
         this.loadSpinner = false
 
        }, 3000)
       
    console.log(this.vehicles)

  }


}
