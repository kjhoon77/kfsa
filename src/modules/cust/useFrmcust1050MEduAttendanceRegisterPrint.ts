// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oSort, Ids_oCourse, Ids_oJibu, Ids_oEduAttendence, Ids_oEduAttendencePoto } from './Frmcust1050MEduAttendanceRegisterPrintData';

export const useFrmcust1050MEduAttendanceRegisterPrint = () => {
    const [ds_oSort, setds_oSort] = useState<Ids_oSort[]>([]);
    const [ds_oCourse, setds_oCourse] = useState<Ids_oCourse[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oEduAttendence, setds_oEduAttendence] = useState<Ids_oEduAttendence[]>([]);
    const [ds_oEduAttendencePoto, setds_oEduAttendencePoto] = useState<Ids_oEduAttendencePoto[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_divWorkFormTitle, setIsVisible_divWorkFormTitle] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oSort([]);
            setds_oCourse([]);
            setds_oJibu([]);
            setds_oEduAttendence([]);
            setds_oEduAttendencePoto([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_PrintScreen = () => {
        console.log('lfn_PrintScreen clicked');
    };
    const lfn_Search = () => {
        console.log('lfn_Search clicked');
    };

    return {
        isLoading,
        ds_oSort,
        ds_oCourse,
        ds_oJibu,
        ds_oEduAttendence,
        ds_oEduAttendencePoto,
        isVisible_divWorkFormTitle,
        setIsVisible_divWorkFormTitle,
        lfn_Cancel,
        lfn_End,
        lfn_PrintScreen,
        lfn_Search,
    };
};