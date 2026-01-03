// @ts-nocheck
export const Frmspcledu0390MExamScheduleManagementData = {};

export interface Ids_ioExamOrder {
    EOENDTIME?: string;
    EOEXAMDATE?: string;
    EOEXAMORDER?: string;
    EOEXAMORDERGUBUN?: string;
    EOINETJUBSUCNT?: number;
    EOINETJUBSUYN?: string;
    EOJUBSUMAXCNT?: number;
    EOMGJIBUCD?: string;
    EOMGNO?: string;
    EOSEATCNT?: number;
    EOSTARTTIME?: string;
    EOYEAR?: string;
    EPMGNO?: number;
    EPNM?: string;
    TCCOURSECD?: string;
    USE_YN?: string;
    EOJUBSUSTATUS?: string;
}

export interface Ids_oJibu {
    CD?: string;
    DATA?: string;
}

export interface Ids_oCourse {
    CD?: string;
    DATA?: string;
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

export interface Ids_oExamGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamGubun: Ids_oExamGubun[] = [
    { CD: '0', DATA: '교육종료일 회차' },
    { CD: '5', DATA: '재시험 회차' },
    { CD: '7', DATA: '경력자 회차' },
    { CD: '8', DATA: '공공기관 회차' },
];

export interface Ids_oInternetJubsuStatus {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInternetJubsuStatus: Ids_oInternetJubsuStatus[] = [
    { CD: '02', DATA: '접수예정' },
];

export interface Ids_ioExamRoomMinimap {
}

export interface Ids_oInetJubsuYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oInetJubsuYn: Ids_oInetJubsuYn[] = [
    { CD: 'Y', DATA: '사용' },
    { CD: 'N', DATA: '미사용' },
];

export interface Ids_oExamGubun2 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamGubun2: Ids_oExamGubun2[] = [
    { CD: '0', DATA: '교육종료일 회차' },
    { CD: '5', DATA: '재시험 회차' },
    { CD: '8', DATA: '공공기관 회차' },
];

export interface Ids_oExamGubun3 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamGubun3: Ids_oExamGubun3[] = [
    { CD: '0', DATA: '교육종료일 회차' },
    { CD: '5', DATA: '재시험 회차' },
];

export interface Ids_oExamOrderMgno {
}

export interface Ids_oModifyColumn {
    COLUMNCD?: string;
    COLUMNNM?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'EOENDTIME', COLUMNNM: '시험종료시간' },
    { COLUMNCD: 'EOEXAMDATE', COLUMNNM: '시험일' },
    { COLUMNCD: 'EOEXAMORDER', COLUMNNM: '시험회차' },
    { COLUMNCD: 'EOEXAMORDERGUBUN', COLUMNNM: '시험회차구분' },
    { COLUMNCD: 'EOINETJUBSUCNT', COLUMNNM: '인터넷접수인원수' },
    { COLUMNCD: 'EOINETJUBSUYN', COLUMNNM: '인터넷접수여부' },
    { COLUMNCD: 'EOJUBSUMAXCNT', COLUMNNM: '접수인원수' },
    { COLUMNCD: 'EOMGJIBUCD', COLUMNNM: '지부코드' },
    { COLUMNCD: 'EOMGNO', COLUMNNM: '시험회차관리번호' },
    { COLUMNCD: 'EOSEATCNT', COLUMNNM: '좌석수' },
    { COLUMNCD: 'EOSTARTTIME', COLUMNNM: '시험시작시간' },
    { COLUMNCD: 'EOYEAR', COLUMNNM: '년도' },
    { COLUMNCD: 'EPMGNO', COLUMNNM: '교육장관리번호' },
    { COLUMNCD: 'EPNM', COLUMNNM: '교육장' },
    { COLUMNCD: 'TCCOURSECD', COLUMNNM: '직능코드' },
    { COLUMNCD: 'USE_YN', COLUMNNM: '사용여부' },
    { COLUMNCD: 'EOJUBSUSTATUS', COLUMNNM: '접수상태' },
];

export interface Ids_ioJubsu {
}
