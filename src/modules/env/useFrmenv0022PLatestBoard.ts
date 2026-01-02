// @ts-nocheck
import { useState, useEffect } from 'react';

export interface Ids_oBoard {
    AFDIRPATH: string;
    AFFILESIZE: string;
    AFREALNM: string;
    AFSAVENM: string;
    AFSEQ: string;
    BBOARDGUBUN: string;
    BCONTENTS: string;
    BHIT: string;
    BMODDATE: string;
    BMODSABUN: string;
    BREGDATE: string;
    BREGSABUN: string;
    BSEQ: string;
    BTITLE: string;
    NEW_YN: string;
}

export const useFrmenv0022PLatestBoard = () => {
    const [ds_oBoard, setds_oBoard] = useState<Ids_oBoard[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setds_oBoard([]);
            setIsLoading(false);
        }, 500);
    }, []);

    const imgBoardMore_OnClick = () => {
        console.log('imgBoardMore_OnClick clicked');
    };
    const lfn_End = () => {
        console.log('lfn_End clicked');
    };

    return {
        isLoading,
        ds_oBoard,
        imgBoardMore_OnClick,
        lfn_End,
    };
};