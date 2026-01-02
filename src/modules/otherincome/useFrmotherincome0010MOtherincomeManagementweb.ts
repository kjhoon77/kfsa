// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_ioGujuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioLocalGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioBizGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioJibuGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioDataGubun {
    CD: string;
    DATA: string;
}

export interface Ids_ioIncomeKey {
    KEYWORD: string;
}

export interface Ids_ioOtherCode {
    OCYEAR: string;
    OCCD: string;
    OCNAME: string;
}

export interface Ids_ioSOtherperson {
    OPMGNO: string;
    OPNM: string;
    OPRESIDENT: string;
    OPADDRESS: string;
    OPRESIDENCE: string;
    OPRESIDENCECD: string;
    OPNATIONALCD: string;
}

export interface Ids_ioOtherIncomePayment {
    BIZGUBUN: string;
    MGNO: string;
    JIBU: string;
    PAYMENTDATE: string;
    REVERTMONTH: string;
    STATUS: string;
    NEEDYUL: string;
    SEYUL: string;
    OIMGNO: string;
    OIBIZGUBUN: string;
    OIJIBU: string;
    OIYEAR: string;
    OIPRTNO: string;
    OIOPMGNO: string;
    OIPAYMENTDATE: string;
    CIMGNO: string;
    OIREVERTMONTH: string;
    OIINCOMECD: string;
    OIPROJECT: string;
    OISTATUS: string;
    OIPAYMENT: string;
    OINEEDCOST: string;
    OIINCOME: string;
    OIOINCOME: string;
    OIOJURIDICAL: string;
    OIOJUMIN: string;
    OIONONGTUK: string;
    OIOTOTAL: string;
    OIREMARK: string;
    OIREFMGNO: string;
    OIREFKEY: string;
    OIREGISTERDATE: string;
    OIUSERID: string;
    OPMGNO: string;
    O_STATUS: string;
    O_VALUE: string;
}

export interface Ids_oOneOtherPerson {
    OPMGNO: string;
    OPNM: string;
    OPRESIDENT: string;
    OPRESIDENCE: string;
    OPRESIDENCECD: string;
    OPNATIONALCD: string;
    BIZ: string;
    O_status: string;
    O_value: string;
}

export interface Ids_ioIncomecdG {
    CD: string;
    DATA: string;
}

export interface Ids_ioIncomecdS {
    CD: string;
    DATA: string;
}

export interface Ids_ioIUDotherperson {
    I_DML: string;
    I_OPMGNO: string;
    I_OPRESIDENT: string;
    I_OPNM: string;
    I_OPADDRESS: string;
    I_OPRESIDENCE: string;
    I_OPRESIDENCECD: string;
    I_OPNATIONALCD: string;
    I_OPUSERID: string;
    O_STATUS: string;
    O_VALUE: string;
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
    OPMGNO: string;
    OPNM: string;
    RESIDENT: string;
    BIZGUBUN: string;
    MGNO: string;
    JIBU: string;
    PAYMENTDATE: string;
    REVERTMONTH: string;
    STATUS: string;
    NEEDYUL: string;
    SEYUL: string;
    OIMGNO: string;
    OIBIZGUBUN: string;
    OIJIBU: string;
    OIYEAR: string;
    OIPRTNO: string;
    OIOPMGNO: string;
    OIPAYMENTDATE: string;
    CIMGNO: string;
    OIREVERTMONTH: string;
    OIINCOMECD: string;
    OIPROJECT: string;
    OISTATUS: string;
    OIPAYMENT: string;
    OINEEDCOST: string;
    OIINCOME: string;
    OIOINCOME: string;
    OIOJURIDICAL: string;
    OIOJUMIN: string;
    OIONONGTUK: string;
    OIOTOTAL: string;
    OIREMARK: string;
    OIREFMGNO: string;
    OIREFKEY: string;
    OIREGISTERDATE: string;
    OIUSERID: string;
}

export interface Ids_ioIncomecdGA {
    CD: string;
    DATA: string;
}

export interface Ids_oJIBU {
}

export interface Ids_iIUDincompayment {
    DML: string;
    OIMGNO: string;
    OIBIZGUBUN: string;
    OIJIBU: string;
    OIYEAR: string;
    OIOPMGNO: string;
    OIPAYMENTDATE: string;
    OIREVERTMONTH: string;
    OIINCOMECD: string;
    OIPAYMENT: string;
    OINEEDCOST: string;
    OIINCOME: string;
    OIOINCOME: string;
    OIOJUMIN: string;
    OIREMARK: string;
    OIUSERID: string;
    O_status: string;
    O_value: string;
}

export interface Ids_oIUDincompayment {
    O_status: string;
    O_value: string;
}

export interface Ids_iOtherbiz {
    I_YEAR: string;
    I_FRDATE: string;
    I_TODATE: string;
}

export interface Ids_oOtherbiz {
    OPNM: string;
    JUMIN: string;
    OBOPMGNO: string;
    OBKEY: string;
    ODATE: string;
    TOTPAYMENT: string;
    OTHERINCOME: string;
    OTHERJUMIN: string;
    BIZINCOME: string;
    BIZJUMIN: string;
}

export interface Ids_iBizOtherIncome {
    I_OBYEAR: string;
    I_OBOPMGNO: string;
    I_OBKEY: string;
    I_OBDATE: string;
    I_OBREGSABUN: string;
}

export interface Ids_oBizOtherIncome {
    O_status: string;
    O_value: string;
}

export interface Ids_inBizGubun {
    CD: string;
    DATA: string;
}

export interface Ids_inPrtGubun {
    CD: string;
    DATA: string;
}

export interface Ids_inPrtStandard {
    CD: string;
    DATA: string;
}

export interface Ids_inJibu {
    CD: string;
    DATA: string;
}

export interface Ids_inFrjibu {
    CODE: string;
    NAME: string;
}

export interface Ids_toFrjibu {
    CODE: string;
    NAME: string;
}

export interface Ids_iQuerycreate {
    I_GUBUN: string;
    I_PRT: string;
    I_PROC: string;
    I_YEAR: string;
    I_FR: string;
    I_TO: string;
    I_JIBU: string;
}

export interface Ids_oQuerycreate {
    O_status: string;
    O_value: string;
    O_SQL: string;
}

export interface Ids_iExcelcreate {
    O_SQL: string;
}

export interface Ids_oExcelcreate {
    OIJIBU: string;
    NO: string;
    OPNM: string;
    OIRESIDENT: string;
    JIBU_NAME: string;
    OIPAYMENTYEAR: string;
    OIPAYMENTDATE: string;
    OCNAME: string;
    OIPAYMENT: string;
    OINEEDCOST: string;
    OIINCOME: string;
    OIOINCOME: string;
    OIOJUMIN: string;
    OIOTOTAL: string;
    TOTAL: string;
    RATE: string;
    OIPRTNO: string;
}

export interface Ids_ioOtherMagam {
    OTHER: string;
    BIZ: string;
}

export const useFrmotherincome0010MOtherincomeManagementweb = () => {
    const [ds_ioGujuGubun, setds_ioGujuGubun] = useState<Ids_ioGujuGubun[]>([]);
    const [ds_ioLocalGubun, setds_ioLocalGubun] = useState<Ids_ioLocalGubun[]>([]);
    const [ds_ioBizGubun, setds_ioBizGubun] = useState<Ids_ioBizGubun[]>([]);
    const [ds_ioJibuGubun, setds_ioJibuGubun] = useState<Ids_ioJibuGubun[]>([]);
    const [ds_ioDataGubun, setds_ioDataGubun] = useState<Ids_ioDataGubun[]>([]);
    const [ds_ioIncomeKey, setds_ioIncomeKey] = useState<Ids_ioIncomeKey[]>([]);
    const [ds_ioOtherCode, setds_ioOtherCode] = useState<Ids_ioOtherCode[]>([]);
    const [ds_ioSOtherperson, setds_ioSOtherperson] = useState<Ids_ioSOtherperson[]>([]);
    const [ds_ioOtherIncomePayment, setds_ioOtherIncomePayment] = useState<Ids_ioOtherIncomePayment[]>([]);
    const [ds_oOneOtherPerson, setds_oOneOtherPerson] = useState<Ids_oOneOtherPerson[]>([]);
    const [ds_ioIncomecdG, setds_ioIncomecdG] = useState<Ids_ioIncomecdG[]>([]);
    const [ds_ioIncomecdS, setds_ioIncomecdS] = useState<Ids_ioIncomecdS[]>([]);
    const [ds_ioIUDotherperson, setds_ioIUDotherperson] = useState<Ids_ioIUDotherperson[]>([]);
    const [ds_ioIncomePaymentMain1, setds_ioIncomePaymentMain1] = useState<Ids_ioIncomePaymentMain1[]>([]);
    const [ds_ioIncomePaymentSub1, setds_ioIncomePaymentSub1] = useState<Ids_ioIncomePaymentSub1[]>([]);
    const [ds_ioIncomePaymentMain2, setds_ioIncomePaymentMain2] = useState<Ids_ioIncomePaymentMain2[]>([]);
    const [ds_ioIncomePaymentSub2, setds_ioIncomePaymentSub2] = useState<Ids_ioIncomePaymentSub2[]>([]);
    const [ds_ioIncomePayment, setds_ioIncomePayment] = useState<Ids_ioIncomePayment[]>([]);
    const [ds_ioIncomecdGA, setds_ioIncomecdGA] = useState<Ids_ioIncomecdGA[]>([]);
    const [ds_oJIBU, setds_oJIBU] = useState<Ids_oJIBU[]>([]);
    const [ds_iIUDincompayment, setds_iIUDincompayment] = useState<Ids_iIUDincompayment[]>([]);
    const [ds_oIUDincompayment, setds_oIUDincompayment] = useState<Ids_oIUDincompayment[]>([]);
    const [ds_iOtherbiz, setds_iOtherbiz] = useState<Ids_iOtherbiz[]>([]);
    const [ds_oOtherbiz, setds_oOtherbiz] = useState<Ids_oOtherbiz[]>([]);
    const [ds_iBizOtherIncome, setds_iBizOtherIncome] = useState<Ids_iBizOtherIncome[]>([]);
    const [ds_oBizOtherIncome, setds_oBizOtherIncome] = useState<Ids_oBizOtherIncome[]>([]);
    const [ds_inBizGubun, setds_inBizGubun] = useState<Ids_inBizGubun[]>([]);
    const [ds_inPrtGubun, setds_inPrtGubun] = useState<Ids_inPrtGubun[]>([]);
    const [ds_inPrtStandard, setds_inPrtStandard] = useState<Ids_inPrtStandard[]>([]);
    const [ds_inJibu, setds_inJibu] = useState<Ids_inJibu[]>([]);
    const [ds_inFrjibu, setds_inFrjibu] = useState<Ids_inFrjibu[]>([]);
    const [ds_toFrjibu, setds_toFrjibu] = useState<Ids_toFrjibu[]>([]);
    const [ds_iQuerycreate, setds_iQuerycreate] = useState<Ids_iQuerycreate[]>([]);
    const [ds_oQuerycreate, setds_oQuerycreate] = useState<Ids_oQuerycreate[]>([]);
    const [ds_iExcelcreate, setds_iExcelcreate] = useState<Ids_iExcelcreate[]>([]);
    const [ds_oExcelcreate, setds_oExcelcreate] = useState<Ids_oExcelcreate[]>([]);
    const [ds_ioOtherMagam, setds_ioOtherMagam] = useState<Ids_ioOtherMagam[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGujuGubun([]);
            setds_ioLocalGubun([]);
            setds_ioBizGubun([]);
            setds_ioJibuGubun([]);
            setds_ioDataGubun([]);
            setds_ioIncomeKey([]);
            setds_ioOtherCode([]);
            setds_ioSOtherperson([]);
            setds_ioOtherIncomePayment([]);
            setds_oOneOtherPerson([]);
            setds_ioIncomecdG([]);
            setds_ioIncomecdS([]);
            setds_ioIUDotherperson([]);
            setds_ioIncomePaymentMain1([]);
            setds_ioIncomePaymentSub1([]);
            setds_ioIncomePaymentMain2([]);
            setds_ioIncomePaymentSub2([]);
            setds_ioIncomePayment([]);
            setds_ioIncomecdGA([]);
            setds_oJIBU([]);
            setds_iIUDincompayment([]);
            setds_oIUDincompayment([]);
            setds_iOtherbiz([]);
            setds_oOtherbiz([]);
            setds_iBizOtherIncome([]);
            setds_oBizOtherIncome([]);
            setds_inBizGubun([]);
            setds_inPrtGubun([]);
            setds_inPrtStandard([]);
            setds_inJibu([]);
            setds_inFrjibu([]);
            setds_toFrjibu([]);
            setds_iQuerycreate([]);
            setds_oQuerycreate([]);
            setds_iExcelcreate([]);
            setds_oExcelcreate([]);
            setds_ioOtherMagam([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btn_SearchOtherIncome_OnClick = () => {
        console.log('btn_SearchOtherIncome_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const tabTab1_tab1_btnIncomepaymentDel_OnClick = () => {
        console.log('tabTab1_tab1_btnIncomepaymentDel_OnClick clicked');
    };
    const tabTab1_tab1_btnIncomepaymentFall_OnClick = () => {
        console.log('tabTab1_tab1_btnIncomepaymentFall_OnClick clicked');
    };
    const tabTab1_tab1_btnIncomepaymentNew_OnClick = () => {
        console.log('tabTab1_tab1_btnIncomepaymentNew_OnClick clicked');
    };
    const tabTab1_tab1_btnIncomepaymentPrint_OnClick = () => {
        console.log('tabTab1_tab1_btnIncomepaymentPrint_OnClick clicked');
    };
    const tabTab1_tab1_btnIncomepaymentSave_OnClick = () => {
        console.log('tabTab1_tab1_btnIncomepaymentSave_OnClick clicked');
    };
    const tabTab1_tab1_btnJuminchk_OnClick = () => {
        console.log('tabTab1_tab1_btnJuminchk_OnClick clicked');
    };
    const tabTab1_tab1_btnOipaymentdate_OnClick = () => {
        console.log('tabTab1_tab1_btnOipaymentdate_OnClick clicked');
    };
    const tabTab1_tab1_btnPersonChg_OnClick = () => {
        console.log('tabTab1_tab1_btnPersonChg_OnClick clicked');
    };
    const tabTab1_tab1_btnPersonDel_OnClick = () => {
        console.log('tabTab1_tab1_btnPersonDel_OnClick clicked');
    };
    const tabTab1_tab1_btnPersonNew_OnClick = () => {
        console.log('tabTab1_tab1_btnPersonNew_OnClick clicked');
    };
    const tabTab1_tab1_btnPersonSave_OnClick = () => {
        console.log('tabTab1_tab1_btnPersonSave_OnClick clicked');
    };
    const tabTab1_tab1_btnToExcel_OnClick = () => {
        console.log('tabTab1_tab1_btnToExcel_OnClick clicked');
    };
    const tabTab1_tab2_btnErrorPerson_OnClick = () => {
        console.log('tabTab1_tab2_btnErrorPerson_OnClick clicked');
    };
    const tabTab1_tab2_btnOtherbizTotal_OnClick = () => {
        console.log('tabTab1_tab2_btnOtherbizTotal_OnClick clicked');
    };
    const tabTab1_tab2_btnOtherbizTrans_OnClick = () => {
        console.log('tabTab1_tab2_btnOtherbizTrans_OnClick clicked');
    };
    const tabTab1_tab2_btnPersonSearch_OnClick = () => {
        console.log('tabTab1_tab2_btnPersonSearch_OnClick clicked');
    };
    const tabTab1_tab2_btnToExcel_OnClick = () => {
        console.log('tabTab1_tab2_btnToExcel_OnClick clicked');
    };
    const tabTab1_tab3_btnpaymentexcel_OnClick = () => {
        console.log('tabTab1_tab3_btnpaymentexcel_OnClick clicked');
    };
    const tabTab1_tab3_btnpaymentprint_OnClick = () => {
        console.log('tabTab1_tab3_btnpaymentprint_OnClick clicked');
    };

    return {
        isLoading,
        ds_ioGujuGubun,
        ds_ioLocalGubun,
        ds_ioBizGubun,
        ds_ioJibuGubun,
        ds_ioDataGubun,
        ds_ioIncomeKey,
        ds_ioOtherCode,
        ds_ioSOtherperson,
        ds_ioOtherIncomePayment,
        ds_oOneOtherPerson,
        ds_ioIncomecdG,
        ds_ioIncomecdS,
        ds_ioIUDotherperson,
        ds_ioIncomePaymentMain1,
        ds_ioIncomePaymentSub1,
        ds_ioIncomePaymentMain2,
        ds_ioIncomePaymentSub2,
        ds_ioIncomePayment,
        ds_ioIncomecdGA,
        ds_oJIBU,
        ds_iIUDincompayment,
        ds_oIUDincompayment,
        ds_iOtherbiz,
        ds_oOtherbiz,
        ds_iBizOtherIncome,
        ds_oBizOtherIncome,
        ds_inBizGubun,
        ds_inPrtGubun,
        ds_inPrtStandard,
        ds_inJibu,
        ds_inFrjibu,
        ds_toFrjibu,
        ds_iQuerycreate,
        ds_oQuerycreate,
        ds_iExcelcreate,
        ds_oExcelcreate,
        ds_ioOtherMagam,
        btn_SearchOtherIncome_OnClick,
        lfn_Cancel,
        lfn_PrintScreen,
        tabTab1_tab1_btnIncomepaymentDel_OnClick,
        tabTab1_tab1_btnIncomepaymentFall_OnClick,
        tabTab1_tab1_btnIncomepaymentNew_OnClick,
        tabTab1_tab1_btnIncomepaymentPrint_OnClick,
        tabTab1_tab1_btnIncomepaymentSave_OnClick,
        tabTab1_tab1_btnJuminchk_OnClick,
        tabTab1_tab1_btnOipaymentdate_OnClick,
        tabTab1_tab1_btnPersonChg_OnClick,
        tabTab1_tab1_btnPersonDel_OnClick,
        tabTab1_tab1_btnPersonNew_OnClick,
        tabTab1_tab1_btnPersonSave_OnClick,
        tabTab1_tab1_btnToExcel_OnClick,
        tabTab1_tab2_btnErrorPerson_OnClick,
        tabTab1_tab2_btnOtherbizTotal_OnClick,
        tabTab1_tab2_btnOtherbizTrans_OnClick,
        tabTab1_tab2_btnPersonSearch_OnClick,
        tabTab1_tab2_btnToExcel_OnClick,
        tabTab1_tab3_btnpaymentexcel_OnClick,
        tabTab1_tab3_btnpaymentprint_OnClick,
    };
};