export class ITGRule {
   
    type = ''
    name= ''
    status= ''
    id= '';
    description= ''
    application= ''
    module= ''
    enabled= ''
    ruleParserType= ''
    version= 0
    lastModifiedBy= ''
    lastModifiedDate= ''
    referenceRulesLink= '' 
    versionOwner= ''
}

export class AssignmentRule extends ITGRule {
    override type = 'AssignmentRule';
    expression = ''
}

export class CSharpCodeRule extends ITGRule {
    override type ='CSharpCodeRule';
    nameSpace = ''
    code = ''
    referenceDLLs = []
}

export class ITGRuleSet extends ITGRule {
    override type = "ITGRuleSet";
    rules=[];
}

export class IfElseRuleSet extends ITGRuleSet {
    override type = "IfElseRuleSet";
    override rules = []; 
}

export enum IfElseRuleType {
    IFELSE = "IFELSE",
    ELSE = "ELSE",
}

export class IFElseRule extends ITGRule {
    override type = "IFElseRule";
    successRules = [];
    expression = '';
    ifElseRuleType = IfElseRuleType;
}


export class ReferenceRule extends ITGRule {
    override type = "ReferenceRule";
    referenceRuleId = ''; 
}

export class ValidationRule extends ITGRule {
    override type = "ValidationRule";
    message = '';
    expression = '';
    continueOnError =  false;
}