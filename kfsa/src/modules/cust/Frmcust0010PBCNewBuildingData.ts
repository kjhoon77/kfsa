// @ts-nocheck
export const Frmcust0010PBCNewBuildingData = {};

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번' },
    { CD: '1', DATA: '도로명' },
];

export interface Ids_ioBuildingInfo {
    BADDR1?: string;
    BADDR2?: string;
    BADDRGUBUN?: string;
    BAREA?: number;
    BBIZCD?: string;
    BBULDADDR?: string;
    BBULDNM?: string;
    BBUNJI1?: string;
    BBUNJI2?: string;
    BCONO?: string;
    BDONG?: string;
    BFAX?: string;
    BFIRECD?: string;
    BFIREMAN?: string;
    BMGNO?: number;
    BNM?: string;
    BRI?: string;
    BROADNM?: string;
    BSANGUBUN?: string;
    BSIDO?: string;
    BSIGUNGU?: string;
    BSMOKEGUBUN?: string;
    BTEL?: string;
    BZIPCD?: string;
    BFIREUPCD?: string;
    BSEARCHNM?: string;
    BROADADDR1?: string;
    BROADADDR2?: string;
}

export interface Ids_oBizCd {
    CD?: string;
    DATA?: string;
}

export interface Ids_oBusinessGubun {
    CD?: string;
    DATA?: string;
}

export interface Ids_ioYn {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioYn: Ids_ioYn[] = [
    { CD: '', DATA: '선택사항' },
    { CD: '1', DATA: '아니오' },
    { CD: '0', DATA: '예' },
];

export interface Ids_ioOwnerInfo {
    OBMGNO?: number;
    OGUBUN?: string;
    OHPTEL?: string;
    ONM?: string;
    OREMARK?: string;
    OSEQ?: number;
    OTEL?: string;
}

export interface Ids_ioDangerInfo {
    DBMGNO?: number;
    DGATEWAYDAN?: string;
    DPERMISSIONNO?: string;
    DREMARK?: string;
    DSEQ?: number;
}

export interface Ids_ioTankInfo {
    TBMGNO?: number;
    TCARNO?: string;
    TCARYEAR?: string;
    TGATEWAYTANK1?: number;
    TGATEWAYTANK2?: number;
    TINSTLRADDR1?: string;
    TINSTLRADDR2?: string;
    TINSTLRZIPCD?: string;
    TPARKPLACEADDR1?: string;
    TPARKPLACEADDR2?: string;
    TPARKPLACEZIPCD?: string;
    TPERMISSIONNO?: string;
    TPOSTREQGUBUN?: string;
    TREMARK?: string;
    TSEQ?: number;
}

export interface Ids_oBuildingSeq {
    SEQ?: string;
}
