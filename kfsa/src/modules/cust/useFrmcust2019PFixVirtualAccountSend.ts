// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioVirtualInfo, Ids_ioPosInput, Ids_ioPosOutputJVM, Ids_oNewBankAccount, Ids_iAccountNotice } from './Frmcust2019PFixVirtualAccountSendData';

export const useFrmcust2019PFixVirtualAccountSend = () => {
    const [ds_ioVirtualInfo, setds_ioVirtualInfo] = useState<Ids_ioVirtualInfo[]>([]);
    const [ds_ioPosInput, setds_ioPosInput] = useState<Ids_ioPosInput[]>([]);
    const [ds_ioPosOutputJVM, setds_ioPosOutputJVM] = useState<Ids_ioPosOutputJVM[]>([]);
    const [ds_oNewBankAccount, setds_oNewBankAccount] = useState<Ids_oNewBankAccount[]>([]);
    const [ds_iAccountNotice, setds_iAccountNotice] = useState<Ids_iAccountNotice[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_Shape1, setIsVisible_Shape1] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_shpGubunBox4, setIsVisible_shpGubunBox4] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_lbBankNm, setIsVisible_lbBankNm] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);
    const [isVisible_lbRepay, setIsVisible_lbRepay] = useState(true);
    const [isVisible_Shape0, setIsVisible_Shape0] = useState(true);
    const [isVisible_radBank, setIsVisible_radBank] = useState(true);
    const [isVisible_edAccount1, setIsVisible_edAccount1] = useState(true);
    const [isVisible_edAccount2, setIsVisible_edAccount2] = useState(true);
    const [isVisible_lbNotice, setIsVisible_lbNotice] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_edAccount3, setIsVisible_edAccount3] = useState(true);
    const [isVisible_Static1, setIsVisible_Static1] = useState(true);
    const [isVisible_calExpireDate, setIsVisible_calExpireDate] = useState(true);
    const [isVisible_tmExpireTime, setIsVisible_tmExpireTime] = useState(true);
    const [isVisible_edAccount4, setIsVisible_edAccount4] = useState(true);
    const [isVisible_Static0, setIsVisible_Static0] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_calExpireDate2, setIsVisible_calExpireDate2] = useState(true);
    const [isVisible_tmExpireTime2, setIsVisible_tmExpireTime2] = useState(true);
    const [isVisible_Static3, setIsVisible_Static3] = useState(true);
    const [isVisible_Static4, setIsVisible_Static4] = useState(true);
    const [isVisible_Static5, setIsVisible_Static5] = useState(true);
    const [isVisible_btnExpireDateChg, setIsVisible_btnExpireDateChg] = useState(true);
    const [isVisible_btnSMSSend, setIsVisible_btnSMSSend] = useState(true);
    const [isVisible_edHp, setIsVisible_edHp] = useState(true);
    const [isVisible_lbHp, setIsVisible_lbHp] = useState(true);
    const [isVisible_lbMSG, setIsVisible_lbMSG] = useState(true);

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
        isVisible_Shape1,
        setIsVisible_Shape1,
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
        isVisible_radBank,
        setIsVisible_radBank,
        isVisible_edAccount1,
        setIsVisible_edAccount1,
        isVisible_edAccount2,
        setIsVisible_edAccount2,
        isVisible_lbNotice,
        setIsVisible_lbNotice,
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
        isVisible_edAccount4,
        setIsVisible_edAccount4,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_calExpireDate2,
        setIsVisible_calExpireDate2,
        isVisible_tmExpireTime2,
        setIsVisible_tmExpireTime2,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static5,
        setIsVisible_Static5,
        isVisible_btnExpireDateChg,
        setIsVisible_btnExpireDateChg,
        isVisible_btnSMSSend,
        setIsVisible_btnSMSSend,
        isVisible_edHp,
        setIsVisible_edHp,
        isVisible_lbHp,
        setIsVisible_lbHp,
        isVisible_lbMSG,
        setIsVisible_lbMSG,
        btnExpireDateChg_OnClick,
        btnSMSSend_OnClick,
        lfn_End,
        lfn_Print,
    };
};