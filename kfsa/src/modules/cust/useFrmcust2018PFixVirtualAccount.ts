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
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_lbBankNm, setIsVisible_lbBankNm] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_lbRepay, setIsVisible_lbRepay] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_lbHp, setIsVisible_lbHp] = useState(true);
    const [isVisible_edHp, setIsVisible_edHp] = useState(true);
    const [isVisible_lbMSG, setIsVisible_lbMSG] = useState(true);
    const [isVisible_btnSMSSend, setIsVisible_btnSMSSend] = useState(true);
    const [isVisible_radBank, setIsVisible_radBank] = useState(true);
    const [isVisible_edAccount1, setIsVisible_edAccount1] = useState(true);
    const [isVisible_edAccount2, setIsVisible_edAccount2] = useState(true);
    const [isVisible_lbNotice, setIsVisible_lbNotice] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_edAccount3, setIsVisible_edAccount3] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_calExpireDate, setIsVisible_calExpireDate] = useState(true);
    const [isVisible_tmExpireTime, setIsVisible_tmExpireTime] = useState(true);
    const [isVisible_btnExpireDateChg, setIsVisible_btnExpireDateChg] = useState(true);
    const [isVisible_edAccount4, setIsVisible_edAccount4] = useState(true);

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