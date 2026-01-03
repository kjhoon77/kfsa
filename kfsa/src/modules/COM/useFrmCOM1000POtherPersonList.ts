// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oOtherPerson } from './FrmCOM1000POtherPersonListData';

export const useFrmCOM1000POtherPersonList = () => {
    const [ds_oOtherPerson, setds_oOtherPerson] = useState<Ids_oOtherPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_btnSelect, setRawVisible_btnSelect] = useState(true);
    const [rawVisible_gdOtherPerson, setRawVisible_gdOtherPerson] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbPersonNm, setRawVisible_lbPersonNm] = useState(true);
    const [rawVisible_edKeyword, setRawVisible_edKeyword] = useState(true);
    const [rawVisible_lbStartYear, setRawVisible_lbStartYear] = useState(true);
    const [rawVisible_edYear, setRawVisible_edYear] = useState(true);
    const isVisible_btnSelect = rawVisible_btnSelect;
    const setIsVisible_btnSelect = setRawVisible_btnSelect;
    const isVisible_gdOtherPerson = rawVisible_gdOtherPerson;
    const setIsVisible_gdOtherPerson = setRawVisible_gdOtherPerson;
    const isVisible_btnSearch = rawVisible_btnSearch;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnEnd = rawVisible_btnEnd;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbPersonNm = rawVisible_lbPersonNm;
    const setIsVisible_lbPersonNm = setRawVisible_lbPersonNm;
    const isVisible_edKeyword = rawVisible_edKeyword;
    const setIsVisible_edKeyword = setRawVisible_edKeyword;
    const isVisible_lbStartYear = rawVisible_lbStartYear;
    const setIsVisible_lbStartYear = setRawVisible_lbStartYear;
    const isVisible_edYear = rawVisible_edYear;
    const setIsVisible_edYear = setRawVisible_edYear;

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