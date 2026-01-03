// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioGubun, Ids_ioGubun_0, Ids_oFireCd, Ids_oFireCenterCd, Ids_oJibu, Ids_oList } from './Frmcust5015Data';

export const useFrmcust5015 = () => {
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioGubun_0, setds_ioGubun_0] = useState<Ids_ioGubun_0[]>([]);
    const [ds_oFireCd, setds_oFireCd] = useState<Ids_oFireCd[]>([]);
    const [ds_oFireCenterCd, setds_oFireCenterCd] = useState<Ids_oFireCenterCd[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oList, setds_oList] = useState<Ids_oList[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_gdBuidingList, setRawVisible_gdBuidingList] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_btnSearch, setRawVisible_btnSearch] = useState(true);
    const [rawVisible_btnSelect, setRawVisible_btnSelect] = useState(true);
    const [rawVisible_Static4, setRawVisible_Static4] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static9, setRawVisible_Static9] = useState(true);
    const [rawVisible_radAgent, setRawVisible_radAgent] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_edKeyWord, setRawVisible_edKeyWord] = useState(true);
    const [rawVisible_Static3, setRawVisible_Static3] = useState(true);
    const [rawVisible_edCount, setRawVisible_edCount] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_radBuilding, setRawVisible_radBuilding] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_cbxStation, setRawVisible_cbxStation] = useState(true);
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_gdBuidingList = rawVisible_gdBuidingList;
    const setIsVisible_gdBuidingList = setRawVisible_gdBuidingList;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_btnSearch = rawVisible_btnSearch && rawVisible_shpBtnBox;
    const setIsVisible_btnSearch = setRawVisible_btnSearch;
    const isVisible_btnSelect = rawVisible_btnSelect && rawVisible_shpBtnBox;
    const setIsVisible_btnSelect = setRawVisible_btnSelect;
    const isVisible_Static4 = rawVisible_Static4 && rawVisible_Shape1;
    const setIsVisible_Static4 = setRawVisible_Static4;
    const isVisible_Static0 = rawVisible_Static0 && rawVisible_Shape1;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static9 = rawVisible_Static9 && rawVisible_Shape1;
    const setIsVisible_Static9 = setRawVisible_Static9;
    const isVisible_radAgent = rawVisible_radAgent && rawVisible_Shape1;
    const setIsVisible_radAgent = setRawVisible_radAgent;
    const isVisible_Static13 = rawVisible_Static13 && rawVisible_Shape1;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_edKeyWord = rawVisible_edKeyWord && rawVisible_Shape1;
    const setIsVisible_edKeyWord = setRawVisible_edKeyWord;
    const isVisible_Static3 = rawVisible_Static3 && rawVisible_Shape1;
    const setIsVisible_Static3 = setRawVisible_Static3;
    const isVisible_edCount = rawVisible_edCount && rawVisible_Shape1;
    const setIsVisible_edCount = setRawVisible_edCount;
    const isVisible_Static1 = rawVisible_Static1 && rawVisible_Shape1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_radBuilding = rawVisible_radBuilding && rawVisible_Shape1;
    const setIsVisible_radBuilding = setRawVisible_radBuilding;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_Shape1;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_cbxStation = rawVisible_cbxStation && rawVisible_Shape1;
    const setIsVisible_cbxStation = setRawVisible_cbxStation;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioGubun([]);
            setds_ioGubun_0([]);
            setds_oFireCd([]);
            setds_oFireCenterCd([]);
            setds_oJibu([]);
            setds_oList([]);
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
        ds_ioGubun,
        ds_ioGubun_0,
        ds_oFireCd,
        ds_oFireCenterCd,
        ds_oJibu,
        ds_oList,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_gdBuidingList,
        setIsVisible_gdBuidingList,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_Static4,
        setIsVisible_Static4,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static9,
        setIsVisible_Static9,
        isVisible_radAgent,
        setIsVisible_radAgent,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_edKeyWord,
        setIsVisible_edKeyWord,
        isVisible_Static3,
        setIsVisible_Static3,
        isVisible_edCount,
        setIsVisible_edCount,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_radBuilding,
        setIsVisible_radBuilding,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_cbxStation,
        setIsVisible_cbxStation,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};