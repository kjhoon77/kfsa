// Basic Info Interfaces
export interface CustomerInfo {
    CMGNO: number; // 고객관리번호
    CNO: string; // 고객번호
    AGNM: string; // 고객명(상호)
    CSTATUSGUBUN: string; // 회원구분 (0:회원, 1:비회원)
    CDELGUBUN: string; // 삭제구분 (0:정상, 1:삭제)
    CREGCD: string; // 지역코드
    CCOURSECD: string; // 직능코드
    CBMGNO: number; // 대상물관리번호
    CFMHMGNO: number; // 선임자관리번호
    CPERSONGUBUN: string; // 공공선임정보 및 인력구분
    CCOCD: string; // 업체구분
    CAGGUBUN: string; // 업무대행여부
    CAGMGNO: number; // 업무대행업체관리번호
    CSTATUSREASONCD: string; // 고객상태변경사유코드
    CSTATUSDATE: string; // 고객상태처리일자
    CREGISTERYYMM: string; // 등록년월
    CFEEYYMM: string; // 회비부과년월
    COBMGNO: number; // 겸직관리번호
    COVERGUBUN: string; // 겸직회비면제여부
    CEXCEPTGUBUN: string; // 관리제외구분
    CEXCEPTDATE: string; // 관리제외처리일자
    CDELDATE: string; // 삭제일자
    CFIREMGNO: string; // 시도소방본부관리번호
    CPOSTREQGUBUN: string; // 우편물청구구분
    // Address fields map to properties like CEDUPOSTADDR1, etc.
}

export interface BuildingInfo {
    BMGNO: number; // 대상물관리번호
    BNM: string; // 대상물명
    BADDR1: string; // 주소1
    BADDR2: string; // 주소2
    BZIPCD: string; // 우편번호
    BROADADDR1: string; // 도로명주소1
    BROADADDR2: string; // 도로명주소2
    BADDRGUBUN: string; // 주소구분
    BBIZCD: string; // 용도
    BFIREUPCD: string; // 관할소방서
    BFIRECD: string; // 안전센터관리코드
    BFIREMAN: string; // 관서담당자
    BTEL: string; // 전화번호
    BFAX: string; // 팩스
    BSMOKEGUBUN: string; // 제연설비설치대상여부
    BAREA: number; // 연면적
    BCONO: string; // 사업자등록번호
}

export interface ManagerInfo {
    FMMGNO: number; // 선임자관리번호
    FMNM: string; // 선임자명
    FMBIRTHDAY: string; // 생년월일
    FMHTEL: string; // 자택전화
    FMHHPTEL: string; // 휴대전화
    FMHEMAILID: string; // 이메일 ID
    FMHEMAILDOMAIN: string; // 이메일 도메인
    FMHZIPCD: string; // 우편번호
    FMHROADADDR1: string; // 도로명주소1
    FMHROADADDR2: string; // 도로명주소2
    FMHADDR1: string; // 지번주소1
    FMHADDR2: string; // 지번주소2
    FMHADDRGUBUN: string; // 주소구분
    FMHLICENSENO: string; // 자격수첩번호
    FMHSTARTDATE: string; // 선임일자
    FMHENDDATE: string; // 해임일자
    FMHENDGUBUN: string; // 해임구분
    FMRESIDENTERR: string; // 주민번호오류여부
    FMAUTHGUBUN: string; // 실명인증여부
}

// Tab Grids Interfaces
export interface OverBizInfo {
    CGTMGNO: string; // 지부
    CNO: string; // 회원번호
    CNICKFULLNM: string; // 직능
    COVERGUBUN: string; // 면제여부
    BNM: string; // 업체명
    MINAPFEE: number; // 미납금액
    BBIZCD: string; // 업종
}

export interface LicenseInfo {
    OLHCD: string; // 자격증명(코드)
    OLNO: string; // 자격증등록번호
    OLDATE: string; // 등록일자
    // For specific license
    TCCOURSENM?: string;
    LLCSNO?: string;
    LISSUEDATE?: string;
}

export interface TrainingPassList {
    TCCOURSENM: string; // 수료과정
    TPPASSNO: string; // 수료번호
    TPPASSDATE: string; // 수료일자
}

export interface CustomerFeeInfo {
    CFGYEAR: string; // 년도
    CFCCGUBUN: string; // 회비구분 ('0': 회비, '1': 교육비)
    MINAPFEE: number; // 미납금액
    SUNAPFEE: number; // 수납금액
    REALSUNAPFEE: number; // 실제수납액
}

export interface EducationPassInfo {
    EPYEAR: string; // 년도
    ESSTUDENT: string; // 교육(학생)
    EPSUCCESSIONGUBUN: string; // 구분(승계)
    EDUTYPE: string; // 유형
    EPPASSDATE: string; // 교육일자
    EPPERSONNM: string; // 성명
    BIRTHDAY: string; // 생년월일
    EPPERSONKEY: string; // 개인식별번호
    EPPROCGTMGNO: string; // 교육지부
    ESGUBUN: string; // 교육구분
    BNM: string; // 대상물(업체)명
    EPPASSREMARK: string; // 중복이수처리사유
}

export interface SearchCondition {
    jibuCd: string; // 지부코드
    stationCd: string; // 소방서코드
    centerCd: string; // 센터코드
    searchKeyword: string; // 검색어
}
