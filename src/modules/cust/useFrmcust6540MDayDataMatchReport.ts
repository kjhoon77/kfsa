// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_ioOrder, Ids_ioChoiceYn, Ids_ioStatus, Ids_ioReport, Ids_ioCourse, Ids_oFireStation, Ids_oDATA, Ids_ioFireStation, Ids_oJibu, Ids_ioMatch } from './Frmcust6540MDayDataMatchReportData';

export const useFrmcust6540MDayDataMatchReport = () => {
    const [ds_ioOrder, setds_ioOrder] = useState<Ids_ioOrder[]>([]);
    const [ds_ioChoiceYn, setds_ioChoiceYn] = useState<Ids_ioChoiceYn[]>([]);
    const [ds_ioStatus, setds_ioStatus] = useState<Ids_ioStatus[]>([]);
    const [ds_ioReport, setds_ioReport] = useState<Ids_ioReport[]>([]);
    const [ds_ioCourse, setds_ioCourse] = useState<Ids_ioCourse[]>([]);
    const [ds_oFireStation, setds_oFireStation] = useState<Ids_oFireStation[]>([]);
    const [ds_oDATA, setds_oDATA] = useState<Ids_oDATA[]>([]);
    const [ds_ioFireStation, setds_ioFireStation] = useState<Ids_ioFireStation[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_ioMatch, setds_ioMatch] = useState<Ids_ioMatch[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_ioOrder([]);
            setds_ioChoiceYn([]);
            setds_ioStatus([]);
            setds_ioReport([]);
            setds_ioCourse([]);
            setds_oFireStation([]);
            setds_oDATA([]);
            setds_ioFireStation([]);
            setds_oJibu([]);
            setds_ioMatch([]);
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
        ds_ioOrder,
        ds_ioChoiceYn,
        ds_ioStatus,
        ds_ioReport,
        ds_ioCourse,
        ds_oFireStation,
        ds_oDATA,
        ds_ioFireStation,
        ds_oJibu,
        ds_ioMatch,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        btnToExcel_OnClick,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
    };
};