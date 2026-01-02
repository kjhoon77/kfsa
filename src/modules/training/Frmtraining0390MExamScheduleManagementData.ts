// @ts-nocheck
export const Frmtraining0390MExamScheduleManagementData = {};

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
    EOSTARTTIME2?: string;
    EOENDTIME2?: string;
    EOJUBSUSTARTDATE?: string;
    EOJUBSUENDDATE?: string;
    EOEXAM1OPENDATE?: string;
    EOEXAM2OPENDATE?: string;
    EODAYGUBUN?: string;
    EXAMTIME?: string;
    EOAUTOMSGGUBUN?: string;
    EOAUTODATE?: string;
    EOBSMGNO?: string;
    EOREMARK?: string;
    EOREGION?: string;
    EOCHASUGUBUN?: string;
    EOINJUBSUCNT?: string;
    EOONLINEGUBUN?: string;
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

export interface Ids_oExamGubun1 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamGubun1: Ids_oExamGubun1[] = [
    { CD: '0', DATA: '교육종료일 회차' },
    { CD: '5', DATA: '재시험 회차' },
    { CD: '7', DATA: '학·경력자 회차' },
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
    EOEXAM1OPENDATE?: string;
    EOEXAM2OPENDATE?: string;
    EODAYGUBUN?: string;
    EXAMTIME?: string;
    EOAUTOMSGGUBUN?: string;
    EOAUTODATE?: string;
}

export const ds_ds_oModifyColumn: Ids_oModifyColumn[] = [
    { COLUMNCD: 'EOENDTIME', COLUMNNM: '시험종료시간', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOEXAMDATE', COLUMNNM: '시험일', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOEXAMORDER', COLUMNNM: '시험회차', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOEXAMORDERGUBUN', COLUMNNM: '시험회차구분', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOINETJUBSUCNT', COLUMNNM: '인터넷접수인원수', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOINETJUBSUYN', COLUMNNM: '인터넷접수여부', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOJUBSUMAXCNT', COLUMNNM: '접수인원수', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOMGJIBUCD', COLUMNNM: '지부코드', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOMGNO', COLUMNNM: '시험회차관리번호', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOSEATCNT', COLUMNNM: '좌석수', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOSTARTTIME', COLUMNNM: '시험시작시간', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOYEAR', COLUMNNM: '년도', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EPMGNO', COLUMNNM: '교육장관리번호', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EPNM', COLUMNNM: '교육장', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'TCCOURSECD', COLUMNNM: '직능코드', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'USE_YN', COLUMNNM: '사용여부', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOJUBSUSTATUS', COLUMNNM: '접수상태', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOSTARTTIME2', COLUMNNM: '2차 시작시간', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOENDTIME2', COLUMNNM: '2차 종료시간', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOJUBSUSTARTDATE', COLUMNNM: '접수시작일자', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOJUBSUENDDATE', COLUMNNM: '접수종료일자', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOEXAM1OPENDATE', COLUMNNM: '1,2급시험점수 공개일시/특급1차시험점수 공개일시', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOEXAM2OPENDATE', COLUMNNM: '특급2차시험점수 공개일시', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EODAYGUBUN', COLUMNNM: '시험일구분', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOAUTOMSGGUBUN', COLUMNNM: '문자자동발송여부', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
    { COLUMNCD: 'EOAUTODATE', COLUMNNM: '문자자동발송일', EOAUTODATE: '', EOAUTOMSGGUBUN: '', EODAYGUBUN: '', EOEXAM1OPENDATE: '', EOEXAM2OPENDATE: '', EXAMTIME: '' },
];

export interface Ids_ioJubsu {
}

export interface Ids_oExamGubun4 {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamGubun4: Ids_oExamGubun4[] = [
    { CD: '1', DATA: '특급소방안전관리자 회차' },
];

export interface Ids_oExamGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oExamGubun: Ids_oExamGubun[] = [
    { CD: '0', DATA: '교육종료일 회차' },
    { CD: '1', DATA: '특급 회차' },
    { CD: '5', DATA: '재시험 회차' },
    { CD: '7', DATA: '학·경력자 회차' },
    { CD: '8', DATA: '공공기관 회차' },
    { CD: '2', DATA: '특급 회차' },
];

export interface Ids_oDayGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oDayGubun: Ids_oDayGubun[] = [
    { CD: '0', DATA: '평일 주간' },
    { CD: '1', DATA: '평일 야간' },
    { CD: '2', DATA: '휴일(주말)' },
];

export interface Ids_oSendYN {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oSendYN: Ids_oSendYN[] = [
    { CD: '1', DATA: '발송' },
    { CD: '0', DATA: '미발송' },
];

export interface Ids_ioChasuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioChasuGubun: Ids_ioChasuGubun[] = [
    { CD: '1', DATA: '1차 시험' },
    { CD: '2', DATA: '2차 시험' },
];

export interface Ids_oModifyTime {
}

export interface Ids_oOnlineGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oOnlineGubun: Ids_oOnlineGubun[] = [
    { CD: '', DATA: '선택' },
    { CD: 'N', DATA: '소집교육' },
    { CD: 'Y', DATA: '실시간온라인교육' },
    { CD: 'X', DATA: '블라인드 접수' },
    { CD: 'Z', DATA: '혼용 교육' },
];
