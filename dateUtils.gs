/**
 * 現在日と比較
 * @param dateArray {Array} 比較したい日付配列
 * @return 同じ日が配列にあるならtrue
 **/
function isCompareDate(dateArray) {
    // 現在日時取得
    var currentDate = new Date();
    // 現在日時を加工
    var tempCurrentDate = ("0" + (parseInt(currentDate.getMonth()) + 1)).slice(-2) + "/" + ("0" + currentDate.getDate()).slice(-2);

    for (var i = 0, len = dateArray.length; i < len; i++) {
        if (tempCurrentDate == dateArray[i]) {
            return true;
        }
    }
    return false;
}

/**
 * 日付オブジェクトを配列に変換
 * @param obj {Object} 日付オブジェクト
 * @param beforeDay {Number} 何日前にするか
 * @return 日付配列
 */
function convertDate(obj, beforeDay) {
    var resultArray = [];
    for (var i = 0, len = obj.length; i < len; i++) {
        resultArray.push(convertDateMMDD(obj[i], beforeDay));
    }
    return resultArray;
}

/**
 * Date型をMM/DDの文字列に変換する
 * @param date {Date} 変換したいDate型（Fri Oct 31 2014 15:28:44 GMT+0900 (JST)）の値
 * @param beforeDay {Number} 何日前にするか
 * @return MM/DDの文字列
 **/
function convertDateMMDD(date, beforeDay) {
    if (typeof date != "object" || typeof date != "undefind") {
        if (String(date).match('GMT') != null) {
            date = new Date(date);
        } else {
            //dete型ではない
            return date;
        }
    }
    var tempDate = date.getDate() - beforeDay;
    return ("0" + (parseInt(date.getMonth()) + 1)).slice(-2) + "/" + ("0" + tempDate).slice(-2);
}

/**
 * Date型をYYYYMMDDの数値型に変換する
 * @param date {Date} 変換したいDate型（Fri Oct 31 2014 15:28:44 GMT+0900 (JST)）の値
 * @return YYYYMMDDの数値
 **/
function convertDateNumber(date) {
    return parseInt(date.getYear() + ("0" + (parseInt(date.getMonth()) + 1)).slice(-2) + ("0" + date.getDate()).slice(-2));
}
