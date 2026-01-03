// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oBank, Ids_iLicenseReissueH, Ids_iPosPayAccount } from './Frmspcledu0361PRepayData';

export const useFrmspcledu0361PRepay = () => {
    const [ds_oBank, setds_oBank] = useState<Ids_oBank[]>([]);
    const [ds_iLicenseReissueH, setds_iLicenseReissueH] = useState<Ids_iLicenseReissueH[]>([]);
    const [ds_iPosPayAccount, setds_iPosPayAccount] = useState<Ids_iPosPayAccount[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_edReason, setIsVisible_edReason] = useState(true);
    const [isVisible_cbxBank, setIsVisible_cbxBank] = useState(true);
    const [isVisible_lbReason, setIsVisible_lbReason] = useState(true);
    const [isVisible_lbBank, setIsVisible_lbBank] = useState(true);
    const [isVisible_lbRepay, setIsVisible_lbRepay] = useState(true);
    const [isVisible_lbOwner, setIsVisible_lbOwner] = useState(true);
    const [isVisible_edOwner, setIsVisible_edOwner] = useState(true);
    const [isVisible_lbAccount, setIsVisible_lbAccount] = useState(true);
    const [isVisible_edAccount, setIsVisible_edAccount] = useState(true);
    const [isVisible_Static2, setIsVisible_Static2] = useState(true);
    const [isVisible_btnSave, setIsVisible_btnSave] = useState(true);
    const [isVisible_imgImage, setIsVisible_imgImage] = useState(true);
    const [isVisible_lbWorkFormTitle, setIsVisible_lbWorkFormTitle] = useState(true);
    const [isVisible_lbAmount, setIsVisible_lbAmount] = useState(true);
    const [isVisible_medAmount, setIsVisible_medAmount] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBank([]);
            setds_iLicenseReissueH([]);
            setds_iPosPayAccount([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Save = () => {
        console.log('lfn_Save clicked');
    };

    return {
        isLoading,
        ds_oBank,
        ds_iLicenseReissueH,
        ds_iPosPayAccount,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_edReason,
        setIsVisible_edReason,
        isVisible_cbxBank,
        setIsVisible_cbxBank,
        isVisible_lbReason,
        setIsVisible_lbReason,
        isVisible_lbBank,
        setIsVisible_lbBank,
        isVisible_lbRepay,
        setIsVisible_lbRepay,
        isVisible_lbOwner,
        setIsVisible_lbOwner,
        isVisible_edOwner,
        setIsVisible_edOwner,
        isVisible_lbAccount,
        setIsVisible_lbAccount,
        isVisible_edAccount,
        setIsVisible_edAccount,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_btnSave,
        setIsVisible_btnSave,
        isVisible_imgImage,
        setIsVisible_imgImage,
        isVisible_lbWorkFormTitle,
        setIsVisible_lbWorkFormTitle,
        isVisible_lbAmount,
        setIsVisible_lbAmount,
        isVisible_medAmount,
        setIsVisible_medAmount,
        lfn_End,
        lfn_Save,
    };
};