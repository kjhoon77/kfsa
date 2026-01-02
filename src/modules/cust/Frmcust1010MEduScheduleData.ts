// @ts-nocheck
export const Frmcust1010MEduScheduleData = {};

export const ds_ds_oUseYn = [
    { CD: '0', DATA: '사용' },
    { CD: '1', DATA: '폐기' },
];

export const ds_ds_oInetJubsuYn = [
    { CD: '0', DATA: '사용' },
    { CD: '1', DATA: '미사용' },
];

export const ds_ds_METARGET = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비교육' },
];

export const ds_ds_MECOURSE = [
    { CD: '0', DATA: '기본교육' },
    { CD: '2', DATA: '특별교육' },
    { CD: '4', DATA: '전문교육' },
];

export const ds_ds_MEDAYGUBUNCD = [
    { CD: '0', DATA: '0. 평일 주간' },
    { CD: '1', DATA: '1. 평일 야간' },
    { CD: '2', DATA: '2. 휴일 주간' },
    { CD: '3', DATA: '3. 휴일 야간' },
];

export const ds_ds_oInternetJubsuStatus = [
    { CD: '0', DATA: '0. 신청' },
    { CD: '1', DATA: '1. 마감' },
    { CD: '2', DATA: '2. 접수예정' },
    { CD: '3', DATA: '3. 일정안보이기' },
];

export const ds_ds_oModifyColumn = [
    { COLUMNCD: 'ESMGNO', COLUMNNM: '실무교육일정관리번호' },
    { COLUMNCD: 'ESYEAR', COLUMNNM: '년도' },
    { COLUMNCD: 'ESGTMGNO', COLUMNNM: '지부' },
    { COLUMNCD: 'ESCOUSECD', COLUMNNM: '대표직능' },
    { COLUMNCD: 'ESDATE', COLUMNNM: '교육일' },
    { COLUMNCD: 'ESSTARTTIME', COLUMNNM: '교육시작시간' },
    { COLUMNCD: 'ESENDTIME', COLUMNNM: '교육종료시간' },
    { COLUMNCD: 'ESSTUDENT', COLUMNNM: '교육대상' },
    { COLUMNCD: 'ESGUBUN', COLUMNNM: '교육구분' },
    { COLUMNCD: 'ESSUBJECTGUBUN', COLUMNNM: '과정구분' },
    { COLUMNCD: 'ESEPMGNO', COLUMNNM: '교육장관리번호' },
    { COLUMNCD: 'ESPREPARED', COLUMNNM: '교육준비물' },
    { COLUMNCD: 'ESNOTICE', COLUMNNM: '안내사항' },
    { COLUMNCD: 'ESINETOPENYN', COLUMNNM: '인터넷신청등록여부' },
    { COLUMNCD: 'ESINETCLOSEDATE', COLUMNNM: '인터넷신청마감일' },
    { COLUMNCD: 'ESSEATCNT', COLUMNNM: '좌석수' },
    { COLUMNCD: 'ESACCESSCNT', COLUMNNM: '접수자수' },
    { COLUMNCD: 'ESINETJUBSUCNT', COLUMNNM: '인터넷접수가능수' },
    { COLUMNCD: 'ESORDERNOYN', COLUMNNM: '회차사용여부' },
    { COLUMNCD: 'ESNOTICE', COLUMNNM: '안내사항' },
    { COLUMNCD: 'ESEDUORDER', COLUMNNM: '교육회차' },
    { COLUMNCD: 'ESEDUTYPE', COLUMNNM: '교육유형' },
    { COLUMNCD: 'ESEDUREGION', COLUMNNM: '교육지역' },
    { COLUMNCD: 'ESAUTOMSGGUBUN', COLUMNNM: '안내문자 자동발송 여부' },
    { COLUMNCD: 'ESAUTODATE', COLUMNNM: '안내문자 자동발송일' },
    { COLUMNCD: 'ESCYBERSTARTDATE', COLUMNNM: '사이버교육시작일' },
    { COLUMNCD: 'ESCYBERENDDATE', COLUMNNM: '사이버교육종료일' },
    { COLUMNCD: 'ESJUBSUSTARTDATE', COLUMNNM: '접수시작일' },
    { COLUMNCD: 'ESJUBSUENDDATE', COLUMNNM: '접수종료일' },
];

export const ds_ds_oEduType1 = [
    { CD: '0', DATA: '입문반' },
    { CD: '1', DATA: '일반반' },
    { CD: '2', DATA: '중급반' },
    { CD: '3', DATA: '고급반' },
    { CD: '4', DATA: '업무대행자반' },
];

export const ds_ds_oEduType2 = [
    { CD: '0', DATA: '입문반' },
    { CD: '1', DATA: '일반반' },
    { CD: '2', DATA: '중급반' },
];

export const ds_ds_oEduType3 = [
    { CD: '0', DATA: '정기반' },
];

export const ds_ds_oSendYN = [
    { CD: '1', DATA: '발송' },
    { CD: '0', DATA: '미발송' },
];

export const ds_ds_oEduType10 = [
    { CD: '11', DATA: '특급·1급' },
    { CD: '12', DATA: '2급' },
    { CD: '13', DATA: '3급' },
    { CD: '14', DATA: '공공기관' },
    { CD: '15', DATA: '업무대행' },
    { CD: '21', DATA: '초고층' },
    { CD: '22', DATA: '창고시설' },
    { CD: '23', DATA: '근린생활' },
    { CD: '26', DATA: '소방계획서' },
    { CD: '31', DATA: '소방교육훈련' },
    { CD: '27', DATA: '공동주택' },
];

export const ds_ds_oEduType20 = [
    { CD: '10', DATA: '기초반' },
    { CD: '11', DATA: '심화반' },
];

export const ds_ds_oEduType30 = [
    { CD: '10', DATA: '제조소·취급소' },
    { CD: '11', DATA: '저장소' },
    { CD: '12', DATA: '옥외탱크저장소' },
    { CD: '20', DATA: '대리자/교육희망자' },
    { CD: '21', DATA: '현장연계' },
    { CD: '32', DATA: '예방규정' },
    { CD: '33', DATA: '옥내탱크저장소' },
    { CD: '34', DATA: '판매취급소' },
];

export const ds_ds_oEduType50 = [
    { CD: '14', DATA: '설계업(기본)' },
    { CD: '09', DATA: '설계업(심화)' },
    { CD: '13', DATA: '공사업(기본)' },
    { CD: '11', DATA: '공사업(심화)' },
    { CD: '15', DATA: '감리업(기본)' },
    { CD: '10', DATA: '감리업(심화)' },
    { CD: '12', DATA: '관리업' },
    { CD: '18', DATA: '세미나(기술사)' },
    { CD: '19', DATA: '세미나(관리사)' },
    { CD: '20', DATA: '양성인정교육' },
];

export const ds_ds_oCyberGubun10 = [
    { CD: '2', DATA: '사이버교육과정' },
    { CD: '1', DATA: '혼용교육과정' },
    { CD: '0', DATA: '집합교육과정' },
];

export const ds_ds_oCyberGubun = [
    { CD: '2', DATA: '사이버교육과정' },
    { CD: '0', DATA: '집합교육과정' },
    { CD: '3', DATA: '실시간온라인' },
];

export const ds_ds_oEduType40 = [
    { CD: '0', DATA: '정기반' },
];

export const ds_ds_MECOURSEAll = [
    { CD: '0', DATA: '기본교육' },
    { CD: '2', DATA: '특별교육' },
    { CD: '4', DATA: '전문교육' },
];

export const ds_ds_oCyberGubun2 = [
    { CD: '2', DATA: '사이버교육과정' },
    { CD: '1', DATA: '혼용교육과정' },
    { CD: '0', DATA: '집합교육과정' },
];
