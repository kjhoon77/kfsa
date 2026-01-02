// @ts-nocheck
export const Frmcust1025MEduJubsuManagementData = {};

export const ds_ds_oModifyColumn = [
    { COLUMNCD: 'EJNM', COLUMNNM: '성명' },
    { COLUMNCD: 'RESIDENTNO', COLUMNNM: '주민번호' },
    { COLUMNCD: 'EJZIP', COLUMNNM: '우편번호' },
    { COLUMNCD: 'ADDR1', COLUMNNM: '주소1' },
    { COLUMNCD: 'ADDR2', COLUMNNM: '주소2' },
    { COLUMNCD: 'EJTEL', COLUMNNM: '전화번호' },
    { COLUMNCD: 'EHPHONE', COLUMNNM: '휴대폰' },
    { COLUMNCD: 'EJEMAILID', COLUMNNM: '이메일ID' },
    { COLUMNCD: 'EJEMAILDOMAIN', COLUMNNM: '이메일주소' },
    { COLUMNCD: 'COMPNM', COLUMNNM: '근무처' },
    { COLUMNCD: 'EJHREASON', COLUMNNM: '비고' },
    { COLUMNCD: 'EJHJUBSUNO', COLUMNNM: '접수번호' },
    { COLUMNCD: 'CMGNO', COLUMNNM: '고객바코드번호' },
    { COLUMNCD: 'CGTMGNO', COLUMNNM: '고객지부' },
    { COLUMNCD: 'CNO', COLUMNNM: '고객관리번호' },
    { COLUMNCD: 'EJADDRGUBUN', COLUMNNM: '주소구분' },
    { COLUMNCD: 'EJRROADBUILDMGNO', COLUMNNM: '건물관리번호' },
    { COLUMNCD: 'TJRROADDETAIL', COLUMNNM: '상세주소' },
    { COLUMNCD: 'EJRROADREMAIN', COLUMNNM: '부가주소' },
    { COLUMNCD: 'EJRSANGUBUN', COLUMNNM: '산여부' },
    { COLUMNCD: 'EJRMAINBUNJI', COLUMNNM: '주번지' },
    { COLUMNCD: 'EJRSUBBUNJI', COLUMNNM: '부번지' },
    { COLUMNCD: 'EJRBUILDNM', COLUMNNM: '건물명' },
    { COLUMNCD: 'EJRADDRETC', COLUMNNM: '기타주소' },
    { COLUMNCD: 'EJBUILDING', COLUMNNM: '대상물명' },
    { COLUMNCD: 'EJCOURSECD', COLUMNNM: '직능' },
    { COLUMNCD: 'EJBOOKZIPCD', COLUMNNM: '교재수령지우편번호' },
    { COLUMNCD: 'EJBOOKADDR1', COLUMNNM: '교재수령지주소1' },
    { COLUMNCD: 'EJBOOKADDR2', COLUMNNM: '교재수령지주소2' },
    { COLUMNCD: 'EJBOOKRETURNYN', COLUMNNM: '교재반납여부' },
    { COLUMNCD: 'EJBOOKREGION', COLUMNNM: '교재수령지지역' },
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

export const ds_ds_oAddr = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];

export const ds_ds_oYN = [
    { CD: 'Y', DATA: '예' },
    { CD: 'N', DATA: '아니오' },
];

export const ds_ds_oForm = [
    { CD: '', DATA: '선택' },
    { CD: '0006', DATA: '실무교육원서' },
    { CD: '00081', DATA: '일정변경신청서' },
    { CD: '00082', DATA: '환불신청서' },
];

export const ds_ds_oBookReturn = [
    { CD: 'Y', DATA: '반송' },
    { CD: 'N', DATA: '미반송' },
];
