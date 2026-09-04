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
    },

    // 강유진
    "kang.yujin": {
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
    },

    // 강민성
    "kang.minsung": {
        ko: {
            name: "강민성",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Minsung Kang",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-kang.minsung.png",
        mobile: "010-5819-8483",
        directTel: "070-4260-8631",
        email: "kms83408483@katec.or.kr",
        subEmail: ""
    },

    // 강영재
    "kang.yeongjae": {
        ko: {
            name: "강영재",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Yeongjae Kang",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-kang.yeongjae.png",
        mobile: "010-6296-5930",
        directTel: "070-4185-2367",
        email: "yjk120305@katec.or.kr",
        subEmail: ""
    },

    // 강현정
    "kang.hyeonjeong": {
        ko: {
            name: "강현정",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Hyeonjeong Kang",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-kang.hyeonjeong.png",
        mobile: "010-6649-5555",
        directTel: "070-4186-6684",
        email: "kkhhjj1123@katec.or.kr",
        subEmail: ""
    },

    // 구봉주
    "ku.bongju": {
        ko: {
            name: "구봉주",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Bongju Ku",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-ku.bongju.png",
        mobile: "010-2833-1062",
        directTel: "070-4185-2370",
        email: "rnqhdwn1062@katec.or.kr",
        subEmail: ""
    },

    // 김명주
    "kim.myeongju": {
        ko: {
            name: "김명주",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Myeongju Kim",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-kim.myeongju.jpg",
        mobile: "010-9316-5224",
        directTel: "070-4185-4718",
        email: "kimmyeongju93@katec.or.kr",
        subEmail: ""
    },

    // 김종은
    "kim.jongeun": {
        ko: {
            name: "김종은",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Jongeun Kim",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-kim.jongeun.png",
        mobile: "010-2172-4438",
        directTel: "070-4185-2347",
        email: "whddms9487@katec.or.kr",
        subEmail: "whddms9487@gmail.com"
    },

    // 김지원
    "kim.jiwon": {
        ko: {
            name: "김지원",
            title: "차장",
            department: "사업부 | 차장"
        },
        en: {
            name: "Jiwon Kim",
            title: "Senior Manager",
            department: "IPS Division | Senior Manager"
        },
        photoUrl: "./img/img-kim.jiwon.png",
        mobile: "010-5306-5748",
        directTel: "070-4185-2378",
        email: "jiwon2@katec.or.kr",
        subEmail: ""
    },

    // 김창헌
    "kim.changheon": {
        ko: {
            name: "김창헌",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Changheon Kim",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-kim.changheon.png",
        mobile: "010-5616-3892",
        directTel: "070-4260-8634",
        email: "ckdgjs4113@katec.or.kr",
        subEmail: ""
    },

    // 남유선
    "nam.yusun": {
        ko: {
            name: "남유선",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Yusun Nam",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-nam.yusun.png",
        mobile: "010-2150-2486",
        directTel: "070-4185-2343",
        email: "kamusari@katec.or.kr",
        subEmail: ""
    },

    // 박준영
    "park.junyeong": {
        ko: {
            name: "박준영",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Junyeong Park",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-park.junyeong.png",
        mobile: "010-9134-2610",
        directTel: "070-4185-4712",
        email: "tony0363@katec.or.kr",
        subEmail: "tony0363@hanmail.net"
    },

    // 박현수
    "park.hyeonsoo": {
        ko: {
            name: "박현수",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Hyeonsoo Park",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-park.hyeonsoo.jpg",
        mobile: "010-4410-1170",
        directTel: "070-4185-2377",
        email: "idenmark10178@katec.or.kr",
        subEmail: ""
    },

    // 송승엽
    "song.seungyeob": {
        ko: {
            name: "송승엽",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Seungyeob Song",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-song.seungyeob.png",
        mobile: "010-8808-8639",
        directTel: "070-4185-2367",
        email: "tmdduq8808@katec.or.kr",
        subEmail: ""
    },

    // 안준홍
    "ahn.junhong": {
        ko: {
            name: "안준홍",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Junhong Ahn",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-ahn.junhong.png",
        mobile: "010-8558-8294",
        directTel: "070-4185-4711",
        email: "hongkr2897@katec.or.kr",
        subEmail: ""
    },

    // 유지민
    "yoo.jimin": {
        ko: {
            name: "유지민",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Jimin Yoo",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-yoo.jimin.jpg",
        mobile: "010-5904-5602",
        directTel: "070-4185-4710",
        email: "jiminz09@katec.or.kr",
        subEmail: ""
    },

    // 임중섭
    "lim.joongsub": {
        ko: {
            name: "임중섭",
            title: "과장",
            department: "사업부 | 과장"
        },
        en: {
            name: "Joongsub Lim",
            title: "Manager",
            department: "IPS Division | Manager"
        },
        photoUrl: "./img/img-lim.joongsub.png",
        mobile: "010-2715-8258",
        directTel: "070-4185-4714",
        email: "jslim315@katec.or.kr",
        subEmail: ""
    },

    // 정영은
    "jeong.youngeun": {
        ko: {
            name: "정영은",
            title: "대리",
            department: "사업부 | 대리"
        },
        en: {
            name: "Youngeun Jeong",
            title: "Senior Assistant",
            department: "IPS Division | Senior Assistant"
        },
        photoUrl: "./img/img-jeong.youngeun.png",
        mobile: "010-3698-7006",
        directTel: "070-4185-4853",
        email: "jjdud1028@katec.or.kr",
        subEmail: ""
    },

    // 최소정
    "choi.sojung": {
        ko: {
            name: "최소정",
            title: "과장",
            department: "사업부 | 과장"
        },
        en: {
            name: "Sojung Choi",
            title: "Manager",
            department: "IPS Division | Manager"
        },
        photoUrl: "./img/img-choi.sojung.png",
        mobile: "010-4571-1916",
        directTel: "070-4185-4715",
        email: "wjdth5432@katec.or.kr",
        subEmail: ""
    },

    // 함승준
    "ham.seungjun": {
        ko: {
            name: "함승준",
            title: "부장",
            department: "사업부 | 부장"
        },
        en: {
            name: "Seungjun Ham",
            title: "General Manager",
            department: "IPS Division | General Manager"
        },
        photoUrl: "./img/img-ham.seungjun.png",
        mobile: "010-8645-1423",
        directTel: "070-4185-4716",
        email: "h820322@katec.or.kr",
        subEmail: ""
    },

    // 차민준
    "cha.minjun": {
        ko: {
            name: "차민준",
            title: "부장",
            department: "사업부 | 부장"
        },
        en: {
            name: "Minjun Cha",
            title: "General Manager",
            department: "IPS Division | General Manager"
        },
        photoUrl: "./img/img-cha.minjun.png",
        mobile: "010-9271-2149",
        directTel: "070-4185-2346",
        email: "minjun8411@katec.or.kr",
        subEmail: ""
    }
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