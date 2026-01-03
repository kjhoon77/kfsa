// @ts-nocheck
import { useState, useEffect } from 'react';
import type { Ids_oTrainingPerson, Ids_iTrainingPerson } from './FrmCOM6000PNiceCheckData';

export const useFrmCOM6000PNiceCheck = () => {
    const [ds_oTrainingPerson, setds_oTrainingPerson] = useState<Ids_oTrainingPerson[]>([]);
    const [ds_iTrainingPerson, setds_iTrainingPerson] = useState<Ids_iTrainingPerson[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible_shpGubunBox, setIsVisible_shpGubunBox] = useState(true);
    const [isVisible_webNiceCheck, setIsVisible_webNiceCheck] = useState(true);
    const [isVisible_shpBtnBox, setIsVisible_shpBtnBox] = useState(true);
    const [isVisible_lbNiceCheck, setIsVisible_lbNiceCheck] = useState(true);
    const [isVisible_btnEnd, setIsVisible_btnEnd] = useState(true);
    const [isVisible_imgBoxBottum, setIsVisible_imgBoxBottum] = useState(true);
    const [isVisible_imgBoxTop1, setIsVisible_imgBoxTop1] = useState(true);
    const [isVisible_imgBoxTop2, setIsVisible_imgBoxTop2] = useState(true);
    const [isVisible_imgBoxLeft1, setIsVisible_imgBoxLeft1] = useState(true);
    const [isVisible_imgBoxLeft2, setIsVisible_imgBoxLeft2] = useState(true);
    const [isVisible_Image0, setIsVisible_Image0] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oTrainingPerson([]);
            setds_iTrainingPerson([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oTrainingPerson,
        ds_iTrainingPerson,
        isVisible_shpGubunBox,
        setIsVisible_shpGubunBox,
        isVisible_webNiceCheck,
        setIsVisible_webNiceCheck,
        isVisible_shpBtnBox,
        setIsVisible_shpBtnBox,
        isVisible_lbNiceCheck,
        setIsVisible_lbNiceCheck,
        isVisible_btnEnd,
        setIsVisible_btnEnd,
        isVisible_imgBoxBottum,
        setIsVisible_imgBoxBottum,
        isVisible_imgBoxTop1,
        setIsVisible_imgBoxTop1,
        isVisible_imgBoxTop2,
        setIsVisible_imgBoxTop2,
        isVisible_imgBoxLeft1,
        setIsVisible_imgBoxLeft1,
        isVisible_imgBoxLeft2,
        setIsVisible_imgBoxLeft2,
        isVisible_Image0,
        setIsVisible_Image0,
        lfn_End,
    };
};