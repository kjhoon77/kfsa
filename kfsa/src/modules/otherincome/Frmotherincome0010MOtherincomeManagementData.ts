// @ts-nocheck
export const Frmotherincome0010MOtherincomeManagementData = {};

export interface Ids_ioGujuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioGujuGubun: Ids_ioGujuGubun[] = [
    { CD: '1', DATA: '거주자' },
    { CD: '0', DATA: '비거주자' },
];

export interface Ids_ioLocalGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioLocalGubun: Ids_ioLocalGubun[] = [
    { CD: '1', DATA: '내국인' },
    { CD: '9', DATA: '외국인' },
];

export interface Ids_ioBizGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioBizGubun: Ids_ioBizGubun[] = [
    { CD: '0', DATA: '기타소득' },
    { CD: '1', DATA: '사업소득' },
];

export interface Ids_ioJibuGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioJibuGubun: Ids_ioJibuGubun[] = [
    { CD: '0', DATA: '전지부' },
    { CD: '1', DATA: '접속지부' },
];

export interface Ids_ioDataGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioDataGubun: Ids_ioDataGubun[] = [
    { CD: '0', DATA: '전체' },
    { CD: '1', DATA: '정상' },
    { CD: '2', DATA: '폐기' },
];

export interface Ids_ioIncomeKey {
    KEYWORD?: string;
}

export interface Ids_ioOtherCode {
    OCYEAR?: string;
    OCCD?: string;
    OCNAME?: string;
}

export interface Ids_ioSOtherperson {
    OPMGNO?: string;
    OPNM?: string;
    OPRESIDENT?: string;
    OPADDRESS?: string;
    OPRESIDENCE?: string;
    OPRESIDENCECD?: string;
    OPNATIONALCD?: string;
}

export interface Ids_ioOtherIncomePayment {
    BIZGUBUN?: string;
    MGNO?: string;
    JIBU?: string;
    PAYMENTDATE?: string;
    REVERTMONTH?: string;
    STATUS?: string;
    NEEDYUL?: string;
    SEYUL?: string;
    OIMGNO?: string;
    OIBIZGUBUN?: string;
    OIJIBU?: string;
    OIYEAR?: string;
    OIPRTNO?: string;
    OIOPMGNO?: string;
    OIPAYMENTDATE?: string;
    CIMGNO?: string;
    OIREVERTMONTH?: string;
    OIINCOMECD?: string;
    OIPROJECT?: string;
    OISTATUS?: string;
    OIPAYMENT?: string;
    OINEEDCOST?: string;
    OIINCOME?: string;
    OIOINCOME?: string;
    OIOJURIDICAL?: string;
    OIOJUMIN?: string;
    OIONONGTUK?: string;
    OIOTOTAL?: string;
    OIREMARK?: string;
    OIREFMGNO?: string;
    OIREFKEY?: string;
    OIREGISTERDATE?: string;
    OIUSERID?: string;
    OPMGNO?: string;
    O_STATUS?: string;
    O_VALUE?: string;
}

export interface Ids_oOneOtherPerson {
    OPMGNO?: string;
    OPNM?: string;
    OPRESIDENT?: string;
    OPRESIDENCE?: string;
    OPRESIDENCECD?: string;
    OPNATIONALCD?: string;
    BIZ?: string;
    O_status?: string;
    O_value?: string;
}

export interface Ids_ioIncomecdG {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioIncomecdG: Ids_ioIncomecdG[] = [
    { CD: '76', DATA: '76.강사료' },
    { CD: '62', DATA: '62.기타' },
];

export interface Ids_ioIncomecdS {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioIncomecdS: Ids_ioIncomecdS[] = [
    { CD: '940903', DATA: '940903.학원강사' },
];

export interface Ids_ioIUDotherperson {
    I_DML?: string;
    I_OPMGNO?: string;
    I_OPRESIDENT?: string;
    I_OPNM?: string;
    I_OPADDRESS?: string;
    I_OPRESIDENCE?: string;
    I_OPRESIDENCECD?: string;
    I_OPNATIONALCD?: string;
    I_OPUSERID?: string;
    O_STATUS?: string;
    O_VALUE?: string;
}

export interface Ids_ioIncomePaymentMain1 {
}

export interface Ids_ioIncomePaymentSub1 {
}

export interface Ids_ioIncomePaymentMain2 {
}

export interface Ids_ioIncomePaymentSub2 {
}

export interface Ids_ioIncomePayment {
    OPMGNO?: string;
    OPNM?: string;
    RESIDENT?: string;
    BIZGUBUN?: string;
    MGNO?: string;
    JIBU?: string;
    PAYMENTDATE?: string;
    REVERTMONTH?: string;
    STATUS?: string;
    NEEDYUL?: string;
    SEYUL?: string;
    OIMGNO?: string;
    OIBIZGUBUN?: string;
    OIJIBU?: string;
    OIYEAR?: string;
    OIPRTNO?: string;
    OIOPMGNO?: string;
    OIPAYMENTDATE?: string;
    CIMGNO?: string;
    OIREVERTMONTH?: string;
    OIINCOMECD?: string;
    OIPROJECT?: string;
    OISTATUS?: string;
    OIPAYMENT?: string;
    OINEEDCOST?: string;
    OIINCOME?: string;
    OIOINCOME?: string;
    OIOJURIDICAL?: string;
    OIOJUMIN?: string;
    OIONONGTUK?: string;
    OIOTOTAL?: string;
    OIREMARK?: string;
    OIREFMGNO?: string;
    OIREFKEY?: string;
    OIREGISTERDATE?: string;
    OIUSERID?: string;
}

export interface Ids_ioIncomecdGA {
    CD?: string;
    DATA?: string;
}

export const ds_ds_ioIncomecdGA: Ids_ioIncomecdGA[] = [
    { CD: '62', DATA: '62.기타' },
];

export interface Ids_oJIBU {
}

export interface Ids_iIUDincompayment {
    DML?: string;
    OIMGNO?: string;
    OIBIZGUBUN?: string;
    OIJIBU?: string;
    OIYEAR?: string;
    OIOPMGNO?: string;
    OIPAYMENTDATE?: string;
    OIREVERTMONTH?: string;
    OIINCOMECD?: string;
    OIPAYMENT?: string;
    OINEEDCOST?: string;
    OIINCOME?: string;
    OIOINCOME?: string;
    OIOJUMIN?: string;
    OIREMARK?: string;
    OIUSERID?: string;
    O_status?: string;
    O_value?: string;
}

export interface Ids_oIUDincompayment {
    O_status?: string;
    O_value?: string;
}

export interface Ids_iOtherbiz {
    I_YEAR?: string;
    I_FRDATE?: string;
    I_TODATE?: string;
}

export interface Ids_oOtherbiz {
    OPNM?: string;
    JUMIN?: string;
    OBOPMGNO?: string;
    OBKEY?: string;
    ODATE?: string;
    TOTPAYMENT?: string;
    OTHERINCOME?: string;
    OTHERJUMIN?: string;
    BIZINCOME?: string;
    BIZJUMIN?: string;
}

export interface Ids_iBizOtherIncome {
    I_OBYEAR?: string;
    I_OBOPMGNO?: string;
    I_OBKEY?: string;
    I_OBDATE?: string;
    I_OBREGSABUN?: string;
}

export interface Ids_oBizOtherIncome {
    O_status?: string;
    O_value?: string;
}

export interface Ids_inBizGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_inBizGubun: Ids_inBizGubun[] = [
    { CD: '0', DATA: '기타소득' },
    { CD: '1', DATA: '사업소득' },
];

export interface Ids_inPrtGubun {
    CD?: string;
    DATA?: string;
}

export const ds_ds_inPrtGubun: Ids_inPrtGubun[] = [
    { CD: '0', DATA: '지급조서(발행자보고용)' },
    { CD: '1', DATA: '지급조서(소득자신고용)' },
    { CD: '2', DATA: '지급조서발급대장(정상분)' },
    { CD: '3', DATA: '지급조서발급대장(폐기분)' },
];

export interface Ids_inPrtStandard {
    CD?: string;
    DATA?: string;
}

export const ds_ds_inPrtStandard: Ids_inPrtStandard[] = [
    { CD: '0', DATA: '발행순번' },
    { CD: '1', DATA: '지급일자' },
    { CD: '2', DATA: '입력일자' },
];

export interface Ids_inJibu {
    CD?: string;
    DATA?: string;
}

export const ds_ds_inJibu: Ids_inJibu[] = [
    { CD: '0', DATA: '해당지부' },
    { CD: '1', DATA: '전체' },
];

export interface Ids_inFrjibu {
    CODE?: string;
    NAME?: string;
}

export const ds_ds_inFrjibu: Ids_inFrjibu[] = [
    { CODE: '10000', NAME: '10000.본회' },
    { CODE: '11001', NAME: '11001.서울지부' },
    { CODE: '11002', NAME: '11002.부산지부' },
    { CODE: '11003', NAME: '11003.대구.경북지부' },
    { CODE: '11004', NAME: '11004.인천지부' },
    { CODE: '11005', NAME: '11005.광주.전남지부' },
    { CODE: '11006', NAME: '11006.대전.충남지부' },
    { CODE: '11007', NAME: '11007.경남지부' },
    { CODE: '11008', NAME: '11008.경기지부' },
    { CODE: '11009', NAME: '11009.강원지부' },
    { CODE: '11010', NAME: '11010.충북지부' },
    { CODE: '11011', NAME: '11011.전북지부' },
    { CODE: '11012', NAME: '11012.제주지부' },
    { CODE: '11013', NAME: '11013.울산지부' },
    { CODE: '11014', NAME: '11014.경기북부지부' },
    { CODE: '11015', NAME: '11015.서울동부지부' },
];

export interface Ids_toFrjibu {
    CODE?: string;
    NAME?: string;
}

export const ds_ds_toFrjibu: Ids_toFrjibu[] = [
    { CODE: '10000', NAME: '10000.본회' },
    { CODE: '11001', NAME: '11001.서울지부' },
    { CODE: '11002', NAME: '11002.부산지부' },
    { CODE: '11003', NAME: '11003.대구.경북지부' },
    { CODE: '11004', NAME: '11004.인천지부' },
    { CODE: '11005', NAME: '11005.광주.전남지부' },
    { CODE: '11006', NAME: '11006.대전.충남지부' },
    { CODE: '11007', NAME: '11007.경남지부' },
    { CODE: '11008', NAME: '11008.경기지부' },
    { CODE: '11009', NAME: '11009.강원지부' },
    { CODE: '11010', NAME: '11010.충북지부' },
    { CODE: '11011', NAME: '11011.전북지부' },
    { CODE: '11012', NAME: '11012.제주지부' },
    { CODE: '11013', NAME: '11013.울산지부' },
    { CODE: '11014', NAME: '11014.경기북부지부' },
    { CODE: '11015', NAME: '11015.서울동부지부' },
];

export interface Ids_iQuerycreate {
    I_GUBUN?: string;
    I_PRT?: string;
    I_PROC?: string;
    I_YEAR?: string;
    I_FR?: string;
    I_TO?: string;
    I_JIBU?: string;
}

export interface Ids_oQuerycreate {
    O_status?: string;
    O_value?: string;
    O_SQL?: string;
}

export interface Ids_iExcelcreate {
    O_SQL?: string;
}

export interface Ids_oExcelcreate {
    OIJIBU?: string;
    NO?: string;
    OPNM?: string;
    OIRESIDENT?: string;
    JIBU_NAME?: string;
    OIPAYMENTYEAR?: string;
    OIPAYMENTDATE?: string;
    OCNAME?: string;
    OIPAYMENT?: string;
    OINEEDCOST?: string;
    OIINCOME?: string;
    OIOINCOME?: string;
    OIOJUMIN?: string;
    OIOTOTAL?: string;
    TOTAL?: string;
    RATE?: string;
    OIPRTNO?: string;
}

export interface Ids_ioOtherMagam {
    OTHER?: string;
    BIZ?: string;
}
