// card/katec/members.js - 카텍 직원 데이터베이스 & 회사 공통 정보

const MEMBERS_DATA = {
    // 허국
    "heo.kook": {
        ko: {
            name: "허국",
            title: "이사",
            department: "사업부 | 총괄이사"
        },
        en: {
            name: "Kook Heo",
            title: "Director",
            department: "IPS Division | Managing Director"
        },
        photoUrl: "./img/img-heo.kook.png",
        mobile: "010-4225-9258",
        directTel: "070-4185-4716",
        email: "kook.heo@katec.or.kr",
        subEmail: "hukug92@gmail.com"
    }
    // 강유진
    , "kang.yujin": {
        ko: {
            name: "강유진",
            title: "대표",
            department: "카텍 | 대표이사"
        },
        en: {
            name: "Yujin Kang",
            title: "CEO",
            department: "KATEC | CEO"
        },
        photoUrl: "./img/img-kang.yujin.png",
        mobile: "010-3643-8342",
        directTel: "",
        email: "k.yujin777@katec.or.kr",
        subEmail: ""
    }


    // 2. 강유진 대표 (예시)
    /*
    , "kang.yujin": {
        ko: {
            name: "강유진",
            title: "대표",
            department: "카텍 | 대표이사"
        },
        en: {
            name: "Yujin Kang",
            title: "CEO",
            department: "KATEC | CEO"
        },
        photoUrl: "./img/img-kang.yujin.png",
        mobile: "010-3643-8342",
        directTel: "",
        email: "k.yujin777@katec.or.kr",
        subEmail: ""
    }
    */
};

// 카텍 회사 공통 정보 및 기본값 (주소, 핵심역량 포함)
const COMPANY_COMMON = {
    ko: {
        companyName: "(주)카텍",
        companySub: "KATEC Co., Ltd.",
        badgeText: "K-방산 통합체계지원(IPS) 전문 기업",
        address: "경남 창원시 진해구 벚꽃로 39",
        addressDetail: "(진해역 인근)",
        skills: ["IPS / ILS", "RAM", "PSA / LSA", "LCSP", "IETM", "CBT"]
    },
    en: {
        companyName: "KATEC Co., Ltd.",
        companySub: "KATEC Co., Ltd.",
        badgeText: "K-Defense Integrated Product Support (IPS) Specialist",
        address: "39, Beotkkot-ro, Jinhae-gu, Changwon-si, Gyeongsangnam-do",
        addressDetail: "",
        skills: ["IPS / ILS", "RAM", "PSA / LSA", "LCSP", "IETM", "CBT"]
    },
    companyLogoUrl: "./img/katec-logo.png",
    website: "http://www.katec.or.kr",
    companyTel: "055-541-3232",
    fax: "055-541-3231",
    postCode: "51679"
};