## 한국 ISP 중간자 공격 회피 스크립트
한국 ISP 회사들은 공유기를 감지하기 위해 종종 HTTP 페이지의 내용을 다음 내용으로 바꿔치기합니다.

```html
<meta http-equiv="refresh"content="2;url=http://원래주소/?"/><iframe id="f"frameborder="0"style="width:1;height:1"></iframe><script>document.getElementById("f").src="http://(중간자공격 아이피)/tm/?someargs"</script>
```

이는 명백한 중간자 공격(MITM, Man-In-The-Middle Attack)으로 ISP는 위 페이지를 통해 공유기 사용을 감시하고, 공유기 적발시 차단 페이지를 띄웁니다.
하지만 이는 가상PC를 사용하거나 브라우저를 여러 개 사용하는 것만으로도 공유기 사용으로 인식되는 문제점이 있습니다. 이는 개발자에게 있어 치명적인 부분입니다.

광고 차단 프로그램으로 중간자공격에 사용되는 아이피를 차단하면 추적 문제는 해결할 수 있지만, ISP에서 제공하는 페이지의 문제로, 원본 주소의 폴더명 등이 전부 무시되는 문제점이 있습니다.(ex. `http://cafe.naver.com/cafeid` 접속시도시 자동 리다이렉트 주소는 `http://cafe.nave.com/?`가 되어버림)

이 스크립트는 광고 차단 프로그램으로 중간자공격에 사용되는 아이피를 차단했다는 전제하에 중간자 공격 감지시 페이지를 무한 새로고침해, ISP가 정상적인 페이지를 반환하도록 유도하는 스크립트입니다.

## 주의사항
개발자는 이 스크립트 사용으로 인한 이용약관 위반 및 서비스 해지에 대해서는 책임지지 않습니다.
단순히 가상 PC 사용으로 인한 오탐이 아닌 정말로 컴퓨터 여러 대를 사용한다면 IP 추가 서비스 등을 이용하시는 것을 권장드립니다.

## 타 통신사 이용자분들의 기여를 기다립니다
현재 KT에서 사용하는 아이피만 등록되어 있습니다. 타 통신사 이용자분들의 기여를 기다립니다.
PR 혹은 이슈로 남겨주세요.
