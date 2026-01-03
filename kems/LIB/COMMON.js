﻿﻿﻿﻿﻿﻿﻿/*
 * 프로그램명 : COMMON.js
 * 설명 : 공통 관련 js 파일을 포함한 파일
 * 작성일 : 2009.06.23
 * 작성자 : 장성호
 */

var ms_SvcUrl; //Transaction을 요청할 URL
var ms_SvcInDataSet; //Transaction을 요청할 때 입력값으로 보낼 Dataset ID
var ms_SvcOutDataSet; //Transaction을 처리 결과를 받을 Dataset ID
var ms_SvcArgument; //Dataset 외의 Transaction을 위한 인자값
var ms_SvcCallback; //콜백 함수명 지정
var ms_TrainingPersonMgno = ""; // 고객관리번호

#include "LIB::UTL.js"; // 기타 Util 관련 js File
#include "LIB::MSG.js"; // Message 관련 js File
#include "LIB::xframework.js"; // X Framework 관련
#include "LIB::EVENT.js"; // Event 관련 js File
#include "LIB::SVC.js"; // Transactin 관련 js File
#include "LIB::SORT.js"; // 정렬 관련 js File
#include "LIB::DATE.js"; // 날짜 관련 js File
#include "LIB::REXPERT.js"; // REXPERT 관련 js File
#include "LIB::POS.js"; // POS 관련 js File
