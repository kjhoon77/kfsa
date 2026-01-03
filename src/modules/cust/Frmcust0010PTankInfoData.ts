// @ts-nocheck
export const Frmcust0010PTankInfoData = {};

export interface Ids_iLicense {
    LLCSNO?: string;
    LCANCELREASON?: string;
    LHSEQ?: number;
}

export interface Ids_oGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oGubun: Ids_oGubun[] = [
    { CD: '0', DATA: '상치주소' },
    { CD: '1', DATA: '설치자주소' },
];

export interface Ids_oAddr {
    CD?: string;
    DATA?: string;
}

export const ds_ds_oAddr: Ids_oAddr[] = [
    { CD: '0', DATA: '지번주소' },
    { CD: '1', DATA: '도로명주소' },
];

export interface Ids_ioTankInfo {
    TBMGNO?: string;
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
    TSEQ?: string;
    POSTPLACE?: string;
    TPARKPLACEADDRGUBUN?: string;
    TPARKPLACEROADZIPCD?: string;
    TPARKPLACEROADADDR1?: string;
    TPARKPLACEROADADDR2?: string;
    TINSTLRADDRGUBUN?: string;
    TINSTLRROADZIPCD?: string;
    TINSTLRROADADDR1?: string;
    TINSTLRROADADDR2?: string;
    TRPARKPNUCD?: string;
    TRPARKROADBUILDMGNO?: string;
    TRPARKROADDETAIL?: string;
    TRPARKROADREMAIN?: string;
    TRPARKSANGUBUN?: string;
    TRPARKMAINBUNJI?: string;
    TRPARKSUBBUNJI?: string;
    TRPARKBUILDNM?: string;
    TRPARKADDRETC?: string;
    TRINSTLRPNUCD?: string;
    TRINSTLRROADBUILDMGNO?: string;
    TRINSTLRROADDETAIL?: string;
    TRINSTLRROADREMAIN?: string;
    TRINSTLRSANGUBUN?: string;
    TRINSTLRMAINBUNJI?: string;
    TRINSTLRSUBBUNJI?: string;
    TRINSTLRBUILDNM?: string;
    TRINSTLRADDRETC?: string;
    TRCONVPGM?: string;
    TRCONVPARKSTATUS?: string;
    TRCONVINSTLRSTATUS?: string;
}
