// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioMemberGubun, Ids_ioOrder, Ids_ioMemberGubun_0, Ids_ioChoiceYn, Ids_ioGubun, Ids_ioCourseYn, Ids_ioCourse } from './Frmcust1110MTaEduSearchData';

export const useFrmcust1110MTaEduSearch = () => {
    const [ds_ioMemberGubun, setds_ioMemberGubun] = useState<Ids_ioMemberGubun[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioMemberGubun_0, setds_ioMemberGubun_0] = useState<Ids_ioMemberGubun_0[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioGubun, setds_ioGubun] = useState<Ids_ioGubun[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioMemberGubun([]);
            setds_ioOrder([]);
            setds_ioMemberGubun_0([]);
            setds_ioChoiceYn([]);
            setds_ioGubun([]);
            setds_ioCourseYn([]);
            setds_ioCourse([]);
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
        ds_ioCourseYn,
        ds_ioCourse,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnListPrint2_OnClick,
        btnListPrint_OnClick,
        lfn_End,
    };
};