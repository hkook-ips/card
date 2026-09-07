// members.js - 직원별 개인 데이터베이스 & 회사 공통 정보

const MEMBERS_DATA = {
    //허국
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
        mobile: "+82 10-4225-9258",
        directTel: "+82 70-4185-4716",
        email: "hukug92@ktopils.com",
        subEmail: "hukug92@gmail.com"
    }
    //이재열
    , "lee.jae-yeol": {
        ko: {
            name: "이재열",
            title: "부장",
            department: "사업부 | 2부서장"
        },
        en: {
            name: "Jae-Yeol Lee",
            title: "General Manager",
            department: "IPS Division | 2 Department Manager"
        },
        photoUrl: "./img/img-Lee.Jae-Yeol.png",
        mobile: "+82 10-8708-3259",
        directTel: "+82 70-4260-8633",
        email: "jylee0@ktopils.com",
        subEmail: "angelove2000@daum.net",
    },

   //이홍도
    , "lee.hongdo": {
        ko: {
            name: "이홍도",
            title: "부장",
            department: "사업부 | 1부서장"
        },
        en: {
            name: "Hong Do Lee",
            title: "General Manager",
            department: "IPS Division | 1 Department Manager"
        },
        photoUrl: "./img/img-lee.hongdo.png",
        mobile: "+82 10-4664-2154",
        directTel: "+82 70-4185-2379",
        email: "greenwin80@ktopils.com",
        subEmail: "bluewin80@daum.net",
    },
    
    // 김성원
    "kim.sungwon": {
        ko: {
            name: "김성원",
            title: "대리",
            department: "사업부 | 대리"
        },
        en: {
            name: "Sung Won Kim",
            title: "Senior Assistant",
            department: "IPS Division | Senior Assistant"
        },
        photoUrl: "./img/img-kim.sungwon.png",
        mobile: "+82 10-6615-3606",
        directTel: "+82 70-4481-1240",
        email: "kswon.kim@ktopils.com",
        subEmail: "tjddnjs2800@gmail.com"
    },

    // 김채환
    "kim.chaehwan": {
        ko: {
            name: "김채환",
            title: "과장",
            department: "경영부 | 과장"
        },
        en: {
            name: "Chaehwan Kim",
            title: "Manager",
            department: "Management Team | Manager"
        },
        photoUrl: "./img/img-kim.chaehwan.png",
        mobile: "+82 10-2676-3236",
        directTel: "+82 70-4185-3284",
        email: "ktop.kimchae@ktopils.com",
        subEmail: "kimchae123@daum.net"
    },

    // 박소망
    "park.somang": {
        ko: {
            name: "박소망",
            title: "주임",
            department: "사업부 | 주임"
        },
        en: {
            name: "Somang Park",
            title: "Assistant",
            department: "IPS Division | Assistant"
        },
        photoUrl: "./img/img-park.somang.png",
        mobile: "+82 10-6314-9383",
        directTel: "+82 70-4421-5302",
        email: "thakd90@ktopils.com",
        subEmail: "ktop.thakd90@daum.net"
    },

    // 신재복
    "shin.jaebok": {
        ko: {
            name: "신재복",
            title: "부장",
            department: "사업부 | 부장"
        },
        en: {
            name: "Jaebok Shin",
            title: "General Manager",
            department: "IPS Division | General Manager"
        },
        photoUrl: "./img/img-shin.jaebok.png",
        mobile: "+82 10-2278-9831",
        directTel: "+82 70-4168-7198",
        email: "ktop_woqhrdl3@ktopils.com",
        subEmail: "woqhrdl2@daum.net"
    },

    // 원수희
    "won.suhee": {
        ko: {
            name: "원수희",
            title: "대리",
            department: "사업부 | 대리"
        },
        en: {
            name: "Suhee Won",
            title: "Senior Assistant",
            department: "IPS Division | Senior Assistant"
        },
        photoUrl: "./img/img-won.suhee.png",
        mobile: "+82 10-9159-8938",
        directTel: "+82 70-4185-2374",
        email: "1suhee@ktopils.com",
        subEmail: "1suhee1@daum.net"
    },

    // 이동훈
    "lee.donghoon": {
        ko: {
            name: "이동훈",
            title: "부장",
            department: "사업부 | 부장"
        },
        en: {
            name: "Dong-hoon Lee",
            title: "General Manager",
            department: "IPS Division | General Manager"
        },
        photoUrl: "./img/img-lee.donghoon.png",
        mobile: "+82 10-5639-5579",
        directTel: "+82 70-4185-2365",
        email: "donghoon1122@ktopils.com",
        subEmail: "ldh4201@nate.com"
    },

    // 이상엽
    "lee.sangyeop": {
        ko: {
            name: "이상엽",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Sang Yeop Lee",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-lee.sangyeop.png",
        mobile: "+82 10-4051-5116",
        directTel: "+82 70-4185-2362",
        email: "leesy4208@ktopils.com",
        subEmail: "leesy4208@daum.net"
    },

    // 이상훈
    "lee.sanghoon": {
        ko: {
            name: "이상훈",
            title: "차장",
            department: "사업부 | 차장"
        },
        en: {
            name: "Sanghoon Lee",
            title: "Senior Manager",
            department: "IPS Division | Senior Manager"
        },
        photoUrl: "./img/img-lee.sanghoon.png",
        mobile: "+82 10-3537-7402",
        directTel: "+82 70-4186-6687",
        email: "sh.lee.4bs@ktopils.com",
        subEmail: "ha98090@gmail.com"
    },

   
    // 이지상
    "lee.jeesang": {
        ko: {
            name: "이지상",
            title: "과장",
            department: "사업부 | 과장"
        },
        en: {
            name: "Jee-Sang Lee",
            title: "Manager",
            department: "IPS Division | Manager"
        },
        photoUrl: "./img/img-lee.jeesang.png",
        mobile: "+82 10-2631-6180",
        directTel: "+82 70-4185-8488",
        email: "ktjisang@ktopils.com",
        subEmail: "ggdlwltkd@naver.com"
    },

    // 이준호
    "lee.junho": {
        ko: {
            name: "이준호",
            title: "사원",
            department: "사업부 | 사원"
        },
        en: {
            name: "Junho Lee",
            title: "staff",
            department: "IPS Division | staff"
        },
        photoUrl: "./img/img-lee.junho.png",
        mobile: "+82 10-4113-3752",
        directTel: "+82 70-4260-8632",
        email: "ljunho0222@ktopils.com",
        subEmail: "ljunho0222@gmail.com"
    },

    // 임영민
    "lim.youngmin": {
        ko: {
            name: "임영민",
            title: "대리",
            department: "사업부 | 대리"
        },
        en: {
            name: "Youngmin Lim",
            title: "Senior Assistant",
            department: "IPS Division | Senior Assistant"
        },
        photoUrl: "./img/img-lim.youngmin.png",
        mobile: "+82 10-5376-8437",
        directTel: "+82 70-4260-8630",
        email: "qweuiu@ktopils.com",
        subEmail: "zaza12098427@daum.net"
    },

    // 정병곤
    "jeong.byeonggon": {
        ko: {
            name: "정병곤",
            title: "대리",
            department: "사업부 | 대리"
        },
        en: {
            name: "Byeonggon Jeong",
            title: "Senior Assistant",
            department: "IPS Division | Senior Assistant"
        },
        photoUrl: "./img/img-jeong.byeonggon.png",
        mobile: "+82 10-3415-9331",
        directTel: "+82 70-4185-2366",
        email: "jbgon31@ktopils.com",
        subEmail: "jbg0770@naver.com"
    },

    // 최영석
    "choi.youngseok": {
        ko: {
            name: "최영석",
            title: "차장",
            department: "사업부 | 차장"
        },
        en: {
            name: "Young Seok Choi",
            title: "Senior Manager",
            department: "IPS Division | Senior Manager"
        },
        photoUrl: "./img/img-choi.youngseok.png",
        mobile: "+82 10-5384-7293",
        directTel: "+82 70-4185-4856",
        email: "cys@ktopils.com",
        subEmail: "woogamja2@naver.com"
    }
};

// ★ 회사 공통 정보 및 기본값 (주소, 상세주소, 핵심역량 포함)
const COMPANY_COMMON = {
    ko: {
        companyName: "(주)케이탑",
        companySub: "KTOP Co., Ltd.",
        badgeText: "글로벌 통합체계지원(IPS) 엔지니어링 전문기업",
        address: "51650 경남 창원시 진해구 충장로 541번길 6, 2층",
        addressDetail: "",
        skills: ["글로벌 IPS 체계개발", "RAM / LCC 분석", "기술교범 (S1000D)", "CBT 교육훈련체계", "MRO 지원"]
    },
    en: {
        companyName: "KTOP Co., Ltd.",
        companySub: "KTOP Co., Ltd.",
        badgeText: "Global Specialist in Integrated Product Support (IPS) Engineering",
        address: "Suite 202, 6 Chungjang-ro 541beon-gil, Jinhae-gu, Changwon-si, Gyeongsangnam-do 51650, South Korea",
        addressDetail: "",
        skills: ["IPS Engineering", "RAM / LCC Analysis", "IETM (S1000D)", "CBT Training Systems", "MRO Support"]
    },
    companyLogoUrl: "./img/ktop-logo.png",
    website: "https://www.ktopils.com",
    companyTel: "+82 55-544-8979",
    fax: "+82 55-544-8952",
    postCode: "51650"
};
