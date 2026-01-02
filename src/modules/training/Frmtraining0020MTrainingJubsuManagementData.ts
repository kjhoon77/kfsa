// @ts-nocheck
export const Frmtraining0020MTrainingJubsuManagementData = {};

export const ds_ds_oModifyColumn = [
    { COLUMNCD: 'PERSONNM', COLUMNNM: '성명' },
    { COLUMNCD: 'RESIDENTNO', COLUMNNM: '주민번호' },
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
    { COLUMNCD: 'TJFIREMANYN', COLUMNNM: '소방공무원여부' },
    { COLUMNCD: 'IIIMGSEQ', COLUMNNM: '사진' },
    { COLUMNCD: 'TJADDRGUBUN', COLUMNNM: '주소구분' },
    { COLUMNCD: 'TJRROADBUILDMGNO', COLUMNNM: '건물관리번호' },
    { COLUMNCD: 'TJRROADDETAIL', COLUMNNM: '상세주소' },
    { COLUMNCD: 'TJRROADREMAIN', COLUMNNM: '부가주소' },
    { COLUMNCD: 'TJRSANGUBUN', COLUMNNM: '산여부' },
    { COLUMNCD: 'TJRMAINBUNJI', COLUMNNM: '주번지' },
    { COLUMNCD: 'TJRSUBBUNJI', COLUMNNM: '부번지' },
    { COLUMNCD: 'TJRBUILDNM', COLUMNNM: '건물명' },
    { COLUMNCD: 'TJRADDRETC', COLUMNNM: '기타주소' },
    { COLUMNCD: 'TJMEMAGREEGUBUN', COLUMNNM: '안전원회원가입동의' },
    { COLUMNCD: 'TJAMOUNTGUBUN', COLUMNNM: '선후불구분' },
    { COLUMNCD: 'TPBOOKZIPCD', COLUMNNM: '교재수령지우편번호' },
    { COLUMNCD: 'TPBOOKADDR1', COLUMNNM: '교재수령지주소1' },
    { COLUMNCD: 'TPBOOKADDR2', COLUMNNM: '교재수령지주소2' },
    { COLUMNCD: 'TJBOOKRETURNYN', COLUMNNM: '교재반납여부' },
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

export const ds_ds_oAmountGubun = [
    { CD: 'B', DATA: '선불' },
    { CD: 'A', DATA: '후불' },
];

export const ds_ds_oForm = [
    { CD: '', DATA: '선택' },
    { CD: '0002', DATA: '강습교육 일정변경신청서' },
    { CD: '0003', DATA: '강습교육 환불신청서' },
    { CD: '0026', DATA: '자격수첩 발급수수료 환불신청서' },
    { CD: '0009', DATA: '심폐소생술 교육원서' },
    { CD: '0011', DATA: '심폐소생술 환불신청서' },
    { CD: '0014', DATA: '생활안전강사 교육원서' },
    { CD: '0016', DATA: '생활안전강사 환불신청서' },
    { CD: '0042', DATA: '교관양성과정 교육원서' },
    { CD: '0043', DATA: '교관양성과정 환불신청서' },
    { CD: '0051', DATA: '심폐소생술전문자격 교육원서' },
    { CD: '0053', DATA: '심폐소생술전문자격 환불신청서' },
];

export const ds_ds_oBookReturn = [
    { CD: 'Y', DATA: '반납' },
    { CD: 'N', DATA: '미반납' },
];

export const ds_ds_oTaskGubun = [
    { CD: '1', DATA: '1차' },
    { CD: '2', DATA: '2차' },
];
