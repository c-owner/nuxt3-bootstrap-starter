# nuxt3 초기 프로젝트에 eslint, prettier 등 환경 셋업



![nuxt3](https://blog.kakaocdn.net/dn/C8E1K/btrT80sCNZQ/3JMUANpN58JuTQtMivziu0/img.png)

```
NuxtJS, NestJS를 이용한 auth 모듈
by hoon
```





Nuxt3 정식 릴리즈 버전으로 typescript를 사용하고, eslint, prettier 등 개발에 필요한 모듈들과 VueJS, NuxtJS 개발에 필요한 기타 필수 요소 모듈들 적용해봅니다.







## 필수 선행 및 환경 정보



node.js v16.16.0 (v16)



npx를 설치합니다.

`npm install -g npx`



typescript를 설치합니다.

`npm install -g typescript`



Nuxt3에서 기본적으로 typescript로 종속되어있기 때문에 typescript 커맨드를 사용하진 않을거지만, 설치해두도록 합시다.



## 프로젝트 설치

### Nuxt3 설치

`npx` 커맨드를 이용하여 초기 프로젝트를 설치합니다.

```shell
cd proj
npx nuxi init app-name
```



### Eslint, Prettier, typescript 설치

터미널을 열고 아래와 같이 필수 모듈을 설치합니다.

```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-nuxt eslint-plugin-prettier prettier typescript @nuxtjs/eslint-config-typescript 
```

추가로 vue와 nuxt를 위한 eslint 플러그인을 설치합니다.

```bash
 yarn add -D eslint-plugin-nuxt eslint-plugin-vue vite-plugin-eslint
```



`nuxt.config.ts` 파일에 `eslintPlugin` 추가

```typescript
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
    
    vite: {
        plugins: [
            eslintPlugin()
        ]
    }
})
```





`package.json`

```json
"scripts": {
    "lint": "eslint \"**/*.{ts,tsx,vue,js}\" --fix",
    "lint-eslint": "eslint --ignore-path .gitignore **/*{ts,tsx,vue,js,json} --fix",
    "lint-prettier": "prettier --write \"**/*.(ts|tsx|vue|js|json)\"",
},
```



위 모듈 설치가 완료되었으면 아래 터미널에서 초기 설정을 진행합니다.

```bash
npx eslint --init
```

```
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · none
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now? › Yes

```

질문 선택지는 선택사항 옵션이므로 원하는 입맛에 맞춰서 선택하시길 바랍니다.



### eslint 설정 파일

위에서 초기 설정을 하고나면 `.eslintrc.json`파일이 아래와 같이 생성됩니다.

```json
{
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "ignorePatterns": ["node_modules/*", "dist/*", "!.prettierrc.js"],
    "extends": ["plugin:nuxt/recommended", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
    "plugins": ["vue", "prettier"],
    "rules": {
        "prettier/prettier": ["error", {}]
    }
}

```



위의 코드는 prettier 모듈과 함께 적용합니다.



### `.prettierrc` 파일 생성

`.prettierrc.json`

```json
{
    "endOfLine": "auto",
    "printWidth": 180,
    "htmlWhitespaceSensitivity": "css",
    "semi": false,
    "singleQuote": false,
    "tabWidth": 4,
    "trailingComma": "none",
    "useTabs": false,
    "overrides": [
        {
            "files": ["*.test.js", "*.test.jsx", "*.test.ts", "*.test.tsx"],
            "options": {
                "semi": true,
                "trailingComma": "none",
                "singleQuote": true,
                "tabWidth": 4
            }
        },
        {
            "files": ["*.vue"],
            "options": {
                "semi": true,
                "trailingComma": "none",
                "singleQuote": false,
                "tabWidth": 4
            }
        },
        {
            "files": "*.json",
            "options": {
                "printWidth": 200,
                "tabWidth": 4,
                "semi": false,
                "singleQuote": false,
                "bracketSpacing": true,
                "trailingComma": "all"
            }
        }
    ]
}

```



plugins, extends, rules 옵션에 prettier 항목이 추가되고 변경되었습니다.



`package.json`에서 등록한 스크립트 `lint-prettier` 명령어로 코드를 일괄 정리할 수 있습니다. 스크립트 실행이 오류난다면 개인 프로젝트 세팅에 맞게 명령문을 조금만 손보면 됩니다.


## Bootstrap 설치

Terminal 실행

```bash
yarn add -D bootstrap bootstrap-vue-next sass sass-loader@10 @popperjs/core
```

`nuxt.config.ts` 에 bootstrap 모듈 추가

```tsx
   modules: [
        'bootstrap-vue-next/nuxt'
    ],

    css:['~/node_modules/bootstrap/dist/css/bootstrap.css'],
```








