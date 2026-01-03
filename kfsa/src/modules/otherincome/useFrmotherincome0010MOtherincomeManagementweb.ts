// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGujuGubun, Ids_ioLocalGubun, Ids_ioBizGubun, Ids_ioJibuGubun, Ids_ioDataGubun, Ids_ioIncomeKey, Ids_ioOtherCode, Ids_ioSOtherperson, Ids_ioOtherIncomePayment, Ids_oOneOtherPerson, Ids_ioIncomecdG, Ids_ioIncomecdS, Ids_ioIUDotherperson, Ids_ioIncomePaymentMain1, Ids_ioIncomePaymentSub1, Ids_ioIncomePaymentMain2, Ids_ioIncomePaymentSub2, Ids_ioIncomePayment, Ids_ioIncomecdGA, Ids_oJIBU, Ids_iIUDincompayment, Ids_oIUDincompayment, Ids_iOtherbiz, Ids_oOtherbiz, Ids_iBizOtherIncome, Ids_oBizOtherIncome, Ids_inBizGubun, Ids_inPrtGubun, Ids_inPrtStandard, Ids_inJibu, Ids_inFrjibu, Ids_toFrjibu, Ids_iQuerycreate, Ids_oQuerycreate, Ids_iExcelcreate, Ids_oExcelcreate, Ids_ioOtherMagam } from './Frmotherincome0010MOtherincomeManagementwebData';

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
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);
    const [isVisible_tabTab1, setIsVisible_tabTab1] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_lbKeyword, setIsVisible_lbKeyword] = useState(true);
    const [isVisible_lbPerson, setIsVisible_lbPerson] = useState(true);
    const [isVisible_btnOtherPerson, setIsVisible_btnOtherPerson] = useState(true);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_lbname, setIsVisible_lbname] = useState(true);
    const [isVisible_btnPersonNew, setIsVisible_btnPersonNew] = useState(true);
    const [isVisible_lbPersonSearch, setIsVisible_lbPersonSearch] = useState(true);
    const [isVisible_edOpmgno, setIsVisible_edOpmgno] = useState(true);
    const [isVisible_btnPersonSave, setIsVisible_btnPersonSave] = useState(true);
    const [isVisible_btnPersonDel, setIsVisible_btnPersonDel] = useState(true);
    const [isVisible_lbnation, setIsVisible_lbnation] = useState(true);
    const [isVisible_cbxOpresidencecd, setIsVisible_cbxOpresidencecd] = useState(true);
    const [isVisible_lbaddr, setIsVisible_lbaddr] = useState(true);
    const [isVisible_lbjumin, setIsVisible_lbjumin] = useState(true);
    const [isVisible_lbguju, setIsVisible_lbguju] = useState(true);
    const [isVisible_edOpresident1, setIsVisible_edOpresident1] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_edOpresident2, setIsVisible_edOpresident2] = useState(true);
    const [isVisible_rdOpresidence, setIsVisible_rdOpresidence] = useState(true);
    const [isVisible_lblocal, setIsVisible_lblocal] = useState(true);
    const [isVisible_rdOpnationalcd, setIsVisible_rdOpnationalcd] = useState(true);
    const [isVisible_Shape2, setIsVisible_Shape2] = useState(true);
    const [isVisible_edOimgno, setIsVisible_edOimgno] = useState(true);
    const [isVisible_btnIncomepaymentNew, setIsVisible_btnIncomepaymentNew] = useState(true);
    const [isVisible_btnIncomepaymentSave, setIsVisible_btnIncomepaymentSave] = useState(true);
    const [isVisible_btnIncomepaymentPrint, setIsVisible_btnIncomepaymentPrint] = useState(true);
    const [isVisible_lbOibizgubun, setIsVisible_lbOibizgubun] = useState(true);
    const [isVisible_lbPaymentdate, setIsVisible_lbPaymentdate] = useState(true);
    const [isVisible_lbOipayment, setIsVisible_lbOipayment] = useState(true);
    const [isVisible_edJibu, setIsVisible_edJibu] = useState(true);
    const [isVisible_edOiprtno, setIsVisible_edOiprtno] = useState(true);
    const [isVisible_lbOiremark, setIsVisible_lbOiremark] = useState(true);
    const [isVisible_lbIncomepayment, setIsVisible_lbIncomepayment] = useState(true);
    const [isVisible_btnIncomepaymentFall, setIsVisible_btnIncomepaymentFall] = useState(true);
    const [isVisible_btnIncomepaymentDel, setIsVisible_btnIncomepaymentDel] = useState(true);
    const [isVisible_btnOipaymentdate, setIsVisible_btnOipaymentdate] = useState(true);
    const [isVisible_lbOiprtno, setIsVisible_lbOiprtno] = useState(true);
    const [isVisible_lbStatus, setIsVisible_lbStatus] = useState(true);
    const [isVisible_edStatus, setIsVisible_edStatus] = useState(true);
    const [isVisible_lbOiototoal, setIsVisible_lbOiototoal] = useState(true);
    const [isVisible_lbRevertmonth, setIsVisible_lbRevertmonth] = useState(true);
    const [isVisible_lbOiincomecd, setIsVisible_lbOiincomecd] = useState(true);
    const [isVisible_cbxOiincomecd, setIsVisible_cbxOiincomecd] = useState(true);
    const [isVisible_edOiremark, setIsVisible_edOiremark] = useState(true);
    const [isVisible_lbtotal, setIsVisible_lbtotal] = useState(true);
    const [isVisible_lbincome, setIsVisible_lbincome] = useState(true);
    const [isVisible_Shape3, setIsVisible_Shape3] = useState(true);
    const [isVisible_lbIncomepaymentprint, setIsVisible_lbIncomepaymentprint] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_rdseljibu, setIsVisible_rdseljibu] = useState(true);
    const [isVisible_lbGubun, setIsVisible_lbGubun] = useState(true);
    const [isVisible_rdpaymentstatus, setIsVisible_rdpaymentstatus] = useState(true);
    const [isVisible_edKeyword, setIsVisible_edKeyword] = useState(true);
    const [isVisible_gdOtherIncome, setIsVisible_gdOtherIncome] = useState(true);
    const [isVisible_btnPersonChg, setIsVisible_btnPersonChg] = useState(true);
    const [isVisible_rdOibizgubun, setIsVisible_rdOibizgubun] = useState(true);
    const [isVisible_medOipayment, setIsVisible_medOipayment] = useState(true);
    const [isVisible_medOiototal, setIsVisible_medOiototal] = useState(true);
    const [isVisible_sOipayment, setIsVisible_sOipayment] = useState(true);
    const [isVisible_sOineedcost, setIsVisible_sOineedcost] = useState(true);
    const [isVisible_sOiincome, setIsVisible_sOiincome] = useState(true);
    const [isVisible_sOiototal, setIsVisible_sOiototal] = useState(true);
    const [isVisible_sOioincome, setIsVisible_sOioincome] = useState(true);
    const [isVisible_sOiojumin, setIsVisible_sOiojumin] = useState(true);
    const [isVisible_sincomerate, setIsVisible_sincomerate] = useState(true);
    const [isVisible_edOijibu, setIsVisible_edOijibu] = useState(false);
    const [isVisible_medRevertmonth, setIsVisible_medRevertmonth] = useState(true);
    const [isVisible_edOpnm, setIsVisible_edOpnm] = useState(true);
    const [isVisible_edOpaddress, setIsVisible_edOpaddress] = useState(true);
    const [isVisible_lbYear, setIsVisible_lbYear] = useState(true);
    const [isVisible_edOiyear, setIsVisible_edOiyear] = useState(false);
    const [isVisible_sYear, setIsVisible_sYear] = useState(true);
    const [isVisible_medPaymentdate, setIsVisible_medPaymentdate] = useState(true);
    const [isVisible_btnToExcel, setIsVisible_btnToExcel] = useState(true);
    const [isVisible_sOineedpct, setIsVisible_sOineedpct] = useState(true);
    const [isVisible_sOiincomepct, setIsVisible_sOiincomepct] = useState(true);
    const [isVisible_btnJuminchk, setIsVisible_btnJuminchk] = useState(true);
    const [isVisible_lbResidentNoError, setIsVisible_lbResidentNoError] = useState(false);
    const [isVisible_rdtab3Bizgubun, setIsVisible_rdtab3Bizgubun] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_rdtab3Prtgubun, setIsVisible_rdtab3Prtgubun] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_rdtab3Prtstandard, setIsVisible_rdtab3Prtstandard] = useState(true);
    const [isVisible_sRange, setIsVisible_sRange] = useState(true);
    const [isVisible_lbs, setIsVisible_lbs] = useState(true);
    const [isVisible_sOiyear, setIsVisible_sOiyear] = useState(true);
    const [isVisible_lbOiyear, setIsVisible_lbOiyear] = useState(true);
    const [isVisible_medYear, setIsVisible_medYear] = useState(true);
    const [isVisible_lbRange, setIsVisible_lbRange] = useState(true);
    const [isVisible_edsRange1, setIsVisible_edsRange1] = useState(false);
    const [isVisible_edsRange2, setIsVisible_edsRange2] = useState(false);
    const [isVisible_medsRange1, setIsVisible_medsRange1] = useState(false);
    const [isVisible_medsRange2, setIsVisible_medsRange2] = useState(false);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_rdtab3Jibu, setIsVisible_rdtab3Jibu] = useState(true);
    const [isVisible_Shape4, setIsVisible_Shape4] = useState(true);
    const [isVisible_cbxFrjibu, setIsVisible_cbxFrjibu] = useState(true);
    const [isVisible_btnpaymentprint, setIsVisible_btnpaymentprint] = useState(true);
    const [isVisible_btnpaymentexcel, setIsVisible_btnpaymentexcel] = useState(true);
    const [isVisible_gdOtherExcel1, setIsVisible_gdOtherExcel1] = useState(false);
    const [isVisible_gdOtherExcel2, setIsVisible_gdOtherExcel2] = useState(false);
    const [isVisible_medJubsuCnt, setIsVisible_medJubsuCnt] = useState(true);
    const [isVisible_medfrdate, setIsVisible_medfrdate] = useState(true);
    const [isVisible_medtodate, setIsVisible_medtodate] = useState(true);
    const [isVisible_btnPersonSearch, setIsVisible_btnPersonSearch] = useState(true);
    const [isVisible_btnErrorPerson, setIsVisible_btnErrorPerson] = useState(true);
    const [isVisible_gdOtherbiz, setIsVisible_gdOtherbiz] = useState(true);
    const [isVisible_edOtherbizPerson, setIsVisible_edOtherbizPerson] = useState(true);
    const [isVisible_btnOtherbizTrans, setIsVisible_btnOtherbizTrans] = useState(true);
    const [isVisible_btnOtherbizTotal, setIsVisible_btnOtherbizTotal] = useState(true);
    const [isVisible_gdOtherbizExcel, setIsVisible_gdOtherbizExcel] = useState(false);
    const [isVisible_edObopmgno, setIsVisible_edObopmgno] = useState(false);
    const [isVisible_edObkey, setIsVisible_edObkey] = useState(false);
    const [isVisible_edObdate, setIsVisible_edObdate] = useState(false);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [tabValue_tabTab1, setTabValue_tabTab1] = useState(0);

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
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_tabTab1,
        setIsVisible_tabTab1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbKeyword,
        setIsVisible_lbKeyword,
        isVisible_lbPerson,
        setIsVisible_lbPerson,
        isVisible_btnOtherPerson,
        setIsVisible_btnOtherPerson,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_lbname,
        setIsVisible_lbname,
        isVisible_btnPersonNew,
        setIsVisible_btnPersonNew,
        isVisible_lbPersonSearch,
        setIsVisible_lbPersonSearch,
        isVisible_edOpmgno,
        setIsVisible_edOpmgno,
        isVisible_btnPersonSave,
        setIsVisible_btnPersonSave,
        isVisible_btnPersonDel,
        setIsVisible_btnPersonDel,
        isVisible_lbnation,
        setIsVisible_lbnation,
        isVisible_cbxOpresidencecd,
        setIsVisible_cbxOpresidencecd,
        isVisible_lbaddr,
        setIsVisible_lbaddr,
        isVisible_lbjumin,
        setIsVisible_lbjumin,
        isVisible_lbguju,
        setIsVisible_lbguju,
        isVisible_edOpresident1,
        setIsVisible_edOpresident1,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_edOpresident2,
        setIsVisible_edOpresident2,
        isVisible_rdOpresidence,
        setIsVisible_rdOpresidence,
        isVisible_lblocal,
        setIsVisible_lblocal,
        isVisible_rdOpnationalcd,
        setIsVisible_rdOpnationalcd,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_edOimgno,
        setIsVisible_edOimgno,
        isVisible_btnIncomepaymentNew,
        setIsVisible_btnIncomepaymentNew,
        isVisible_btnIncomepaymentSave,
        setIsVisible_btnIncomepaymentSave,
        isVisible_btnIncomepaymentPrint,
        setIsVisible_btnIncomepaymentPrint,
        isVisible_lbOibizgubun,
        setIsVisible_lbOibizgubun,
        isVisible_lbPaymentdate,
        setIsVisible_lbPaymentdate,
        isVisible_lbOipayment,
        setIsVisible_lbOipayment,
        isVisible_edJibu,
        setIsVisible_edJibu,
        isVisible_edOiprtno,
        setIsVisible_edOiprtno,
        isVisible_lbOiremark,
        setIsVisible_lbOiremark,
        isVisible_lbIncomepayment,
        setIsVisible_lbIncomepayment,
        isVisible_btnIncomepaymentFall,
        setIsVisible_btnIncomepaymentFall,
        isVisible_btnIncomepaymentDel,
        setIsVisible_btnIncomepaymentDel,
        isVisible_btnOipaymentdate,
        setIsVisible_btnOipaymentdate,
        isVisible_lbOiprtno,
        setIsVisible_lbOiprtno,
        isVisible_lbStatus,
        setIsVisible_lbStatus,
        isVisible_edStatus,
        setIsVisible_edStatus,
        isVisible_lbOiototoal,
        setIsVisible_lbOiototoal,
        isVisible_lbRevertmonth,
        setIsVisible_lbRevertmonth,
        isVisible_lbOiincomecd,
        setIsVisible_lbOiincomecd,
        isVisible_cbxOiincomecd,
        setIsVisible_cbxOiincomecd,
        isVisible_edOiremark,
        setIsVisible_edOiremark,
        isVisible_lbtotal,
        setIsVisible_lbtotal,
        isVisible_lbincome,
        setIsVisible_lbincome,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_lbIncomepaymentprint,
        setIsVisible_lbIncomepaymentprint,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_rdseljibu,
        setIsVisible_rdseljibu,
        isVisible_lbGubun,
        setIsVisible_lbGubun,
        isVisible_rdpaymentstatus,
        setIsVisible_rdpaymentstatus,
        isVisible_edKeyword,
        setIsVisible_edKeyword,
        isVisible_gdOtherIncome,
        setIsVisible_gdOtherIncome,
        isVisible_btnPersonChg,
        setIsVisible_btnPersonChg,
        isVisible_rdOibizgubun,
        setIsVisible_rdOibizgubun,
        isVisible_medOipayment,
        setIsVisible_medOipayment,
        isVisible_medOiototal,
        setIsVisible_medOiototal,
        isVisible_sOipayment,
        setIsVisible_sOipayment,
        isVisible_sOineedcost,
        setIsVisible_sOineedcost,
        isVisible_sOiincome,
        setIsVisible_sOiincome,
        isVisible_sOiototal,
        setIsVisible_sOiototal,
        isVisible_sOioincome,
        setIsVisible_sOioincome,
        isVisible_sOiojumin,
        setIsVisible_sOiojumin,
        isVisible_sincomerate,
        setIsVisible_sincomerate,
        isVisible_edOijibu,
        setIsVisible_edOijibu,
        isVisible_medRevertmonth,
        setIsVisible_medRevertmonth,
        isVisible_edOpnm,
        setIsVisible_edOpnm,
        isVisible_edOpaddress,
        setIsVisible_edOpaddress,
        isVisible_lbYear,
        setIsVisible_lbYear,
        isVisible_edOiyear,
        setIsVisible_edOiyear,
        isVisible_sYear,
        setIsVisible_sYear,
        isVisible_medPaymentdate,
        setIsVisible_medPaymentdate,
        isVisible_btnToExcel,
        setIsVisible_btnToExcel,
        isVisible_sOineedpct,
        setIsVisible_sOineedpct,
        isVisible_sOiincomepct,
        setIsVisible_sOiincomepct,
        isVisible_btnJuminchk,
        setIsVisible_btnJuminchk,
        isVisible_lbResidentNoError,
        setIsVisible_lbResidentNoError,
        isVisible_rdtab3Bizgubun,
        setIsVisible_rdtab3Bizgubun,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_rdtab3Prtgubun,
        setIsVisible_rdtab3Prtgubun,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_rdtab3Prtstandard,
        setIsVisible_rdtab3Prtstandard,
        isVisible_sRange,
        setIsVisible_sRange,
        isVisible_lbs,
        setIsVisible_lbs,
        isVisible_sOiyear,
        setIsVisible_sOiyear,
        isVisible_lbOiyear,
        setIsVisible_lbOiyear,
        isVisible_medYear,
        setIsVisible_medYear,
        isVisible_lbRange,
        setIsVisible_lbRange,
        isVisible_edsRange1,
        setIsVisible_edsRange1,
        isVisible_edsRange2,
        setIsVisible_edsRange2,
        isVisible_medsRange1,
        setIsVisible_medsRange1,
        isVisible_medsRange2,
        setIsVisible_medsRange2,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_rdtab3Jibu,
        setIsVisible_rdtab3Jibu,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_cbxFrjibu,
        setIsVisible_cbxFrjibu,
        isVisible_btnpaymentprint,
        setIsVisible_btnpaymentprint,
        isVisible_btnpaymentexcel,
        setIsVisible_btnpaymentexcel,
        isVisible_gdOtherExcel1,
        setIsVisible_gdOtherExcel1,
        isVisible_gdOtherExcel2,
        setIsVisible_gdOtherExcel2,
        isVisible_medJubsuCnt,
        setIsVisible_medJubsuCnt,
        isVisible_medfrdate,
        setIsVisible_medfrdate,
        isVisible_medtodate,
        setIsVisible_medtodate,
        isVisible_btnPersonSearch,
        setIsVisible_btnPersonSearch,
        isVisible_btnErrorPerson,
        setIsVisible_btnErrorPerson,
        isVisible_gdOtherbiz,
        setIsVisible_gdOtherbiz,
        isVisible_edOtherbizPerson,
        setIsVisible_edOtherbizPerson,
        isVisible_btnOtherbizTrans,
        setIsVisible_btnOtherbizTrans,
        isVisible_btnOtherbizTotal,
        setIsVisible_btnOtherbizTotal,
        isVisible_gdOtherbizExcel,
        setIsVisible_gdOtherbizExcel,
        isVisible_edObopmgno,
        setIsVisible_edObopmgno,
        isVisible_edObkey,
        setIsVisible_edObkey,
        isVisible_edObdate,
        setIsVisible_edObdate,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        tabValue_tabTab1,
        setTabValue_tabTab1,
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