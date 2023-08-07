import Vue from "vue";

// 프로그램 전역 이벤트버스 설정
export const eventBus = new Vue()


// 사용법
// 이벤트 버스를 등록하고자 하는 vue 파일에 이 파일을 import 한다
// ex) import { eventBus } from '@/store/EventBus';
// 등록하고자 하는 전역 이벤트 위치에 아래 코드 삽입
// 버블링 방지를 위해 이벤트 등록전 off 함수 호출
// eventBus.$off("이벤트 함수명")
// eventBus.$on("이벤트 함수명", 이벤트 함수명 => {
//     특정 이벤트 발생시 수행되는 로직 구현부
// })
