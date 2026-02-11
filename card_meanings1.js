// ==================================================
// 星光塔羅 - 牌意資料庫
// ==================================================
// 風格：鐵口直斷
// ==================================================

export const CARD_MEANINGS = [
    {
        id: 0,
        name: "愚者",
        general: {
            upright: "盲目的冒險即將開始。放棄控制，直接跳入未知，別問結果。",
            reversed: "愚蠢的魯莽。你正在拿未來冒不必要的風險，這不是勇敢，是造次。"
        },
        topics: {
            love: { upright: "一場說走就走的戀情，輕鬆但無承諾。", reversed: "逃避責任，不願承諾，關係中的兒童戲碼。" },
            career: { upright: "大膽創業或轉職的好時機，哪怕計畫不周。", reversed: "行事草率導致失敗，工作態度散漫，小心被解僱。" },
            finance: { upright: "投資新領域，收益全看運氣，勿壓身家。", reversed: "衝動消費，財務漏洞百出，切勿借貸投資。" },
            health: { upright: "充滿活力，適合體能挑戰，但也容易受小傷。", reversed: "意外傷害風險高，注意力渙散，別做危險動作。" },
            decision: { upright: "不用邏輯思考，跟隨直覺，跳就對了。", reversed: "現在不適合做決定，你的判斷力正飆向谷底。" },
            daily: { upright: "保持童心，今天會有驚喜，別計畫太多。", reversed: "今天容易遺失物品或做錯事，做事請三思。" }
        }
    },
    {
        id: 1,
        name: "魔術師",
        general: {
            upright: "你擁有所有資源與能力。別再找藉口，現在是行動的時刻。",
            reversed: "你是個騙徒。能力不足卻想方設法掩蓋，小心被拆穿。"
        },
        topics: {
            love: { upright: "主動出擊，你能自如掌控感情關係的發展。", reversed: "花言巧語，對方可能只是在騙你的感情或時間。" },
            career: { upright: "展現實力與創意的黃金期，專案將順利推動。", reversed: "工作詐欺，或是你的能力無法支應目前的職位。" },
            finance: { upright: "善用理財技巧，資金運轉靈活，收益可期。", reversed: "投資手法不當，甚至涉及詐騙，小心血本無歸。" },
            health: { upright: "身心協調度高，適合學習新技能改善健康。", reversed: "精神耗弱，注意力無法集中，可能濫用藥物。" },
            decision: { upright: "採取主動，你完全有能力解決當前問題。", reversed: "誤判局勢，不要試圖用歪路解決問題。" },
            daily: { upright: "效率極高的一天，把手邊的事情全部做完。", reversed: "今天容易說錯話，別試圖欺騙任何人。" }
        }
    },
    {
        id: 2,
        name: "女祭司",
        general: {
            upright: "保持沈默，向內探索。邏輯在此無用，相信你的直覺。",
            reversed: "你與內心斷連了。情緒封閉，或者是過度敏感導致誤判。"
        },
        topics: {
            love: { upright: "關係停滯未前，需要沈澱思考，不宜進展。", reversed: "對方心事重重，拒絕溝通，或是情緒過度冷淡。" },
            career: { upright: "保持低調，幕後策劃比台前表現更為重要。", reversed: "職場上被孤立，資訊獲取受阻，無法做出正確判斷。" },
            finance: { upright: "不宜進行大額投資，觀察就好，別輕舉妄動。", reversed: "因資訊不對稱而虧損，小心理財陷阱。" },
            health: { upright: "身心健康取決於靜心，適合冥想或調理荷爾蒙。", reversed: "內分泌失調，生理期不順，心理壓抑過久。" },
            decision: { upright: "理性派不上用場，停止思考，聽聽潛意識的聲音。", reversed: "你的直覺準頭很差，現在不要憑感覺做事。" },
            daily: { upright: "少說話多觀察，今天適合獨處。", reversed: "今天容易想太多，或是聽錯別人的話。" }
        }
    },
    {
        id: 3,
        name: "皇后",
        general: {
            upright: "豐收與富饒。發揮你的同理心與創造力，成果將自然顯現。",
            reversed: "過度縱慾與依賴。創造力受阻，或是家庭關係令人窒息。"
        },
        topics: {
            love: { upright: "感情豐收，可能迎來穩定的伴侶或懷孕消息。", reversed: "情感需求過度黏人，這段關係讓人喘不過氣。" },
            career: { upright: "工作舒適順遂，適合從事創意或協調類任務。", reversed: "工作混亂，缺乏紀律，或是被老板過度微觀管理。" },
            finance: { upright: "財務狀況舒適，享受生活花費沒問題。", reversed: "透支消費，買了太多不需要的奢飾品。" },
            health: { upright: "身心愉悦，適合從事美容或SPA放鬆。", reversed: "暴飲暴食，或是因缺乏運動導致新陳代謝慢。" },
            decision: { upright: "選擇那條讓你感覺舒適、被照顧的路。", reversed: "別被情緒勒索，也不要因貪圖安逸而選錯。" },
            daily: { upright: "善待自己，享受美食與美好的事物。", reversed: "小心過度放縱，今天容易變得懶散。" }
        }
    },
    {
        id: 4,
        name: "皇帝",
        general: {
            upright: "建立秩序與紀律。運用權威與結構來鞏固你的成果。",
            reversed: "價化與專制。過度控制導致反彈，或是你缺乏領導能力。"
        },
        topics: {
            love: { upright: "尋求穩定與保障的關係，適合步入家庭。", reversed: "伴侶過度控制你，充滿父權色彩，令人反感。" },
            career: { upright: "掌握實權，展現領導力，確立規則與目標。", reversed: "老闆專橫跋扈，或是你因過於固執而導致計畫失敗。" },
            finance: { upright: "穩健理財，長期投資，積累資產的好時機。", reversed: "財務管理過於僵化，或因固執而導致虧損。" },
            health: { upright: "體力充沛，適合規律且高強度的體能訓練。", reversed: "高血壓、壓力過大，需注意心血管健康。" },
            decision: { upright: "以邏輯和規則為準，採取強硬手段。", reversed: "別太霸權，你的固执正在阻礙解決方案。" },
            daily: { upright: "掌控局面，按表操課，完成你的計畫。", reversed: "今天容易與權威起衝突，別太硬碰硬。" }
        }
    },
    {
        id: 5,
        name: "教皇",
        general: {
            upright: "遵守傳統與社會規範。尋求導師或宗教的指引。",
            reversed: "挑戰權威與傳統。別盲目跟從，或是你已經被教條綁架。"
        },
        topics: {
            love: { upright: "適合尋求門當戶對、獲得家族認可的婚姻。", reversed: "世俗壓力阻礙感情，或伴侶間價值觀嚴重對立。" },
            career: { upright: "考取證照、進修，在公司體制內尋求升遷。", reversed: "職場鬥爭，或是你的創新想法被保守派打壓。" },
            finance: { upright: "遵循傳統理財方式，穩定但較無爆發力。", reversed: "聽信錯誤建議導致虧損，別迷信所謂的大師。" },
            health: { upright: "遵循醫囑，傳統療法對你最有效。", reversed: "誤信偏方，或是過度執著於錯誤的健康觀念。" },
            decision: { upright: "照規矩來，尋求專家建議，別自作聰明。", reversed: "打破常規，別被傳統束縛，但也 別走極端。" },
            daily: { upright: "多聽聽前輩的意見，今天適合學習。", reversed: "今天的规矩很煩人，但你最好還是別太叛逆。" }
        }
    },
    {
        id: 6,
        name: "戀人",
        general: {
            upright: "做出關鍵選擇。基於價值觀的一致性，選擇那條對的路。",
            reversed: "分離與不和。選錯了邊，或是關係中的誘惑導致失和。"
        },
        topics: {
            love: { upright: "和諧的關係，熱戀或承諾的契約。", reversed: "劈腿、外遇，或是因價值觀不合而分手。" },
            career: { upright: "愉快的合作夥伴關係，雙贏的選擇。", reversed: "合作破裂，無法達成共識，工作夥伴扯後腿。" },
            finance: { upright: "資金整合，理財選擇多且有利。", reversed: "因衝動選擇錯誤的投資標的，導致資金困難。" },
            health: { upright: "荷爾蒙平衡，身心協調，感覺良好。", reversed: "性方面的問題，或是因情緒糾葛導致身心失調。" },
            decision: { upright: "跟隨你的內心價值，這個決定會影響長遠。", reversed: "你被誘惑矇蔽了雙眼，別急著做決定。" },
            daily: { upright: "今天會面臨選擇，選那個讓你感覺對的。", reversed: "小心爭執，今天不容易與人達成共識。" }
        }
    },
    {
        id: 7,
        name: "戰車",
        general: {
            upright: "憑藉意志力與紀律克服障礙。前進，別回頭。",
            reversed: "失控與混亂。缺乏方向感，你正被情緒或外力牽著走。"
        },
        topics: {
            love: { upright: "關係快速發展，掌握主動權，雙方一起進步。", reversed: "感情失控，容易吵架，或是單方面的盲目推進。" },
            career: { upright: "競爭力強，目標明確，將在業績上獲勝。", reversed: "計畫失控，方向迷失，工作陷入混乱。" },
            finance: { upright: "積極理財，財務快速增長，衝勁十足。", reversed: "投資情緒化，資金鏈斷裂，小心交通詐賠。" },
            health: { upright: "體能量好，適合競技運動，展現生命韌性。", reversed: "因急躁受傷，或是循環系統、壓力問題爆發。" },
            decision: { upright: "採取強硬行動，用意志力貫穿目標。", reversed: "別亂了陣腳，你現在根本不知道要去哪。" },
            daily: { upright: "衝吧！今天任何障礙都擋不住你。", reversed: "今天容易出車禍或發生爭吵，別急躁。" }
        }
    },
    {
        id: 8,
        name: "力量",
        general: {
            upright: "以柔克剛。內在的力量比蠻力更有效，你有能力馴服困難。",
            reversed: "自我懷疑與軟弱。你讓恐懼佔據上風，或是試圖用強權掩蓋不安。"
        },
        topics: {
            love: { upright: "包容與耐心能化解關係中的危機。", reversed: "缺乏安全感，試圖控制伴侶，導致關係緊張。" },
            career: { upright: "以專業與耐心應對難搞的客戶或上司。", reversed: "對工作缺乏信心，被壓力擊垮，甚至想要逃避。" },
            finance: { upright: "理財需要紀律，控制慾望才能守財。", reversed: "因貪婪或懼怕而做出錯誤財務決策。" },
            health: { upright: "恢復力強，身心治療能力大增。", reversed: "免疫力下降，或是成癮行為正在侵蝕健康。" },
            decision: { upright: "堅持下去，用耐心而不是對抗來解決。", reversed: "你太害怕了，現在不是做決定的好時候。" },
            daily: { upright: "保持耐心與溫柔，你今天能搞定所有事。", reversed: "覺得自己很弱，小心被欺负，別逞強。" }
        }
    },
    {
        id: 9,
        name: "隱者",
        general: {
            upright: "暫時退隱。獨處是為了更看清真相，尋求內在的光。",
            reversed: "孤立與逃避。過度孤僻導致與社會脱節，或是你拒絕面對現實。"
        },
        topics: {
            love: { upright: "單身期，或是需要冷靜空間思考關係。", reversed: "彼此冷戰，拒絕溝通，或是因過度內向而錯失良緣。" },
            career: { upright: "適合獨立作業、研究，或是職場上的休整期。", reversed: "工作被邊緣化，或是因固執己見而不聽勸告。" },
            finance: { upright: "保守理財，不跟風，審慎評估每一筆開銷。", reversed: "因資訊閉塞而錯失機會，或守財過度。" },
            health: { upright: "心理諮商或獨處休養，對身心都有益。", reversed: "嚴重孤獨影響健康，或是刻意忽視身體問題。" },
            decision: { upright: "暫時不要動，先退一步靜觀其變。", reversed: "你的想法太偏激了，需要聽聽別人的意見。" },
            daily: { upright: "減少社交，留時間給自己。", reversed: "別一直躲在房間裡，出來見見陽光。" }
        }
    },
    {
        id: 10,
        name: "命運之輪",
        general: {
            upright: "命運的轉變。好運降臨，抓住機遇，順勢而為。",
            reversed: "惡運連連。接受改變，這是命運的考驗，別做無謂抵抗。"
        },
        topics: {
            love: { upright: "命中注定的相遇，關係進入新階段。", reversed: "時機不對，緣分已盡，或是運氣太差遇人不淑。" },
            career: { upright: "意外的升遷或好機會，運氣站在你這邊。", reversed: "職場變動大，可能被裁員或遭遇打壓，霉運。 " },
            finance: { upright: "財運轉旺，可能有意外之財或投資回報。", reversed: "資金周轉失靈，投資運差，賠錢機率高。" },
            health: { upright: "身體機能自然修復，運氣轉好。", reversed: "舊疾復發，或是遭遇突發性傷病。" },
            decision: { upright: "運氣站在你這邊，大膽一搏。", reversed: "時運不濟，現在行動只會更糟，靜觀其變。" },
            daily: { upright: "轉運的一天，好事會發生。", reversed: "今天諸事不順，小心行事，別強求。" }
        }
    },
    {
        id: 11,
        name: "正義",
        general: {
            upright: "因果報應。公平與真理，你的決定將有相應的結果。",
            reversed: "不公與偏頗。遭受不對等待遇，或是你正在逃避責任。"
        },
        topics: {
            love: { upright: "關係平衡，公平對待，合約順利履行。", reversed: "感情的不公平，付出與回報不成正比，或是法律糾紛。" },
            career: { upright: "公事公辦，簽約談判順利，職場正義伸張。", reversed: "遭遇職場霸凌或訴訟，或是你的工作有瑕疵。" },
            finance: { upright: "理財公正，財務狀況平衡，避免糾紛。", reversed: "理財糾紛，或是因不誠實導致財務損失。" },
            health: { upright: "身體平衡，規律作息帶來的健康。", reversed: "因不自律導致身體代謝失調，需注意法律風險。" },
            decision: { upright: "做正確的事，依據事實與邏輯判斷。", reversed: "別存僥倖心理，你的偏見會導致錯誤決定。" },
            daily: { upright: "保持客觀，今天適合處理手續或契約。", reversed: "小心被坑，今天涉及法律或金錢的事都要慎重。" }
        }
    },
    {
        id: 12,
        name: "倒吊人",
        general: {
            upright: "犧牲與等待。換個角度看世界，暫時的停頓是為了獲得智慧。",
            reversed: "無謂的犧牲。徒勞無功，或是你只想拖延，拒絕做出必要的改變。"
        },
        topics: {
            love: { upright: "為感情付出，但需耐心等待結果。", reversed: "單方面的極度付出卻得不到回報，感情拖延慘烈。" },
            career: { upright: "事業停滯期，這是為了累積能量，別急躁。", reversed: "毫無目的的犧牲，工作卡住，是你自己不願行動。" },
            finance: { upright: "資金積壓，需要耐心等待回報。", reversed: "投資方向錯誤，越賠越多，請立刻停損。" },
            health: { upright: "透過休息或靜止來治療，如冥想。", reversed: "血流循環不佳，或是因消極態度影響康復。" },
            decision: { upright: "緩一緩，你現在需要更多信息。", reversed: "別再拖了，你的犧牲沒有意義，快行動。" },
            daily: { upright: "今天會覺得慢吞吞，適合思考不適合做事。", reversed: "無謂的等待讓你焦躁，別在那裡裝受害者。" }
        }
    },
    {
        id: 13,
        name: "死神",
        general: {
            upright: "結束與重生。必須結束舊事物，新事物才能到來，別抗拒。",
            reversed: "停止與僵化。你抗拒改變，導致狀態腐爛，無法前進。"
        },
        topics: {
            love: { upright: "終結一段壞關係，為新感情騰出空間。", reversed: "死守一段已經結束的感情，導致痛苦延續。" },
            career: { upright: "辭職、轉型，徹底改變職業路線的時機。", reversed: "厭惡現狀卻不肯離開，職業生涯停滯不前。" },
            finance: { upright: "大幅度的財務重組，清除舊債。", reversed: "財務狀況僵化，因無法捨棄爛投資而持續虧損。" },
            health: { upright: "舊疾痊癒，或是生活形態的徹底革新。", reversed: "病痛纏身，抗拒改變壞習慣導致健康持續惡化。" },
            decision: { upright: "當機立斷結束它，這是唯一的路。", reversed: "別拖泥帶水，你的猶豫才是問題所在。" },
            daily: { upright: "結束某些事吧，今天是清算日。", reversed: "你還在逃避改變嗎？今天會過得很痛苦。" }
        }
    },
    {
        id: 14,
        name: "節制",
        general: {
            upright: "平衡與調和。穩健的步調，透過溝通與適應來達成目標。",
            reversed: "失衡與過度。缺乏耐性，行動過激或過於保守，導致局勢混亂。"
        },
        topics: {
            love: { upright: "穩定且和諧的關係，雙方互相適應。", reversed: "感情忽冷忽熱，缺乏耐心，或是一方太過控制。" },
            career: { upright: "工作節奏良好，適合協調與跨部門合作。", reversed: "工作失衡，或是急躁冒進，導致任務失敗。" },
            finance: { upright: "收支平衡，財務健康，適合長期規劃。", reversed: "花費過度或過度節儉，理財失去平衡。" },
            health: { upright: "身體機能平衡，飲食與作息正常。", reversed: "飲食失調，物質濫用（酒精、藥物），需注意中毒。" },
            decision: { upright: "保持中庸之道，不要走極端。", reversed: "你的耐性不足，別在情緒化時做決定。" },
            daily: { upright: "保持平穩，今天適合調整步調。", reversed: "今天容易做得過火或不夠，需時時提醒自己平衡。" }
        }
    },
    {
        id: 15,
        name: "惡魔",
        general: {
            upright: "束縛與執著。你被物質或欲望控制，看清自己的枷鎖。",
            reversed: "覺醒與解放。意識到束縛並嘗試掙脫，但可能尚未完全成功。"
        },
        topics: {
            love: { upright: "危險的吸引力，沉迷於肉體關係或毒害性行為。", reversed: "結束一段有害的關係，或是試著擺脫情緒勒索。" },
            career: { upright: "為名利所困，工作環境壓抑，充滿勾心鬥角。", reversed: "想辭職擺脫痛苦的工作，但可能只是換湯不換藥。" },
            finance: { upright: "虛榮消費，因貪婪而做出不理智投資。", reversed: "開始意識到的債務問題，試著控制物質慾望。" },
            health: { upright: "成癮問題，或是因壓抑導致身心障礙。", reversed: "嘗試戒除壞習慣，但缺乏意志力容易復發。" },
            decision: { upright: "你正在被恐懼或貪欲支配，小心陷阱。", reversed: "雖然想走，但你內心還有牽掛，不夠徹底。" },
            daily: { upright: "小心欲望的誘惑，今天容易被騙或當冤大頭。", reversed: "嘗試打破壞習壞習慣，雖然會有掙扎。" }
        }
    },
    {
        id: 16,
        name: "高塔",
        general: {
            upright: "崩塌與劇變。既有的結構毀結構毀滅，雖然痛苦但不可避免。",
            reversed: "毀滅的餘波。逃避改變，或是在災難後苟延殘喘，重建困難。"
        },
        topics: {
            love: { upright: "突如其來的分手或感情劇變，關係破裂。", reversed: "關係名存實亡，雙方都不願面對現實，僵持不下。" },
            career: { upright: "公司倒閉、失業或突發性的職業危機。", reversed: "職場政治導致的工作環境惡化，遲早會爆。" },
            finance: { upright: "金融風暴或重大投資失敗，損失慘重。", reversed: "財務危機延燒，或是你試圖掩飾虧空。" },
            health: { upright: "突發性的急症或意外傷害，需立即送醫。", reversed: "長期積累的病痛爆發，康復期漫長。" },
            decision: { upright: "別再抵抗了，放手吧，結果已定。", reversed: "你只是在拖延時間，毀滅遲早來臨。" },
            daily: { upright: "驚嚇的一天，小心意外，做好心理準備。", reversed: "震盪後的混亂，今天收拾殘局會很累。" }
        }
    },
    {
        id: 17,
        name: "星星",
        general: {
            upright: "希望與靈感。黑暗後的寧靜，相信未來，心靈獲得滋養。",
            reversed: "失望與空想。缺乏信心，或是過度理想化導致現實落差。"
        },
        topics: {
            love: { upright: "心靈契合的戀情，充滿希望與療癒。", reversed: "對愛情失望，或是活在自己的幻想中拒絕現實。" },
            career: { upright: "充滿創造力的時期，適合藝術或規劃未來。", reversed: "眼高手低，計畫不切實際，容易受挫折。" },
            finance: { upright: "財務狀況好轉，有點小運氣，適合長期儲蓄。", reversed: "對財務過度樂觀，收入不如預期，別花未來的錢。" },
            health: { upright: "身心療癒，恢復得很好，保持樂觀心情。", reversed: "心理狀態不穩，過度焦慮影響健康。" },
            decision: { upright: "樂觀其成，跟隨靈感指引。", reversed: "別做白日夢了，現實一點才不會輸。" },
            daily: { upright: "放鬆，今天適合許願或從事心靈活動。", reversed: "覺得失望或迷茫，今天行動力不足。" }
        }
    },
    {
        id: 18,
        name: "月亮",
        general: {
            upright: "恐懼與幻覺。事情並非表象看來如此，唯有直面恐懼才能見真章。",
            reversed: "釋放恐懼。迷霧散去，或是你仍處於焦慮中但開始清醒。"
        },
        topics: {
            love: { upright: "關係充滿不安全感，可能涉及欺騙或三角戀。", reversed: "發現真相，或是從惡夢般的感情中清醒。" },
            career: { upright: "職場充滿伏流與陰謀，直覺比資訊可靠。", reversed: "揭穿職場謊言，或是從混亂的狀況中找到出口。" },
            finance: { upright: "財務狀況不明朗，切勿投資，小心詐騙。", reversed: "發現財務漏洞，或是停止不實際的投資夢想。" },
            health: { upright: "精神焦慮、惡夢，或是女性週期問題。", reversed: "心理狀況逐漸好轉，或找出隱性病因。" },
            decision: { upright: "這不是做決定的好時機，資訊不全且混亂。", reversed: "別再受過去陰影影響，你可以看清真相了。" },
            daily: { upright: "今天會有點陰鬱，相信直覺，別衝動。", reversed: "迷霧逐漸散去，真相即將浮現。" }
        }
    },
    {
        id: 19,
        name: "太陽",
        general: {
            upright: "成功與喜悅。光明顯現，所有事情都將順利進行，充滿正能量。",
            reversed: "成功受阻。過度樂觀導致判斷錯誤，或是暫時的雲層遮蔽了光。"
        },
        topics: {
            love: { upright: "璀璨滿意的感情，可能迎來婚禮或新生兒。", reversed: "期待落空，或是因過度自信導致相處摩擦。" },
            career: { upright: "事業高度達成，獲得肯定與掌聲。", reversed: "計畫過於龐大失控，或是表面光鮮實則虧空。" },
            finance: { upright: "財運亨通，獲利豐厚，值得慶祝。", reversed: "投資過度擴張，或是浪費無度導致入不敷出。" },
            health: { upright: "健康活力滿分，身心都處於最佳狀態。", reversed: "因過度消耗（如曬傷或狂歡）導致身體不適。" },
            decision: { upright: "去做吧，毫無疑問，你會贏。", reversed: "別太自負，你的自信可能會讓你忽視細節。" },
            daily: { upright: "絕佳好日子，出門玩，享受榮光！", reversed: "原本順利的事今天可能會有小插曲，別氣餒。" }
        }
    },
    {
        id: 20,
        name: "審判",
        general: {
            upright: "復甦與召喚。回應內心的呼召，過去的努力將接受結算與新生。",
            reversed: "自我懷疑與否定。拒絕內召，逃避審判，導致發展停滯。"
        },
        topics: {
            love: { upright: "關係升級，決定復合或共組家庭。", reversed: "對感情判決過苛，或因過去陰影拒絕寬恕。" },
            career: { upright: "職涯評估期，獲得晉升或轉型的機會。", reversed: "工作評核不佳，或是你對現狀充滿怨懟。" },
            finance: { upright: "過去的投資現在獲得回報，理財成果檢視。", reversed: "財務決策錯誤，現在開始反噬，無法翻身。" },
            health: { upright: "重大健康轉折，通常是向好方向發展。", reversed: "健康警鐘響起，若不改變生活習慣後果嚴重。" },
            decision: { upright: "時機成熟，做出那個改變一生的決定。", reversed: "你還在逃避什麼？面對現實才能做出正確判斷。" },
            daily: { upright: "適合回顧總結，你會得到答案。", reversed: "今天容易自我否定，別太嚴格審視自己。" }
        }
    },
    {
        id: 21,
        name: "世界",
        general: {
            upright: "圓滿與完成。一個阶段的結束，你已達成目標，享受榮耀。",
            reversed: "未完成與封閉。差臨門一腳，或是因外力導致無法圓滿，被迫延誤。"
        },
        topics: {
            love: { upright: "極度滿足的關係，步入殿堂或完美的旅程。", reversed: "關係停滯不前，無法更進一步，或是面臨異地戀阻礙。" },
            career: { upright: "專案圓滿結案，獲得完整成就，準備下一站。", reversed: "收尾困難，工作無法如期完成，或是覺得缺乏成就感。" },
            finance: { upright: "財務目標達成，資金週轉靈活，無後顧之憂。", reversed: "理資計畫未能達成預期收益，短鎖無法解套。" },
            health: { upright: "完全康復，身心達到和諧統一的境界。", reversed: "久病難癒，或是健康目標一直達不到。" },
            decision: { upright: "完美收官，你可以安心展開下一個計畫。", reversed: "別急著結束，還有細節沒處理好，會有遺憾。" },
            daily: { upright: "圓圓滿的一天，慶祝你的成就！", reversed: "今天會覺得卡卡的，事情总差那麼一點點。" }
        }
    },
    {
        id: 22,
        name: "權杖首牌",
        general: {
            upright: "創意的火花。新的行動計畫誕生，熱情與能量滿滿。",
            reversed: "延誤與受阻。行動力不足，或是熱情過度快導致後繼無力。"
        },
        topics: {
            love: { upright: "充滿激情的新戀情，主動追求成功。", reversed: "熱情消退太快，或是單相思無法開展。" },
            career: { upright: "新案子或新工作的開始，衝勁十足。", reversed: "計畫難產，起步太慢，被搶先機。" },
            finance: { upright: "新的收入來源或投資機會出現。", reversed: "資金不足，投資計畫無法啟動。" },
            health: { upright: "精力充沛，適合開始新的健身計畫。", reversed: "身體疲勞，或是運動過度導致受傷。" },
            decision: { upright: "立刻開始！別再等了，第一劑強心針。", reversed: "時機未到，你的準備不夠。" },
            daily: { upright: "能量爆發的一天，做點什麼吧！", reversed: "今天容易虎頭蛇尾，別定太大目標。" }
        }
    },
    {
        id: 23,
        name: "權杖二",
        general: {
            upright: "規劃與決定。站在世界看全球，評估可能性，做出選擇。",
            reversed: "恐懼選擇。資訊過多導致猶豫不決，或是一味逃避。"
        },
        topics: {
            love: { upright: "正在評估追求對象，或是面臨感情抉擇。", reversed: "對未來感到恐懼，不敢承諾，錯失良緣。" },
            career: { upright: "規劃未來發展，正在考慮是否跳槽或升遷。", reversed: "不敢邁出舒適圈，導致職涯停滯。" },
            finance: { upright: "評估各項理財方案，還沒下注。", reversed: "因恐懼決錯而猶豫不決，錯過投資時機。" },
            health: { upright: "規劃健康管理，正在挑選適合的方式。", reversed: "對健康狀況感到焦慮，不敢面對檢查結果。" },
            decision: { upright: "掌握全局後做出決定，你很有主導權。", reversed: "你害怕失去現有的一切，所以不敢動。" },
            daily: { upright: "今天適合做計畫，收集資訊。", reversed: "今天會很猶豫，別逼自己做決定。" }
        }
    },
    {
        id: 24,
        name: "權杖三",
        general: {
            upright: "遠見與擴張。計畫推展順利，準備迎接更廣闊的舞台。",
            reversed: "挫折與阻塞。最初的熱情退去，發現實現困難，行動中止。"
        },
        topics: {
            love: { upright: "長遠的感情規劃，或異地戀發展順利。", reversed: "未來規劃破滅，雙方對遠距離感到疲憊。" },
            career: { upright: "將觸角伸向海外或新市場，領先群倫。", reversed: "計畫受阻，或是一味擴張導致資源不足。" },
            finance: { upright: "尋求新的財務增長點，準備擴大投資。", reversed: "資金鏈斷裂，擴張失敗，損失慘重。" },
            health: { upright: "為未來健康打底，或是恢復期展現遠景。", reversed: "恢復進度不如預期，感到無力。" },
            decision: { upright: "往長遠看，你的決定是對的。", reversed: "別急著擴張，先把眼前的障礙解決。" },
            daily: { upright: "向前看吧，好消息正在路上。", reversed: "今天有些阻力，別太早高興。" }
        }
    },
    {
        id: 25,
        name: "權杖四",
        general: {
            upright: "穩固與歡慶，在穩定的基礎上享受成果，歡迎訪客。",
            reversed: "封閉與排斥，不願離開舒適圈，或是因固執阻礙合作。"
        },
        topics: {
            love: { upright: "穩定的戀情，或是帶伴侶回家見家人。", reversed: "對方家族反對，或是不願將關係公諸於世。" },
            career: { upright: "立基穩固，享受工作成果，團隊和諧。", reversed: "排外心態，拒絕新合作，導致停滯。" },
            finance: { upright: "財務穩固，適合置產或家庭規劃。", reversed: "過度保守，錯過投資機會，或守財奴。" },
            health: { upright: "身心穩定，體能狀況良好。", reversed: "因固守不良習慣導致健康停滯。" },
            decision: { upright: "保持現狀，穩扎穩打是最好的策略。", reversed: "你太固執了，稍微變通一下會更好。" },
            daily: { upright: "開心的聚會，和朋友家人相處。", reversed: "今天容易閉門造車，不想理人。" }
        }
    },
    {
        id: 26,
        name: "權杖五",
        general: {
            upright: "衝突與競爭。面對反對意見，這是一場混戰。",
            reversed: "逃避衝突，雙方竄疲力盡，或是無謂的內耗。"
        },
        topics: {
            love: { upright: "感情競爭激烈，或是爭吵不斷，火藥味重。", reversed: "關係中的角力讓人疲憊，雙方都不願讓步。" },
            career: { upright: "職場競爭白熱化，需要與人爭奪資源。", reversed: "不想面對職場鬥爭，只想逃避，導致被边缘化。" },
            finance: { upright: "花錢如流水，或是在市場競爭中失利。", reversed: "因競爭導致理財焦慮，最終雙輸。" },
            health: { upright: "壓力過大，容易發燒或發炎。", reversed: "長期疲勞，身心俱疲。 " },
            decision: { upright: "準備好戰鬥，你必須爭取權益。", reversed: "衝突已無法解決，尋求暫時的休兵。" },
            daily: { upright: "今天雜事紛爭多，保持警覺。", reversed: "覺得累，無心應付爭吵。" }
        }
    },
    {
        id: 27,
        name: "權杖六",
        general: {
            upright: "勝利與前行。達成階段性目標，獲得認同繼續前進。",
            reversed: "傲慢與驕兵。自視過高，或是領先優勢喪失，後繼無力。"
        },
        topics: {
            love: { upright: "順利的戀情，獲得雙方家長祝福。", reversed: "戀情得意忘形，忽略伴侶感受導致危機。" },
            career: { upright: "工作表現亮眼，獲得上司表揚或升遷。", reversed: "狂妄自大，引起同事反感，工作出錯。" },
            finance: { upright: "投資獲利，自信心大增。", reversed: "貪婪擴張，小心由贏轉輸。" },
            health: { upright: "身體強健，運動表現優異。", reversed: "過度自信導致運動傷害。" },
            decision: { upright: "你做對了，保持這個節奏。", reversed: "別太自負，你還沒做到完美。" },
            daily: { upright: "表揚自己的一天，你做得很好。", reversed: "小心得意忘形，今天容易失誤。" }
        }
    },
    {
        id: 28,
        name: "權杖七",
        general: {
            upright: "堅持立場。即使面對挑戰，你也願意守住自己的高地。",
            reversed: "不知所措。防禦過當，或是放棄抵抗，輕易認輸。"
        },
        topics: {
            love: { upright: "堅持自己的感情原則，不輕易妥協。", reversed: "在關係中太防備，把關係搞僵。" },
            career: { upright: "為自己的觀點辯護，抵抗職場壓力。", reversed: "被職場攻擊擊垮，或是放棄自己的專業。" },
            finance: { upright: "在波動的市場中守住資金。", reversed: "因恐慌而賤售資產。" },
            health: { upright: "試圖克服頑固的健康問題。", reversed: "對抗疾病失敗，心裏先投降了。" },
            decision: { upright: "立場穩固，堅持你的底線。", reversed: "你根本沒搞清楚狀況，別固執。" },
            daily: { upright: "堅持自己，別被人影響。", reversed: "今天容易覺得受攻擊而防備過度。" }
        }
    },
    {
        id: 29,
        name: "權杖八",
        general: {
            upright: "迅速行動。全速前進，為了目標快速移動，不浪費時間。",
            reversed: "匆忙與混亂。雖然動得快，但方向錯誤或徒勞無功。"
        },
        topics: {
            love: { upright: "發展迅速的熱戀，或是立刻決定見面。", reversed: "感情來去匆匆，或是太過急躁把人嚇跑。" },
            career: { upright: "專案進展神速，立刻執行多項任務。", reversed: "忙中有錯，為了求快而品質低落。" },
            finance: { upright: "投資報酬快，或是資金快速流轉。", reversed: "因急躁錯失機會，或匆忙下單造成損失。" },
            health: { upright: "行動力強，適合快節奏的運動。", reversed: "意外受傷或因匆忙摔跤。" },
            decision: { upright: "動作要快，機會稍縱即逝。", reversed: "別慌，你越急越亂。" },
            daily: { upright: "動起來吧，今天時間很緊湊。", reversed: "今天會忙到翻過去，但可能一事無成。" }
        }
    },
    {
        id: 30,
        name: "權杖九",
        general: {
            upright: "堅韌與防防衛。雖然受傷但依然站立，準備迎接最後一擊。",
            reversed: "過度防衛。毫無必要堅持，對自己缺乏信心，身心備受折磨。"
        },
        topics: {
            love: { upright: "守護愛情，即使受傷也不放棄。", reversed: "感情中遍體鱗傷卻死撐，自我折磨。" },
            career: { upright: "即使競爭激烈，仍堅守崗位。", reversed: "對工作失去熱情，僅是責任感在苦撐。" },
            finance: { upright: "在虧損中堅持防守，等待回升。", reversed: "因財務壓力徹底焦慮，看不清出路。" },
            health: { upright: "頑強對抗病痛，抵抗力強。", reversed: "疑神疑鬼，觉得自己病得很重其實沒事。" },
            decision: { upright: "撐住最後一刻，勝利在望。", reversed: "你已經盡力了，放手吧，別再折磨自己。" },
            daily: { upright: "今天很累，但你得撑過去。", reversed: "今天心情很鬱卒覺得全世界都針對你。" }
        }
    },
    {
        id: 31,
        name: "權杖十",
        general: {
            upright: "重擔與責任。負擔過重，但也意味著即將到達終點。",
            reversed: "釋放重擔。無法再承受壓力，或是推卸卸責任，徹底崩盤。"
        },
        topics: {
            love: { upright: "感情壓力過大，責任感重於快樂。", reversed: "不想再承擔感情責任，想逃離。" },
            career: { upright: "工作量大到爆，但即將完成。", reversed: "職業倦怠，放棄任務或被壓垮。" },
            finance: { upright: "背負著沉重的房貸或債務。", reversed: "財務崩盤，宣告破產或無力償還。" },
            health: { upright: "身體過勞，背部或肌肉痠痛。", reversed: "徹底病倒，不得不停下休息。" },
            decision: { upright: "這是最後一段路，咬牙也要走完。", reversed: "別扛了，你需要幫助或者乾脆放棄。" },
            daily: { upright: "忙到死的一天，事情做不完。", reversed: "終於爆炸了，什麼都不想管。" }
        }
    },
    {
        id: 32,
        name: "權杖侍者",
        general: {
            upright: "熱情的訊息。收到好消息，或是準備發起新計畫，充滿好奇。",
            reversed: "壞消息與浮躁。計畫流產，或是心浮氣躁，缺乏細節。"
        },
        topics: {
            love: { upright: "收到心意，或是開始一段充滿激情的追求。", reversed: "熱情消退，只玩玩不負責，或是收到拒絕訊息。" },
            career: { upright: "接獲新案或面試邀約，準備大展身手。", reversed: "工作粗心大意，或是對新工作感到厭煩。" },
            finance: { upright: "收到財務報告或小額獎金。", reversed: "財務上的壞消息，或是花錢不經大腦。" },
            health: { upright: "精力充沛，開始關注健康資訊。", reversed: "精神焦慮，或是因過度興奮影響睡眠。" },
            decision: { upright: "好消息來了，行動吧！", reversed: "別急著做決定，你掌握的資訊有誤。" },
            daily: { upright: "今天會有令人興奮的消息或邀約。", reversed: "今天容易粗心大意，或是收到壞消息。" }
        }
    },
    {
        id: 33,
        name: "權杖騎士",
        general: {
            upright: "迅速行動與熱情。充滿魅力的領導者，勇往直前。",
            reversed: "魯莽與衝動。過度急躁，破壞力強，容易得罪人。"
        },
        topics: {
            love: { upright: "熱烈追求，戀情火速升溫，充滿激情。", reversed: "花心不專，感情来得快去得也快，或是太過侵略性。" },
            career: { upright: "積極拓展業務，行動力強，表現亮眼。", reversed: "強出頭，行動缺乏計畫，得罪同事客戶。" },
            finance: { upright: "積極投資，行動迅速，獲利快。", reversed: "衝動投資造成虧損，揮霍無度。" },
            health: { upright: "體能爆發力強，熱愛運動。", reversed: "容易發生意外、碰撞或燙傷。" },
            decision: { upright: "動作快狠準，別猶豫。", reversed: "你太衝動了，這會毀了一切。" },
            daily: { upright: "今天能量爆棚，去衝吧！但別忘記看路。", reversed: "今天容易暴怒或衝動，後果嚴重。" }
        }
    },
    {
        id: 34,
        name: "權杖王后",
        general: {
            upright: "自信與魅力。熱情的領導者，社交高手，充滿生命力。",
            reversed: "傲慢與專橫。過於自信變成自負，或是嫉妒心強。"
        },
        topics: {
            love: { upright: "魅力四射，容易受到歡迎，感情生活熱烈。", reversed: "太過强势嚇跑對方，或是佔有欲過強。" },
            career: { upright: "職場上的意見領袖，能激勵團隊，人脈廣。", reversed: "聽不進意見，獨斷專行，引起不滿。" },
            finance: { upright: "財源廣進，善用人脤與魅力增加財富。", reversed: "揮霍金錢以炫耀，理財態度過於浮誇。" },
            health: { upright: "身體健康，熱愛生活，精力旺盛。", reversed: "壓力過大卻硬撐，或是內分泌失調。" },
            decision: { upright: "展現你的領袖魅力，大膽做主。", reversed: "收起你的傲氣，別壓垮別人。" },
            daily: { upright: "今天你是主角，盡情發揮。", reversed: "小心別太任性，今天容易樹敵。" }
        }
    },
    {
        id: 35,
        name: "權杖國王",
        general: {
            upright: "領導與掌控。天生的領袖，以實際行動達成目標，意志堅定。",
            reversed: "專制與暴政。用強權壓迫他人，或是能力不足以匹配地位。"
        },
        topics: {
            love: { upright: "給予對方安全感與保護，穩重的領導者風格。", reversed: "大男人主義，過度控制伴侶，令人窒息。" },
            career: { upright: "掌握實權，決策明確，帶領團隊贏得勝利。", reversed: "能力不足卻剛愎自用，導致團隊失敗。" },
            finance: { upright: "絕對掌控財務，理財大師，風險承受力強。", reversed: "因獨斷獨行導致財務災難，或是過度投資。" },
            health: { upright: "體強健壯，像是運動選手般的體能。", reversed: "因長期勞累過度，容易突然暴病或高血壓。" },
            decision: { upright: "拿出領袖風範，下最後的通牒。", reversed: "別玩弄權力，你現在的態度很危險。" },
            daily: { upright: "掌握主控權，今天你說了算。", reversed: "小心暴力衝突，控制你的脾氣。" }
        }
    },
    {
        id: 36,
        name: "聖杯首牌",
        general: {
            upright: "情感的湧現。新的愛情或創意靈感，充滿直覺與滿足感。",
            reversed: "情感封閉或虛假。錯失良機，或是內心感到空洞與幻滅。"
        },
        topics: {
            love: { upright: "一段嶄新的戀情，愛意萌發，或婚姻的開始。", reversed: "單相思無回應，或是不願開啟心扉拒絕感情。" },
            career: { upright: "從事充滿熱情的新工作，或靈感源源不絕。", reversed: "工作缺乏熱情，失去了最初的心，敷衍了事。" },
            finance: { upright: "財務上的好運道，情感滿足帶來的富足。", reversed: "投資情緒化，或對錢失去興趣，財務開始流失。" },
            health: { upright: "身心充滿療癒能量，情緒健康。", reversed: "情緒抑鬱，或是過度飲酒依賴物質。" },
            decision: { upright: "跟隨你的直覺，這個決定讓你感動。", reversed: "你的心是閉上的，現在做的決定會讓你後悔。" },
            daily: { upright: "令人振奮的一天，可能有令人心動的訊息。", reversed: "今天莫名孤單，容易感傷。" }
        }
    },
    {
        id: 37,
        name: "聖杯二",
        general: {
            upright: "平等的連結。合作愉快，雙向奔赴，建立關鍵的夥伴關係。",
            reversed: "關係失衡。單方面的付出，或是雙方無法達成共識，漸行漸遠。"
        },
        topics: {
            love: { upright: "和諧的關係，雙方互相吸引，感情穩定。", reversed: "分手邊緣，或是因誤解導致感情疏遠。" },
            career: { upright: "完美的合作夥伴，談判順利，互利共生。", reversed: "合作破裂，利益衝突，搭檔不可靠。" },
            finance: { upright: "合資或合夥財務狀況良好，共同成長。", reversed: "因金錢分配不均而爭吵，合夥生意虧損。" },
            health: { upright: "與他人連結感強，心理狀態因陪伴而好轉。", reversed: "因人際關係緊張導致壓力，心因性不適。" },
            decision: { upright: "尋求合作，兩個人總比一個人好。", reversed: "別指望別人能幫你，現在的合作是負累。" },
            daily: { upright: "適合約會、談判，與人相處融洽的一天。", reversed: "今天容易跟人吵架，溝通有障礙。" }
        }
    },
    {
        id: 38,
        name: "聖杯三",
        general: {
            upright: "慶祝與團聚。歡樂時光，與朋友分享喜悅，社群互動。",
            reversed: "過度享樂與孤立。聚會變質，或是沉迷酒色無法自拔，感到孤獨。"
        },
        topics: {
            love: { upright: "熱鬧的社交生活，可能透過朋友認識對象。", reversed: "第三者干擾，或是社交生活過多影響感情品質。" },
            career: { upright: "團隊氛圍良好，活動成功，業績慶功。", reversed: "工作場所流言蜚語，或是沉迷派對影響工作。" },
            finance: { upright: "有利可圖的社交，花錢買得開心。", reversed: "炫耀性消費，或是因朋友拖累而破財。" },
            health: { upright: "心情愉快，適合團體運動。", reversed: "暴飲暴食，或是宿醉，生活作息失調。" },
            decision: { upright: "參與團體，集思廣益會有結果。", reversed: "別被場面熱鬧沖昏頭，這場局不適合你。" },
            daily: { upright: "出去狂歡吧，今天適合吃吃喝喝。", reversed: "狂歡後的空虚，今天別混亂太久。" }
        }
    },
    {
        id: 39,
        name: "聖杯四",
        general: {
            upright: "冷漠與厭倦。對現狀不滿，感到無聊，錯失身邊的機會。",
            reversed: "覺醒或新契機。終於跳出自我憐憫，或是錯過了最後的機會。"
        },
        topics: {
            love: { upright: "對感情感到乏味，身在福中不知福。", reversed: "太晚發現對方的好，或是徹底冷漠拒絕挽回。" },
            career: { upright: "工作倦怠，缺乏熱情，不想動彈。", reversed: "終於願意面對工作問題，或是錯失了升遷機會。" },
            finance: { upright: "對投資不感興趣，錯過眼前的獲利機會。", reversed: "後悔沒好好把握理財機會，現在開始追悔。" },
            health: { upright: "情緒低落，無病呻吟，行動力遲緩。", reversed: "或是終於願意求助心理醫生，或是病情惡化到不得不看。" },
            decision: { upright: "你太消極了，機會就在你面前撿一撿。", reversed: "機會已經溜走了，接受現實吧。" },
            daily: { upright: "懶洋洋的一天，不想理人也不想做事。", reversed: "別再發呆了，不然什麼都沒了。" }
        }
    },
    {
        id: 40,
        name: "聖杯五",
        general: {
            upright: "失落與遺憾。哭泣過打翻了牛乳，沉浸在悲傷中不可自拔。",
            reversed: "走出悲傷。接受失去，或是無法釋懷，持續自怨自艾。"
        },
        topics: {
            love: { upright: "失戀或感情受挫，只看見失去的看不見擁有的。", reversed: "無法走出分手陰影，或是與舊愛藕斷絲連。" },
            career: { upright: "工作失敗被解僱，感到強烈被拒絕感。", reversed: "沉醉在過去的失敗中，不願找新工作。" },
            finance: { upright: "投資失利，懊悔當初的操作。", reversed: "一直執著於虧損，無法開始新的財務規劃。" },
            health: { upright: "憂鬱症，或是心病影響身體健康。", reversed: "病情好轉，或是深陷情緒泥沼無法自拔。" },
            decision: { upright: "哭夠了沒？看著後面還有的東西。", reversed: "你還在困守過去？這對未來沒幫助。" },
            daily: { upright: "今天會想哭，情緒低潮，讓自己哀悼一下。", reversed: "別再想了，往前看吧。" }
        }
    },
    {
        id: 41,
        name: "聖杯六",
        general: {
            upright: "回憶與純真。受到過去的幫助，或是懷念舊日美好時光。",
            reversed: "活過去無法成長，或過去關係的陰影持續困擾。"
        },
        topics: {
            love: { upright: "與舊情人復合， or 經朋友介紹認識新對象。", reversed: "被過去的感情陰影勒索，無法開始新關係。" },
            career: { upright: "回到老東家，或是利用過去經驗獲得幫助。", reversed: "依賴過去的成就故步自封，職位不保。" },
            finance: { upright: "繼承遺產，或接受長輩的資金援助。", reversed: "花著過去的老本，坐吃山空。" },
            health: { upright: "復原期，回到童年熟悉的生活方式療癒。", reversed: "兒時的心理創傷影響現在身心健康。" },
            decision: { upright: "想想過去的成功經驗，那是你的指引。", reversed: "別總是想著「當初若如何」，活在現在吧。" },
            daily: { upright: "遇到老朋友，或是想起往事。", reversed: "今天容易被過去困住，情緒不開心。" }
        }
    },
    {
        id: 42,
        name: "聖杯七",
        general: {
            upright: "幻想與選擇。選項太多容易迷失，追求不切實際的夢想。",
            reversed: "清醒與決斷。從幻想中醒來，或是做出了最糟的選擇。"
        },
        topics: {
            love: { upright: "幻想中的完美對象，或在眾多追求者中猶豫。", reversed: "發現現實與幻想差距太大，夢碎或是劈腿。" },
            career: { upright: "好高騖遠，不切實際地幻想職涯轉型。", reversed: "終於看清工作沒有前景，或是盲目轉職失敗。" },
            finance: { upright: "被不切實際的高報酬迷惑，充滿幻想。", reversed: "投資泡沫破滅，發現全是假象。" },
            health: { upright: "精神渙散，或是容易做白日夢。", reversed: "因心理壓力過大，幻想出病症。" },
            decision: { upright: "別做夢了，看看哪個選項是實際可行的。", reversed: "醒醒吧，你已經做了錯誤選擇。" },
            daily: { upright: "今天容易胡思亂想，腦內小劇場很多。", reversed: "幻想破滅的一天，接受現實的殘酷。" }
        }
    },
    {
        id: 43,
        name: "聖杯八",
        general: {
            upright: "離開與轉變。放棄不滿足的現狀，即使有代價也要走。",
            reversed: "恐懼與逃避。不敢離開舒適圈，或是放棄後反而迷失。"
        },
        topics: {
            love: { upright: "結束不契合的關係，選擇離開去尋找真愛。", reversed: "不願分手，在不愛的關係中苟延殘喘。" },
            career: { upright: "為了理想辭職，放棄穩定的工作環境。", reversed: "被動離開，或是離開後找不到方向。" },
            finance: { upright: "撤資，或是放棄原本的理財計畫。", reversed: "不願承認投資失敗，錯過撤資的最佳時機。" },
            health: { upright: "離開有害的環境，開始新的療癒。", reversed: "拒絕改變壞習慣，持續損害健康。" },
            decision: { upright: "壯士斷腕，現在就走。", reversed: "你太懦弱了，不敢改變。" },
            daily: { upright: "收拾行囊準備出發，適合告別過去。", reversed: "心有不甘，不想面對改變。" }
        }
    },
    {
        id: 44,
        name: "聖杯九",
        general: {
            upright: "滿足與幸福。心願得償，物質與情感皆豐富。",
            reversed: "貪婪與虛榮。外表光鮮內心空虛，或是奢華過度導致反效果。"
        },
        topics: {
            love: { upright: "極度滿意的感情，人稱羨慕的伴侶。", reversed: "感情流於表面，只在乎面子或是物質條件。" },
            career: { upright: "工作表現優異，獲得極致的肯定。", reversed: "自滿驕傲，或是工作成果華而不實。" },
            finance: { upright: "財運極佳，享受金錢帶來的高品味生活。", reversed: "揮霍無度，或為了面子買單傷荷包。" },
            health: { upright: "身心極度滿足快樂，健康狀況優良。", reversed: "暴飲暴食，縱慾過度損害健康。" },
            decision: { upright: "你已經贏了，享受成果吧。", reversed: "別吃相太難看，你的貪婪會毀了一切。" },
            daily: { upright: "開心滿足的一天，好好犒賞自己。", reversed: "覺得空虛，即使擁有很多也不快樂。" }
        }
    },
    {
        id: 45,
        name: "聖杯十",
        general: {
            upright: "圓滿的家庭與情感。最終的快樂，社群的和諧與溫暖。",
            reversed: "家庭失和與破敗。親情破裂，家庭關係扭曲，或是偽裝的幸福。"
        },
        topics: {
            love: { upright: "完美的婚姻，幸福的家庭生活。", reversed: "關係破局，同床異夢，家庭暴力或爭奪。" },
            career: { upright: "團隊凝聚力的巔峰，共創榮耀。", reversed: "職場派系惡鬥，人際關係徹底崩壞。" },
            finance: { upright: "家族共享財富，財務安全無虞。", reversed: "為了財產爭翻臉，或是家族企業破產。" },
            health: { upright: "身心完全平靜和諧，強健有力。", reversed: "家庭糾紛帶來的精神壓力，身心俱疲。" },
            decision: { upright: "這是最完美的結局，安心吧。", reversed: "別假裝一切美好，這基礎已經腐爛了。" },
            daily: { upright: "與家人朋友相聚，幸福滿滿。", reversed: "家庭風暴，今天家裡不得安寧。" }
        }
    },
    {
        id: 46,
        name: "聖杯侍者",
        general: {
            upright: "情感訊息。輕鬆浪漫的邀約，或是創意新點子。",
            reversed: "情緒不穩。幼稚的情感需求，或收到壞消息。"
        },
        topics: {
            love: { upright: "收到表白或約會邀請，輕鬆愉快的互動。", reversed: "不成熟的情緒勒索，或被拒絕的尷尬。" },
            career: { upright: "運用創意或藝術天分在工作中受矚目。", reversed: "工作態度孩子氣，或是缺乏靈感。" },
            finance: { upright: "小額的財務好消息，或是理財的新點子。", reversed: "因情緒化花錢，或是聽信傳聞吃了虧。" },
            health: { upright: "心情放鬆，適度休閒對健康有益。", reversed: "情緒週期影響健康，或是過敏。" },
            decision: { upright: "跟隨直覺，這個消息是好的。", reversed: "別太任性，你的決定太幼稚了。" },
            daily: { upright: "可能有浪漫的訊息進來，心情輕鬆。", reversed: "今天情緒起起伏伏，容易耍任性。" }
        }
    },
    {
        id: 47,
        name: "聖杯騎士",
        general: {
            upright: "浪漫的追隨者。充滿想像力與情感，主動出擊表達愛。",
            reversed: "情緒化與虛偽。逃避現實，或是花言巧語的騙子。"
        },
        topics: {
            love: { upright: "浪漫的追求，迷人的伴侶，帶給你夢。", reversed: "情緒反覆無常，或是這段關係只存在幻想中。" },
            career: { upright: "從事藝術、設計等富有創意的職務大放異彩。", reversed: "工作不切實際，逃避困難，或是逃避責任。" },
            finance: { upright: "憑著直覺投資，情感豐富帶來財運。", reversed: "因過度幻想而投資失利，容易受騙。" },
            health: { upright: "心情愉悅，情感釋放有利身心。", reversed: "情緒過度波動影響內分泌或睡眠。" },
            decision: { upright: "順應心意，做那個充滿想像力的選擇。", reversed: "你被感情矇蔽了理智，別瞎了。" },
            daily: { upright: "適合約會、看展，浪漫的一天。", reversed: "今天別太輕信別人的甜言蜜語。" }
        }
    },
    {
        id: 48,
        name: "聖杯王后",
        general: {
            upright: "直覺與包容。情感豐富且有同理心，他人的心靈導師。",
            reversed: "過度敏感與依賴。情緒勒索，或是缺乏安全感。",
        },
        topics: {
            love: { upright: "溫柔婉約的伴侶，給予無條件的愛與支持。", reversed: "情緒勒索高手，或是佔有欲強到令人窒息。" },
            career: { upright: "善於傾聽與溝通，從事諮商、照顧工作。", reversed: "情緒化影響工作判斷，太過敏感玻璃心。" },
            finance: { upright: "憑直覺理財，或因人際關係好而獲利。", reversed: "因情緒用事而破財，缺乏理財紀律。" },
            health: { upright: "身心療癒力強，重視精神健康。", reversed: "憂鬱症，或是過度敏感導致身心症。" },
            decision: { upright: "相信你的感覺，你的同理心是決策關鍵。", reversed: "你的情緒太氾濫了，冷靜點再說。" },
            daily: { upright: "發揮愛心，關心身邊的人。", reversed: "今天容易胡思亂想，覺得受了委屈。" }
        }
    },
    {
        id: 49,
        name: "聖杯國王",
        general: {
            upright: "情感深厚。情緒平穩且成熟，給予支持，掌握內在平衡。",
            reversed: "情感操控與暴戾。過度保護，或是用情感軟控制他人。"
        },
        topics: {
            love: { upright: "成熟的情感關係，給予伴侶極大的安全感。", reversed: "大男人情感勒索，控制狂，或是心軟腳軟。" },
            career: { upright: "善於經營人營人脈，藝術界的領袖，受人信賴。", reversed: "公私不分，因情感因素而做出錯誤商業決策。" },
            finance: { upright: "穩健的投資態度，同時保留人情調度空間。", reversed: "因輕信他人或過度奢華導致財務漏洞。" },
            health: { upright: "情緒管理能力強，心理健康。", reversed: "壓抑沈重，或是因情感問題導致心臟問題。" },
            decision: { upright: "用成熟的心智去衡量，不要太過冷硬。", reversed: "別被你的情感綁架，這決定太主觀了。" },
            daily: { upright: "展現你的風度，今天適合擔任協調者。", reversed: "小心情緒失控，今天別太霸道。" }
        }
    },
    {
        id: 50,
        name: "寶劍首牌",
        general: {
            upright: "思維清晰。新的想法，理智戰勝情感，絕對的力量。",
            reversed: "思緒混亂。精神受創，暴力衝突，或是運用理智傷人。"
        },
        topics: {
            love: { upright: "理性看待感情，或是單身者的理性開始。", reversed: "分手的殘酷真相，或是言語暴力。" },
            career: { upright: "新企劃思緒清晰，或是解決問題的方案出現。", reversed: "工作上出現爭執，或是決策錯誤帶來麻煩。" },
            finance: { upright: "理性理財，切分預算，不再感情用事。", reversed: "金錢糾紛，或是因衝動而破財。" },
            health: { upright: "精神專注，腦部手術或神經系統檢查。", reversed: "精神疾病，頭痛，或是遭受物理傷害。" },
            decision: { upright: "刀斬亂麻，用理智做出決定。", reversed: "思緒混亂，你現在無法理性思考。" },
            daily: { upright: "頭腦清楚的一天，適宜做困難的決定。", reversed: "今天容易發生爭吵，請控制好嘴巴。" }
        }
    },
    {
        id: 51,
        name: "寶劍二",
        general: {
            upright: "僵局與封閉。拒絕溝通，封鎖自己，等待風暴過去。",
            reversed: "突破僵局。打破沈默，或者只是延遲行動並非好策略。"
        },
        topics: {
            love: { upright: "拒絕溝通，雙方冷戰，拒絕看見真相。", reversed: "被迫面對問題，或是沈默無法再維持。" },
            career: { upright: "對工作環境不滿但裝聾作啞，不想處理。", reversed: "掩耳盜鈴，問題已經爆開來了。" },
            finance: { upright: "對財務狀況視而不見，逃避開銷。", reversed: "無法再逃避財務危機，必須處理。" },
            health: { upright: "忽視身體警訊，或是封閉心智自我設限。", reversed: "被壓迫到極點，心理防線崩潰。" },
            decision: { upright: "你選擇暫時不動，但這不是解決辦法。", reversed: "別裝睡了吧，睜開眼面對現實。" },
            daily: { upright: "不想理人，戴耳機隔绝世界的一天。", reversed: "被逼急了，今天得去處理那些爛攤子。" }
        }
    },
    {
        id: 52,
        name: "寶劍三",
        general: {
            upright: "心碎與悲傷。痛苦的創傷，分手或失敗的過後。",
            reversed: "恢復與釋放。從痛苦中走出，或是無止盡的自憐。"
        },
        topics: {
            love: { upright: "三角戀的受傷者，或是痛苦的分手經驗。", reversed: "走出情傷，或是陷在悲劇角色中無法出來。" },
            career: { upright: "被解僱，或是工作上遭受殘酷羞辱。", reversed: "從失敗中重新站起，或是自憐自艾。" },
            finance: { upright: "股市崩盤，或遭受金錢詐騙，損失慘重。", reversed: "慢慢還債，或是沈溺於過去虧損。" },
            health: { upright: "手術、創傷，或是極度悲傷影響健康。", reversed: "逐漸康復，或是心病還需心藥醫。" },
            decision: { upright: "承認痛苦，這是個殘酷的事實。", reversed: "別再哭了，該往前走了。" },
            daily: { upright: "今天會感到悲傷，是痛也是經歷。", reversed: "雨過天晴，今天心情稍微好點。" }
        }
    },
    {
        id: 53,
        name: "寶劍四",
        general: {
            upright: "休息與撤退。暫時放下戒備，靜養生息，或是退一步思考。",
            reversed: "躁動與恢復。休息不足，或是準備重返戰場。"
        },
        topics: {
            love: { upright: "感情進入平靜期或冷戰期，雙方需要空間。", reversed: "關係中的僵局被打破，準備重新接觸。" },
            career: { upright: "休假、辭職，或是職場中的沈默期。", reversed: "休長假結束，準備面現實的工作壓力。" },
            finance: { upright: "暫停理財活動，觀望狀態，保守為上。", reversed: "財務重新活絡，或是恢復支出。" },
            health: { upright: "因病休息，或是住院療養。", reversed: "恢復期過渡，開始活動但可能太心急。" },
            decision: { upright: "別急，沈澱一下再說。", reversed: "休息夠了，是時候做決定。" },
            daily: { upright: "今天適合放空、睡覺，別為了事奔波。", reversed: "別一直賴在床，今天該動了。" }
        }
    },
    {
        id: 54,
        name: "寶劍五",
        general: {
            upright: "衝突與欺詐。不擇手段的競爭，空洞的勝利，雙輸的局面。",
            reversed: "和解與放棄。放下武器承認失敗，或是依然在爭吵但毫無章法。"
        },
        topics: {
            love: { upright: "感情爭奪戰，或是言語上的互相傷害。", reversed: "結束爭鬥，雙方都受傷決定分開。" },
            career: { upright: "職場勾心鬥角，為贏不擇手段。", reversed: "承認能力不足放棄競爭，或是被職場排擠。" },
            finance: { upright: "爭奪遺產或金錢，可能面臨官司。", reversed: "理財上的失敗，承認虧損收手。" },
            health: { upright: "意外受傷，或是因壓力導致身心失衡。", reversed: "接受身體的限制，不再硬撐。" },
            decision: { upright: "為了贏，你可能要不顧一切。", reversed: "沒人願意讓你，承認輸了沒關係。" },
            daily: { upright: "今天有爭吵，甚至有人會說難聽的話。", reversed: "吵架吵累了，決定和解。" }
        }
    },
    {
        id: 55,
        name: "寶劍六",
        general: {
            upright: "過渡與撤退。帶著傷痛航向未知，離開痛苦區。",
            reversed: "滯留與混亂。拒絕離開舒適圈，路途颠簸。"
        },
        topics: {
            love: { upright: "帶著過去的創傷進入新關係，或暫時遠離感情。", reversed: "不肯離開爛感情，遷徙反而更糟。" },
            career: { upright: "被調職或離職，帶著複雜心情轉換跑道。", reversed: "工作轉型不順，或是拒絕改變。" },
            finance: { upright: "搬遷成本，或是將資金轉移安全的避風港。", reversed: "轉換理財方式陷入混亂，狀況不明。" },
            health: { upright: "轉院就醫，或是離開有毒的環境。", reversed: "拒絕治療，或是康復路遙又艱辛。" },
            decision: { upright: "走遠點吧，這裡已不能留。", reversed: "你還在猶豫什麼？前面根本沒路。" },
            daily: { upright: "適合出遠門，暫時離開煩惱。", reversed: "心情低落，搬家或出行都很累。" }
        }
    },
    {
        id: 56,
        name: "寶劍七",
        general: {
            upright: "欺騙與策略。用智取不用力，逃避衝突，或是耍小聰明。",
            reversed: "自欺欺人與被抓包。計謀失敗，內心的愧疚，或是坦白。"
        },
        topics: {
            love: { upright: "三角戀，或對伴侶隱瞞事情。", reversed: "偷吃被抓包，或是再也無法隱瞞心事。" },
            career: { upright: "職場政治，避開核心衝突，走偏門。", reversed: "辦公室政治反噬，被揭穿或背黑鍋。" },
            finance: { upright: "投資有作假嫌疑，或是小心被騙。", reversed: "財務詐欺被揭發，或是因貪小便宜吃大虧。" },
            health: { upright: "隱瞞病情，或是逃避療程。", reversed: "病情無法再隱瞞，必須面對。" },
            decision: { upright: "小心行事，別讓人發現你的底牌。", reversed: "別玩心機了，你會玩死自己。" },
            daily: { upright: "今天適合保密，別把話說太滿。", reversed: "小心被抓包，今天誠實為上策。" }
        }
    },
    {
        id: 57,
        name: "寶劍八",
        general: {
            upright: "自我囚禁。被觀念束縛，覺得無路可走，其實門沒鎖。",
            reversed: "獲得釋放。解除心魔，或是被動地離開困境。"
        },
        topics: {
            love: { upright: "自己困在感情裡出不去，不敢掙脫。", reversed: "終於決定放手，或是被對方放生了。" },
            career: { upright: "覺得工作被困住，不敢改變。", reversed: "被迫離職，或是心理障礙剛好突破。" },
            finance: { upright: "對財務狀況感到絕望，不敢嘗試新方法。", reversed: "在絕望中找到出路，或是破產後重來。" },
            health: { upright: "心病引發身體病，覺得康復無望。", reversed: "接受治療，打破心理障礙。" },
            decision: { upright: "沒人綁著你，自己走出去。", reversed: "你已經自由了，別再自己嚇自己。" },
            daily: { upright: "今天覺得卡卡的，動彈不得。", reversed: "心結稍解，終於敢走出去了。" }
        }
    },
    {
        id: 58,
        name: "寶劍九",
        general: {
            upright: "焦慮與悔恨。失眠、憂慮，被惡夢纏繞，過度擔心。",
            reversed: "持續憂鬱與痛苦。焦慮轉為病態，或是稍微好轉但仍不安。"
        },
        topics: {
            love: { upright: "徹夜難眠，對感情感到極度焦慮。", reversed: "長期的憂鬱影響關係，或是失望過度。" },
            career: { upright: "工作壓力大到無法睡覺，精神衰弱。", reversed: "職場倦怠深重，甚至患上憂鬱症。" },
            finance: { upright: "為錢擔憂到慌，深陷財務焦慮。", reversed: "財務問題導致長期精神折磨。" },
            health: { upright: "失眠，頭痛，精神焦慮症狀明顯。", reversed: "嚴重精神官能症，深陷泥沼。" },
            decision: { upright: "你的恐懼來自於你的想像，冷靜點。", reversed: "別再折磨自己了，尋求專業幫助。" },
            daily: { upright: "今晚可能會失眠，別吃太多咖啡因。", reversed: "心情依然苦澀，但稍微有點喘息空間。" }
        }
    },
    {
        id: 59,
        name: "寶劍十",
        general: {
            upright: "慘烈的終結。事情發展到最壞的地步，無路可退，谷底。",
            reversed: "重生的曙光。最壞的已經過去，恢復期漫長但開始了。"
        },
        topics: {
            love: { upright: "感情徹底結束，痛苦達到頂點。", reversed: "走出分手陰霾，雖然痛但已結束。" },
            career: { upright: "失敗無法挽回，事業崩盤，失敗。", reversed: "失敗後的整理，準備重新開始。" },
            finance: { upright: "徹底破產，財務徹底崩壞。", reversed: "最糟糕的時期已過，開始還債。" },
            health: { upright: "重病或最壞的狀況，必須面對現實。", reversed: "手術後或病重後開始緩慢復原。" },
            decision: { upright: "結果已定，認命吧，現在只有痛苦。", reversed: "活下來就是贏家，重新開始。" },
            daily: { upright: "今天糟透了，睡一覺希望明天會好。", reversed: "終於不用再痛了，慢慢好起來。" }
        }
    },
    {
        id: 60,
        name: "寶劍侍者",
        general: {
            upright: "警惕與偵查。保持耳聰目明，準備行動，或是收到新消息。",
            reversed: "八卦與閒言。消息不實，或是過度敏感，製造事端。"
        },
        topics: {
            love: { upright: "收到表白訊息，或對新對象保持觀察。", reversed: "聽信流言，或是輕浮的戀情。" },
            career: { upright: "工作上需要收集資訊，保持警覺。", reversed: "職場八卦傳播，或是謠言惑眾。" },
            finance: { upright: "關注市場新聞，搜集理財資訊。", reversed: "聽信內線謠言，投資失敗。" },
            health: { upright: "身體敏感度提高，檢查細微徵兆。", reversed: "疑神疑鬼，或是神經過敏。" },
            decision: { upright: "多聽多看，消息會給你線索。", reversed: "別聽信傳言，消息來源不可靠。" },
            daily: { upright: "消息很多的一天，要注意分辨真假。", reversed: "小心舌根，少說錯話。" }
        }
    },
    {
        id: 61,
        name: "寶劍騎士",
        general: {
            upright: "野心與行動。迅速發展，追求勝利，甚至衝動。",
            reversed: "殘忍與無情。為達目的不擇手段，或是缺乏規劃的衝動。"
        },
        topics: {
            love: { upright: "追求過度積極，感情發展迅速但缺溫度。", reversed: "粗暴的對待伴侶，或是感情來去如風。" },
            career: { upright: "工作效率高，衝勁強，目標明確。", reversed: "手段過於冷酷，得罪人，或行事魯莽。" },
            finance: { upright: "積極追求財富，行動力強。", reversed: "為了錢不擇手段，賺快心態危險。" },
            health: { upright: "行動力強，適合需要迅速決斷的醫療。", reversed: "過度勞累，或是容易發突發性意外。" },
            decision: { upright: "行動快狠準，沒人擋得住你。", reversed: "你太殘忍了，這決定會傷人傷己。" },
            daily: { upright: "今天衝勁很強，趕快把事做完。", reversed: "今天容易衝動惹禍，冷靜點。" }
        }
    },
    {
        id: 62,
        name: "寶劍王后",
        general: {
            upright: "獨立與專業。清楚真相，冷靜理智，不帶情感的判斷。",
            reversed: "刻薄與孤僻. 過於冷漠，或是用言語攻擊他人。"
        },
        topics: {
            love: { upright: "獨立自主的伴侶，講理但缺乏溫情。", reversed: "過於挑剔，言語傷人，讓人無法靠近。" },
            career: { upright: "專業能力強，律師或顧問，判斷精準。", reversed: "職場上的女魔頭，或者孤立無援。" },
            finance: { upright: "極度理性理財，沒感情色彩的決策。", reversed: "對金錢太嚴苛，或是因冷酷而失去人脈金。" },
            health: { upright: "身心狀況清晰，適合斷捨離。", reversed: "心理健康問題，或是患有抑鬱症。" },
            decision: { upright: "剔除非理性因素，做最正確的選擇。", reversed: "別太冷酷，你的正義感太過狹隘。" },
            daily: { upright: "保持理智，今天適合處理文書或契約。", reversed: "今天言語犀利，小心傷人。" }
        }
    },
    {
        id: 63,
        name: "寶劍國王",
        general: {
            upright: "權威與理智。嚴酷的判斷，秩序的建立，專業的頂尖。",
            reversed: "濫權與暴力。霸道，言語暴力，或是用智力進行操控。"
        },
        topics: {
            love: { upright: "嚴肅的伴侶，注重精神契合，但可能缺乏情趣。", reversed: "情感暴力，控制狂，或是無理的苛求。" },
            career: { upright: "法律界或權威人物，決策無人能撼。", reversed: "專制獨裁，聽不進意見，亂下命令。" },
            finance: { upright: "嚴格審查財務，金錢秩序的建立者。", reversed: "詐欺或利用漏洞掠奪財富，不擇手段。" },
            health: { upright: "自律極強，精神力控制身體。", reversed: "高血壓，或是因施暴受傷。" },
            decision: { upright: "用你的專業與權威做出裁決。", reversed: "別仗勢欺人，你的決定並不公正。" },
            daily: { upright: "展現你的決斷力，沒人能反駁你。", reversed: "今天別太霸道，小心報復。" }
        }
    },
    {
        id: 64,
        name: "錢幣首牌",
        general: {
            upright: "物質的種子。新的財務機會或求職契機，踏實的開始。",
            reversed: "錯失機會與貪婪。浪費資源，或是投資眼光短淺。"
        },
        topics: {
            love: { upright: "穩定經營感情的開始，或是有物質基礎的對象。", reversed: "只看重錢，或是因物質問題導致感情開局不佳。" },
            career: { upright: "拿到一個好工作邀約，或新專案啟動。", reversed: "面試失敗，或是這份工作薪水太低不值得。" },
            finance: { upright: "意外之財，或是有筆新的收入進帳。", reversed: "揮霍掉第一桶金，或是投資被騙血本無歸。" },
            health: { upright: "健康開端，或發現身體潛在問題需即時補足。", reversed: "忽視新陳代謝問題，導致健康走下坡。" },
            decision: { upright: "把握眼前的實質機會，這是個好開始。", reversed: "別太貪心，你會把這機會搞砸。" },
            daily: { upright: "今天可能有財運或收到禮物。", reversed: "今天容易丟三落四，錢財留不住。" }
        }
    },
    {
        id: 65,
        name: "錢幣二",
        general: {
            upright: "平衡與流動。處理多項財務或工作，遊刃有餘。",
            reversed: "失衡與混亂。財務不穩，無法同時兼顧太多事務。"
        },
        topics: {
            love: { upright: "在關係與工作間取得平衡，感情流動順暢。", reversed: "為了賺錠忽略伴侶，或財務問題影響感情。" },
            career: { upright: "身兼數職，工作彈性適應力強。", reversed: "工作量超過負荷，導致品質下降。" },
            finance: { upright: "資金周轉靈活，善用理財工具平衡收支。", reversed: "資金鏈斷裂，入不敷出，陷入財務恐慌。" },
            health: { upright: "動態平衡，適度調整生活節奏。", reversed: "生活混亂導致免疫失調，身體疲累。" },
            decision: { upright: "彈性調整策略，不要死守一種方式。", reversed: "妳想全抓，結果什麼都做不好。" },
            daily: { upright: "今天適合多工處理，忙得很有成就感。", reversed: "忙翻了一天卻一事無成，亂了陣腳。" }
        }
    },
    {
        id: 66,
        name: "錢幣三",
        general: {
            upright: "合作與技能。發揮所長，團隊合作，取得實質成果。",
            reversed: "平庸與偷懶。工作品質低落，缺乏進取心，甚至無法完成。"
        },
        topics: {
            love: { upright: "共同努力關係，或是有計畫地經營未來。", reversed: "關係中的付出不對等，或只有一方在努力。" },
            career: { upright: "團隊配合良好，專案順利推動，品質精良。", reversed: "偷雞摸狗，工作敷衍了事，被主管盯上。" },
            finance: { upright: "技能投資獲得回報，或因合作帶來收益。", reversed: "缺乏專業能力導致收益不佳，理業績下滑。" },
            health: { upright: "透過專業治療或復健，體況逐漸恢復。", reversed: "醫療品質不佳，或復健偷懶導致進度落後。" },
            decision: { upright: "發揮你的專長，找專業的人合作。", reversed: "你的態度太隨便，會搞砸這件事。" },
            daily: { upright: "今天適合動手做，務實一點。", reversed: "工作偷懶被抓包，今天別想混過去。" }
        }
    },
    {
        id: 67,
        name: "錢幣四",
        general: {
            upright: "守成與固執。擁有資產但不愿使用，過度節儉或控制。",
            reversed: "浪費與解脫。資金耗盡，或是終於願意放手去享受生活。"
        },
        topics: {
            love: { upright: "佔有欲強，或關係中缺乏互動，像守財奴。", reversed: "為了面子在關係中花大錢，或是決定放手。" },
            career: { upright: "安於現狀，固守職位不求變化。", reversed: "工作失去保障，或是決定辭職花錢去流浪。" },
            finance: { upright: "堅守資產，不願投資，只存不花。", reversed: "揮霍無度，花光積蓄，或是破財消災。" },
            health: { upright: "身材變形，或是過度固著於某種健康迷思。", reversed: "因花費在享樂而搞壞身體，或是終於釋放壓力。" },
            decision: { upright: "守成保本，現在不是冒險的時候。", reversed: "別再死守那些沒用的資產了，放手吧。" },
            daily: { upright: "省吃儉用的一天，不想花錢。", reversed: "血拼去！今天錢留不住。" }
        }
    },
    {
        id: 68,
        name: "錢幣五",
        general: {
            upright: "貧困與孤獨。經濟困難，孤苦無援，生活艱難。",
            reversed: "恢復與尋援。脫離貧困，或因自尊心過強而拒絕幫助。"
        },
        topics: {
            love: { upright: "貧賤夫妻百事哀，因現實問題感情受苦。", reversed: "感情經濟狀況好轉，或是因自尊拒絕好意。" },
            career: { upright: "失業或工作待遇極差，感到寒冷無力。", reversed: "工作機會出現，走出失業陰影。" },
            finance: { upright: "嚴重的財務危機，資金短缺。", reversed: "獲得救濟金或貸款，慢慢走出谷底。" },
            health: { upright: "大病初愈虛弱，或因貧困無法獲得照顧。", reversed: "接受幫助，身體慢慢找回溫度。" },
            decision: { upright: "現實很殘酷，承認你的無力。", reversed: "別死要面子活受罪，去接受幫助。" },
            daily: { upright: "今天會覺得很窮，事事不順。", reversed: "情況稍微好轉，但不至於富有。" }
        }
    },
    {
        id: 69,
        name: "錢幣六",
        general: {
            upright: "施比受有福。給予與分享，財務運轉順暢。",
            reversed: "貪婪與債務. 單方面的索取，或債務纏身，不平等交換。"
        },
        topics: {
            love: { upright: "大方付出，關係穩定且溫暖。", reversed: "花錢買感情，或關係中利益計算太重。" },
            career: { upright: "協助同事，獲得上司賞識，團隊互助。", reversed: "職場金權交易，或是被人吃豆腐佔便宜。" },
            finance: { upright: "有借有還，資金流通順利。", reversed: "背負債務，或借給別人的錢拿不回來。" },
            health: { upright: "身心充滿分享的能量，樂觀助健康。", reversed: "因貪婪導致身心失衡，或是賠上健康。" },
            decision: { upright: "慷慨一點，付出會有回報。", reversed: "別再做冤大頭了，你在被利用。" },
            daily: { upright: "今天適合請客或幫忙別人，心裡開心。", reversed: "小心破財，今天別輕易借錢。" }
        }
    },
    {
        id: 70,
        name: "錢幣七",
        general: {
            upright: "耐性與評估。等待收成，思考下一步，成果初顯。",
            reversed: "急躁與徒勞。不想再等了，半途而廢，或收成不佳。",
        },
        topics: {
            love: { upright: "經營感情需要時間，不要急著看結果。", reversed: "長久等待沒收穫，決定放棄這段關係。" },
            career: { upright: "專案進入審視期，等待收穫結果。", reversed: "對現狀不耐煩，想轉換跑道卻沒準備好。" },
            finance: { upright: "長期投資的等待期，需要一點耐心。", reversed: "急著套現導致虧損，或投資沒有預期收益。" },
            health: { upright: "養生需要時間沈澱，等待身體修復。", reversed: "因久病不起或無耐心養生而放棄治療。" },
            decision: { upright: "還沒到時候，再等等評估一下。", reversed: "別那麼躁進，你會前功盡棄。" },
            daily: { upright: "今天適合思考與等待，別急著行動。", reversed: "容易急躁，覺得怎麼做都沒用。" }
        }
    },
    {
        id: 71,
        name: "錢幣八",
        general: {
            upright: "勤奮與專注。努力工作，精益求精，積極學習。",
            reversed: "偷懶與貪玩。缺乏野心，工作馬虎，技術拙劣。"
        },
        topics: {
            love: { upright: "用心經營關係，用行動表達愛意。", reversed: "對感情不用心，只想玩玩，或伴侶太懶。" },
            career: { upright: "努力工作，提升技能，獲得實質升遷。", reversed: "工作態度敷衍，效率低下，容易被解僱。" },
            finance: { upright: "努力賺錢，腳踏實地積累財富。", reversed: "不想花腦筋賺錢，只想做輕鬆事。" },
            health: { upright: "透過規律運動與勞動強化體魄。", reversed: "懶得動，缺乏運動，導致體能退化。" },
            decision: { upright: "勤能補拙，多做少說。", reversed: "你的敷衍態度會讓你輸得很慘。" },
            daily: { upright: "今天適合努力拚搏，別只想著去玩。", reversed: "今天很懶，什麼都不想做，成果也馬馬虎虎。" }
        }
    },
    {
        id: 72,
        name: "錢幣九",
        general: {
            upright: "富足與享受。財務自由，享受優越的生活，成果豐碩。",
            reversed: "虛榮與揮霍。金玉其外敗絮其中，或過度奢華帶來惡果。"
        },
        topics: {
            love: { upright: "享受優質的關係，物質與情感皆滿足。", reversed: "只重視物質條件，情感空虛，或炫耀性伴侶。" },
            career: { upright: "事業有成，享受工作帶來的權力與財富。", reversed: "驕傲自大，表面光鮮其實公司已爛。" },
            finance: { upright: "財務自由，可以享受人生。", reversed: "花錢如流水，為了面子虛榮性消費。" },
            health: { upright: "健康富足，享受高品質的照護。", reversed: "過度安逸導致健康問題，或暴飲暴食。" },
            decision: { upright: "享受你的成果，你值得的。", reversed: "別被財富腐蝕了你的判斷力。" },
            daily: { upright: "優雅且富足的一天，好好享受。", reversed: "揮霍的一天，小心下半個月吃土。" }
        }
    },
    {
        id: 73,
        name: "錢幣十",
        general: {
            upright: "財富與家族. 留下持續的財富，家族繁榮，長期的富足。",
            reversed: "敗家與斷層. 家族企業垮台，揮霍祖產，失去根基。"
        },
        topics: {
            love: { upright: "幸福穩定的家庭生活，或是財務穩固的婚姻。", reversed: "家庭因素毀了感情，或為了錢反目成仇。" },
            career: { upright: "建立商業王國，成就傳承。", reversed: "因接班問題導致企業衰退，或退休後空虛。" },
            finance: { upright: "資產龐大，留給子孫，世代安穩。", reversed: "敗光家產，資產縮水，家族經濟崩盤。" },
            health: { upright: "長壽，遺傳良好的體質與環境。", reversed: "家族遺傳病發作，或是家庭環境導致身心病。" },
            decision: { upright: "為長遠著想，這是最穩固的選擇。", reversed: "你正在挖斷自己的根基，別再胡搞了。" },
            daily: { upright: "穩如泰山，享受家庭與財富帶來的安全感。", reversed: "家裡可能會為錢吵架，或者收到帳單。" }
        }
    },
    {
        id: 74,
        name: "錢幣侍者",
        general: {
            upright: "學習與務實。財務上的新消息，或正在學習新技能。",
            reversed: "遲鈍與懶惰。學習能力差，或是只會做白日夢。"
        },
        topics: {
            love: { upright: "務實的關係，或收來自實務型的邀約。", reversed: "對感情沒興只想賺錠，或笨拙不會追人。" },
            career: { upright: "學業或工作上的新學習階段，勤勉。", reversed: "不願學習，工作上偷懶，狀況外。" },
            finance: { upright: "收到有關財務的小額資訊或通知。", reversed: "理資觀念錯誤，連基本的帳都算不好。" },
            health: { upright: "關注身體基本狀況，養身正確。", reversed: "過度懶惰影響新陳代謝。" },
            decision: { upright: "去上課去研究，多吸收實用資訊。", reversed: "你太懶了，根本不想動腦筋。" },
            daily: { upright: "今天適合學習新東西，處理細節。", reversed: "今天狀況迷糊，工作效率差。" }
        }
    },
    {
        id: 75,
        name: "錢幣騎士",
        general: {
            upright: "穩重與持久. 緩慢但穩定，可靠性高，一步一腳印。",
            reversed: "僵化與停滯. 固執己見，進度緩慢，缺乏彈性。"
        },
        topics: {
            love: { upright: "細水長流的感情，對方給你足夠安全感。", reversed: "像木頭一樣不懂情趣，進展太慢。" },
            career: { upright: "工作態度端正，持續穩定地產出。", reversed: "因循守舊，抗拒改變，效率低下。" },
            finance: { upright: "長期穩健投資，積少成多。", reversed: "太過保守，導致資金閒置，甚至通貨膨脹吃掉財富。" },
            health: { upright: "規律生活，慢跑或養生，健康一點一滴來。", reversed: "缺乏運動過於久坐，導致血液循環不好。" },
            decision: { upright: "別急，慢慢來，穩紮穩打最好。", reversed: "轉個彎吧，你的堅持頑固毫無意義。" },
            daily: { upright: "慢工出細活的一天，別被別人帶亂步調。", reversed: "今天像牛一樣慢，什麼事都催不動。" }
        }
    },
    {
        id: 76,
        name: "錢幣王后",
        general: {
            upright: "富足與慷慨. 物質豐裕且熱愛自然，照顧他人與環境。",
            reversed: "貪婪與虛榮. 過度追求物質享受，自私自利，金錢觀扭曲。"
        },
        topics: {
            love: { upright: "物質條件優越的伴侶，給予穩定的照顧。", reversed: "只愛錢不愛人，或要求物質條件過高。" },
            career: { upright: "經營有方，適合管理資產或從事與自然相關行業。", reversed: "在職場上貪財，或是只顧自己利益。" },
            finance: { upright: "理財有術，懂得享受金錢與分享。", reversed: "揮霍無度，或是守財奴。" },
            health: { upright: "重視生活品質與飲食，健康自然。", reversed: "因暴飲暴食過度享樂而傷身。" },
            decision: { upright: "照顧好現有的資源，穩定成長。", reversed: "你的貪婪正在毀掉一切。" },
            daily: { upright: "適合享受生活，處理家務或照顧他人。", reversed: "小小心態失衡，愛比較容易受傷。" }
        }
    },
    {
        id: 77,
        name: "錢幣國王",
        general: {
            upright: "財富與成就. 商業巨擘，物質成就的巔峰，穩定與權威。",
            reversed: "貪腐與固執. 商業欺詐，或過於迷信金錢力量，缺乏彈性。"
        },
        topics: {
            love: { upright: "給予伴侶極大安全感，家庭經濟支柱。", reversed: "用錢掌控伴侶，或視感情為交易。" },
            career: { upright: "事業成功的領袖，掌握商業權力。", reversed: "唯利是圖，壓榨員工，或商業判斷過於僵化。" },
            finance: { upright: "財富自由，擁有巨大的商業資產。", reversed: "因貪腐而倒台，或資產被凍結。" },
            health: { upright: "身體強健如牛，生命力旺盛。", reversed: "因肥胖或過度勞累導致慢性病。" },
            decision: { upright: "參考成功者的路，做大膽的資產配置。", reversed: "你的決定太過功利會適得其反。" },
            daily: { upright: "今天適合處理大生意或投資。", reversed: "小心因貪而失敗，別太自大。" }
        }
    }
]; 