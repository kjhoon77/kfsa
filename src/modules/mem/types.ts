export interface MemberInfo {
    rowId: number;
    GTDEPTNM: string; // 지부
    CNO: string; // 관리번호
    RCNM: string; // 지역
    CNICKNM: string; // 직능
    MBNM: string; // 대상물명
    MNAME: string; // 성명
    BIRTHDAY: string; // 생년월일
    MPERSONKEY: string; // 회원식별번호
    FMHSTARTDATE: string; // 선임일자
    CFEEYYMM: string; // 회비부과년월
    OVERGUBUN: string; // 겸직
    MADDR: string; // 대상물주소

    // Hidden / Logic fields
    CMGNO: number; // 고객관리번호 Key
    CGTMGNO: string; // 지부코드
    CSTATUSGUBUN: string; // 회원상태
    CDELGUBUN: string; // 삭제여부
    MINAPFEE: number; // 미납총액 (for Virtual Account popup)
    MHP: string; // 핸드폰
}

export interface CustomerFeeInfo {
    CFGYEAR: string; // 년도
    CFCCGUBUN: string; // 회비구분 (0:회비, 1:교육비)
    MINAPFEE: number; // 미납금액
    SUNAPFEE: number; // 수납금액
    REALSUNAPFEE: number; // 실납부금액
}

export interface EducationPassInfo {
    EPYEAR: string; // 년도
    ESSTUDENT: string; // 교육 (Code)
    ESSTUDENT_NM?: string; // 교육명
    EPSUCCESSIONGUBUN: string; // 구분 (Code)
    EPSUCCESSIONGUBUN_NM?: string; // 구분명
    EPPASSDATE: string; // 교육일자
    EPPERSONNM: string; // 성명
    BIRTHDAY: string; // 생년월일
    EPPERSONKEY: string; // 회원식별번호
    EPPROCGTMGNO: string; // 교육지부
    ESGUBUN: string; // 교육구분
    BNM: string; // 대상물명
    EPPASSREMARK: string; // 비고

    // Logic fields
    EPMGNO: number; // Key
}

export interface OverBizInfo {
    CGTMGNO: string; // 지부
    CNO: string; // 회원번호
    CNICKFULLNM: string; // 직능
    COVERGUBUN: string; // 면제여부
    BNM: string; // 업체명
    MINAPFEE: number; // 미납금액
    BBIZCD: string; // 업종
}

export interface MemberSearchCondition {
    jibuCd: string;
    custNo: string;
    memberNm: string;
    birthday: string;
    personKey: string;
}
