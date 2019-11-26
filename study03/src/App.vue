<template>
  <div id="app">
    <h2>기본 슬롯</h2>
    <!-- 기본 슬롯 : 태그내 데이터를 자식으로 전달 시, 유용하다 -->
    <slot-component v-bind:footerText="A.footer" v-bind:headerText="A.header">
      <div>
        <p>{{A.message}}</p>
      </div>
    </slot-component>
    <!-- 기본 슬롯 : 태그내 데이터를 자식으로 전달 시, 유용하다 -->
    <slot-component v-bind:footerText="B.footer" v-bind:headerText="B.header">
      <div>
        <p class="sanders-content">{{B.message}}</p>
      </div>
    </slot-component>
    
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <!-- 명명 슬롯 -->
    <h2>명명 슬롯</h2>
    <named-slot-component>
        <!-- 태그 순서는 뒤바뀌어도 상관없다 slot 속성을 통해 자식컴포넌트의 slot태그의 name 속성을 찾는다 -->
        <h1 slot="header">헤더 영역</h1>
        <div slot="sidebar">
            <ul class="menu">
              <li v-for="(sidebar, index) in sidebars" :key="index">
                    <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
                </li>
            </ul>
        </div>

        <div slot="content">
            <h2>컨텐트 영역</h2>
            <p>김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이</p>
            <p>김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이</p>
            <p>김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이</p>
            <p>김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이</p>
        </div>

        <p slot="footer">Footer text</p>
    </named-slot-component>

    <!-- 스코프 슬롯 -->
    <h2>스코프 슬롯</h2>
    <scope-component>
        <template slot="type1" scope="p1">
          <div>
            {{p1.cx}} + {{p1.cy}} = {{Number(p1.cx) + Number(p1.cy)}}
          </div>
        </template>
        <template slot="type2" scope="p2">
          <div>
            {{p2.cx}} + {{p2.cz}} = {{Number(p2.cx) + Number(p2.cz)}}
          </div>
        </template>
    </scope-component>
  </div>
</template>

<script>
import SlotComponent from './components/SlotComponent';
import NamedSlotComponent from './components/NamedSlotComponent';
import ScopeComponent from './components/ScopeComponent';
export default {
  name: 'app',
  components: {
    SlotComponent,
    NamedSlotComponent,
    ScopeComponent
  },
  data() {
    return {
      A : {
        header : '오바마',
        footer : '2018-01-01 - 시카고',
        message : '저의 동료 국민 여러분 ...(지면관계상 생략)'
      },
      B : {
        header : '버니샌더스 경선 패배 연설문',
        footer : '2018-01-30 - 필라델피아 웰스파고',
        message : '감사합ㄴ디ㅏ. 여러분 ...(지면관계상 생략)'
      },
      sidebars : [
          { menu : "Home", link : "#" },
          { menu : "About", link : "#" },
          { menu : "Contact", link : "#" },
          { menu : "Vue.js", link : "#" }
      ]
    }
  },
}
</script>

<style>
  .sanders {
    background-color:antiquewhite;
  }
  .sanders-content{
    text-decoration: underline;
  }

  ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
  }
  ul.menu a {
      text-decoration:none;
  }
</style>
