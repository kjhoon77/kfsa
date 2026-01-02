// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oJibu, Ids_oGubun, Ids_oSunap, Ids_oDateGubun, Ids_oOrder, Ids_oPrintGubun, Ids_ioResult, Ids_oPosProgramId, Ids_oPosJibu } from './Frmposetc0020PPosReportData';

export const useFrmposetc0020PPosReport = () => {
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [ds_oGubun, setds_oGubun] = useState<Ids_oGubun[]>([]);
    const [ds_oSunap, setds_oSunap] = useState<Ids_oSunap[]>([]);
    const [ds_oDateGubun, setds_oDateGubun] = useState<Ids_oDateGubun[]>([]);
    const [ds_oOrder, setds_oOrder] = useState<Ids_oOrder[]>([]);
    const [ds_oPrintGubun, setds_oPrintGubun] = useState<Ids_oPrintGubun[]>([]);
    const [ds_ioResult, setds_ioResult] = useState<Ids_ioResult[]>([]);
    const [ds_oPosProgramId, setds_oPosProgramId] = useState<Ids_oPosProgramId[]>([]);
    const [ds_oPosJibu, setds_oPosJibu] = useState<Ids_oPosJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oJibu([]);
            setds_oGubun([]);
            setds_oSunap([]);
            setds_oDateGubun([]);
            setds_oOrder([]);
            setds_oPrintGubun([]);
            setds_ioResult([]);
            setds_oPosProgramId([]);
            setds_oPosJibu([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_Cancel = () => {
        console.log('lfn_Cancel clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };
    const lfn_Excel = () => {
        console.log('lfn_Excel clicked');
    };
    const lfn_Print = () => {
        console.log('lfn_Print clicked');
    };

    return {
        isLoading,
        ds_oJibu,
        ds_oGubun,
        ds_oSunap,
        ds_oDateGubun,
        ds_oOrder,
        ds_oPrintGubun,
        ds_ioResult,
        ds_oPosProgramId,
        ds_oPosJibu,
        lfn_Cancel,
        lfn_End,
        lfn_Excel,
        lfn_Print,
    };
};