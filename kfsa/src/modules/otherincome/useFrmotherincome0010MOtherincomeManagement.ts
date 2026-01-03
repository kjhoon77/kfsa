// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGujuGubun, Ids_ioLocalGubun, Ids_ioBizGubun, Ids_ioJibuGubun, Ids_ioDataGubun, Ids_ioIncomeKey, Ids_ioOtherCode, Ids_ioSOtherperson, Ids_ioOtherIncomePayment, Ids_oOneOtherPerson, Ids_ioIncomecdG, Ids_ioIncomecdS, Ids_ioIUDotherperson, Ids_ioIncomePaymentMain1, Ids_ioIncomePaymentSub1, Ids_ioIncomePaymentMain2, Ids_ioIncomePaymentSub2, Ids_ioIncomePayment, Ids_ioIncomecdGA, Ids_oJIBU, Ids_iIUDincompayment, Ids_oIUDincompayment, Ids_iOtherbiz, Ids_oOtherbiz, Ids_iBizOtherIncome, Ids_oBizOtherIncome, Ids_inBizGubun, Ids_inPrtGubun, Ids_inPrtStandard, Ids_inJibu, Ids_inFrjibu, Ids_toFrjibu, Ids_iQuerycreate, Ids_oQuerycreate, Ids_iExcelcreate, Ids_oExcelcreate, Ids_ioOtherMagam } from './Frmotherincome0010MOtherincomeManagementData';

export const useFrmotherincome0010MOtherincomeManagement = () => {
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
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_tabTab1, setRawVisible_tabTab1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbKeyword, setRawVisible_lbKeyword] = useState(true);
    const [rawVisible_lbPerson, setRawVisible_lbPerson] = useState(true);
    const [rawVisible_btnOtherPerson, setRawVisible_btnOtherPerson] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_lbname, setRawVisible_lbname] = useState(true);
    const [rawVisible_btnPersonNew, setRawVisible_btnPersonNew] = useState(true);
    const [rawVisible_lbPersonSearch, setRawVisible_lbPersonSearch] = useState(true);
    const [rawVisible_edOpmgno, setRawVisible_edOpmgno] = useState(true);
    const [rawVisible_btnPersonSave, setRawVisible_btnPersonSave] = useState(true);
    const [rawVisible_btnPersonDel, setRawVisible_btnPersonDel] = useState(true);
    const [rawVisible_lbnation, setRawVisible_lbnation] = useState(true);
    const [rawVisible_cbxOpresidencecd, setRawVisible_cbxOpresidencecd] = useState(true);
    const [rawVisible_lbaddr, setRawVisible_lbaddr] = useState(true);
    const [rawVisible_lbjumin, setRawVisible_lbjumin] = useState(true);
    const [rawVisible_lbguju, setRawVisible_lbguju] = useState(true);
    const [rawVisible_edOpresident1, setRawVisible_edOpresident1] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_edOpresident2, setRawVisible_edOpresident2] = useState(true);
    const [rawVisible_rdOpresidence, setRawVisible_rdOpresidence] = useState(true);
    const [rawVisible_lblocal, setRawVisible_lblocal] = useState(true);
    const [rawVisible_rdOpnationalcd, setRawVisible_rdOpnationalcd] = useState(true);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_edOimgno, setRawVisible_edOimgno] = useState(true);
    const [rawVisible_btnIncomepaymentNew, setRawVisible_btnIncomepaymentNew] = useState(true);
    const [rawVisible_btnIncomepaymentSave, setRawVisible_btnIncomepaymentSave] = useState(true);
    const [rawVisible_btnIncomepaymentPrint, setRawVisible_btnIncomepaymentPrint] = useState(true);
    const [rawVisible_lbOibizgubun, setRawVisible_lbOibizgubun] = useState(true);
    const [rawVisible_lbPaymentdate, setRawVisible_lbPaymentdate] = useState(true);
    const [rawVisible_lbOipayment, setRawVisible_lbOipayment] = useState(true);
    const [rawVisible_edJibu, setRawVisible_edJibu] = useState(true);
    const [rawVisible_edOiprtno, setRawVisible_edOiprtno] = useState(true);
    const [rawVisible_lbOiremark, setRawVisible_lbOiremark] = useState(true);
    const [rawVisible_lbIncomepayment, setRawVisible_lbIncomepayment] = useState(true);
    const [rawVisible_btnIncomepaymentFall, setRawVisible_btnIncomepaymentFall] = useState(true);
    const [rawVisible_btnIncomepaymentDel, setRawVisible_btnIncomepaymentDel] = useState(true);
    const [rawVisible_btnOipaymentdate, setRawVisible_btnOipaymentdate] = useState(true);
    const [rawVisible_lbOiprtno, setRawVisible_lbOiprtno] = useState(true);
    const [rawVisible_lbStatus, setRawVisible_lbStatus] = useState(true);
    const [rawVisible_edStatus, setRawVisible_edStatus] = useState(true);
    const [rawVisible_lbOiototoal, setRawVisible_lbOiototoal] = useState(true);
    const [rawVisible_lbRevertmonth, setRawVisible_lbRevertmonth] = useState(true);
    const [rawVisible_lbOiincomecd, setRawVisible_lbOiincomecd] = useState(true);
    const [rawVisible_cbxOiincomecd, setRawVisible_cbxOiincomecd] = useState(true);
    const [rawVisible_edOiremark, setRawVisible_edOiremark] = useState(true);
    const [rawVisible_lbtotal, setRawVisible_lbtotal] = useState(true);
    const [rawVisible_lbincome, setRawVisible_lbincome] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_lbIncomepaymentprint, setRawVisible_lbIncomepaymentprint] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_rdseljibu, setRawVisible_rdseljibu] = useState(true);
    const [rawVisible_lbGubun, setRawVisible_lbGubun] = useState(true);
    const [rawVisible_rdpaymentstatus, setRawVisible_rdpaymentstatus] = useState(true);
    const [rawVisible_edKeyword, setRawVisible_edKeyword] = useState(true);
    const [rawVisible_gdOtherIncome, setRawVisible_gdOtherIncome] = useState(true);
    const [rawVisible_btnPersonChg, setRawVisible_btnPersonChg] = useState(true);
    const [rawVisible_rdOibizgubun, setRawVisible_rdOibizgubun] = useState(true);
    const [rawVisible_medOipayment, setRawVisible_medOipayment] = useState(true);
    const [rawVisible_medOiototal, setRawVisible_medOiototal] = useState(true);
    const [rawVisible_sOipayment, setRawVisible_sOipayment] = useState(true);
    const [rawVisible_sOineedcost, setRawVisible_sOineedcost] = useState(true);
    const [rawVisible_sOiincome, setRawVisible_sOiincome] = useState(true);
    const [rawVisible_sOiototal, setRawVisible_sOiototal] = useState(true);
    const [rawVisible_sOioincome, setRawVisible_sOioincome] = useState(true);
    const [rawVisible_sOiojumin, setRawVisible_sOiojumin] = useState(true);
    const [rawVisible_sincomerate, setRawVisible_sincomerate] = useState(true);
    const [rawVisible_edOijibu, setRawVisible_edOijibu] = useState(false);
    const [rawVisible_medRevertmonth, setRawVisible_medRevertmonth] = useState(true);
    const [rawVisible_edOpnm, setRawVisible_edOpnm] = useState(true);
    const [rawVisible_edOpaddress, setRawVisible_edOpaddress] = useState(true);
    const [rawVisible_lbYear, setRawVisible_lbYear] = useState(true);
    const [rawVisible_edOiyear, setRawVisible_edOiyear] = useState(false);
    const [rawVisible_sYear, setRawVisible_sYear] = useState(true);
    const [rawVisible_medPaymentdate, setRawVisible_medPaymentdate] = useState(true);
    const [rawVisible_btnToExcel, setRawVisible_btnToExcel] = useState(true);
    const [rawVisible_sOineedpct, setRawVisible_sOineedpct] = useState(true);
    const [rawVisible_sOiincomepct, setRawVisible_sOiincomepct] = useState(true);
    const [rawVisible_btnJuminchk, setRawVisible_btnJuminchk] = useState(true);
    const [rawVisible_lbResidentNoError, setRawVisible_lbResidentNoError] = useState(false);
    const [rawVisible_rdtab3Bizgubun, setRawVisible_rdtab3Bizgubun] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_rdtab3Prtgubun, setRawVisible_rdtab3Prtgubun] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_rdtab3Prtstandard, setRawVisible_rdtab3Prtstandard] = useState(true);
    const [rawVisible_sRange, setRawVisible_sRange] = useState(true);
    const [rawVisible_lbs, setRawVisible_lbs] = useState(true);
    const [rawVisible_sOiyear, setRawVisible_sOiyear] = useState(true);
    const [rawVisible_lbOiyear, setRawVisible_lbOiyear] = useState(true);
    const [rawVisible_medYear, setRawVisible_medYear] = useState(true);
    const [rawVisible_lbRange, setRawVisible_lbRange] = useState(true);
    const [rawVisible_edsRange1, setRawVisible_edsRange1] = useState(false);
    const [rawVisible_edsRange2, setRawVisible_edsRange2] = useState(false);
    const [rawVisible_medsRange1, setRawVisible_medsRange1] = useState(false);
    const [rawVisible_medsRange2, setRawVisible_medsRange2] = useState(false);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static5, setRawVisible_Static5] = useState(true);
    const [rawVisible_rdtab3Jibu, setRawVisible_rdtab3Jibu] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_cbxFrjibu, setRawVisible_cbxFrjibu] = useState(true);
    const [rawVisible_btnpaymentprint, setRawVisible_btnpaymentprint] = useState(true);
    const [rawVisible_btnpaymentexcel, setRawVisible_btnpaymentexcel] = useState(true);
    const [rawVisible_gdOtherExcel1, setRawVisible_gdOtherExcel1] = useState(false);
    const [rawVisible_gdOtherExcel2, setRawVisible_gdOtherExcel2] = useState(false);
    const [rawVisible_medJubsuCnt, setRawVisible_medJubsuCnt] = useState(true);
    const [rawVisible_medfrdate, setRawVisible_medfrdate] = useState(true);
    const [rawVisible_medtodate, setRawVisible_medtodate] = useState(true);
    const [rawVisible_btnPersonSearch, setRawVisible_btnPersonSearch] = useState(true);
    const [rawVisible_btnErrorPerson, setRawVisible_btnErrorPerson] = useState(true);
    const [rawVisible_gdOtherbiz, setRawVisible_gdOtherbiz] = useState(true);
    const [rawVisible_edOtherbizPerson, setRawVisible_edOtherbizPerson] = useState(true);
    const [rawVisible_btnOtherbizTrans, setRawVisible_btnOtherbizTrans] = useState(true);
    const [rawVisible_btnOtherbizTotal, setRawVisible_btnOtherbizTotal] = useState(true);
    const [rawVisible_gdOtherbizExcel, setRawVisible_gdOtherbizExcel] = useState(false);
    const [rawVisible_edObopmgno, setRawVisible_edObopmgno] = useState(false);
    const [rawVisible_edObkey, setRawVisible_edObkey] = useState(false);
    const [rawVisible_edObdate, setRawVisible_edObdate] = useState(false);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_tabTab1 = rawVisible_tabTab1;
    const setIsVisible_tabTab1 = setRawVisible_tabTab1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbKeyword = rawVisible_lbKeyword;
    const setIsVisible_lbKeyword = setRawVisible_lbKeyword;
    const isVisible_lbPerson = rawVisible_lbPerson;
    const setIsVisible_lbPerson = setRawVisible_lbPerson;
    const isVisible_btnOtherPerson = rawVisible_btnOtherPerson;
    const setIsVisible_btnOtherPerson = setRawVisible_btnOtherPerson;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_lbname = rawVisible_lbname;
    const setIsVisible_lbname = setRawVisible_lbname;
    const isVisible_btnPersonNew = rawVisible_btnPersonNew;
    const setIsVisible_btnPersonNew = setRawVisible_btnPersonNew;
    const isVisible_lbPersonSearch = rawVisible_lbPersonSearch;
    const setIsVisible_lbPersonSearch = setRawVisible_lbPersonSearch;
    const isVisible_edOpmgno = rawVisible_edOpmgno;
    const setIsVisible_edOpmgno = setRawVisible_edOpmgno;
    const isVisible_btnPersonSave = rawVisible_btnPersonSave;
    const setIsVisible_btnPersonSave = setRawVisible_btnPersonSave;
    const isVisible_btnPersonDel = rawVisible_btnPersonDel;
    const setIsVisible_btnPersonDel = setRawVisible_btnPersonDel;
    const isVisible_lbnation = rawVisible_lbnation;
    const setIsVisible_lbnation = setRawVisible_lbnation;
    const isVisible_cbxOpresidencecd = rawVisible_cbxOpresidencecd;
    const setIsVisible_cbxOpresidencecd = setRawVisible_cbxOpresidencecd;
    const isVisible_lbaddr = rawVisible_lbaddr;
    const setIsVisible_lbaddr = setRawVisible_lbaddr;
    const isVisible_lbjumin = rawVisible_lbjumin;
    const setIsVisible_lbjumin = setRawVisible_lbjumin;
    const isVisible_lbguju = rawVisible_lbguju;
    const setIsVisible_lbguju = setRawVisible_lbguju;
    const isVisible_edOpresident1 = rawVisible_edOpresident1;
    const setIsVisible_edOpresident1 = setRawVisible_edOpresident1;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_edOpresident2 = rawVisible_edOpresident2;
    const setIsVisible_edOpresident2 = setRawVisible_edOpresident2;
    const isVisible_rdOpresidence = rawVisible_rdOpresidence;
    const setIsVisible_rdOpresidence = setRawVisible_rdOpresidence;
    const isVisible_lblocal = rawVisible_lblocal;
    const setIsVisible_lblocal = setRawVisible_lblocal;
    const isVisible_rdOpnationalcd = rawVisible_rdOpnationalcd;
    const setIsVisible_rdOpnationalcd = setRawVisible_rdOpnationalcd;
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_edOimgno = rawVisible_edOimgno;
    const setIsVisible_edOimgno = setRawVisible_edOimgno;
    const isVisible_btnIncomepaymentNew = rawVisible_btnIncomepaymentNew;
    const setIsVisible_btnIncomepaymentNew = setRawVisible_btnIncomepaymentNew;
    const isVisible_btnIncomepaymentSave = rawVisible_btnIncomepaymentSave;
    const setIsVisible_btnIncomepaymentSave = setRawVisible_btnIncomepaymentSave;
    const isVisible_btnIncomepaymentPrint = rawVisible_btnIncomepaymentPrint;
    const setIsVisible_btnIncomepaymentPrint = setRawVisible_btnIncomepaymentPrint;
    const isVisible_lbOibizgubun = rawVisible_lbOibizgubun;
    const setIsVisible_lbOibizgubun = setRawVisible_lbOibizgubun;
    const isVisible_lbPaymentdate = rawVisible_lbPaymentdate;
    const setIsVisible_lbPaymentdate = setRawVisible_lbPaymentdate;
    const isVisible_lbOipayment = rawVisible_lbOipayment;
    const setIsVisible_lbOipayment = setRawVisible_lbOipayment;
    const isVisible_edJibu = rawVisible_edJibu;
    const setIsVisible_edJibu = setRawVisible_edJibu;
    const isVisible_edOiprtno = rawVisible_edOiprtno;
    const setIsVisible_edOiprtno = setRawVisible_edOiprtno;
    const isVisible_lbOiremark = rawVisible_lbOiremark;
    const setIsVisible_lbOiremark = setRawVisible_lbOiremark;
    const isVisible_lbIncomepayment = rawVisible_lbIncomepayment;
    const setIsVisible_lbIncomepayment = setRawVisible_lbIncomepayment;
    const isVisible_btnIncomepaymentFall = rawVisible_btnIncomepaymentFall;
    const setIsVisible_btnIncomepaymentFall = setRawVisible_btnIncomepaymentFall;
    const isVisible_btnIncomepaymentDel = rawVisible_btnIncomepaymentDel;
    const setIsVisible_btnIncomepaymentDel = setRawVisible_btnIncomepaymentDel;
    const isVisible_btnOipaymentdate = rawVisible_btnOipaymentdate;
    const setIsVisible_btnOipaymentdate = setRawVisible_btnOipaymentdate;
    const isVisible_lbOiprtno = rawVisible_lbOiprtno;
    const setIsVisible_lbOiprtno = setRawVisible_lbOiprtno;
    const isVisible_lbStatus = rawVisible_lbStatus;
    const setIsVisible_lbStatus = setRawVisible_lbStatus;
    const isVisible_edStatus = rawVisible_edStatus;
    const setIsVisible_edStatus = setRawVisible_edStatus;
    const isVisible_lbOiototoal = rawVisible_lbOiototoal;
    const setIsVisible_lbOiototoal = setRawVisible_lbOiototoal;
    const isVisible_lbRevertmonth = rawVisible_lbRevertmonth;
    const setIsVisible_lbRevertmonth = setRawVisible_lbRevertmonth;
    const isVisible_lbOiincomecd = rawVisible_lbOiincomecd;
    const setIsVisible_lbOiincomecd = setRawVisible_lbOiincomecd;
    const isVisible_cbxOiincomecd = rawVisible_cbxOiincomecd;
    const setIsVisible_cbxOiincomecd = setRawVisible_cbxOiincomecd;
    const isVisible_edOiremark = rawVisible_edOiremark;
    const setIsVisible_edOiremark = setRawVisible_edOiremark;
    const isVisible_lbtotal = rawVisible_lbtotal;
    const setIsVisible_lbtotal = setRawVisible_lbtotal;
    const isVisible_lbincome = rawVisible_lbincome;
    const setIsVisible_lbincome = setRawVisible_lbincome;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_lbIncomepaymentprint = rawVisible_lbIncomepaymentprint;
    const setIsVisible_lbIncomepaymentprint = setRawVisible_lbIncomepaymentprint;
    const isVisible_lbJibu = rawVisible_lbJibu;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_rdseljibu = rawVisible_rdseljibu;
    const setIsVisible_rdseljibu = setRawVisible_rdseljibu;
    const isVisible_lbGubun = rawVisible_lbGubun;
    const setIsVisible_lbGubun = setRawVisible_lbGubun;
    const isVisible_rdpaymentstatus = rawVisible_rdpaymentstatus;
    const setIsVisible_rdpaymentstatus = setRawVisible_rdpaymentstatus;
    const isVisible_edKeyword = rawVisible_edKeyword;
    const setIsVisible_edKeyword = setRawVisible_edKeyword;
    const isVisible_gdOtherIncome = rawVisible_gdOtherIncome;
    const setIsVisible_gdOtherIncome = setRawVisible_gdOtherIncome;
    const isVisible_btnPersonChg = rawVisible_btnPersonChg;
    const setIsVisible_btnPersonChg = setRawVisible_btnPersonChg;
    const isVisible_rdOibizgubun = rawVisible_rdOibizgubun;
    const setIsVisible_rdOibizgubun = setRawVisible_rdOibizgubun;
    const isVisible_medOipayment = rawVisible_medOipayment;
    const setIsVisible_medOipayment = setRawVisible_medOipayment;
    const isVisible_medOiototal = rawVisible_medOiototal;
    const setIsVisible_medOiototal = setRawVisible_medOiototal;
    const isVisible_sOipayment = rawVisible_sOipayment;
    const setIsVisible_sOipayment = setRawVisible_sOipayment;
    const isVisible_sOineedcost = rawVisible_sOineedcost;
    const setIsVisible_sOineedcost = setRawVisible_sOineedcost;
    const isVisible_sOiincome = rawVisible_sOiincome;
    const setIsVisible_sOiincome = setRawVisible_sOiincome;
    const isVisible_sOiototal = rawVisible_sOiototal;
    const setIsVisible_sOiototal = setRawVisible_sOiototal;
    const isVisible_sOioincome = rawVisible_sOioincome;
    const setIsVisible_sOioincome = setRawVisible_sOioincome;
    const isVisible_sOiojumin = rawVisible_sOiojumin;
    const setIsVisible_sOiojumin = setRawVisible_sOiojumin;
    const isVisible_sincomerate = rawVisible_sincomerate;
    const setIsVisible_sincomerate = setRawVisible_sincomerate;
    const isVisible_edOijibu = rawVisible_edOijibu;
    const setIsVisible_edOijibu = setRawVisible_edOijibu;
    const isVisible_medRevertmonth = rawVisible_medRevertmonth;
    const setIsVisible_medRevertmonth = setRawVisible_medRevertmonth;
    const isVisible_edOpnm = rawVisible_edOpnm;
    const setIsVisible_edOpnm = setRawVisible_edOpnm;
    const isVisible_edOpaddress = rawVisible_edOpaddress;
    const setIsVisible_edOpaddress = setRawVisible_edOpaddress;
    const isVisible_lbYear = rawVisible_lbYear;
    const setIsVisible_lbYear = setRawVisible_lbYear;
    const isVisible_edOiyear = rawVisible_edOiyear;
    const setIsVisible_edOiyear = setRawVisible_edOiyear;
    const isVisible_sYear = rawVisible_sYear;
    const setIsVisible_sYear = setRawVisible_sYear;
    const isVisible_medPaymentdate = rawVisible_medPaymentdate;
    const setIsVisible_medPaymentdate = setRawVisible_medPaymentdate;
    const isVisible_btnToExcel = rawVisible_btnToExcel;
    const setIsVisible_btnToExcel = setRawVisible_btnToExcel;
    const isVisible_sOineedpct = rawVisible_sOineedpct;
    const setIsVisible_sOineedpct = setRawVisible_sOineedpct;
    const isVisible_sOiincomepct = rawVisible_sOiincomepct;
    const setIsVisible_sOiincomepct = setRawVisible_sOiincomepct;
    const isVisible_btnJuminchk = rawVisible_btnJuminchk;
    const setIsVisible_btnJuminchk = setRawVisible_btnJuminchk;
    const isVisible_lbResidentNoError = rawVisible_lbResidentNoError;
    const setIsVisible_lbResidentNoError = setRawVisible_lbResidentNoError;
    const isVisible_rdtab3Bizgubun = rawVisible_rdtab3Bizgubun;
    const setIsVisible_rdtab3Bizgubun = setRawVisible_rdtab3Bizgubun;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_rdtab3Prtgubun = rawVisible_rdtab3Prtgubun;
    const setIsVisible_rdtab3Prtgubun = setRawVisible_rdtab3Prtgubun;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static3 = rawVisible_Static3;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_rdtab3Prtstandard = rawVisible_rdtab3Prtstandard;
    const setIsVisible_rdtab3Prtstandard = setRawVisible_rdtab3Prtstandard;
    const isVisible_sRange = rawVisible_sRange;
    const setIsVisible_sRange = setRawVisible_sRange;
    const isVisible_lbs = rawVisible_lbs;
    const setIsVisible_lbs = setRawVisible_lbs;
    const isVisible_sOiyear = rawVisible_sOiyear;
    const setIsVisible_sOiyear = setRawVisible_sOiyear;
    const isVisible_lbOiyear = rawVisible_lbOiyear;
    const setIsVisible_lbOiyear = setRawVisible_lbOiyear;
    const isVisible_medYear = rawVisible_medYear;
    const setIsVisible_medYear = setRawVisible_medYear;
    const isVisible_lbRange = rawVisible_lbRange;
    const setIsVisible_lbRange = setRawVisible_lbRange;
    const isVisible_edsRange1 = rawVisible_edsRange1;
    const setIsVisible_edsRange1 = setRawVisible_edsRange1;
    const isVisible_edsRange2 = rawVisible_edsRange2;
    const setIsVisible_edsRange2 = setRawVisible_edsRange2;
    const isVisible_medsRange1 = rawVisible_medsRange1;
    const setIsVisible_medsRange1 = setRawVisible_medsRange1;
    const isVisible_medsRange2 = rawVisible_medsRange2;
    const setIsVisible_medsRange2 = setRawVisible_medsRange2;
    const isVisible_Static4 = rawVisible_Static4;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static5 = rawVisible_Static5;
    const setIsVisible_Static5 = setRawVisible_Static5;
    const isVisible_rdtab3Jibu = rawVisible_rdtab3Jibu;
    const setIsVisible_rdtab3Jibu = setRawVisible_rdtab3Jibu;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_cbxFrjibu = rawVisible_cbxFrjibu;
    const setIsVisible_cbxFrjibu = setRawVisible_cbxFrjibu;
    const isVisible_btnpaymentprint = rawVisible_btnpaymentprint;
    const setIsVisible_btnpaymentprint = setRawVisible_btnpaymentprint;
    const isVisible_btnpaymentexcel = rawVisible_btnpaymentexcel;
    const setIsVisible_btnpaymentexcel = setRawVisible_btnpaymentexcel;
    const isVisible_gdOtherExcel1 = rawVisible_gdOtherExcel1;
    const setIsVisible_gdOtherExcel1 = setRawVisible_gdOtherExcel1;
    const isVisible_gdOtherExcel2 = rawVisible_gdOtherExcel2;
    const setIsVisible_gdOtherExcel2 = setRawVisible_gdOtherExcel2;
    const isVisible_medJubsuCnt = rawVisible_medJubsuCnt;
    const setIsVisible_medJubsuCnt = setRawVisible_medJubsuCnt;
    const isVisible_medfrdate = rawVisible_medfrdate;
    const setIsVisible_medfrdate = setRawVisible_medfrdate;
    const isVisible_medtodate = rawVisible_medtodate;
    const setIsVisible_medtodate = setRawVisible_medtodate;
    const isVisible_btnPersonSearch = rawVisible_btnPersonSearch;
    const setIsVisible_btnPersonSearch = setRawVisible_btnPersonSearch;
    const isVisible_btnErrorPerson = rawVisible_btnErrorPerson;
    const setIsVisible_btnErrorPerson = setRawVisible_btnErrorPerson;
    const isVisible_gdOtherbiz = rawVisible_gdOtherbiz;
    const setIsVisible_gdOtherbiz = setRawVisible_gdOtherbiz;
    const isVisible_edOtherbizPerson = rawVisible_edOtherbizPerson;
    const setIsVisible_edOtherbizPerson = setRawVisible_edOtherbizPerson;
    const isVisible_btnOtherbizTrans = rawVisible_btnOtherbizTrans;
    const setIsVisible_btnOtherbizTrans = setRawVisible_btnOtherbizTrans;
    const isVisible_btnOtherbizTotal = rawVisible_btnOtherbizTotal;
    const setIsVisible_btnOtherbizTotal = setRawVisible_btnOtherbizTotal;
    const isVisible_gdOtherbizExcel = rawVisible_gdOtherbizExcel;
    const setIsVisible_gdOtherbizExcel = setRawVisible_gdOtherbizExcel;
    const isVisible_edObopmgno = rawVisible_edObopmgno;
    const setIsVisible_edObopmgno = setRawVisible_edObopmgno;
    const isVisible_edObkey = rawVisible_edObkey;
    const setIsVisible_edObkey = setRawVisible_edObkey;
    const isVisible_edObdate = rawVisible_edObdate;
    const setIsVisible_edObdate = setRawVisible_edObdate;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
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
    const lfn_End = () => {
        console.log('lfn_End clicked');
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
        isVisible_btnEnd,
        setIsVisible_btnEnd,
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
        lfn_End,
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