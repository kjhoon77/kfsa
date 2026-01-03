// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oCourse, Ids_oJibu, Ids_oPassGubun, Ids_oLicenseReport, Ids_oLicenseCnt, Ids_iLicenseImage } from './Frmspcledu0300MLicensePrintData';

export const useFrmspcledu0300MLicensePrint = () => {
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oPassGubun, setds_oPassGubun] = useState<Ids_oPassGubun[]>([]);
    const [ds_oLicenseReport, setds_oLicenseReport] = useState<Ids_oLicenseReport[]>([]);
    const [ds_oLicenseCnt, setds_oLicenseCnt] = useState<Ids_oLicenseCnt[]>([]);
    const [ds_iLicenseImage, setds_iLicenseImage] = useState<Ids_iLicenseImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oPassGubun([]);
            setds_oLicenseReport([]);
            setds_oLicenseCnt([]);
            setds_iLicenseImage([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };

    return {
        isLoading,
        ds_oCourse,
        ds_oJibu,
        ds_oPassGubun,
        ds_oLicenseReport,
        ds_oLicenseCnt,
        ds_iLicenseImage,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
    };
};