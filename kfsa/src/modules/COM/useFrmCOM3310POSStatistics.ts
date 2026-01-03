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
    const [rawVisible_shpGubunBox, setRawVisible_shpGubunBox] = useState(true);
    const [rawVisible_shpBtnBox, setRawVisible_shpBtnBox] = useState(true);
    const [rawVisible_lbHelp, setRawVisible_lbHelp] = useState(true);
    const [rawVisible_btnEnd, setRawVisible_btnEnd] = useState(true);
    const [rawVisible_lbJibu, setRawVisible_lbJibu] = useState(true);
    const [rawVisible_cbxJibu, setRawVisible_cbxJibu] = useState(true);
    const [rawVisible_lbProgramId, setRawVisible_lbProgramId] = useState(true);
    const [rawVisible_cbxProgramIdStart, setRawVisible_cbxProgramIdStart] = useState(true);
    const [rawVisible_lbWorkGubun, setRawVisible_lbWorkGubun] = useState(true);
    const [rawVisible_radWorkGubun, setRawVisible_radWorkGubun] = useState(true);
    const [rawVisible_lbDate, setRawVisible_lbDate] = useState(true);
    const [rawVisible_calDateStart, setRawVisible_calDateStart] = useState(true);
    const [rawVisible_lbDateWave1, setRawVisible_lbDateWave1] = useState(true);
    const [rawVisible_calDateEnd, setRawVisible_calDateEnd] = useState(true);
    const [rawVisible_btnPrint, setRawVisible_btnPrint] = useState(true);
    const [rawVisible_btnCancel, setRawVisible_btnCancel] = useState(true);
    const [rawVisible_btnPrintScreen, setRawVisible_btnPrintScreen] = useState(true);
    const [rawVisible_lbWave, setRawVisible_lbWave] = useState(true);
    const [rawVisible_cbxProgramIdEnd, setRawVisible_cbxProgramIdEnd] = useState(true);
    const [rawVisible_lbDateGubun, setRawVisible_lbDateGubun] = useState(true);
    const [rawVisible_radDateGubun, setRawVisible_radDateGubun] = useState(true);
    const [rawVisible_lbSetlementGubun, setRawVisible_lbSetlementGubun] = useState(true);
    const [rawVisible_radSetlementGubun, setRawVisible_radSetlementGubun] = useState(true);
    const [rawVisible_lbSunapGubun, setRawVisible_lbSunapGubun] = useState(true);
    const [rawVisible_radSunapGubun, setRawVisible_radSunapGubun] = useState(true);
    const isVisible_shpGubunBox = rawVisible_shpGubunBox;
    const setIsVisible_shpGubunBox = setRawVisible_shpGubunBox;
    const isVisible_shpBtnBox = rawVisible_shpBtnBox;
    const setIsVisible_shpBtnBox = setRawVisible_shpBtnBox;
    const isVisible_lbHelp = rawVisible_lbHelp;
    const setIsVisible_lbHelp = setRawVisible_lbHelp;
    const isVisible_btnEnd = rawVisible_btnEnd && rawVisible_shpBtnBox;
    const setIsVisible_btnEnd = setRawVisible_btnEnd;
    const isVisible_lbJibu = rawVisible_lbJibu && rawVisible_shpGubunBox;
    const setIsVisible_lbJibu = setRawVisible_lbJibu;
    const isVisible_cbxJibu = rawVisible_cbxJibu && rawVisible_shpGubunBox;
    const setIsVisible_cbxJibu = setRawVisible_cbxJibu;
    const isVisible_lbProgramId = rawVisible_lbProgramId && rawVisible_shpGubunBox;
    const setIsVisible_lbProgramId = setRawVisible_lbProgramId;
    const isVisible_cbxProgramIdStart = rawVisible_cbxProgramIdStart && rawVisible_shpGubunBox;
    const setIsVisible_cbxProgramIdStart = setRawVisible_cbxProgramIdStart;
    const isVisible_lbWorkGubun = rawVisible_lbWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbWorkGubun = setRawVisible_lbWorkGubun;
    const isVisible_radWorkGubun = rawVisible_radWorkGubun && rawVisible_shpGubunBox;
    const setIsVisible_radWorkGubun = setRawVisible_radWorkGubun;
    const isVisible_lbDate = rawVisible_lbDate && rawVisible_shpGubunBox;
    const setIsVisible_lbDate = setRawVisible_lbDate;
    const isVisible_calDateStart = rawVisible_calDateStart && rawVisible_shpGubunBox;
    const setIsVisible_calDateStart = setRawVisible_calDateStart;
    const isVisible_lbDateWave1 = rawVisible_lbDateWave1 && rawVisible_shpGubunBox;
    const setIsVisible_lbDateWave1 = setRawVisible_lbDateWave1;
    const isVisible_calDateEnd = rawVisible_calDateEnd && rawVisible_shpGubunBox;
    const setIsVisible_calDateEnd = setRawVisible_calDateEnd;
    const isVisible_btnPrint = rawVisible_btnPrint && rawVisible_shpBtnBox;
    const setIsVisible_btnPrint = setRawVisible_btnPrint;
    const isVisible_btnCancel = rawVisible_btnCancel && rawVisible_shpBtnBox;
    const setIsVisible_btnCancel = setRawVisible_btnCancel;
    const isVisible_btnPrintScreen = rawVisible_btnPrintScreen && rawVisible_shpBtnBox;
    const setIsVisible_btnPrintScreen = setRawVisible_btnPrintScreen;
    const isVisible_lbWave = rawVisible_lbWave && rawVisible_shpGubunBox;
    const setIsVisible_lbWave = setRawVisible_lbWave;
    const isVisible_cbxProgramIdEnd = rawVisible_cbxProgramIdEnd && rawVisible_shpGubunBox;
    const setIsVisible_cbxProgramIdEnd = setRawVisible_cbxProgramIdEnd;
    const isVisible_lbDateGubun = rawVisible_lbDateGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbDateGubun = setRawVisible_lbDateGubun;
    const isVisible_radDateGubun = rawVisible_radDateGubun && rawVisible_shpGubunBox;
    const setIsVisible_radDateGubun = setRawVisible_radDateGubun;
    const isVisible_lbSetlementGubun = rawVisible_lbSetlementGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbSetlementGubun = setRawVisible_lbSetlementGubun;
    const isVisible_radSetlementGubun = rawVisible_radSetlementGubun && rawVisible_shpGubunBox;
    const setIsVisible_radSetlementGubun = setRawVisible_radSetlementGubun;
    const isVisible_lbSunapGubun = rawVisible_lbSunapGubun && rawVisible_shpGubunBox;
    const setIsVisible_lbSunapGubun = setRawVisible_lbSunapGubun;
    const isVisible_radSunapGubun = rawVisible_radSunapGubun && rawVisible_shpGubunBox;
    const setIsVisible_radSunapGubun = setRawVisible_radSunapGubun;

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