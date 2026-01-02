// @ts-nocheck
export const Frmsys0056MDeliveryCodeManagementData = {};

export interface Ids_oPostCode {
    PMGNO?: string;
    PPOSTCD?: string;
    PSEQ?: string;
    PSIDO?: string;
    PKU?: string;
    PDONG?: string;
    PRI?: string;
    PDOSEO?: string;
    PSAN?: string;
    PSTARTBUNJI?: string;
    PENDBUNJI?: string;
    PBUILDNM?: string;
    PFULLADDR?: string;
    PADDR1?: string;
}

export interface Ids_oSido {
    CD?: string;
    DATA?: string;
    JIBUCD?: string;
}

export const ds_ds_oSido: Ids_oSido[] = [
    { CD: '11', DATA: '서울특별시', JIBUCD: '1011' },
    { CD: '26', DATA: '부산광역시', JIBUCD: '1021' },
    { CD: '27', DATA: '대구광역시', JIBUCD: '1031' },
    { CD: '28', DATA: '인천광역시', JIBUCD: '1041' },
    { CD: '29', DATA: '광주광역시', JIBUCD: '1051' },
    { CD: '30', DATA: '대전광역시', JIBUCD: '1061' },
    { CD: '31', DATA: '울산광역시', JIBUCD: '1131' },
    { CD: '36', DATA: '세종특별자치시', JIBUCD: '1061' },
    { CD: '41', DATA: '경기도', JIBUCD: '1081' },
    { CD: '42', DATA: '강원도', JIBUCD: '1091' },
    { CD: '43', DATA: '충청북도', JIBUCD: '1101' },
    { CD: '44', DATA: '충청남도', JIBUCD: '1061' },
    { CD: '45', DATA: '전라북도', JIBUCD: '1111' },
    { CD: '46', DATA: '전라남도', JIBUCD: '1051' },
    { CD: '47', DATA: '경상북도', JIBUCD: '1031' },
    { CD: '48', DATA: '경상남도', JIBUCD: '1071' },
    { CD: '50', DATA: '제주특별자치도', JIBUCD: '1121' },
];

export interface Ids_oDong {
    CD?: string;
    DATA?: string;
}

export interface Ids_oRoad {
    CD?: string;
    DATA?: string;
}

export interface Ids_iSearch {
    SIDO?: string;
    ADDR?: string;
    BUILDMGNO?: string;
    ROADMGNO?: string;
}

export interface Ids_oRoadList {
    RBUILDMGNO?: string;
    RZIPCD?: string;
    RADDR?: string;
    ROADPART1?: string;
    ROADPART2?: string;
    ROADMGNO?: string;
}

export interface Ids_iPostAddrDivide {
    ADDR1?: string;
    ADDR2?: string;
    ZIPCD?: string;
}

export interface Ids_oPostAddrDivide {
}

export interface Ids_oRoadDetail {
    ROADMGNO?: string;
    RLAWCD?: string;
    RSIDONM?: string;
    RKUNM?: string;
    RLAWDONGNM?: string;
    RLAWRINM?: string;
    RSANGUBUN?: string;
    RMAINBUNJI?: string;
    RSUBBUNJI?: string;
    RROADNMCD?: string;
    RROADNM?: string;
    RUNDERGUBUN?: string;
    RBUILDMAINNO?: string;
    RBUILDSUBNO?: string;
    RBUILDNM?: string;
    RDETAILBUILDNM?: string;
    RBUILDMGNO?: string;
    RDONGNO?: string;
    RDONGCD?: string;
    RDONGNM?: string;
    RZIPCD?: string;
    RZIPNO?: string;
    RLARGEDELIVERY?: string;
    RSAUCD?: string;
    RCHANGDATE?: string;
    RKUBULDNM?: string;
    RAPTGUBUN?: string;
    RBASICMGNO?: string;
    RDETAILADDRGUBUN?: string;
    RETC1?: string;
    RETC2?: string;
    RGUBUN?: string;
    RTABMGNO?: string;
}

export interface Ids_oAddrGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddrGubun: Ids_oAddrGubun[] = [
    { CD: '1', DATA: '도로명' },
    { CD: '0', DATA: '지번' },
];

export interface Ids_ioMemberGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioMemberGubun: Ids_ioMemberGubun[] = [
    { CD: '', DATA: '전체' },
    { CD: '0', DATA: '회원' },
    { CD: '1', DATA: '비회원' },
];
