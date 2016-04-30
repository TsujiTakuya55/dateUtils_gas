[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/konifar/fab-transformation/blob/master/LICENSE)
[![Language](http://img.shields.io/badge/language-javascript-brightgreen.svg?style=flat
)](https://developers.google.com/apps-script/)

# dateUtils_gas
- google app scritpの日付ライブラリ

# Project key

```
M07BPTtQGkQNczN0EX3cSD6M0nmmJvv15
```

# How to use
こちらに詳しく書きました
- [GAS(google app scritp)で日付を扱うライブラリを作成しました](http://qiita.com/Tsuji_Taku50/items/aa9753be09a09659a67e#%E5%AE%9F%E7%94%A8%E4%BE%8BÂ)

# Example
``` javascript
// スプレットシート情報取得
var ss = SpreadsheetApp.openById('スプレットシートのキー');
// シート情報取得
var s = ss.getSheetByName('シート名');
// 日付情報取得(A1 ~ A10までに日付情報が入っている想定)
// スプレットシートから情報取得した段階ではオブジェクト型
var dateObj = s.getRange('A1:A10').getValues();
// 日付情報をArrayに変換
var dateArray = this.convertDate(dateObj);
```

# Requirements
- [google app script](https://developers.google.com/apps-script/)

# Developed By
- name : tsuji_takuya
- Gmail : tsujitakuya50@gmail.com
- Twitter : [@Tsuji_Taku50](https://twitter.com/Tsuji_Taku50)

# License
```
MIT License

Copyright (c) 2016 tsuji_takuya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
