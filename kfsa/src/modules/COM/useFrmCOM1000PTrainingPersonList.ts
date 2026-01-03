// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingPerson } from './FrmCOM1000PTrainingPersonListData';

export const useFrmCOM1000PTrainingPersonList = () => {
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_btnSelect, setIsVisible_btnSelect] = useState(true);
    const [isVisible_gdTrainingPerson, setIsVisible_gdTrainingPerson] = useState(true);
    const [isVisible_btnSearch, setIsVisible_btnSearch] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_lbPersonNm, setIsVisible_lbPersonNm] = useState(true);
    const [isVisible_edPersonNm, setIsVisible_edPersonNm] = useState(true);
    const [isVisible_lbResidentNo, setIsVisible_lbResidentNo] = useState(true);
    const [isVisible_medResidentNo, setIsVisible_medResidentNo] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingPerson([]);
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
        ds_oTrainingPerson,
        isVisible_btnSelect,
        setIsVisible_btnSelect,
        isVisible_gdTrainingPerson,
        setIsVisible_gdTrainingPerson,
        isVisible_btnSearch,
        setIsVisible_btnSearch,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_lbPersonNm,
        setIsVisible_lbPersonNm,
        isVisible_edPersonNm,
        setIsVisible_edPersonNm,
        isVisible_lbResidentNo,
        setIsVisible_lbResidentNo,
        isVisible_medResidentNo,
        setIsVisible_medResidentNo,
        btnSelect_OnClick,
        lfn_End,
        lfn_Search,
    };
};