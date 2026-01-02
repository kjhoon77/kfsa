// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioEGiro, Ids_ioError, Ids_ioChange, Ids_oCustomerFee, Ids_iEGiroFee, Ids_iCustomerFee, Ids_ioPosPrintM, Ids_ioPosPayment, Ids_oPosJibu, Ids_oPmMgno, Ids_oCno, Ids_ioCustomerStatus, Ids_ioMemberH, Ids_oCustomerEduFee, Ids_oCustomerFeeBackup, Ids_ioEGiroBackup, Ids_ioEGropuGiro, Ids_ioEGiroGroupDetail, Ids_ioaa, Ids_ioCustomerInfoTmp, Ids_ioVirtualAccoutAllocation, Ids_iEduJubsuStatus } from './Frmcust2150MEGiroInputData';

export const useFrmcust2150MEGiroInput = () => {
    const [ds_ioEGiro, setds_ioEGiro] = useState<Ids_ioEGiro[]>([]);
    const [ds_ioError, setds_ioError] = useState<Ids_ioError[]>([]);
    const [ds_ioChange, setds_ioChange] = useState<Ids_ioChange[]>([]);
    const [ds_oCustomerFee, setds_oCustomerFee] = useState<Ids_oCustomerFee[]>([]);
    const [ds_iEGiroFee, setds_iEGiroFee] = useState<Ids_iEGiroFee[]>([]);
    const [ds_iCustomerFee, setds_iCustomerFee] = useState<Ids_iCustomerFee[]>([]);
    const [ds_ioPosPrintM, setds_ioPosPrintM] = useState<Ids_ioPosPrintM[]>([]);
    const [ds_ioPosPayment, setds_ioPosPayment] = useState<Ids_ioPosPayment[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [ds_oPmMgno, setds_oPmMgno] = useState<Ids_oPmMgno[]>([]);
    const [ds_oCno, setds_oCno] = useState<Ids_oCno[]>([]);
    const [ds_ioCustomerStatus, setds_ioCustomerStatus] = useState<Ids_ioCustomerStatus[]>([]);
    const [ds_ioMemberH, setds_ioMemberH] = useState<Ids_ioMemberH[]>([]);
    const [ds_oCustomerEduFee, setds_oCustomerEduFee] = useState<Ids_oCustomerEduFee[]>([]);
    const [ds_oCustomerFeeBackup, setds_oCustomerFeeBackup] = useState<Ids_oCustomerFeeBackup[]>([]);
    const [ds_ioEGiroBackup, setds_ioEGiroBackup] = useState<Ids_ioEGiroBackup[]>([]);
    const [ds_ioEGropuGiro, setds_ioEGropuGiro] = useState<Ids_ioEGropuGiro[]>([]);
    const [ds_ioEGiroGroupDetail, setds_ioEGiroGroupDetail] = useState<Ids_ioEGiroGroupDetail[]>([]);
    const [ds_ioaa, setds_ioaa] = useState<Ids_ioaa[]>([]);
    const [ds_ioCustomerInfoTmp, setds_ioCustomerInfoTmp] = useState<Ids_ioCustomerInfoTmp[]>([]);
    const [ds_ioVirtualAccoutAllocation, setds_ioVirtualAccoutAllocation] = useState<Ids_ioVirtualAccoutAllocation[]>([]);
    const [ds_iEduJubsuStatus, setds_iEduJubsuStatus] = useState<Ids_iEduJubsuStatus[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioEGiro([]);
            setds_ioError([]);
            setds_ioChange([]);
            setds_oCustomerFee([]);
            setds_iEGiroFee([]);
            setds_iCustomerFee([]);
            setds_ioPosPrintM([]);
            setds_ioPosPayment([]);
            setds_oPosJibu([]);
            setds_oPmMgno([]);
            setds_oCno([]);
            setds_ioCustomerStatus([]);
            setds_ioMemberH([]);
            setds_oCustomerEduFee([]);
            setds_oCustomerFeeBackup([]);
            setds_ioEGiroBackup([]);
            setds_ioEGropuGiro([]);
            setds_ioEGiroGroupDetail([]);
            setds_ioaa([]);
            setds_ioCustomerInfoTmp([]);
            setds_ioVirtualAccoutAllocation([]);
            setds_iEduJubsuStatus([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnFeeReport_OnClick = () => {
        console.log('btnFeeReport_OnClick clicked');
    };
    const btnGiroSite_OnClick = () => {
        console.log('btnGiroSite_OnClick clicked');
    };
    const btnOpenFile_OnClick = () => {
        console.log('btnOpenFile_OnClick clicked');
    };
    const chkPonyDate_OnClick = () => {
        console.log('chkPonyDate_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_ioEGiro,
        ds_ioError,
        ds_ioChange,
        ds_oCustomerFee,
        ds_iEGiroFee,
        ds_iCustomerFee,
        ds_ioPosPrintM,
        ds_ioPosPayment,
        ds_oPosJibu,
        ds_oPmMgno,
        ds_oCno,
        ds_ioCustomerStatus,
        ds_ioMemberH,
        ds_oCustomerEduFee,
        ds_oCustomerFeeBackup,
        ds_ioEGiroBackup,
        ds_ioEGropuGiro,
        ds_ioEGiroGroupDetail,
        ds_ioaa,
        ds_ioCustomerInfoTmp,
        ds_ioVirtualAccoutAllocation,
        ds_iEduJubsuStatus,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnFeeReport_OnClick,
        btnGiroSite_OnClick,
        btnOpenFile_OnClick,
        chkPonyDate_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_PrintScreen,
        lfn_Save,
    };
};