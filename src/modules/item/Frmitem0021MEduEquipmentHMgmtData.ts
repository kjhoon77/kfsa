// @ts-nocheck
export const Frmitem0021MEduEquipmentHMgmtData = {};

export interface Ids_oCode1 {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCode2 {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCode3 {
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
    { CD: '2', DATA: '사용' },
];

export interface Ids_oUseTargetB {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseTargetB: Ids_oUseTargetB[] = [
    { CD: '0', DATA: '교육' },
    { CD: '1', DATA: '타지부지원' },
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

export interface Ids_ioEduEquipmentH {
    EQHMGNO?: string;
    EQHBUYDATE?: number;
    EQHBUYGTMGNO?: number;
    BUYGTMGNO?: string;
    EQHMGGTMGNO?: number;
    MGGTMGNO?: string;
    EQHITEMNO?: string;
    EQHBUYSEQ?: number;
    EQHEQCCD1?: string;
    EQHEQCCD2?: number;
    EQHEQCCD3?: string;
    EQHCD?: string;
    EQHNM?: string;
    EQHQTY?: string;
    EQHBUYAMOUNT?: string;
    EQHBUYGUBUN?: number;
    EQHHOLDGUBUN?: number;
    HOLDGUBUN?: number;
    EQHDISCARDGUBUN?: string;
    DISCARDGUBUN?: string;
    EQHDISCARDDATE?: number;
    EQHREMARK?: string;
    EQHREGDATE?: string;
    EQHREGSABUN?: string;
    EQHMODDATE?: string;
    EQHMODSABUN?: string;
    EQHDELGUBUN?: string;
    EQHSAVENM?: string;
    EQHREALNM?: string;
    EQHFILESIZE?: string;
    EQHDIRPATH?: string;
}

export interface Ids_ioEduEquipmentHUnit {
    EQHMGNO?: string;
    EQHBUYDATE?: number;
    EQHBUYGTMGNO?: string;
    BUYGTMGNO?: string;
    EQHMGGTMGNO?: string;
    MGGTMGNO?: string;
    EQHITEMNO?: string;
    EQHBUYSEQ?: number;
    EQHEQCCD1?: string;
    EQHEQCCD2?: number;
    EQHEQCCD3?: string;
    EQHCD?: string;
    EQHNM?: string;
    EQHQTY?: string;
    EQHBUYAMOUNT?: string;
    EQHBUYGUBUN?: number;
    EQHHOLDGUBUN?: number;
    HOLDGUBUN?: number;
    EQHDISCARDGUBUN?: string;
    DISCARDGUBUN?: string;
    EQHDISCARDDATE?: number;
    EQHREMARK?: string;
    EQHREGDATE?: string;
    EQHREGSABUN?: string;
    EQHMODDATE?: string;
    EQHMODSABUN?: string;
    EQHDELGUBUN?: string;
    EQHSAVENM?: string;
    EQHREALNM?: string;
    EQHFILESIZE?: string;
    EQHDIRPATH?: string;
}

export interface Ids_ioEduEquipmentSingle {
    EQCMGNO?: number;
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

export interface Ids_oQty {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oQty: Ids_oQty[] = [
    { CD: '0', DATA: '0' },
    { CD: '1', DATA: '1' },
    { CD: '2', DATA: '2' },
    { CD: '3', DATA: '3' },
    { CD: '4', DATA: '4' },
    { CD: '5', DATA: '5' },
    { CD: '6', DATA: '6' },
    { CD: '7', DATA: '7' },
    { CD: '8', DATA: '8' },
    { CD: '9', DATA: '9' },
    { CD: '10', DATA: '10' },
    { CD: '11', DATA: '11' },
    { CD: '12', DATA: '12' },
    { CD: '13', DATA: '13' },
    { CD: '14', DATA: '14' },
    { CD: '15', DATA: '15' },
    { CD: '16', DATA: '16' },
    { CD: '17', DATA: '17' },
    { CD: '18', DATA: '18' },
    { CD: '19', DATA: '19' },
    { CD: '20', DATA: '20' },
    { CD: '21', DATA: '21' },
    { CD: '22', DATA: '22' },
    { CD: '23', DATA: '23' },
    { CD: '24', DATA: '24' },
    { CD: '25', DATA: '25' },
    { CD: '26', DATA: '26' },
    { CD: '27', DATA: '27' },
    { CD: '28', DATA: '28' },
    { CD: '29', DATA: '29' },
    { CD: '30', DATA: '30' },
    { CD: '31', DATA: '31' },
    { CD: '32', DATA: '32' },
    { CD: '33', DATA: '33' },
    { CD: '34', DATA: '34' },
    { CD: '35', DATA: '35' },
    { CD: '36', DATA: '36' },
    { CD: '37', DATA: '37' },
    { CD: '38', DATA: '38' },
    { CD: '39', DATA: '39' },
    { CD: '40', DATA: '40' },
    { CD: '41', DATA: '41' },
    { CD: '42', DATA: '42' },
    { CD: '43', DATA: '43' },
    { CD: '44', DATA: '44' },
    { CD: '45', DATA: '45' },
    { CD: '46', DATA: '46' },
    { CD: '47', DATA: '47' },
    { CD: '48', DATA: '48' },
    { CD: '49', DATA: '49' },
    { CD: '50', DATA: '50' },
];

export interface Ids_oBuyGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oBuyGubun: Ids_oBuyGubun[] = [
    { CD: '', DATA: '선택' },
    { CD: '0', DATA: '구입' },
    { CD: '1', DATA: '본회수령' },
    { CD: '2', DATA: '기증' },
    { CD: '3', DATA: '자체제작' },
];

export interface Ids_oHoldGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oHoldGubun: Ids_oHoldGubun[] = [
    { CD: '0', DATA: '양호' },
    { CD: '1', DATA: '불량(폐기요)' },
    { CD: '2', DATA: '불량(수리요)' },
    { CD: '3', DATA: '불량(기타)' },
];

export interface Ids_oDiscardGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDiscardGubun: Ids_oDiscardGubun[] = [
    { CD: '0', DATA: '미폐기' },
    { CD: '1', DATA: '폐기' },
    { CD: '2', DATA: '반납' },
    { CD: '3', DATA: '매각' },
];

export interface Ids_oBuyJibu {
    CD?: string;
    DATA?: string;
}
