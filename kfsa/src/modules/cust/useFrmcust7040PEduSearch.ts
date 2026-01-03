// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberGubun, Ids_ioOrder, Ids_ioMemberGubun_0, Ids_ioChoiceYn, Ids_ioGubun } from './Frmcust7040PEduSearchData';

export const useFrmcust7040PEduSearch = () => {
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioMemberGubun_0, setds_ioMemberGubun_0] = useState<Ids_ioMemberGubun_0[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rawVisible_Shape2, setRawVisible_Shape2] = useState(true);
    const [rawVisible_Radio1, setRawVisible_Radio1] = useState(true);
    const [rawVisible_Shape1, setRawVisible_Shape1] = useState(true);
    const [rawVisible_Shape0, setRawVisible_Shape0] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_divWorkFormTitle, setRawVisible_divWorkFormTitle] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_Static0, setRawVisible_Static0] = useState(true);
    const [rawVisible_Static1, setRawVisible_Static1] = useState(true);
    const [rawVisible_Radio2, setRawVisible_Radio2] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_Static12, setRawVisible_Static12] = useState(true);
    const [rawVisible_calStartDate, setRawVisible_calStartDate] = useState(true);
    const [rawVisible_calEndDate, setRawVisible_calEndDate] = useState(true);
    const [rawVisible_Static13, setRawVisible_Static13] = useState(true);
    const [rawVisible_Radio5, setRawVisible_Radio5] = useState(true);
    const [rawVisible_Edit0, setRawVisible_Edit0] = useState(true);
    const [rawVisible_Edit1, setRawVisible_Edit1] = useState(true);
    const [rawVisible_edJibuNm1, setRawVisible_edJibuNm1] = useState(true);
    const [rawVisible_Edit2, setRawVisible_Edit2] = useState(true);
    const [rawVisible_Shape3, setRawVisible_Shape3] = useState(true);
    const [rawVisible_Static2, setRawVisible_Static2] = useState(true);
    const [rawVisible_Radio3, setRawVisible_Radio3] = useState(true);
    const [rawVisible_Shape4, setRawVisible_Shape4] = useState(true);
    const [rawVisible_btnListPrint, setRawVisible_btnListPrint] = useState(true);
    const [rawVisible_btnListPrint2, setRawVisible_btnListPrint2] = useState(true);
    const [rawVisible_Radio4, setRawVisible_Radio4] = useState(true);
    const [rawVisible_edJibuNm2, setRawVisible_edJibuNm2] = useState(true);
    const isVisible_Shape2 = rawVisible_Shape2;
    const setIsVisible_Shape2 = setRawVisible_Shape2;
    const isVisible_Radio1 = rawVisible_Radio1 && rawVisible_Shape2;
    const setIsVisible_Radio1 = setRawVisible_Radio1;
    const isVisible_Shape1 = rawVisible_Shape1;
    const setIsVisible_Shape1 = setRawVisible_Shape1;
    const isVisible_Shape0 = rawVisible_Shape0;
    const setIsVisible_Shape0 = setRawVisible_Shape0;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_divWorkFormTitle = rawVisible_divWorkFormTitle;
    const setIsVisible_divWorkFormTitle = setRawVisible_divWorkFormTitle;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_Static0 = rawVisible_Static0;
    const setIsVisible_Static0 = setRawVisible_Static0;
    const isVisible_Static1 = rawVisible_Static1;
    const setIsVisible_Static1 = setRawVisible_Static1;
    const isVisible_Radio2 = rawVisible_Radio2 && rawVisible_Shape0;
    const setIsVisible_Radio2 = setRawVisible_Radio2;
    const isVisible_lbDate = rawVisible_lbDate;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_Static12 = rawVisible_Static12;
    const setIsVisible_Static12 = setRawVisible_Static12;
    const isVisible_calStartDate = rawVisible_calStartDate;
    const setIsVisible_calStartDate = setRawVisible_calStartDate;
    const isVisible_calEndDate = rawVisible_calEndDate;
    const setIsVisible_calEndDate = setRawVisible_calEndDate;
    const isVisible_Static13 = rawVisible_Static13;
    const setIsVisible_Static13 = setRawVisible_Static13;
    const isVisible_Radio5 = rawVisible_Radio5 && rawVisible_Shape1;
    const setIsVisible_Radio5 = setRawVisible_Radio5;
    const isVisible_Edit0 = rawVisible_Edit0 && rawVisible_Shape2;
    const setIsVisible_Edit0 = setRawVisible_Edit0;
    const isVisible_Edit1 = rawVisible_Edit1 && rawVisible_Shape2;
    const setIsVisible_Edit1 = setRawVisible_Edit1;
    const isVisible_edJibuNm1 = rawVisible_edJibuNm1 && rawVisible_Shape2;
    const setIsVisible_edJibuNm1 = setRawVisible_edJibuNm1;
    const isVisible_Edit2 = rawVisible_Edit2 && rawVisible_Shape2;
    const setIsVisible_Edit2 = setRawVisible_Edit2;
    const isVisible_Shape3 = rawVisible_Shape3;
    const setIsVisible_Shape3 = setRawVisible_Shape3;
    const isVisible_Static2 = rawVisible_Static2;
    const setIsVisible_Static2 = setRawVisible_Static2;
    const isVisible_Radio3 = rawVisible_Radio3 && rawVisible_Shape3;
    const setIsVisible_Radio3 = setRawVisible_Radio3;
    const isVisible_Shape4 = rawVisible_Shape4;
    const setIsVisible_Shape4 = setRawVisible_Shape4;
    const isVisible_btnListPrint = rawVisible_btnListPrint && rawVisible_Shape4;
    const setIsVisible_btnListPrint = setRawVisible_btnListPrint;
    const isVisible_btnListPrint2 = rawVisible_btnListPrint2 && rawVisible_Shape4;
    const setIsVisible_btnListPrint2 = setRawVisible_btnListPrint2;
    const isVisible_Radio4 = rawVisible_Radio4;
    const setIsVisible_Radio4 = setRawVisible_Radio4;
    const isVisible_edJibuNm2 = rawVisible_edJibuNm2 && rawVisible_Shape2;
    const setIsVisible_edJibuNm2 = setRawVisible_edJibuNm2;

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberGubun([]);
            setds_ioOrder([]);
            setds_ioMemberGubun_0([]);
            setds_ioChoiceYn([]);
            setds_ioGubun([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnListPrint2_OnClick = () => {
        console.log('btnListPrint2_OnClick clicked');
    };
    const btnListPrint_OnClick = () => {
        console.log('btnListPrint_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_ioMemberGubun,
        ds_ioOrder,
        ds_ioMemberGubun_0,
        ds_ioChoiceYn,
        ds_ioGubun,
        isVisible_Shape2,
        setIsVisible_Shape2,
        isVisible_Radio1,
        setIsVisible_Radio1,
        isVisible_Shape1,
        setIsVisible_Shape1,
        isVisible_Shape0,
        setIsVisible_Shape0,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_Static0,
        setIsVisible_Static0,
        isVisible_Static1,
        setIsVisible_Static1,
        isVisible_Radio2,
        setIsVisible_Radio2,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_Static12,
        setIsVisible_Static12,
        isVisible_calStartDate,
        setIsVisible_calStartDate,
        isVisible_calEndDate,
        setIsVisible_calEndDate,
        isVisible_Static13,
        setIsVisible_Static13,
        isVisible_Radio5,
        setIsVisible_Radio5,
        isVisible_Edit0,
        setIsVisible_Edit0,
        isVisible_Edit1,
        setIsVisible_Edit1,
        isVisible_edJibuNm1,
        setIsVisible_edJibuNm1,
        isVisible_Edit2,
        setIsVisible_Edit2,
        isVisible_Shape3,
        setIsVisible_Shape3,
        isVisible_Static2,
        setIsVisible_Static2,
        isVisible_Radio3,
        setIsVisible_Radio3,
        isVisible_Shape4,
        setIsVisible_Shape4,
        isVisible_btnListPrint,
        setIsVisible_btnListPrint,
        isVisible_btnListPrint2,
        setIsVisible_btnListPrint2,
        isVisible_Radio4,
        setIsVisible_Radio4,
        isVisible_edJibuNm2,
        setIsVisible_edJibuNm2,
        btnListPrint2_OnClick,
        btnListPrint_OnClick,
        lfn_End,
    };
};