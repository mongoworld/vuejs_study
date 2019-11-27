const BASE_URL = "/api";
// const BASE_URL = "http://localhost:3000";

export default {
    PAGESIZE : 5,
    // 연락처 목록 조회
    READ : BASE_URL + "/contacts",
    // 등록
    CREATE : BASE_URL + "/contacts",
    // 수정
    UPDATE : BASE_URL + "/contacts",
    // 삭제
    DELETE : BASE_URL + "/contacts",
    // 사진수정
    UPDATE_PHOTO : BASE_URL + "/contacts"
}