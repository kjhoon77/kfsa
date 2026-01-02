// @ts-nocheck
export const Frmcust6666MCustomerManagementData = {};

export const ds_ds_oAddrGubun = [
    { CD: '0', DATA: '대상물' },
    { CD: '1', DATA: '선임자' },
    { CD: '2', DATA: '직접' },
];

export const ds_ds_ioDelete = [
    { CD: '0', DATA: '정상' },
    { CD: '1', DATA: '삭제소멸' },
    { CD: '2', DATA: '삭제용폐' },
    { CD: '3', DATA: '삭제중복' },
    { CD: '4', DATA: '삭제기타' },
];

export const ds_ds_ioLevel = [
    { CD: '1', DATA: '1급' },
    { CD: '2', DATA: '2급' },
];

export const ds_ds_oAddr = [
    { CD: '0', DATA: '구주소' },
    { CD: '1', DATA: '신주소' },
];

export const ds_ds_ioYn = [
    { CD: '1', DATA: '아니오' },
    { CD: '0', DATA: '예' },
];

export const ds_ds_oAddPost = [
    { CD: '0', DATA: '공통' },
    { CD: '1', DATA: '개별' },
];

export const ds_ds_oCustomerStatus = [
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];

export const ds_ds_oOwnerGubun = [
    { CD: '0', DATA: '관계자' },
    { CD: '1', DATA: '소유자' },
    { CD: '2', DATA: '점유자' },
    { CD: '3', DATA: '대표자' },
];

export const ds_ds_oEduStudentGubun = [
    { CD: '0', DATA: '실무교육' },
    { CD: '1', DATA: '제연설비등' },
];

export const ds_ds_oEduGubun = [
    { CD: '0', DATA: '평일주간' },
    { CD: '1', DATA: '평일야간' },
    { CD: '2', DATA: '휴일주간' },
    { CD: '3', DATA: '휴일야간' },
];

export const ds_ds_oPersonGubun = [
    { CD: '0', DATA: '기관장', PCD: '10' },
    { CD: '1', DATA: '감독적직위', PCD: '10' },
    { CD: '2', DATA: '기타', PCD: '10' },
    { CD: '0', DATA: '선임자', PCD: '30' },
    { CD: '1', DATA: '보조자', PCD: '30' },
    { CD: '0', DATA: '주인력', PCD: '50' },
    { CD: '1', DATA: '소방기술사', PCD: '50' },
    { CD: '2', DATA: '소방시설관리사', PCD: '50' },
    { CD: '3', DATA: '보조인력', PCD: '50' },
];

export const ds_ds_oJibuGubun = [
    { CD: 'S', DATA: '소속지부' },
    { CD: 'T', DATA: '타지부' },
];

export const ds_ds_oAgencyYn = [
    { CD: '0', DATA: '대행' },
    { CD: '1', DATA: '미대행' },
];

export const ds_ds_oEduSuccessGubun = [
    { CD: '0', DATA: '선임자교육' },
    { CD: '1', DATA: '교육승계' },
];

export const ds_ds_oModifyColumnList = [
    { COLKORNM: '고객정보관리번호', COLNM: 'CMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '지부', COLNM: 'CGTMGNO', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oJibu', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객번호', COLNM: 'CNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '지역', COLNM: 'CREGCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oRegion', TBLNM: 'CUSTOMER' },
    { COLKORNM: '직능', COLNM: 'CCOURSECD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oCourse', TBLNM: 'CUSTOMER' },
    { COLKORNM: '대상물관리번호', COLNM: 'CBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '선임자관리번호', COLNM: 'CFMHMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '선임자이력순번', COLNM: 'CFMHSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '공공선임정보및인력구분', COLNM: 'CPERSONGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oPersonGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '업체구분', COLNM: 'CCOCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oBusinessGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '업무대행여부', COLNM: 'CAGGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAgencyYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '업무대행업체관리번호', COLNM: 'CAGMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객상태', COLNM: 'CSTATUSGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oCustomerStatus', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객상태변경사유코드', COLNM: 'CSTATUSREASONCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oStatusReason', TBLNM: 'CUSTOMER' },
    { COLKORNM: '고객상태처리일자', COLNM: 'CSTATUSDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '등록년월', COLNM: 'CREGISTERYYMM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '회비부과년월', COLNM: 'CFEEYYMM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '겸직관리번호', COLNM: 'COBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '겸직회비면제여부', COLNM: 'COVERGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '관리제외구분', COLNM: 'CEXCEPTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'CUSTOMER' },
    { COLKORNM: '관리제외처리일자', COLNM: 'CEXCEPTDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '상태구분', COLNM: 'CDELGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioDelete', TBLNM: 'CUSTOMER' },
    { COLKORNM: '삭제일자', COLNM: 'CDELDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '시도소방본부관리번호', COLNM: 'CFIREMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방민원정보시스템관리번호1', COLNM: 'CGATEWAYPK1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방민원정보시스템관리번호2', COLNM: 'CGATEWAYPK2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '소방민원정보시스템관리번호3', COLNM: 'CGATEWAYPK3', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '우편물청구구분', COLNM: 'CPOSTREQGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddPost', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소구분_회비', COLNM: 'CFEEPOSTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddrGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소우편번호_회비', COLNM: 'CFEEPOSTZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소1_회비', COLNM: 'CFEEPOSTADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소2_회비', COLNM: 'CFEEPOSTADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망우편물투입장소_회비', COLNM: 'CFEEPOSTPLACE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소구분_교육', COLNM: 'CEDUPOSTGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddrGubun', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소우편번호_교육', COLNM: 'CEDUPOSTZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소1_교육', COLNM: 'CEDUPOSTADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망주소2_교육', COLNM: 'CEDUPOSTADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '희망우편물투입장소_교육', COLNM: 'CEDUPOSTPLACE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '최종부가정보순번', COLNM: 'CLASTADDSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '최종우편반송이력순번', COLNM: 'CLASTPRSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'CUSTOMER' },
    { COLKORNM: '대상물관리번호', COLNM: 'BMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '대상물명', COLNM: 'BNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '용도', COLNM: 'BBIZCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oBizCd', TBLNM: 'BUILDING' },
    { COLKORNM: '관할소방서', COLNM: 'BFIREUPCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oFireCd', TBLNM: 'BUILDING' },
    { COLKORNM: '안전센터관리코드', COLNM: 'BFIRECD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oFireCenterCd', TBLNM: 'BUILDING' },
    { COLKORNM: '관서담당자', COLNM: 'BFIREMAN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '전화번호', COLNM: 'BTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '팩스', COLNM: 'BFAX', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '제연설비설치대상여부', COLNM: 'BSMOKEGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'BUILDING' },
    { COLKORNM: '연면적', COLNM: 'BAREA', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '사업자등록번호', COLNM: 'BCONO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '우편번호', COLNM: 'BZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '대표주소구분', COLNM: 'BADDRGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddr', TBLNM: 'BUILDING' },
    { COLKORNM: '구주소1', COLNM: 'BADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '구주소2', COLNM: 'BADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_시도', COLNM: 'BSIDO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_시군구', COLNM: 'BSIGUNGU', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_동', COLNM: 'BDONG', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_리', COLNM: 'BRI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_산번지여부', COLNM: 'BSANGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_본번지', COLNM: 'BBUNJI1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_부번지', COLNM: 'BBUNJI2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_기타주소', COLNM: 'BETCADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_도로명', COLNM: 'BROADNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_건물명', COLNM: 'BBULDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '신주소_건물기타주소', COLNM: 'BBULDADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'BUILDING' },
    { COLKORNM: '선임자관리번호', COLNM: 'FMMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '성명', COLNM: 'FMNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '주민번호', COLNM: 'FMRESIDENTNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '주민번호오류여부', COLNM: 'FMRESIDENTERR', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oResidentNoErr', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '실명인증여부', COLNM: 'FMAUTHGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_AuthGubun', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '최종선임자이력순번', COLNM: 'FMLASTFMHSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGER' },
    { COLKORNM: '선임자관리번호', COLNM: 'FMHFMMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '순번', COLNM: 'FMHSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '고객정보관리번호', COLNM: 'FMCMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '직능', COLNM: 'FMCOURSECD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oCourse', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '대상물명', COLNM: 'FMBUILDINGNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '선임일자', COLNM: 'FMHSTARTDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '해임여부', COLNM: 'FMHENDGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '해임일자', COLNM: 'FMHENDDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '해임처리시스템일자', COLNM: 'FMHENDSYSDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '전화번호', COLNM: 'FMHTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '핸드폰번호', COLNM: 'FMHHPTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '이메일아이디', COLNM: 'FMHEMAILID', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '이메일도메인', COLNM: 'FMHEMAILDOMAIN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '대표주소구분', COLNM: 'FMHADDRGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddr', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '우편번호', COLNM: 'FMHZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '구주소1', COLNM: 'FMHADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '구주소2', COLNM: 'FMHADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_시도', COLNM: 'FMHSIDO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_시군구', COLNM: 'FMHSIGUNGU', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_동', COLNM: 'FMHDONG', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_리', COLNM: 'FMHRI', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_산번지여부', COLNM: 'FMHSANGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_ioYn', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_본번지', COLNM: 'FMHBUNJI1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_부번지', COLNM: 'FMHBUNJI2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_기타주소', COLNM: 'FMHETCADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_도로명', COLNM: 'FMHROADNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_건물명', COLNM: 'FMHBULDNM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '신주소_건물기타주소', COLNM: 'FMHBULDADDR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '과거회원정보', COLNM: 'FMHOLDINFO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'FIREMANAGERH' },
    { COLKORNM: '대상물관리번호', COLNM: 'OBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '순번', COLNM: 'OSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '관계자구분', COLNM: 'OGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oOwnerGubun', TBLNM: 'OWNER' },
    { COLKORNM: '성명', COLNM: 'ONM', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '전화번호', COLNM: 'OTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '휴대폰', COLNM: 'OHPTEL', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '기타정보', COLNM: 'OREMARK', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OWNER' },
    { COLKORNM: '순번', COLNM: 'DSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '허가번호', COLNM: 'DPERMISSIONNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '기타정보', COLNM: 'DREMARK', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '민원정보시스템제조소등PK', COLNM: 'DGATEWAYDAN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '대상물관리번호', COLNM: 'DBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'DANGER' },
    { COLKORNM: '대상물관리번호', COLNM: 'TBMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '순번', COLNM: 'TSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '차량번호', COLNM: 'TCARNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '차량년도', COLNM: 'TCARYEAR', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '허가번호', COLNM: 'TPERMISSIONNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '기타정보', COLNM: 'TREMARK', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '우편청구구분', COLNM: 'TPOSTREQGUBUN', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oTankAddrGubun', TBLNM: 'TANK' },
    { COLKORNM: '상치장소우편번호', COLNM: 'TPARKPLACEZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '상치장소주소1', COLNM: 'TPARKPLACEADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '상치장소주소2', COLNM: 'TPARKPLACEADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '설치자우편번호', COLNM: 'TINSTLRZIPCD', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '설치자주소1', COLNM: 'TINSTLRADDR1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '설치자주소2', COLNM: 'TINSTLRADDR2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '민원정보시스템제조소등탱크PK1', COLNM: 'TGATEWAYTANK1', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '민원정보시스템제조소등탱크PK2', COLNM: 'TGATEWAYTANK2', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'TANK' },
    { COLKORNM: '고객정보관리번호', COLNM: 'ADCMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '순번', COLNM: 'ADSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '부가정보코드', COLNM: 'ADCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oAddition', TBLNM: 'ADDITION' },
    { COLKORNM: '내용', COLNM: 'ADCONTENT', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '삭제여부', COLNM: 'ADDELGUBUN', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'ADDITION' },
    { COLKORNM: '선임자관리번호', COLNM: 'OLFMMGNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '순번', COLNM: 'OLSEQ', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '자격증코드', COLNM: 'OLHCD', COMBOGUBUN: 'Y', INNERDSNM: 'ds_oLicenseGubun', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '자격증등록번호', COLNM: 'OLNO', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
    { COLKORNM: '자격증발급일자', COLNM: 'OLDATE', COMBOGUBUN: 'N', INNERDSNM: '', TBLNM: 'OTHERLICENSE' },
];

export const ds_ds_oResidentNoErr = [
    { CD: '0', DATA: '정상' },
    { CD: '1', DATA: '오류' },
];

export const ds_ds_AuthGubun = [
    { CD: '0', DATA: '인증' },
    { CD: '1', DATA: '미인증' },
];

export const ds_ds_oTankAddrGubun = [
    { CD: '0', DATA: '상치주소' },
    { CD: '1', DATA: '설치자주소' },
];
