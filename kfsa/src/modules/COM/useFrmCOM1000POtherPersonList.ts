// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOtherPerson } from './FrmCOM1000POtherPersonListData';

export const useFrmCOM1000POtherPersonList = () => {
    const [ds_oOtherPerson, setds_oOtherPerson] = useState<Ids_oOtherPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_btnSelect, setIsVisible_btnSelect] = useState(true);
    const [isVisible_gdOtherPerson, setIsVisible_gdOtherPerson] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edKeyword, setIsVisible_edKeyword] = useState(true);
    const [isVisible_lbStartYear, setIsVisible_lbStartYear] = useState(true);
    const [isVisible_edYear, setIsVisible_edYear] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oOtherPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnSelect_OnClick = () => {
        console.log('btnSelect_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oOtherPerson,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_gdOtherPerson,
        setIsVisible_gdOtherPerson,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edKeyword,
        setIsVisible_edKeyword,
        isVisible_lbStartYear,
        setIsVisible_lbStartYear,
        isVisible_edYear,
        setIsVisible_edYear,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};