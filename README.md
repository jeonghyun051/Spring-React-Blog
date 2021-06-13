## React-SpringBoot Book 프로젝트

### 스프링부트
- Springboot ^2.0
- JPA
- MySQL(H2)
- Maven
- Lombok

### React
- npx create-react-app book-frontend (프로젝트 만들기)
- yarn add react-router-dom (라우팅, 링크)
- yarn add redux react-redux (로그인할 때 세션관리 등)
- yarn add react-bootstrap bootstrap (디자인)

```txt
import 'bootstrap/dist/css/bootstrap.min.css';
```

### 프로젝트 세팅

```json
{
    "singleQuote": true,
    "semi": true,
    "tabWidth": 2,
    "trailingComma": "all",
    "printWidth": 80
}
```

### 배포 명령

- mvn compile
- mvn clean package
- docker-compose up --build

### React와 Springboot 역방향 연결 link 걸기 (localhost로 같이 사용가능)

https://xiaolishen.medium.com/develop-in-docker-a-node-backend-and-a-react-front-end-talking-to-each-other-5c522156f634

### 도커 명령어

- docker volume ls
- docker volume prune
- docker stop $(docker ps -aq)
- docker rm $(docker ps -aq)
- docker rmi $(docker images -aq)
