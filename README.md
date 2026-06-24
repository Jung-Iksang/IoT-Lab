# 지능형 IoT 연구실 · Intelligent IoT Lab

원광대학교 컴퓨터·소프트웨어공학과 **지능형 IoT 연구실(이완범 교수)** 웹사이트입니다.
이미지·영상 압축, 응용 머신러닝, LED 조명·광원 시스템, IoT 스마트 제어 연구를 소개합니다.

🔗 **Live:** https://jung-iksang.github.io/IoT-Lab/

## 기술 스택
빌드 단계 없는 **정적 HTML/CSS/JS**(바닐라). 프레임워크·번들러 없이 어떤 정적 호스트에서도 그대로
동작하며, GitHub Pages로 배포됩니다.

## 로컬에서 실행
```bash
git clone https://github.com/Jung-Iksang/IoT-Lab.git
cd IoT-Lab
python3 -m http.server 8000
# → http://localhost:8000
```

## 페이지 구성
| 페이지 | 파일 | 내용 |
|---|---|---|
| 홈 | `index.html` | 소개·연구 분야·최근 소식/논문 요약 |
| 연구 | `research.html` | 4대 연구 분야 |
| 구성원 | `people.html` | PI 및 연구원 |
| 논문 | `publications.html` | 저널·학술대회·저서 |
| 소식 | `news.html` | 연구실 소식 |
| 갤러리 | `gallery.html` | 사진 |
| 연락처 | `contact.html` | 위치·연락처 |
| 지원 | `join.html` | 모집 안내 |

```
assets/
  styles.css   # 디자인 토큰(:root 변수) + 전체 스타일
  main.js      # 활성 내비 표시, 이메일 복사, 모바일 메뉴 토글
```

## 콘텐츠 교체 안내
텍스트는 실제 연구실 정보로 채워져 있습니다. **이미지는 자리표시자(줄무늬 패턴)** 이며 실제 사진으로
교체하면 됩니다 — PI 초상, 연구원 아바타, 연구 다이어그램, 갤러리 사진, 캠퍼스 약도. 자리표시자는
`.placeholder` / `.member__avatar` / `.gallery__item` / `.map` 요소이며, 줄무늬 배경 대신 `<img>`를
넣으면 됩니다. (Contact 지도는 Kakao/Naver Map 임베드 권장.)

## 배포 (GitHub Pages)
`main` 브랜치 루트에서 바로 서빙됩니다. 저장소 **Settings → Pages → Deploy from a branch → main /
(root)**. 모든 경로가 상대 경로라 프로젝트 서브경로(`/IoT-Lab/`)에서도 정상 동작합니다.
