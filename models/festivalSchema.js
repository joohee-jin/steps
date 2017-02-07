/**
 * Created by Jmousy on 2017. 2. 6..
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var festivalSchema = new Schema({
    "행사명": String,
    "장소": String,
    "행사내용": String,
    "행사시작일자": String,
    "행사종료일자": String,
    "행사시간": String,
    "요금정보": String,
    "주관기관": String,
    "주최기관": String,
    "연락처": String,
    "후원기관": String,
    "객석수": {type: Number, default: 0},
    "관람요금": String,
    "입장연령": String,
    "할인정보": String,
    "유의사항": String,
    "홈페이지주소": String,
    "예매정보": String,
    "주차장보유여부": {type: String, default: "N"},
    "소재지도로명주소": String,
    "소재지지번주소": String,
    "경도(WGS84좌표)": String,
    "위도(WGS84좌표)": String,
    "데이터기준일자": String

});

var festival = mongoose.model('festival', festivalSchema);

module.exports = festival;