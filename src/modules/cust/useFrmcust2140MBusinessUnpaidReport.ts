// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioChoiceYn, Ids_ioCourse, Ids_ioOrder, Ids_ioCourseYn, Ids_oRegion, Ids_oJibu, Ids_UnpaidCompnm, Ids_SearchJogeon, Ids_Year } from './Frmcust2140MBusinessUnpaidReportData';

export const useFrmcust2140MBusinessUnpaidReport = () => {
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioCourseYn, setds_ioCourseYn] = useState<Ids_ioCourseYn[]>([]);
    const [ds_oRegion, setds_oRegion] = useState<Ids_oRegion[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_UnpaidCompnm, setds_UnpaidCompnm] = useState<Ids_UnpaidCompnm[]>([]);
    const [ds_SearchJogeon, setds_SearchJogeon] = useState<Ids_SearchJogeon[]>([]);
    const [ds_Year, setds_Year] = useState<Ids_Year[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioChoiceYn([]);
            setds_ioCourse([]);
            setds_ioOrder([]);
            setds_ioCourseYn([]);
            setds_oRegion([]);
            setds_oJibu([]);
            setds_UnpaidCompnm([]);
            setds_SearchJogeon([]);
            setds_Year([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const btnToExcel_OnClick = () => {
        console.log('btnToExcel_OnClick clicked');
    };
    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_ioChoiceYn,
        ds_ioCourse,
        ds_ioOrder,
        ds_ioCourseYn,
        ds_oRegion,
        ds_oJibu,
        ds_UnpaidCompnm,
        ds_SearchJogeon,
        ds_Year,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};