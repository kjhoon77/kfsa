// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioVirtualInfo, Ids_ioPosInput, Ids_ioPosOutputJVM, Ids_oNewBankAccount, Ids_iAccountNotice } from './Frmcust2018PFixVirtualAccountData';

export const useFrmcust2018PFixVirtualAccount = () => {
    const [ds_ioVirtualInfo, setds_ioVirtualInfo] = useState<Ids_ioVirtualInfo[]>([]);
    const [ds_ioPosInput, setds_ioPosInput] = useState<Ids_ioPosInput[]>([]);
    const [ds_ioPosOutputJVM, setds_ioPosOutputJVM] = useState<Ids_ioPosOutputJVM[]>([]);
    const [ds_oNewBankAccount, setds_oNewBankAccount] = useState<Ids_oNewBankAccount[]>([]);
    const [ds_iAccountNotice, setds_iAccountNotice] = useState<Ids_iAccountNotice[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_shpGubunBox4, setRawVisible_shpGubunBox4] = useState(true);
    const [rawVisible_lbAmount, setRawVisible_lbAmount] = useState(true);
    const [rawVisible_lbBankNm, setRawVisible_lbBankNm] = useState(true);
    const [rawVisible_medAmount, setRawVisible_medAmount] = useState(true);
    const [rawVisible_lbRepay, setRawVisible_lbRepay] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_lbHp, setRawVisible_lbHp] = useState(true);
    const [rawVisible_edHp, setRawVisible_edHp] = useState(true);
    const [rawVisible_lbMSG, setRawVisible_lbMSG] = useState(true);
    const [rawVisible_btnSMSSend, setRawVisible_btnSMSSend] = useState(true);
    const [rawVisible_radBank, setRawVisible_radBank] = useState(true);
    const [rawVisible_edAccount1, setRawVisible_edAccount1] = useState(true);
    const [rawVisible_edAccount2, setRawVisible_edAccount2] = useState(true);
    const [rawVisible_lbNotice, setRawVisible_lbNotice] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_edAccount3, setRawVisible_edAccount3] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_calExpireDate, setRawVisible_calExpireDate] = useState(true);
    const [rawVisible_tmExpireTime, setRawVisible_tmExpireTime] = useState(true);
    const [rawVisible_btnExpireDateChg, setRawVisible_btnExpireDateChg] = useState(true);
    const [rawVisible_edAccount4, setRawVisible_edAccount4] = useState(true);
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_shpGubunBox4 = rawVisible_shpGubunBox4;
    const setIsVisible_shpGubunBox4 = setRawVisible_shpGubunBox4;
    const isVisible_lbAmount = rawVisible_lbAmount && rawVisible_shpGubunBox4;
    const setIsVisible_lbAmount = setRawVisible_lbAmount;
    const isVisible_lbBankNm = rawVisible_lbBankNm && rawVisible_shpGubunBox4;
    const setIsVisible_lbBankNm = setRawVisible_lbBankNm;
    const isVisible_medAmount = rawVisible_medAmount && rawVisible_shpGubunBox4;
    const setIsVisible_medAmount = setRawVisible_medAmount;
    const isVisible_lbRepay = rawVisible_lbRepay;
    const setIsVisible_lbRepay = setRawVisible_lbRepay;
    const isVisible_Shape0 = rawVisible_Shape0 && rawVisible_shpGubunBox4;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_lbHp = rawVisible_lbHp && rawVisible_Shape0;
    const setIsVisible_lbHp = setRawVisible_lbHp;
    const isVisible_edHp = rawVisible_edHp && rawVisible_Shape0;
    const setIsVisible_edHp = setRawVisible_edHp;
    const isVisible_lbMSG = rawVisible_lbMSG && rawVisible_Shape0;
    const setIsVisible_lbMSG = setRawVisible_lbMSG;
    const isVisible_btnSMSSend = rawVisible_btnSMSSend && rawVisible_Shape0;
    const setIsVisible_btnSMSSend = setRawVisible_btnSMSSend;
    const isVisible_radBank = rawVisible_radBank && rawVisible_shpGubunBox4;
    const setIsVisible_radBank = setRawVisible_radBank;
    const isVisible_edAccount1 = rawVisible_edAccount1 && rawVisible_shpGubunBox4;
    const setIsVisible_edAccount1 = setRawVisible_edAccount1;
    const isVisible_edAccount2 = rawVisible_edAccount2 && rawVisible_shpGubunBox4;
    const setIsVisible_edAccount2 = setRawVisible_edAccount2;
    const isVisible_lbNotice = rawVisible_lbNotice && rawVisible_shpGubunBox4;
    const setIsVisible_lbNotice = setRawVisible_lbNotice;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_shpGubunBox4;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_edAccount3 = rawVisible_edAccount3 && rawVisible_shpGubunBox4;
    const setIsVisible_edAccount3 = setRawVisible_edAccount3;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_shpGubunBox4;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_calExpireDate = rawVisible_calExpireDate && rawVisible_shpGubunBox4;
    const setIsVisible_calExpireDate = setRawVisible_calExpireDate;
    const isVisible_tmExpireTime = rawVisible_tmExpireTime && rawVisible_shpGubunBox4;
    const setIsVisible_tmExpireTime = setRawVisible_tmExpireTime;
    const isVisible_btnExpireDateChg = rawVisible_btnExpireDateChg && rawVisible_shpGubunBox4;
    const setIsVisible_btnExpireDateChg = setRawVisible_btnExpireDateChg;
    const isVisible_edAccount4 = rawVisible_edAccount4 && rawVisible_shpGubunBox4;
    const setIsVisible_edAccount4 = setRawVisible_edAccount4;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioVirtualInfo([]);
            setds_ioPosInput([]);
            setds_ioPosOutputJVM([]);
            setds_oNewBankAccount([]);
            setds_iAccountNotice([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnExpireDateChg_OnClick = () => {
        console.log('btnExpireDateChg_OnClick clicked');
    };
    const btnSMSSend_OnClick = () => {
        console.log('btnSMSSend_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioVirtualInfo,
        ds_ioPosInput,
        ds_ioPosOutputJVM,
        ds_oNewBankAccount,
        ds_iAccountNotice,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_shpGubunBox4,
        setIsVisible_shpGubunBox4,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_lbBankNm,
        setIsVisible_lbBankNm,
        isVisible_medAmount,
        setIsVisible_medAmount,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_lbHp,
        setIsVisible_lbHp,
        isVisible_edHp,
        setIsVisible_edHp,
        isVisible_lbMSG,
        setIsVisible_lbMSG,
        isVisible_btnSMSSend,
        setIsVisible_btnSMSSend,
        isVisible_radBank,
        setIsVisible_radBank,
        isVisible_edAccount1,
        setIsVisible_edAccount1,
        isVisible_edAccount2,
        setIsVisible_edAccount2,
        isVisible_lbNotice,
        setIsVisible_lbNotice,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_edAccount3,
        setIsVisible_edAccount3,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_calExpireDate,
        setIsVisible_calExpireDate,
        isVisible_tmExpireTime,
        setIsVisible_tmExpireTime,
        isVisible_btnExpireDateChg,
        setIsVisible_btnExpireDateChg,
        isVisible_edAccount4,
        setIsVisible_edAccount4,
        btnExpireDateChg_OnClick,
        btnSMSSend_OnClick,
        lfn_End,
        lfn_Print,
    };
};