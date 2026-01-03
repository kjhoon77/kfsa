// @ts-nocheck
export const Frmitem0002MEduItemHMgmtData = {};

export interface Ids_oBCode {
    CD?: string;
    DATA?: string;
}

export interface Ids_oMCode {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSCode {
    CD?: string;
    DATA?: string;
}

export interface Ids_oSubulGubunH {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSubulGubunH: Ids_oSubulGubunH[] = [
    { CD: '1', DATA: '교재개발과 수령' },
    { CD: '4', DATA: '타지부 수령' },
    { CD: '5', DATA: '타지부 지원' },
    { CD: '2', DATA: '사용' },
];

export interface Ids_oUseTargetB {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseTargetB: Ids_oUseTargetB[] = [
    { CD: '0', DATA: '교육' },
    { CD: '2', DATA: '기타' },
];

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oJibuAll {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRCode {
    CD?: string;
    DATA?: string;
    EIBTITLE?: string;
    EIMTITLE?: string;
    EISTITLE?: string;
}

export interface Ids_oEduSchedule {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oEduSchedule: Ids_oEduSchedule[] = [
    { CD: '0', DATA: '사용' },
    { CD: '1', DATA: '미사용' },
];

export interface Ids_oSubulGubunV {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSubulGubunV: Ids_oSubulGubunV[] = [
    { CD: '0', DATA: '제작' },
];

export interface Ids_oBCodeAll {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBCodeAll: Ids_oBCodeAll[] = [
    { CD: '', DATA: '전체' },
];

export interface Ids_oRCodeAll {
    CD?: string;
    DATA?: string;
    EIBTITLE?: string;
    EIMTITLE?: string;
    EISTITLE?: string;
}

export const ds_ds_oRCodeAll: Ids_oRCodeAll[] = [
    { CD: '', DATA: '전체', EIBTITLE: '', EIMTITLE: '', EISTITLE: '' },
];

export interface Ids_oMCodeAll {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oMCodeAll: Ids_oMCodeAll[] = [
    { CD: '', DATA: '전체' },
];

export interface Ids_ioEduItemH {
    EHCONTENT?: string;
    EHEDUMGNO?: number;
    EHEIMGNO?: number;
    EHGTMGNO?: string;
    EHMGNO?: number;
    EHSUBULDATE?: string;
    EHSUBULGUBUN?: string;
    EHSUBULQTY?: number;
    EHUSETARGET?: string;
    EIBCD?: number;
    EIBNM?: string;
    EIBTITLE?: string;
    EIKINDGUBUN?: string;
    EIKINDGUBUNNM?: string;
    EIKINDLEVEL?: string;
    EIKINDUSELEVEL?: number;
    EIMCD?: number;
    EIMGNO?: number;
    EIMNM?: string;
    EIMTITLE?: string;
    EISCD?: number;
    EISNM?: string;
    EISTITLE?: string;
    EIUSEGUBUN?: string;
    EHUSETARGETNM?: string;
    EDUYEAR?: string;
    EDUNM?: string;
    EDUDATE?: string;
    EDUTIME?: string;
    EDUCNT?: number;
    EHRECEIVEGTMGNO?: string;
}

export interface Ids_ioEduItemHUnit {
    EHCONTENT?: string;
    EHEDUMGNO?: number;
    EHEIMGNO?: number;
    EHGTMGNO?: string;
    EHMGNO?: number;
    EHSUBULDATE?: string;
    EHSUBULGUBUN?: string;
    EHSUBULQTY?: number;
    EHUSETARGET?: string;
    EHRECEIVEGTMGNO?: string;
}

export interface Ids_ioEduItemSingle {
    EIMGNO?: number;
}

export interface Ids_iOnlyKey {
    ONLYKEY?: number;
    ACTION?: string;
}

export const ds_ds_iOnlyKey: Ids_iOnlyKey[] = [
    { ACTION: 'X', ONLYKEY: '0' },
];

export interface Ids_oEduScheduleSingle {
    CGROUPNM?: string;
    EDUTIME?: string;
    EPNM?: string;
    EPSAVENM?: string;
    ESACCESSCNT?: number;
    ESCOUSECD?: string;
    ESDATE?: string;
    ESENDTIME?: string;
    ESEPMGNO?: number;
    ESGTMGNO?: string;
    ESGUBUN?: string;
    ESINETCLOSEDATE?: string;
    ESINETJUBSUCNT?: number;
    ESMGNO?: number;
    ESNOTICE?: string;
    ESPREPARED?: string;
    ESSEATCNT?: number;
    ESSTARTTIME?: string;
    ESSTUDENT?: string;
    ESSUBJECTGUBUN?: string;
    ESYEAR?: string;
}

export interface Ids_oTrainingOrderSingle {
    COURSEMUNJECD?: string;
    JUBSUCNT?: number;
    TOCOURSEGUBUN?: string;
    TOCOURSEGUBUNNM?: string;
    TOEDUCONTENTS?: string;
    TOEDUREMARK?: string;
    TOENDDATE?: string;
    TOENDTIME?: string;
    TOEPMGNO?: number;
    TOINETJUBSUCNT?: number;
    TOINETJUBSUYN?: string;
    TOJUBSUMAXCNT?: number;
    TOJUBSUSTATUS?: string;
    TOMAILNOTICE?: string;
    TOMGGTMGNO?: string;
    TOMGNO?: number;
    TOMODDATE?: string;
    TOMODSABUN?: string;
    TOMUNJEGUBUN?: string;
    TOREGDATE?: string;
    TOREGSABUN?: string;
    TOREMARK?: string;
    TOSEATCNT?: number;
    TOSEATLIMITYN?: string;
    TOSEATSELECTYN?: string;
    TOSEXLIMITYN?: string;
    TOSTARTDATE?: string;
    TOSTARTTIME?: string;
    TOTCCOURSECD?: string;
    TOTRAININGORDER?: string;
    TOUSEYN?: string;
    TOYEAR?: string;
    COURSENM?: string;
}

export interface Ids_oUseTargetL {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseTargetL: Ids_oUseTargetL[] = [
    { CD: '0', DATA: '신규' },
    { CD: '1', DATA: '교부' },
    { CD: '2', DATA: '재교부' },
    { CD: '3', DATA: '훼손' },
    { CD: '4', DATA: '기타' },
];

export interface Ids_oUseTargetF {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseTargetF: Ids_oUseTargetF[] = [
    { CD: '0', DATA: '사용' },
    { CD: '1', DATA: '훼손' },
    { CD: '2', DATA: '기타' },
];

export interface Ids_oUseTargetC {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseTargetC: Ids_oUseTargetC[] = [
    { CD: '0', DATA: '사용' },
    { CD: '1', DATA: '훼손' },
    { CD: '2', DATA: '기타' },
];

export interface Ids_oReceiveJibu {
    CD?: string;
    DATA?: string;
}
