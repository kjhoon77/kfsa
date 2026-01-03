// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioBizformcode, Ids_iBizgubun } from './FrmCOM9050MPersonFormUploadData';

export const useFrmCOM9050MPersonFormUpload = () => {
    const [ds_ioBizformcode, setds_ioBizformcode] = useState<Ids_ioBizformcode[]>([]);
    const [ds_iBizgubun, setds_iBizgubun] = useState<Ids_iBizgubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioBizformcode([]);
            setds_iBizgubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnDataHistory_OnClick = () => {
        console.log('btnDataHistory_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_ioBizformcode,
        ds_iBizgubun,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnDataHistory_OnClick,
        lfn_End,
        lfn_Search,
    };
};