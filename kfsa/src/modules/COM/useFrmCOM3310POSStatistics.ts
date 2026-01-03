// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oProgramId, Ids_oWorkGubun, Ids_oDateGubun, Ids_oSetlementGubun, Ids_oSunapGubun, Ids_oJibu } from './FrmCOM3310POSStatisticsData';

export const useFrmCOM3310POSStatistics = () => {
    const [ds_oProgramId, setds_oProgramId] = useState<Ids_oProgramId[]>([]);
    const [ds_oWorkGubun, setds_oWorkGubun] = useState<Ids_oWorkGubun[]>([]);
    const [ds_oDateGubun, setds_oDateGubun] = useState<Ids_oDateGubun[]>([]);
    const [ds_oSetlementGubun, setds_oSetlementGubun] = useState<Ids_oSetlementGubun[]>([]);
    const [ds_oSunapGubun, setds_oSunapGubun] = useState<Ids_oSunapGubun[]>([]);
    const [ds_oJibu, setds_oJibu] = useState<Ids_oJibu[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_lbHelp, setIsVisible_lbHelp] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbJibu, setIsVisible_lbJibu] = useState(true);
    const [isVisible_cbxJibu, setIsVisible_cbxJibu] = useState(true);
    const [isVisible_lbProgramId, setIsVisible_lbProgramId] = useState(true);
    const [isVisible_cbxProgramIdStart, setIsVisible_cbxProgramIdStart] = useState(true);
    const [isVisible_lbWorkGubun, setIsVisible_lbWorkGubun] = useState(true);
    const [isVisible_radWorkGubun, setIsVisible_radWorkGubun] = useState(true);
    const [isVisible_lbDate, setIsVisible_lbDate] = useState(true);
    const [isVisible_calDateStart, setIsVisible_calDateStart] = useState(true);
    const [isVisible_lbDateWave1, setIsVisible_lbDateWave1] = useState(true);
    const [isVisible_calDateEnd, setIsVisible_calDateEnd] = useState(true);
    const [isVisible_btnPrint, setIsVisible_btnPrint] = useState(true);
    const [isVisible_btnCancel, setIsVisible_btnCancel] = useState(true);
    const [isVisible_btnPrintScreen, setIsVisible_btnPrintScreen] = useState(true);
    const [isVisible_lbWave, setIsVisible_lbWave] = useState(true);
    const [isVisible_cbxProgramIdEnd, setIsVisible_cbxProgramIdEnd] = useState(true);
    const [isVisible_lbDateGubun, setIsVisible_lbDateGubun] = useState(true);
    const [isVisible_radDateGubun, setIsVisible_radDateGubun] = useState(true);
    const [isVisible_lbSetlementGubun, setIsVisible_lbSetlementGubun] = useState(true);
    const [isVisible_radSetlementGubun, setIsVisible_radSetlementGubun] = useState(true);
    const [isVisible_lbSunapGubun, setIsVisible_lbSunapGubun] = useState(true);
    const [isVisible_radSunapGubun, setIsVisible_radSunapGubun] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oProgramId([]);
            setds_oWorkGubun([]);
            setds_oDateGubun([]);
            setds_oSetlementGubun([]);
            setds_oSunapGubun([]);
            setds_oJibu([]);
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
        ds_oProgramId,
        ds_oWorkGubun,
        ds_oDateGubun,
        ds_oSetlementGubun,
        ds_oSunapGubun,
        ds_oJibu,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_lbHelp,
        setIsVisible_lbHelp,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbJibu,
        setIsVisible_lbJibu,
        isVisible_cbxJibu,
        setIsVisible_cbxJibu,
        isVisible_lbProgramId,
        setIsVisible_lbProgramId,
        isVisible_cbxProgramIdStart,
        setIsVisible_cbxProgramIdStart,
        isVisible_lbWorkGubun,
        setIsVisible_lbWorkGubun,
        isVisible_radWorkGubun,
        setIsVisible_radWorkGubun,
        isVisible_lbDate,
        setIsVisible_lbDate,
        isVisible_calDateStart,
        setIsVisible_calDateStart,
        isVisible_lbDateWave1,
        setIsVisible_lbDateWave1,
        isVisible_calDateEnd,
        setIsVisible_calDateEnd,
        isVisible_btnPrint,
        setIsVisible_btnPrint,
        isVisible_btnCancel,
        setIsVisible_btnCancel,
        isVisible_btnPrintScreen,
        setIsVisible_btnPrintScreen,
        isVisible_lbWave,
        setIsVisible_lbWave,
        isVisible_cbxProgramIdEnd,
        setIsVisible_cbxProgramIdEnd,
        isVisible_lbDateGubun,
        setIsVisible_lbDateGubun,
        isVisible_radDateGubun,
        setIsVisible_radDateGubun,
        isVisible_lbSetlementGubun,
        setIsVisible_lbSetlementGubun,
        isVisible_radSetlementGubun,
        setIsVisible_radSetlementGubun,
        isVisible_lbSunapGubun,
        setIsVisible_lbSunapGubun,
        isVisible_radSunapGubun,
        setIsVisible_radSunapGubun,
        lfn_Cancel,
        lfn_End,
        lfn_Print,
        lfn_PrintScreen,
    };
};