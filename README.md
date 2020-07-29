# lioj-prac
有 eslint 跑在 nodejs 上的專案(環境)

# 使用方法
## 你可以用 bash 或 cmd 中在專案目路底下下這四個指令...
指令細節可以去 package.json 看看。
1. `npm run start` 
  看你 console.log 的東西
2. `npm run eslint` 
  檢查 a.js 的 eslint 有沒有符合規定
3. `npm run tsc` 
  將你寫在 a.ts 的 .ts 檔編譯到 a.js
4. `npm run js-beautyfy` 
  將從 ts 編譯過去 js 的檔案格式化已符合規定

## 要從哪開始寫題目?
📌在 a.js 寫題目，然後在 input.txt 放入題目輸入。會使用到以下指令:
- 你可以直接在 js 撰寫後，`npm run start` 看你 console.log 的東西與 `npm run eslint` 檢查 a.js 的 eslint 有沒有符合規定。

📌或在 a.ts 寫題目，在 input.txt 放入題目輸入。會使用到以下指令:
- 你也可以在 ts 撰寫後 `npm run tsc` 將你寫在 a.ts 的 .ts 檔編譯到 a.js，接著 `npm run js-beautyfy` 將從 ts 編譯過去 js 的檔案格式化已符合規定、最後 `npm run eslint` 檢查 a.js 的 eslint 有沒有符合規定，最後 `npm run start` 看你 console.log 的咚咚。

## 你不想要一直下 `npm run eslint` 才可看到錯誤提示嗎? 
你可以直接灌套件，邊寫邊有紅蚯蚓，就不用一直 `npm run eslint` 了。
卡斯伯教學 - [在 VSCode 啟用程式碼規範工具 (ESLint)](https://wcc723.github.io/tool/2017/11/09/coding-style/)

## 這裡還可以下中斷點在 vscode debug
然後你就會發現簡單跑個迴圈還會跑去其他地方😅所以只能每一行都下中斷點用跳到下一個中斷點看程式是怎麼跑的。