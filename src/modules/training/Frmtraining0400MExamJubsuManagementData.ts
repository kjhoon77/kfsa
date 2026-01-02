// @ts-nocheck
export const Frmtraining0400MExamJubsuManagementData = {};

export const ds_ds_oModifyColumn = [
    { COLUMNCD: 'PERSONNM', COLUMNNM: '성명' },
    { COLUMNCD: 'BIRTHDAY', COLUMNNM: '주민번호' },
    { COLUMNCD: 'ZIPCD', COLUMNNM: '우편번호' },
    { COLUMNCD: 'ADDR1', COLUMNNM: '주소1' },
    { COLUMNCD: 'ADDR2', COLUMNNM: '주소2' },
    { COLUMNCD: 'TEL', COLUMNNM: '전화번호' },
    { COLUMNCD: 'HPTEL', COLUMNNM: '휴대폰' },
    { COLUMNCD: 'EMAILID', COLUMNNM: '이메일ID' },
    { COLUMNCD: 'EMAILDOMAIN', COLUMNNM: '이메일주소' },
    { COLUMNCD: 'COMPNM', COLUMNNM: '근무처' },
    { COLUMNCD: 'REMARKCD', COLUMNNM: '적요구분' },
    { COLUMNCD: 'REMARK', COLUMNNM: '적요내용' },
    { COLUMNCD: 'PICTURE', COLUMNNM: '사진' },
    { COLUMNCD: 'JUBSUNO', COLUMNNM: '접수번호' },
    { COLUMNCD: 'DECISIONSEATNO', COLUMNNM: '좌석번호' },
    { COLUMNCD: 'BARCODE', COLUMNNM: '바코드' },
    { COLUMNCD: 'EJJUBSUGUBUN', COLUMNNM: '응시자격구분' },
    { COLUMNCD: 'EJADDRGUBUN', COLUMNNM: '구/새주소 구분' },
    { COLUMNCD: 'EJRPNUCD', COLUMNNM: 'PNU코드' },
    { COLUMNCD: 'EJRROADBUILDMGNO', COLUMNNM: '건물관리번호' },
    { COLUMNCD: 'EJRROADDETAIL', COLUMNNM: '도로명상세주소' },
    { COLUMNCD: 'EJRROADREMAIN', COLUMNNM: '도로명부가주소' },
    { COLUMNCD: 'EJRSANGUBUN', COLUMNNM: '산번지여부' },
    { COLUMNCD: 'EJRMAINBUNJI', COLUMNNM: '주번지' },
    { COLUMNCD: 'EJRSUBBUNJI', COLUMNNM: '부번지' },
    { COLUMNCD: 'EJRBUILDNM', COLUMNNM: '건물명' },
    { COLUMNCD: 'EJRADDRETC', COLUMNNM: '기타주소' },
    { COLUMNCD: 'EJREJUBSUYN', COLUMNNM: '재접수여부' },
    { COLUMNCD: 'EJCHASUGUBUN', COLUMNNM: '차수구분' },
    { COLUMNCD: 'GAJUBSUGUBUN', COLUMNNM: '가접수구분' },
    { COLUMNCD: 'EJJUBSUREASON', COLUMNNM: '학경력인정사유' },
];

export const ds_ds_oJibuGubun = [
    { CD: 'S', DATA: '소속지부접수' },
    { CD: 'T', DATA: '타지부접수' },
];

export const ds_ds_oChangeTpmgno = [
    { CD: 'S', DATA: '조회' },
    { CD: 'C', DATA: '성명/주민번호 변경' },
];

export const ds_ds_ioSettelYN = [
    { CD: 'Y', DATA: '입금' },
    { CD: 'N', DATA: '미입금' },
];

export const ds_ds_ioJubsuGubun = [
    { CD: '20', DATA: '강습수료                                   ' },
    { CD: '00', DATA: '경력' },
    { CD: '01', DATA: '학력' },
    { CD: '02', DATA: '학·경력' },
    { CD: '', DATA: '' },
];

export const ds_ds_oAddr = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];

export const ds_ds_ioYN = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export const ds_ds_ioJubsuGubun2 = [
    { CD: '10', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '02', DATA: '학경력' },
    { CD: '05', DATA: '자격경력' },
    { CD: '03', DATA: '가접수' },
];

export const ds_ds_ioChasuGubun = [
    { CD: '0', DATA: '1·2차 시험' },
    { CD: '1', DATA: '1차 시험' },
    { CD: '2', DATA: '2차 시험' },
];

export const ds_ds_ioGaJubsuGubun = [
    { CD: '', DATA: '선택' },
    { CD: '03', DATA: '신청' },
    { CD: '04', DATA: '완료' },
    { CD: '99', DATA: '자격미달' },
];

export const ds_ds_oForm = [
    { CD: '', DATA: '선택' },
    { CD: '0021', DATA: '시험응시원서' },
    { CD: '0022', DATA: '시험일정변경신청서' },
    { CD: '0023', DATA: '시험 환불신청서' },
    { CD: '0013', DATA: '심폐소생술 시험응시원서' },
    { CD: '0018', DATA: '생활안전강사 시험응시원서' },
    { CD: '0055', DATA: '심폐소생술전문자격 시험응시원서' },
    { CD: '0029', DATA: '시험정보 열람신청서' },
    { CD: '0030', DATA: '가접수자(경력) 추가서류' },
];

export const ds_ds_ioGaJubsuGubun2 = [
    { CD: '', DATA: '선택' },
    { CD: '10', DATA: '강습수료' },
    { CD: '00', DATA: '경력' },
    { CD: '02', DATA: '학경력' },
    { CD: '05', DATA: '자격경력' },
];
