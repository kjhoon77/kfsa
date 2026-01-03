// @ts-nocheck
export const Frmtraining0010MTrainingOrderManagementData = {};

export interface Ids_ioTrainingOrder {
    CREATE_DATE?: string;
    CREATE_ID?: string;
    EPMGNO?: number;
    MODIFY_DATE?: string;
    MODIFY_ID?: string;
    RREGIONCD?: string;
    TCCOURSECD?: string;
    TOCOURSEGUBUN?: string;
    TOENDDATE?: string;
    TOENDTIME?: string;
    TOEXCEPTDATE?: string;
    TOINETJUBSUCNT?: number;
    TOINETJUBSUYN?: string;
    TOJUBSUMAXCNT?: number;
    TOJUBSUSTATUS?: string;
    TOLECTURENOTICE?: string;
    TOMAILNOTICE?: string;
    TOMGJIBUCD?: string;
    TOMGNO?: number;
    TOMUNJEGUBUN?: string;
    TOSEATCNT?: number;
    TOSEATLIMITYN?: string;
    TOSEATSELECTYN?: string;
    TOSEXLIMITYN?: string;
    TOSTARTDATE?: string;
    TOSTARTTIME?: string;
    TOTRAININGORDER?: string;
    TOYEAR?: string;
    USE_YN?: string;
    TOEDUCONTENTS?: string;
    TOREMARK?: string;
    EPNM?: string;
    EPPARKINGINFO?: string;
    TODAYGUBUN?: string;
    TOCYBERSTARTDATE?: string;
    TOCYBERENDDATE?: string;
    TOMUNJEGUBUNNM?: string;
    CYBERDATE?: string;
    TOTFCSEQ?: string;
    TFCFEE?: string;
    TOREGION?: string;
    TOAUTOMSGGUBUN?: string;
    TOAUTODATE?: string;
    TOAWAITERCNT?: string;
    TOAWAITERREGCNT?: string;
    TOAWAITERYN?: string;
    TOJUBSUSTARTDATE?: string;
    TOINJUBSUCNT?: string;
    TODSTARTDATE?: string;
    TODENDDATE?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
    DATA2?: string;
}

export interface Ids_oUseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oUseYn: Ids_oUseYn[] = [
    { CD: 'Y', DATA: '사용' },
    { CD: 'N', DATA: '폐기' },
];

export interface Ids_oCourseGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_oInternetJubsuStatus {
    CD?: string;
    DATA?: string;
}

export interface Ids_oTrainingOrderMgno {
}

export interface Ids_oInetJubsuYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInetJubsuYn: Ids_oInetJubsuYn[] = [
    { CD: 'Y', DATA: '사용' },
    { CD: 'N', DATA: '미사용' },
];

export interface Ids_oMunjeGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioExamRoomMinimap {
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'TCCOURSECD', COLUMNNM: '직능코드' },
    { COLUMNCD: 'TOCOURSEGUBUN', COLUMNNM: '직능구분' },
    { COLUMNCD: 'TOENDDATE', COLUMNNM: '강습종료일' },
    { COLUMNCD: 'TOENDTIME', COLUMNNM: '강습종료시간' },
    { COLUMNCD: 'TOEXCEPTDATE', COLUMNNM: '교육제외일' },
    { COLUMNCD: 'TOINETJUBSUCNT', COLUMNNM: '인터넷접수좌석수' },
    { COLUMNCD: 'TOINETJUBSUYN', COLUMNNM: '인터넷접수여부' },
    { COLUMNCD: 'TOJUBSUMAXCNT', COLUMNNM: '접수인원수' },
    { COLUMNCD: 'TOJUBSUSTATUS', COLUMNNM: '접수상태' },
    { COLUMNCD: 'TOMAILNOTICE', COLUMNNM: '메일공지사항' },
    { COLUMNCD: 'TOMGJIBUCD', COLUMNNM: '지부코드' },
    { COLUMNCD: 'TOMUNJEGUBUN', COLUMNNM: '면제구분' },
    { COLUMNCD: 'TOSEATCNT', COLUMNNM: '좌석수' },
    { COLUMNCD: 'TOSEATLIMITYN', COLUMNNM: '좌석제한여부' },
    { COLUMNCD: 'TOSEATSELECTYN', COLUMNNM: '좌석선택허용여부' },
    { COLUMNCD: 'TOSEXLIMITYN', COLUMNNM: '성별제한여부' },
    { COLUMNCD: 'TOSTARTDATE', COLUMNNM: '강습시작일' },
    { COLUMNCD: 'TOSTARTTIME', COLUMNNM: '강습시작시간' },
    { COLUMNCD: 'TOTRAININGORDER', COLUMNNM: '회차' },
    { COLUMNCD: 'TOYEAR', COLUMNNM: '강습년도' },
    { COLUMNCD: 'USE_YN', COLUMNNM: '사용여부' },
    { COLUMNCD: 'TOEDUCONTENTS', COLUMNNM: '교육내용' },
    { COLUMNCD: 'TOREMARK', COLUMNNM: '추가알림사항' },
    { COLUMNCD: 'EPMGNO', COLUMNNM: '교육장관리번호' },
    { COLUMNCD: 'TOREGION', COLUMNNM: '교육지역' },
    { COLUMNCD: 'TOAUTOMSGGUBUN', COLUMNNM: '문자자동발송여부' },
    { COLUMNCD: 'TOAUTODATE', COLUMNNM: '문자자동발송일' },
    { COLUMNCD: 'TOJUBSUSTARTDATE', COLUMNNM: '접수시작일시' },
];

export interface Ids_ioJubsu {
}

export interface Ids_ioYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYN: Ids_ioYN[] = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export interface Ids_oDayGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDayGubun: Ids_oDayGubun[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일(주말)' },
    { CD: '3', DATA: '격일 과정' },
];

export interface Ids_oTrainingFee {
}

export interface Ids_oSendYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSendYN: Ids_oSendYN[] = [
    { CD: '1', DATA: '발송' },
    { CD: '0', DATA: '미발송' },
];

export interface Ids_oInetWaitYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInetWaitYn: Ids_oInetWaitYn[] = [
    { CD: 'Y', DATA: '사용' },
    { CD: 'N', DATA: '미사용' },
];

export interface Ids_oAcceptAwaiter {
}

export interface Ids_oModifyTime {
}

export interface Ids_oOnlineGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOnlineGubun: Ids_oOnlineGubun[] = [
    { CD: 'N', DATA: '집합교육' },
    { CD: 'Y', DATA: '실시간온라인교육' },
    { CD: 'X', DATA: '블라인드 접수' },
    { CD: 'Z', DATA: '혼용 교육' },
];

export interface Ids_oInetJubsuPwuseYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInetJubsuPwuseYn: Ids_oInetJubsuPwuseYn[] = [
    { CD: 'Y', DATA: '사용' },
    { CD: 'N', DATA: '미사용' },
];
