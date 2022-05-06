## Introduction to Testing in Nest

### JEST

> Jest란 자바스크립트를 아주 쉽게 테스팅하는 npm 패키지

- Nest.js는 자동으로 jest를 설정해준다.
- .spec.ts 파일은 테스트를 포함한 파일이며, 이름에는 규칙이 있다.

```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  // 코드가 얼마나 테스팅 되었는지/안되었는지 알려주는 명령어
  "test:cov": "jest --coverage",
  "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
  "test:e2e": "jest --config ./test/jest-e2e.json"
}
```

유닛 테스팅이란 함수 하나하나를 테스트하는 것!
e2e 테스트는 모든 것을 테스트하는 것!
