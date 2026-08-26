// members.js - 직원별 개인 데이터베이스 & 회사 공통 정보

const MEMBERS_DATA = {
    // 1. 허국 이사
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
    }

    // 직원이 추가될 경우 아래 형태로 계속 추가 (키값: "아이디")
    /*
    , "hong": {
        ko: {
            name: "홍길동",
            title: "팀장",
            department: "사업부 | 체계지원팀"
        },
        en: {
            name: "Gildong Hong",
            title: "Team Leader",
            department: "IPS Division | System Support Team"
        },
        photoUrl: "./img/img-hong.gildong.png",
        mobile: "+82 10-1234-5678",
        directTel: "+82 70-4185-0001",
        email: "gdhong@ktopils.com",
        subEmail: ""
    }
    */
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
