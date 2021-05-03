/**
http://updater.jinale.com/web/data/shop.json
fetch(location.href).then(r=>r.json()).then(d=>shops=d)
keychips = Object.fromEntries(shops.map(i => [i.keychipid.replace('-', '').substr(0, 'A72E39C2905'.length), i.name]))
JSON.stringify(keychips)
*/

const keychips = JSON.parse('{"A72E1145141": "滑稽家(基板)", "A72E8888888": "大鸟转转转酒吧", "A72E01J1145": "未升级鸭盘", "A72E39C7585": "滑稽家(实机)", "A72E39C4429": "真快活武汉光谷世界城店", "A72E39C0188": "风云再起北京西单店1号机器", "A72E39C7712": "风云再起上海人广店1号机器", "A72E39C3404": "杭州音聚羽薪1号机器", "A72E39C2905": "济南威龙传奇(86) ", "A72E39C6615": "风云再起上海人广店1号机器", "A72E39C9255": "风云再起上海人广店2号机器", "A72E39C0273": "风云再起上海五角场店", "A72E39C0316": "石狮纷享星球电玩体验中心", "A72E39C8205": "大鸟转转厅", "A72E39C3105": "bbs家", "A72E39C4729": "风云再起杭州新天地店", "A72E39C5523": "风云再起南京常发广场店", "A72E39C6308": "东方市大管家家庭游乐中心", "A72E39C0233": "风云再起无锡苏宁广场店", "A72E39C8262": "伊泽", "A72E39C8998": "风云再起石家庄店", "A72E39C8299": "西安stay for you漫玩吧(风云)", "A72E39C9437": "真快活武汉江汉国际广场店", "A72E39C6775": "青岛世嘉乐园", "A72E39C6181": "武汉街道口未来城欢乐王国", "A72E39C7530": "沈阳欢乐城市嘉年华", "A72E39C9088": "风云再起上海文峰店", "A72E39C5833": "三明进珠游乐城", "A72E39C3284": "西安钟楼哆啦乐图(原哆啦星球)1号机器", "A72E39C4983": "西安钟楼哆啦乐图(原哆啦星球)2号机器", "A72E39C6358": "西安哆啦星球小寨店", "A72E39C3772": "宁工音游社", "A72E39C2493": "南昌真快活", "A72E39C2817": "但丁家", "A72E39C3819": "淄博哈雷彗六号星球(86)", "A72E39C7533": "天津风云再起和平路店", "A72E39C3500": "南京风云再起天丰大厦店(小风)", "A72E39C6492": "新密一舞成名电玩", "A72E39C2183": "长春星际传奇", "A72E39C0846": "ELT家", "A72E39C0963": "上海烈火游戏机1号机器", "A72E39C5293": "上海烈火游戏机2号机器", "A72E39C0514": "ero家", "A72E39C1391": "宁波汤姆熊", "A72E39C6781": "日版机4号(重庆)(请登记)", "A72E39C0642": "长沙新动力电玩城(万家丽广场店)", "A72E39C1833": "铃窝", "A72E39C8298": "小黄家", "A72E39C7897": "日版机9号(请登记)", "A72E39C0248": "四川德阳金阳光动漫城", "A72E39C5513": "上海龙之梦汤姆熊", "A72E39C1759": "宅漫游", "A72E39K4240": "NICHANTAE NO.1", "A72E39K3240": "NICHANTAE NO.2", "A72E39K5181": "AIKU_AYA", "A72E39J1692": "Sora*KS家", "A72E39C9622": "天津鲁能", "A72E39C8524": "伊泽", "A72E39C0318": "卷毛1号(请登记)", "A72E39C0491": "咩窝", "A72E39C0825": "酉阳家", "A72E39C0953": "温州公园路佐佐佑佑电玩城 2号机", "A72E39C1253": "CherryG家", "A72E39C1695": "卷毛6号(请登记)", "A72E39C1800": "卷毛7号(请登记)", "A72E39C2612": "天津麦趣熊电玩城", "A72E39C2945": "卷毛9号(请登记)", "A72E39C3077": "Sam窝", "A72E39C4437": "轩轩窝", "A72E39C4649": "人信汉商神采飞扬", "A72E39C5035": "卷毛13号(请登记)", "A72E39C5427": "暴躁家", "A72E39C5621": "洛阳泉舜游乐场", "A72E39C5831": "兔子窝", "A72E39C5907": "Nova家", "A72E39C7424": "城窝", "A72E39C7800": "卷毛19号(请登记)", "A72E39C7898": "温州公园路佐佐佑佑电玩城 1号机", "A72E39C0611": "衡水酷客领域", "A72E39J9521": "フィナーレプラス店", "A72E39C2220": "郑州七天地风云再起", "A72E39J0183": "Omizu店", "A72E39C6240": "广州Area 51店 (五号停机坪)", "A72E39C7895": "陈", "A72E39C8375": "德阳百汇游乐园", "A72E39C6359": "Wen", "A72E39C8003": "风云再起南京新街口正洪大厦店", "A72E39C8611": "鯊魚樂園-楠梓店", "A72E39J1287": "夢が始まった場所", "A72E39C4548": "风云再起苏州观前风云", "A72E39C1619": "鯊魚樂園-南華店", "A72E39C1297": "北京欢乐新天地", "A72E39C1046": "忻州原平大玩家", "A72E39C6527": "山东菏泽威龙嘉年华", "A72E39C5636": "重振旗鼓4号(请登记)", "A72E39C1247": "吉林市环游动漫城", "A72E39C7403": "武汉光谷嗨森汇", "A72E39C9417": "无锡梦想嘻乐园", "A72E39C2323": "太原风云再起柳巷店", "A72E39C1464": "滁州风云再起", "A72E39C0350": "大连汤姆熊罗斯福店", "A72E39C3581": "格子的测试设备", "A72E39C8152": "上海金沙江路", "A72E39K6743": "Royal★"}')

/**
 * 
 * @param {string} keychip keychip id
 * @return {string} shop name
 */
export function getShopName(keychip) {
  if (keychip.length !== 11) return ''
  return keychips[keychip] || '未知店铺'
}
