// ==================================================
// 星光塔羅 - 牌意資料庫
// ==================================================
// 風格：專業心理學專家
// ==================================================

export const CARD_MEANINGS = [
    {
        id: 0,
        name: "愚者",
        general: {
            upright: "嶄新的冒險即將展開。保持開放心態，勇於嘗試未知。即便前方看似懸崖，信任宇宙的安排。",
            reversed: "行事魯莽、思慮不周。可能因過度天真而遭受挫折，或因恐懼未知而不敢踏出第一步。"
        },
        topics: {
            love: { upright: "一段輕鬆、沒有束縛的新戀情，重拾赤子之心。", reversed: "對感情不負責任，或關係太過不穩定，缺乏承諾。" },
            career: { upright: "大膽嘗試新領域的好時機，創意將帶來意外收穫。", reversed: "計畫不周全就貿然行動，工作態度太過散漫小心犯錯。" },
            finance: { upright: "財務上的新機會，意外之財，或者是時候投資自己。", reversed: "衝動消費導致損失。缺乏規劃，請看緊你的荷包。" },
            health: { upright: "充滿活力，身心輕盈。嘗試新的運動或生活方式。", reversed: "忽視身體警訊，或發生意外小傷。注意腳下，別太冒失。" },
            decision: { upright: "跟隨直覺大膽跳躍！邏輯分析現在不重要，相信心流。", reversed: "現在不是做重大決定的好時機，風險未明，請緩一緩。" },
            daily: { upright: "今天適合當個孩子，保持好奇心，驚喜就在轉角。", reversed: "今天可能會有點迷糊或混亂，出門檢查東西帶了沒。" }
        }
    },
    {
        id: 1,
        name: "魔術師",
        general: {
            upright: "你所需要的資源都在手源都在手邊。採取行動，將想法轉化為現實，創造力極致發揮。",
            reversed: "能力被誤用或浪費。欺騙、狡猾，或是只想不做，導致計畫停擺。"
        },
        topics: {
            love: { upright: "充滿魅力的時刻，主動出擊將能獲得你想要的關係。", reversed: "感情中的操控者，或只花言巧語卻不願付出實際行動。" },
            career: { upright: "展現專業技能的最佳時機，新專案啟動，運籌帷幄。", reversed: "工作能力受質疑，或是處心積慮想要走捷徑，小心反撲。" },
            finance: { upright: "善用理財工具，靈活運用資金，投資回報率高。", reversed: "數字造假或財務透支。小心詐欺，切勿貪圖一時利益。" },
            health: { upright: "強大的自癒力，身心平衡，手部或神經系統狀況良好。", reversed: "身心耗損，焦慮導致身體出現功能失調的症狀。" },
            decision: { upright: "你已準備好開始了，動手吧！", reversed: "資訊不足或有誤導，暫時不要做任何承諾。" },
            daily: { upright: "今天你辦得到！專注在眼前的事情，效率驚人。", reversed: "小心被忽悠。今天適合觀察，不適合行動。" }
        }
    },
    {
        id: 2,
        name: "女祭司",
        general: {
            upright: "保持沈默與沈澱。答案在你內心，向外尋求不如傾聽直覺。",
            reversed: "過度封閉或情緒壓抑。忽視內在聲音，或是被表象所迷惑。"
        },
        topics: {
            love: { upright: "適合獨處或發展精神層面的連結。祕密戀情或單相思。", reversed: "情感冷漠，秘密被揭開，或對伴侶有所保留。" },
            career: { upright: "不必急著行動，多觀察少發言，適合從事研究或幕後工作。", reversed: "職場流言蜚語傷身，或因被動而錯失升遷機會。" },
            finance: { upright: "不宜有大動作，財務狀況穩定但沈悶，耐心等待。", reversed: "因忽略細節而造成財務損失，或對金錢運勢過度悲觀。" },
            health: { upright: "女性健康需注意，生理期規律，適合冥想與靜養。", reversed: "內分泌失調，情緒積壓導致身心症，需專業諮詢。" },
            decision: { upright: "暫緩決定，潛意識會告訴你答案，不要急。", reversed: "封鎖訊息來源，導致誤判，或因情緒化做決定。" },
            daily: { upright: "今天適合沈澱心情，多聽少說。", reversed: "心情低落，感覺被阻礙，别強迫自己社交。" }
        }
    },
    {
        id: 3,
        name: "皇后",
        general: {
            upright: "豐盛與滋養的時刻。享受舒適，創造美感，人際關係和諧圓滿。",
            reversed: "過度依賴或虛榮。創造力停滯，人際關係中的糾葛與佔有慾。"
        },
        topics: {
            love: { upright: "浪漫邂逅，關係升級，或是有好消息（懷孕/訂婚）。", reversed: "情感勒索，過度干涉伴侶，或只重視外表與物質。" },
            career: { upright: "工作環境和諧，適合從事設計、藝術或需要耐心培育的工作。", reversed: "工作效率低落，過度舒適導致懶散，與同事產生摩擦。" },
            finance: { upright: "物質豐盛，收入來源穩定，適合購置舒適用品。", reversed: "揮霍無度，購買慾過高，財務出現赤字。" },
            health: { upright: "身心充滿生機，適合保養與美學療癒。", reversed: "暴飲暴食，過度縱慾導致身體負擔。注意生殖系統。" },
            decision: { upright: "選擇讓你感覺舒適、有愛的方案。", reversed: "切勿因一時貪圖享樂而做出錯誤抉擇。" },
            daily: { upright: "享受生活的小确幸，對自己好一點。", reversed: "小心情緒化暴飲暴食，或人際間的小妒忌。" }
        }
    },
    {
        id: 4,
        name: "皇帝",
        general: {
            upright: "建立秩序與權威。運用邏輯與紀律掌控局面，目標明確，行動果決。",
            reversed: "僵化固執，濫用權力。缺乏紀律導致混亂，或過度控制欲強。"
        },
        topics: {
            love: { upright: "尋求穩定的關係，適合步入家庭，或展現保護欲。", reversed: "關係中權力不對等，過度專制或像父權般壓迫。" },
            career: { upright: "晉升擢掌權的好時機，展現領導力，鞏固事业版圖。", reversed: "上司專橫跋扈，或因固執己見導致計畫失敗。" },
            finance: { upright: "理財需講究纪律，長期投資規劃，資產穩健增長。", reversed: "財務管理失當，固執投資導致虧損，金錢引發爭奪。" },
            health: { upright: "體能強健，適合高強度訓練，注意血管與血壓。", reversed: "因壓力導致高血壓，或過度勞累損害健康。" },
            decision: { upright: "採用理性與結構化的方式來決策，切勿心軟。", reversed: "不要獨斷不要獨斷獨行，聽取他人建議，避免硬碰硬。" },
            daily: { upright: "掌握主控權的一天，處理事情雷厲風行。", reversed: "發生權力爭鬥，或你變得太固執，碰了一鼻子灰。" }
        }
    },
    {
        id: 5,
        name: "教皇",
        general: {
            upright: "遵守傳統與社會規範。尋求精神導師指引，從既有的知識中獲取智慧。",
            reversed: "挑戰傳統，反叛舊制。過度保守或過於新穎導致的失衡，誤人子弟。"
        },
        topics: {
            love: { upright: "適合結婚、訂婚或公開關係，獲得家族認可。", reversed: "因價值觀不合而爭吵，違反世俗常規的戀情受阻。" },
            career: { upright: "考取證照、加入公會或大企業，遵循體系升遷。", reversed: "職場適應不良，厭惡官僚體系，或創業遇到法規障礙。" },
            finance: { upright: "遵循傳統理財方式，諮詢專家顧問，保守為上。", reversed: "聽信錯誤建議，或盲目投資虛擬貨幣等新興事物虧損。" },
            health: { upright: "遵循醫囑，身體狀況在控制範圍內。", reversed: "疑病，或因固執拒絕醫療建議導致病情惡化。" },
            decision: { upright: "依照社會標準或前人經驗做決定最保險。", reversed: "打破常規的時候，但要做好準備面對反對聲浪。" },
            daily: { upright: "适合學習新知識或參加儀式性活動。", reversed: "對既定規則感到煩躁，心情受壓抑。" }
        }
    },
    {
        id: 6,
        name: "戀人",
        general: {
            upright: "做出關鍵選擇。基於價值觀的契合，決定深入連結，和諧與協調。",
            reversed: "分離、不誠實。選擇錯誤的導致後悔，或誘惑導致的道德掙扎。"
        },
        topics: {
            love: { upright: "靈魂伴侶的相遇，熱戀，或在關係中做出重要承諾。", reversed: "劈腿、關係破裂，或因激情退去後發現價值觀不合。" },
            career: { upright: "面臨職涯十字路口，選擇符合自己興趣的道路。", reversed: "工作夥伴間的不協調，或為了利益犧牲道德。" },
            finance: { upright: "需要與人共同理財或簽訂合約，雙贏局勢。", reversed: "因金錢利益分配不均而生糾葛，合約爭議。" },
            health: { upright: "整體調和，免疫力提升。注意皮膚與過敏問題。", reversed: "缺乏自律，對性關係隨意導致健康風險。" },
            decision: { upright: "跟隨你的真心，選擇讓你感到熱情的道路。", reversed: "不要讓誘惑蒙蔽理智，你的選擇可能會有後果。" },
            daily: { upright: "感情狀態升溫，或是需要你做選擇的一天。", reversed: "人際關係混亂，容易陷入兩難或三角關係。" }
        }
    },
    {
        id: 7,
        name: "戰車",
        general: {
            upright: "意志力取勝。克服障礙，精進前行，成功在望，保持專注與自律。",
            reversed: "失控與方向迷失。缺乏紀律，失去動力，或因強行突破而受傷。"
        },
        topics: {
            love: { upright: "排除萬難，雙方共同努力通過考驗。", reversed: "關係失控，爭吵不斷，或單方面強行推進導致失敗。" },
            career: { upright: "展現執行力與競爭力，有望升遷或拓展業務版圖。", reversed: "計畫脫軌，方向錯誤卻硬著頭皮做，徒勞無功。" },
            finance: { upright: "積極進取帶來財富，適合衝刺業績。", reversed: "急躁冒進導致投資失利，小心車輛相關的財務損失。" },
            health: { upright: "體能充沛，適合競技運動，展現行動力。", reversed: "過度勞累導致過熱，小心運動傷害或交通意外。" },
            decision: { upright: "採取主動進攻的姿態，勇往直前。", reversed: "現在方向不明，先停下來整理狀況，別衝動。" },
            daily: { upright: "充滿幹勁的一天，能處理很多棘手問題。", reversed: "感覺卡住了，心有餘而力不足，容易路怒。" }
        }
    },
    {
        id: 8,
        name: "力量",
        general: {
            upright: "以柔克剛，內在力量。擁有掌控情緒的能力，以耐心與慈悲化解衝突。",
            reversed: "軟弱、自我懷疑。情緒失控，或在衝突中選擇逃避與放棄。"
        },
        topics: {
            love: { upright: "包容對方的缺點，以耐經營關係，情感韌性強。", reversed: "無法處理情感衝突，情緒波動大，或面對第三者退縮。" },
            career: { upright: "運用交涉手腕解決難題，無需強硬手段也能成事。", reversed: "自信心不足，不敢爭取應得權益，任人宰割。" },
            finance: { upright: "能夠克制慾望，理性節流，財務狀況緩慢改善。", reversed: "缺乏金錢紀律，因貪婪或恐懼做出錯誤財務決策。" },
            health: { upright: "身心狀況穩定，自我療癒力強。", reversed: "壓力大導致免疫力下降，或飲食習慣失控。" },
            decision: { upright: "保持耐心與冷靜，不需要暴力或強硬手段。", reversed: "不要讓恐懼駕馭你的決定，找回你的自信。" },
            daily: { upright: "今天展現你的包容力，化干戈為玉帛。", reversed: "心情脆弱，容易受傷或發怒，別太苛責自己。" }
        }
    },
    {
        id: 9,
        name: "隱者",
        general: {
            upright: "內省與獨處。放慢腳步，尋求內在智慧，獨立自主，不依賴他人。",
            reversed: "過度孤立，寂寞。拒絕幫助，固執己見，或逃避現實。"
        },
        topics: {
            love: { upright: "享受單身狀態，或兩人關係需要空間冷靜沈澱。", reversed: "過度疏離導致關係冷淡，或因孤僻而錯失緣分。" },
            career: { upright: "適合獨立作業、研究或幕後籌劃，不適合團隊合作。", reversed: "與團隊脫節，或不聽建議，導致工作陷入膠著。" },
            finance: { upright: "審慎評估投資，不隨波逐流，保守護財。", reversed: "因封閉資訊而錯失市場機會，或過度吝嗇。" },
            health: { upright: "需要休息與靜養，關注心理健康。", reversed: "過度封閉導致憂鬱傾向，或拒絕就醫。" },
            decision: { upright: "暫時抽離集體喧囂，獨自思考最清楚。", reversed: "別把自己關起來，你需要外界的資訊來做判斷。" },
            daily: { upright: "適合獨處、閱讀或散步，享受寧静。", reversed: "太過孤僻會讓你心情低落，找朋友聊聊天吧。" }
        }
    },
    {
        id: 10,
        name: "命運之輪",
        general: {
            upright: "命運的轉折點。外部環境改變，好運降臨，把握時機，順勢而為。",
            reversed: "運勢逆轉，惡運。無力抵抗環境變化，阻力重重。"
        },
        topics: {
            love: { upright: "緣分到了，意想不到的邂逅，關係步入新階段。", reversed: "緣分已盡，或是外部環境阻力導致分手。" },
            career: { upright: "職運上升，意外的好機會從天而降，升遷或跳槽。", reversed: "遭遇裁員、降職，或大環境不佳導致事業受阻。" },
            finance: { upright: "財運亨通，投資運佳，獲得意外之財。", reversed: "投資失利，財務損失，避免依賴運氣。" },
            health: { upright: "健康好轉，逢凶化吉。", reversed: "舊疾復發，或發生突發性意外，需提高警覺。" },
            decision: { upright: "時機成熟，大膽下注，命運站在你這邊。", reversed: "現在運勢低迷，靜待時變，不宜強求。" },
            daily: { upright: "今天運氣不錯，冒點小風險也沒問題。", reversed: "諸事不順，保持低調，今天不宜做重大決定。" }
        }
    },
    {
        id: 11,
        name: "正義",
        general: {
            upright: "因果報應，公平公正。理怶判斷，遵守契約，真相大白。",
            reversed: "不公，偏頗。逃避責任，遭受不對等對待，法律糾紛不利。"
        },
        topics: {
            love: { upright: "關係平衡，雙方付出對等，或法律上的婚姻保障。", reversed: "關係失衡，付出不對等，或對方欺騙、不忠。" },
            career: { upright: "獲得應有的肯定與酬勞，合約談判順利。", reversed: "職場霸凌，遭受不公待遇，合約內容需謹慎。" },
            finance: { upright: "財務條理分明，合約簽訂，理賠順利。", reversed: "金錢糾紛，理賠被拒，或稅務問題找上門。" },
            health: { upright: "身心平衡，視力與聽力狀況良好。", reversed: "循環系統問題，或不健康的生活習慣開始報應。" },
            decision: { upright: "依據事實與邏輯做決定，考慮後果。", reversed: "不要心存僥倖，你的行為將付出代價。" },
            daily: { upright: "講究公義與秩序的一天，處理公文最適合。", reversed: "感到委屈，遇到不講理的人，保持冷靜別意氣用事。" }
        }
    },
    {
        id: 12,
        name: "倒吊人",
        general: {
            upright: "停滯與犧牲。換個角度看世界，等待時機，暫時放手以獲得啟發。",
            reversed: "無謂的犧牲。拖延不作為，抗拒改變，或徒勞無功的努力。"
        },
        topics: {
            love: { upright: "為愛付出，單相思，或關係停滯期需要沈澱。", reversed: "努力沒有回報，或因固執己見導致關係僵持不下。" },
            career: { upright: "感到懷才不遇，或需要暫停腳步重新思考職涯方向。", reversed: "工作停擺，缺乏動力，或一直做錯方向而不自知。" },
            finance: { upright: "投入資金後需要等待回報，不宜急著撤資。", reversed: "財務卡關，流動性不足，繼續投資只會擴大虧損。" },
            health: { upright: "需要休養，血液循環需注意，瑜珈或倒立有益。", reversed: "壓力無法釋放，長期積累成病。注意腿麻或靜脈曲張。" },
            decision: { upside: "現在不是行動的時候，放慢腳步觀察。", reversed: "不要再拖延了，目前的策略行不通，快改變。" },
            daily: { upright: "今天適合做幕後工作，或者什麼都不做。", reversed: "覺得卡卡的，心有不甘，轉換心態吧。" }
        }
    },
    {
        id: 13,
        name: "死神",
        general: {
            upright: "結束與重生。告別過去，劇烈變革，唯有放下才能迎接新生。",
            reversed: "抗拒改變。無法釋懷，延緩進度，恐懼失去導致停滞不前。"
        },
        topics: {
            love: { upright: "舊的關係結束，徹底斷裂才能迎接新戀情。", reversed: "關係名存實亡，卻不甘心放手，互相折磨。" },
            career: { upright: "轉職、退休或舊專案結束，新機會正在萌芽。", reversed: "抗拒職務調動，或守着過去的成就無法前進。" },
            finance: { upright: "舊有的投資模式結束，需要重整財務結構。", reversed: "該斷損不斷損，財務陷入僵局，死守無用資產。" },
            health: { upright: "重大手術或療程，置之死地而後生。", reversed: "不肯改變不良習慣，導致健康持續惡化。" },
            decision: { upright: "大刀闊斧地改變，終止不再適合的人事物。", reversed: "不要留戀過去，你的抵抗只是浪費時間。" },
            daily: { upright: "今天適合斷捨離，清理物品或情緒。", reversed: "變動讓你不安，但這是必經過程，別擋路。" }
        }
    },
    {
        id: 14,
        name: "節制",
        general: {
            upright: "平衡與調和。適度原則，溝通順暢，耐心與耐心將帶來療癒。",
            reversed: "失衡，過度。缺乏耐心，人際關係失調，或行為過激。"
        },
        topics: {
            love: { upright: "關係和諧，雙方溝通良好，適合磨合。", reversed: "相處方式極端，忽冷忽熱，或缺乏共同目標。" },
            career: { upright: "協調能力出眾，適合公關、管理。工作步調穩定。", reversed: "工作與生活失衡，或與同事合作出現裂痕。" },
            finance: { upright: "收支平衡，量入為出，理財穩健。", reversed: "開支失衡，揮霍過度或過度吝嗇。" },
            health: { upright: "身體機能調律良好，飲食均衡。", reversed: "飲食失調，中毒或過敏反應，新陳代謝失調。" },
            decision: { upright: "尋找中庸之道，不要走極端。", reversed: "情緒過激，不要在這種狀態下做決定。" },
            daily: { upright: "平靜和諧的一天，適合處理人際互動。", reversed: "感覺不太對勁，有些事情超出了掌控。" }
        }
    },
    {
        id: 15,
        name: "惡魔",
        general: {
            upright: "束縛與執念。沉迷於物質或慾望，依賴關係，被環境控制而不自知。",
            reversed: "解脫覺醒。打破束縛，拒絕成癮，意識到問題並嘗試改變。"
        },
        topics: {
            love: { upright: "毀滅性的吸引力，關係中充滿控制、嫉妒或物質交換。", reversed: "決定結束不良關係，或從依賴中站起來。" },
            career: { upright: "工作環境壓抑，或為了金錢出賣靈魂，感到束手無策。", reversed: "離開這份有弊無利的工作，追求心靈自由。" },
            finance: { upright: "債務纏身，或陷入不當投資，被金錢奴役。", reversed: "開始債務重組，戒掉購物癮。" },
            health: { upright: "成癮行為（菸酒藥），或性問題困擾身體。", reversed: "戒除壞習慣的初期，雖痛苦但充滿希望。" },
            decision: { upright: "小心被誘惑或綁架（物理或心靈）。", reversed: "這是打破枷鎖的契機，勇於說不。" },
            daily: { upright: "小心慾望作祟，今天容易受到誘惑。", reversed: "意識到自己被困住了，尋求出口。" }
        }
    },
    {
        id: 16,
        name: "高塔",
        general: {
            upright: "突變與毀與毀滅。舊有的基礎崩塌，震驚的訊息，被迫的改變。",
            reversed: "恐懼變動。延遲災難，內心崩潰，或試圖挽回搖搖欲墜的局面。"
        },
        topics: {
            love: { upright: "突如其來的分離或危機，關係劇烈變動。", reversed: "關係名存實亡，雙方都在忍耐，遲早要炸。" },
            career: { upright: "公司裁員、破產或突然被解僱，混亂不可避免。", reversed: "職場危機潛伏，或你抗拒改變導致內心焦急。" },
            finance: { upright: "股市崩盤或重大財務損失，需做好止血準備。", reversed: "財務危機暫時緩和，但基本結構仍然脆弱。" },
            health: { upright: "突發性急症，意外事故，需注意頭部與神經。", reversed: "壓力過大導致精神崩潰，長期潛藏病痛爆發。" },
            decision: { upside: "事情已發生，趕快收拾殘局，無法挽回。", reversed: "不要心存僥倖，現在改變還來得及。" },
            daily: { upright: "今天可能會有驚嚇，請保持彈性。", reversed: "餘波未平，心裡還有恐懼，慢慢重建。" }
        }
    },
    {
        id: 17,
        name: "星星",
        general: {
            upright: "希望與靈感。宇宙的支持，療癒與淨化，對未來保持樂觀。",
            reversed: "絕望或空想。缺乏信心，願望落空，或過度樂觀而不務實。"
        },
        topics: {
            love: { upright: "療癒過去的創傷，開始相信愛，充滿希望的發展。", reversed: "對感情失望，或對象根本是幻想，不切實際。" },
            career: { upright: "發揮創意與天分，從事藝術或療癒相關工作。", reversed: "懷才不遇，或只有夢想沒有計畫，眼高手低。" },
            finance: { upright: "財務好轉的曙光，小額持續獲利。", reversed: "對財務過度幻想，期望落空。" },
            health: { upright: "身心機能復原，排毒，養顏美容。", reversed: "身心狀況鬆懈，或缺乏動意志進行康復。" },
            decision: { upright: "追隨你的願景，直覺是正確的。", reversed: "檢視你的願景是否現實，別做白日夢。" },
            daily: { upright: "感到平靜與補充能量的一天。", reversed: "有一點鬱卒，感覺希望渺茫。" }
        }
    },
    {
        id: 18,
        name: "月亮",
        general: {
            upright: "迷宮與幻覺。恐懼與潛意識，事物表面並非真相，需要沈澱。",
            reversed: "迷霧消散。真相大白，釋放恐懼，結束混亂。"
        },
        topics: {
            love: { upright: "關係充滿不確定性，欺瞞或未說出口的秘密。", reversed: "揭開伴侶的真相，或走出情感迷宮。" },
            career: { upright: "職場充滿流言蜚語，方向不明，感到焦慮。", reversed: "搞清楚職場生態，發現潛藏的敵人或機會。" },
            finance: { upright: "財務狀況模糊，切勿投資，小心詐欺。", reversed: "發現帳目問題，或財務恐慌解除。" },
            health: { upright: "睡眠障礙，精神衰弱，女性生理週期問題。", reversed: "心理障礙開始好轉，惡夢結束。" },
            decision: { upside: "資訊不足，切勿貿然行動，沈澱再決定。", reversed: "真相已現，可以做出理性判斷了。" },
            daily: { upright: "心情起伏大，容易多疑，今天適合靜靜觀察。", reversed: "誤解冰釋，終於看清狀況。" }
        }
    },
    {
        id: 19,
        name: "太陽",
        general: {
            upright: "成功與喜悅。光明正大，活力充沛，絕對的正面能量與好結果。",
            reversed: "樂觀過度。雖無大礙但成果不彰，被過度期待壓力，或情緒低落。"
        },
        topics: {
            love: { upright: "極致美滿的感情，結婚、生子，充滿快樂。", reversed: "關係表面和平，但內心有落差，或期待落空。" },
            career: { upright: "大成功，獲得公眾認可，名利雙收。", reversed: "雖有成就但不如預期耀眼光芒，稍顯平淡。" },
            finance: { upright: "財運大好，投資報告亮眼，賺錢容易。", reversed: "小有獲利但揮霍一空，或對金錢判斷失衡。" },
            health: { upright: "健康狀態巔峰，精力旺盛。", reversed: "注意中暑或眼睛疲勞，過度興奮傷身。" },
            decision: { upside: "無需猶豫，盡情去衝，結果一定好。", reversed: "別把期望拉太高，保持平常心。" },
            daily: { upright: "美好的一天，出門玩耍吧！", reversed: "心情略顯躁鬱，或被盛名所累。" }
        }
    },
    {
        id: 20,
        name: "審判",
        general: {
            upright: "複活與決斷。內在的召喚，評價過去，做出影響深遠的決定。",
            reversed: "自我懷疑。拒絕召喚，逃避評價，或草率判斷導致後悔。"
        },
        topics: {
            love: { upright: "關係經過考驗後重生，同居或復合。", reversed: "對關係過於挑剔，或在舊情中無法釋懷。" },
            career: { upright: "升遷評估，離職創業，或是轉型的關鍵時刻。", reversed: "對自我能力失去信心，錯失良機。" },
            finance: { upright: "整理過去的投資績效，財務翻身。", reversed: "對資產價值判斷錯誤，或拒絕面對債務。" },
            health: { upright: "康復中的重要里程碑，或是開始新的健康計畫。", reversed: "忽視身體發出的求救訊號，病情惡化。" },
            decision: { upside: "聽從內在的召喚，做出改變命運的決定。", reversed: "不要逃避，現在是你面對結果的時候。" },
            daily: { upright: "適合回顧與總結，做出決斷。", reversed: "容易陷入自我批判，對自己太嚴苛。" }
        }
    },
    {
        id: 21,
        name: "世界",
        general: {
            upright: "圓滿與完成。階段性任務達成，感到充實，準備迎接下一個循環。",
            reversed: "未完成與封閉。功敗垂成，缺乏遠見，或故步自封。"
        },
        topics: {
            love: { upright: "蜜月期，極致和諧，或完美的單身生活。", reversed: "關係感到侷限，無法再更進一步，或遠距離阻礙。" },
            career: { upright: "專案圓滿結案，畢業，或達成長期目標。", reversed: "眼高手低，導致尾聩聲名狼籍，無法收尾。" },
            finance: { upright: "財務目標達成，經濟自由。", reversed: "投資未達預期，或缺乏財務視野導致停滯。" },
            health: { upright: "身心健康達到平衡，完整。", reversed: "慢性病需持續控制，或恢復期漫長。" },
            decision: { upside: "這是一個完美的結局，放心慶祝。", reversed: "別急著收尾，還有細節沒處理好。" },
            daily: { upright: "值得紀念的一天，成就感滿滿。", reversed: "感覺卡關，怎麼跑都跑不到終點。" }
        }
    },
    {
        id: 22,
        name: "權杖首牌",
        general: {
            upright: "行動的火花，創意爆發。熱情開始，新的嘗試，充滿行動力。",
            reversed: "延遲與缺乏行動。熱情退去，只有計畫沒有執行，或者開啟困難。"
        },
        topics: {
            love: { upright: "熱戀開始，充滿吸引力，主動追求有機會。", reversed: "性吸引力低落，關係缺乏火花，或對方無趣。" },
            career: { upright: "新點子新專案，展現企圖心的好時機。", reversed: "計畫延宕，或對新工作沒動力，提不起勁。" },
            finance: { upright: "財務上的新契機，適合開始新投資計畫。", reversed: "金錢流動受阻，或錯失投資先機。" },
            health: { upright: "精力旺盛，適合開始新的運動習慣。", reversed: "活力不足，開始養生但三天打魚。" },
            decision: { upright: "別想了，現在就是開始的最好時機。", reversed: "準備不足，先別急著行動。" },
            daily: { upright: "充滿衝勁的一天，動手做就對了！", reversed: "感到懶散，什麼都不想做，效率低落。" }
        }
    },
    {
        id: 23,
        name: "權杖二",
        general: {
            upright: "規劃與掌控。評估未來，掌握主導權，對世界充滿信心。",
            reversed: "恐懼未知，猶豫不決。喪失控制感，或過度保守不敢踏出舒適圈。"
        },
        topics: {
            love: { upright: "對感情有規劃，或正在評估新的追求對象。", reversed: "對承諾感到恐懼，不敢進入關係，或選擇權受限。" },
            career: { upright: "居安思危，正在規劃下一步的職涯藍圖。", reversed: "對未來感到迷茫，不知道是否該轉換跑道。" },
            finance: { upright: "評估各項理財方案，掌握財務大權。", reversed: "理財方向不明，不敢投資，資金閒置。" },
            health: { upright: "對健康有掌控感，身體狀況良好。", reversed: "因擔心健康而過度焦慮，或忽視身體警訊。" },
            decision: { upright: "做好功課，掌握全局後，你會做出好選擇。", reversed: "恐懼讓你裹足不前，你需要點勇氣。" },
            daily: { upright: "今天適合做規劃，盤點手邊資源。", reversed: "感到束手無策，世界好像與你想的不同。" }
        }
    },
    {
        id: 24,
        name: "權杖三",
        general: {
            upright: "遠見與擴張。等待果實，預期的成功，做好準備迎接未來。",
            reversed: "障礙與延遲。計畫被迫中斷，缺乏遠見，結果不如預期。"
        },
        topics: {
            love: { upright: "關係進展順利，開始規劃未來（同居/結婚）。", reversed: "戀情遭遇現實阻礙，計畫趕不上變化。" },
            career: { upright: "初步成果顯現，為了下一步擴充做準備。", reversed: "專案停擺，或等待回應卻遲遲未至，感到挫折。" },
            finance: { upright: "投資獲利在望，資金準備擴大規模。", reversed: "預期收益落空，資金積壓無法回收。" },
            health: { upright: "恢復力良好，期待更健康的體態。", reversed: "康復期延長，或療效不如預期。" },
            decision: { upright: "前景看好，繼續保持耐心與預備。", reversed: "可能需要修改計畫，目前的行不通。" },
            daily: { upright: "遠眺未來，感覺充滿希望。", reversed: "船快撞上冰山了，還沒收到報告嗎？" }
        }
    },
    {
        id: 25,
        name: "權杖四",
        general: {
            upright: "穩固與慶祝。歡迎歸來，基礎穩固，享受成果與和諧。",
            reversed: "固步自封，缺乏動力。舒適圈變成牢籠，停止成長或排斥改變。"
        },
        topics: {
            love: { upright: "穩定幸福的感情，可能是見家長或定居下來。", reversed: "關係平淡無味，缺乏激情，或因宅宅而不願社交。" },
            career: { upright: "職位穩定，受到歡迎，工作環境愉快。", reversed: "工作太舒服而失去進取心，害怕變動。" },
            finance: { upright: "財務基礎穩固，保守理財見效。", reversed: "錢滾不動，或因守舊而錯失獲利機會。" },
            health: { upright: "身心狀況穩定，沒有大礙。", reversed: "因缺乏運動導致體重增加，或太宅致健康微恙。" },
            decision: { upside: "現狀不錯，可以暫時休息享受。", reversed: "別躲起來，你需要出去拓展視野。" },
            daily: { upright: "放鬆心情，享受當下的安全感。", reversed: "感覺被困住，想出走卻又懶得動。" }
        }
    },
    {
        id: 26,
        name: "權杖五",
        general: {
            upright: "衝突與競爭。意見不合，內心焦慮，面對挑戰必須親自出馬。",
            reversed: "避開衝突，逃避現實。放棄抵抗，或是無謂的內耗。"
        },
        topics: {
            love: { upright: "爭吵不斷，意見相左，關係充滿火藥味。", reversed: "冷戰，雙方都不願溝通，關係疏遠。" },
            career: { upright: "職場競爭激烈，面對敵手需背水一戰。", reversed: "不想與人爭辯而退縮，或專案陷入泥沼。" },
            finance: { upright: "金錢利益分配爭端，開銷增加。", reversed: "理財意見分歧導致虧損，或財務混亂。" },
            health: { upright: "壓力大導致身體發炎，過勞。", reversed: "因逃避壓力而導致身心不適，缺乏活動。" },
            decision: { upside: "做好面對爭議的準備，這是場硬仗。", reversed: "不要逃避，解決問題才是辦法。" },
            daily: { upright: "今天可能會有意外的爭吵或挑戰。", reversed: "心情低落，不想面對人群。" }
        }
    },
    {
        id: 27,
        name: "權杖六",
        general: {
            upright: "勝利與領先。成功在望，獲得他人認同，展現自信與自尊。",
            reversed: "傲慢與失敗。過度自信導致跌倒，失去領先地位。"
        },
        topics: {
            love: { upright: "感情順遂，可能是眾人眼中的模範情侶。", reversed: "自以為是导致關係破裂，或追求失敗。" },
            career: { upright: "業績領先，升遷在即，充滿成就感。", reversed: "驕兵必敗，工作出錯，或被後起之秀超越。" },
            finance: { upright: "投資報酬率高，財致富足。", reversed: "自大投資導致虧損，得意忘形。" },
            health: { upright: "戰勝病痛，體能狀況良好。", reversed: "過於自信而忽視保養，導致受傷。" },
            decision: { upside: "保持優勢，你現在做得很好。", reversed: "別太驕傲，小心翻船。" },
            daily: { upright: "意氣風發的一天，萬事順心。", reversed: "可能有點得意忘形，小心樹大招風。" }
        }
    },
    {
        id: 28,
        name: "權杖七",
        general: {
            upright: "堅守立場，迎擊挑戰。有底氣，不退縮，勇於衝突並保護自己。",
            reversed: "防衛過當，感到壓力巨。固執己見，或遭受不公平對待。"
        },
        topics: {
            love: { upright: "為了捍衛感情而努力，或吸引到積極的追求者。", reversed: "關係中充滿防衛心，或過度斤斤計較。" },
            career: { upright: "在職場競爭中堅守陣地，展現專業底氣。", reversed: "與同事對立，感覺遭受攻擊，心累。" },
            finance: { upright: "堅守理財原則，不輕易聽信他人。", reversed: "財務上遭遇阻礙，或固執錯誤投資策略。" },
            health: { upright: "積極對抗病痛，體魄強健。", reversed: "身心對立，壓力轉化為身體抗議。" },
            decision: { upside: "相信你的判斷，堅持到底。", reversed: "別這麼緊繃，這也許不是戰場。" },
            daily: { upright: "準備好應對挑戰，展現你的氣魄。", reversed: "感覺被圍攻，心神不寧。" }
        }
    },
    {
        id: 29,
        name: "權杖八",
        general: {
            upright: "快速行動，飛速發展。事情進展極快，訊息傳遞，立即出發。",
            reversed: "匆促混亂，延誤。急躁導致失敗，錯過時機，或缺乏方向。"
        },
        topics: {
            love: { upright: "閃電戀情，關係發展迅速，熱情奔放。", reversed: "因急於求成而嚇跑對方，或行動過於混亂。" },
            career: { upright: "工作效率爆表，出差或訊息流通快速。", reversed: "忙中出錯，交通誤點，計畫趕不上變化。" },
            finance: { upright: "資金流動快速，短線交易獲利。", reversed: "匆促買賣造成虧損，或因急用錢而煩惱。" },
            health: { upright: "行動力強，代謝快，精神飽滿。", reversed: "過度勞累，或因急躁導致意外受傷。" },
            decision: { upside: "快刀斬亂麻，行動是當前之務。", reversed: "別急著衝，先確認方向對不對。" },
            daily: { upright: "今天節奏很快，很多事情同時發生。", reversed: "諸事不順，遲遲動不了，容易路怒。" }
        }
    },
    {
        id: 30,
        name: "權杖九",
        general: {
            upright: "堅毅不拔，獨自負重。筋疲力盡但不敢鬆懈，責任感強，最後一搏。",
            reversed: "身心俱疲，防禦過當。固執導致孤立無援，或危機解除卻仍緊張。"
        },
        topics: {
            love: { upright: "獨力維持感情，感到疲憊但不願放棄。", reversed: "對感情感到無力，不想再掙扎，選擇放棄。" },
            career: { upright: "身兼數職，極度忙碌，為了團隊撐住。", reversed: "工作效率低落，累積過多壓力無法排解。" },
            finance: { upright: "堅守財務防線，獨自承擔經濟壓力。", reversed: "對財務狀況感到焦慮，或過度囤積。" },
            health: { upright: "背部肌肉緊繃，過勞，需注意姿勢。", reversed: "身心耗盡，免疫力崩壞，強迫症狀。" },
            decision: { upside: "雖然累，但再堅持一下就到了。", reversed: "別硬撐了，找人幫忙或先休息。" },
            daily: { upright: "今天很累，但事情還是得做。", reversed: "過度防衛，看誰都不順眼。" }
        }
    },
    {
        id: 31,
        name: "權杖十",
        general: {
            upright: "過度負擔，責任沉重。壓力過大，想放手但不能，勉力支撐。",
            reversed: "釋放重擔，卸下責任。不再當超人，學授權，或是任務完成。"
        },
        topics: {
            love: { upright: "關係成為沉重負擔，感到疲憊不堪。", reversed: "決定結束這段累人的關係，或壓力解除。" },
            career: { upright: "工作量超負荷，無力顧及品質，快撐不住。", reversed: "分配工作後輕鬆許多，或終於卸下重責。" },
            finance: { upright: "背負沈重債務，或金錢壓力極大。", reversed: "償還債務，或經濟狀況壓力減輕。" },
            health: { upright: "背痛、壓力性疾病，身心俱疲。", reversed: "長期病痛終於康復，卸下心防。" },
            decision: { upside: "承認你做不到，別撐了。", reversed: "卸下包袱，該休息了。" },
            daily: { upright: "被壓得喘不過氣的一天。", reversed: "終於可以輕鬆一下了。" }
        }
    },
    {
        id: 32,
        name: "權杖侍者",
        general: {
            upright: "熱情的訊息，新計畫。充滿活力的新人，積極探索，熱火朝天。",
            reversed: "虛張聲勢，八卦。熱情退去，傳遞壞消息，或計畫胎死腹中。"
        },
        topics: {
            love: { upright: "收到熱情的告白，或對戀情充滿期待。", reversed: "感情上傳遞負面訊息，或對方根本是花心大蘿蔔。" },
            career: { upright: "新專案啟動，年輕有活力的夥伴加入。", reversed: "工作態度散漫，消息靈通但都是八卦。" },
            finance: { upright: "收到投資建議，但有消息傳來。", reversed: "財務上的壞消息，或被推銷不當理財。" },
            health: { upright: "精力旺盛，適合健身活動，體能佳。", reversed: "缺乏耐心，導致運動傷害，或躁動。" },
            decision: { upside: "保持好奇心，接受新的提議。", reversed: "別被外表忽悠，仔細評估再決定。" },
            daily: { upright: "今天充滿新鮮感，適合接受挑戰。", reversed: "小心壞消息，或別人給你灌迷湯。" }
        }
    },
    {
        id: 33,
        name: "權杖騎士",
        general: {
            upright: "衝勁滿滿，快速行動。熱情激昂，喜歡冒險，充滿男性魅力。",
            reversed: "魯莽衝動，脾氣暴躁。行事草率，缺乏耐心，破壞力強。"
        },
        topics: {
            love: { upright: "熱情如火，愛得轟轟烈烈，展開追求。", reversed: "感情揮霍無度，容易始亂終棄，脾氣壞。" },
            career: { upright: "積極行動，推進專案，展現強大執行力。", reversed: "因急躁而搞砸事情，與同事發生衝突。" },
            finance: { upright: "積極投資，大膽理財，財運轉動。", reversed: "衝動消費，冒險投資導致慘賠。" },
            health: { upright: "行動力強，體能鍛鍊見效。", reversed: "容易發怒，高血壓，意外受傷。" },
            decision: { upside: "大膽一點，採取行動！別猶豫！", reversed: "冷靜點，別衝動，後果你付不起。" },
            daily: { upright: "今天衝勁十足，可以完成很多事！", reversed: "今天情緒不穩，容易發火闖禍。" }
        }
    },
    {
        id: 34,
        name: "權杖王后",
        general: {
            upright: "自信熱情，魅力領袖。社交高手，熱愛生活，獨立自主。",
            reversed: "霸道嫉妒，佔有慾強。過度自我中心，喜怒無常，難以相處。"
        },
        topics: {
            love: { upright: "充滿魅力的成熟女性，感情熱情主動。", reversed: "情緒勒索，強佔欲強，伴侶感到窒息。" },
            career: { upright: "展現領導魅力，善於社交與公關，事業有成。", reversed: "心胸狹窄，嫉妒同事成就，破壞團隊和諧。" },
            finance: { upright: "財務狀況穩健，賺錢能力強。", reversed: "揮霍無度，為面子花錢，財務因情緒而混亂。" },
            health: { upright: "生命力旺盛，熱愛運動與戶外活動。", reversed: "因情緒波動影響健康，或過度勞累。" },
            decision: { upside: "相信你的魅力與直覺，大膽社交。", reversed: "控制一下你的情緒，別太任性。" },
            daily: { upright: "今天你是眾人的焦點，展現自信吧！", reversed: "小心情緒失控，別讓佔有慾毀了關係。" }
        }
    },
    {
        id: 35,
        name: "權杖國王",
        general: {
            upright: "領導與行動，掌權者。意志堅定，熱情專注，創造事業版圖。",
            reversed: "暴君傲慢，固執己見。專橫霸道，過度強勢，聽不進勸。"
        },
        topics: {
            love: { upright: "展現男子氣概，主動承擔責任，保護對方。", reversed: "大男人主義，控制欲強，霸凌伴侶。" },
            career: { upright: "晉升領導職位，展現宏觀遠見，魄力十足。", reversed: "獨斷獨行，聽不下建議，因固執致失敗。" },
            finance: { upright: "大膽投資，掌握財務大權，行動果決。", reversed: "因過度自信而賠錢，或金錢管控僵硬。" },
            health: { upright: "體魄健壯，精力過人。", reversed: "高血壓，心臟負擔，發怒傷身。" },
            decision: { upside: "你有領導者的魄力，做出決定並執行。", reversed: "別太霸道，聽聽專家意見。" },
            daily: { upright: "適合做大事的一天，掌握主動權。", reversed:"小心你對人的態度，太強硬會得罪人。" }
        }
    },
    {
        id: 36,
        name: "聖杯首牌",
        general: {
            upright: "情感的溢滿，愛的開啟。新的戀情、靈感或直覺湧現，內心充滿喜悅。",
            reversed: "情感堵塞，機錯過。情緒低落，麻木不仁，新關係難以開展。"
        },
        topics: {
            love: { upright: "一段深刻的新戀情開始，真誠的情感交流。", reversed: "愛意受阻，感覺不到愛情，單相思無回應。" },
            career: { upright: "充滿創意的新專案，工作環境和諧愉快。", reversed: "缺乏工作熱情，感覺情感枯竭，職涯停滯。" },
            finance: { upright: "投資運佳，意外之財，心情愉悅地享受物質。", reversed: "財務漏失，或因情緒化消費導致遺憾。" },
            health: { upright: "內分泌與情緒狀態良好，神清氣爽。", reversed: "精神不振，或是情緒問題影響生理健康。" },
            decision: { upside: "跟隨直覺，做讓你感動的選擇。", reversed: "現在心太亂，不宜做決定，先平復心情。" },
            daily: { upright: "心花怒放的一天，適合愛與被愛。", reversed: "心情有點憂點憂鬱，覺得缺了點什麼。" }
        }
    },
    {
        id: 37,
        name: "聖杯二",
        general: {
            upright: "平等與連結。良好的夥伴關係，對等付出，精神上的契合。",
            reversed: "關係失衡，誤解。溝通破裂，單方付出，或合作不愉快。"
        },
        topics: {
            love: { upright: "靈魂伴侶，雙向奔赴，和諧穩定的交往。", reversed: "感情變質，溝通不良，或第三者介入。" },
            career: { upright: "找到了好夥伴，合作愉快，人際關係順利。", reversed: "合作破局，同事間有心結，無法同心協力。" },
            finance: { upright: "合約簽訂成功，雙方互利，財務合作穩定。", reversed: "合約糾紛，金錢分配不均引起嫌隙。" },
            health: { upright: "體液平衡，身心協調，適合雙人運動。", reversed: "腎臟或排泄系統微小不適，人際影響心情。" },
            decision: { upside: "尋求協作，雙人總比一人好。", reversed: "信任出現裂痕，需重新評估合作關係。" },
            daily: { upright: "適合約會、談心，與人連結的一天。", reversed: "與人不合，或是被放鴿子。" }
        }
    },
    {
        id: 38,
        name: "聖杯三",
        general: {
            upright: "慶祝與團體。歡樂的聚會，好朋友的支持，享受社交與感謝。",
            reversed: "過度享樂，社交不睦。聚會爭吵，孤立無援，或因社交而消費過度。"
        },
        topics: {
            love: { upright: "朋友圈介紹對象，或與情人參加聚會感情升溫。", reversed: "社交場合爭風吃醋，或伴侶融入不了你的社交圈。" },
            career: { upright: "團隊合作愉快，完成慶功宴，人脈拓展成功。", reversed: "辦公室政治，流言蜚語，同事間勾心鬥角。" },
            finance: { upright: "因人脈帶來財富，團隊分紅，值得慶祝。", reversed: "社交開銷過大，宴客卻吃力不討好。" },
            health: { upright: "心情愉悅帶動健康，適合團體活動。", reversed: "暴飲暴食，宿醉，或因社交混亂導致疲勞。" },
            decision: { upside: "聽聽朋友的意見，集思廣益。", reversed: "別想著湊熱鬧，你需要獨處的空間。" },
            daily: { upright: "適合聚餐派對，好運在朋友間傳遞。", reversed: "社交疲勞，不想見人，感到孤單。" }
        }
    },
    {
        id: 39,
        name: "聖杯四",
        general: {
            upright: "冷漠，錯失良機。對現狀感到無聊，沈溺過去，缺乏熱情。",
            reversed: "覺醒，新的契機。重新找回熱情，抓住新機會，走回正軌。"
        },
        topics: {
            love: { upright: "對感情提不起勁，沈溺於過往回憶，拒絕新桃花。", reversed: "決定走出舊情，發現身邊的追求者。" },
            career: { upright: "對工作感到厭倦，缺乏目標，機會從手中溜走。", reversed: "終於找到工作的動力，轉變心態重新出發。" },
            finance: { upright: "對財務不聞不問，錯過投資時機。", reversed: "重新審視財務狀況，發現新的賺錢管道。" },
            health: { upright: "心智倦怠，缺乏活力，需要休養。", reversed: "決定改變不健康的生活方式，開始關愛自己。" },
            decision: { upside: "別沈默了，抬起頭看看四周的機會。", reversed: "打破冷漠，主動出擊，時機正好。" },
            daily: { upright: "今天感覺無聊提不起勁，不想理人。", reversed: "突然發現漏掉的好消息，行動吧！" }
        }
    },
    {
        id: 40,
        name: "聖杯五",
        general: {
            upright: "失落，悲傷。關注於失去的東西，感到後悔，自憐自艾。",
            reversed: "走出悲傷，恢復。接受失去，繼續前行，或意識到還有擁有的。"
        },
        topics: {
            love: { upright: "分手的悲痛，三角關係受傷，無法釋懷。", reversed: "決定放下過去，準備重新接受愛情。" },
            career: { upright: "工作失敗感到挫折，或被同事打擊。", reversed: "收拾心情，從失敗中站起來，尋求新出路。" },
            finance: { upright: "財務損失感到懊悔，只看見虧損的一面。", reversed: "接受損失，開始重建財務基礎。" },
            health: { upright: "身心俱疲，哀傷影響免疫系統。", reversed: "心理狀況逐漸康復，走出陰霾。" },
            decision: { upside: "別只盯著失去的，看看你還剩下什麼。", reversed: "走出悲傷，是你做出改變的時候了。" },
            daily: { upright: "心情有點悲傷，容許自己哭泣一下。", reversed: "雨過天晴，心情好轉。" }
        }
    },
    {
        id: 41,
        name: "聖杯六",
        general: {
            upright: "回憶，純真。重訪過去，懷舊，親友的支持與照顧。",
            reversed: "活在过去，長不大。過度沈溺童年陰影，或關係過度依賴。"
        },
        topics: {
            love: { upright: "舊情復燃，或與兒時玩伴發展感情。", reversed: "沈溺於過去的光輝，無法在當下關係成長。" },
            career: { upright: "回到舊公司，或從事與過去相關的領域。", reversed: "不想長大，對職場責任逃避，懷才不遇。" },
            finance: { upright: "家人經濟支持，或收到過去投資的回報。", reversed: "理財觀念幼稚，依賴家人金錢支柱。" },
            health: { upright: "回復原生體質，照顧內在小孩的健康。", reversed: "舊疾難以斷根，或心理退行至幼兒狀態。" },
            decision: { upside: "過去的經驗是最好的指導老師。", reversed: "別回頭了，長大面對現實吧。" },
            daily: { upright: "適合整理老照片，見見老朋友。", reversed: "不要沈溺在回憶裡，你已經不是小孩了。" }
        }
    },
    {
        id: 42,
        name: "聖杯七",
        general: {
            upright: "選擇，幻覺。過多的選項，分心，沈溺於幻想。",
            reversed: "選擇清晰，走出幻覺。放棄不切實際的的夢想，腳踏實地。"
        },
        topics: {
            love: { upright: "桃花多，選擇困難，或沈溺於幻想對象。", reversed: "看清感情現實，不再被表象迷惑。" },
            career: { upright: "面臨多方邀約，無法取捨，或是做白日夢。", reversed: "確認職涯目標，放棄不切實際的幻想。" },
            finance: { upright: "投資標的太多，心猿意馬，容易受騙。", reversed: "終於搞清楚哪些是機會，哪些是詐騙。" },
            health: { upright: "精神恍惚，夢遊，或飲食失調。", reversed: "戒除不良習慣，心理逐漸清醒。" },
            decision: { upside: "別被誘惑迷惑，選擇真正有益的。", reversed: "終於看清真相，可以做出理智決定。" },
            daily: { upright: "感覺飄飄然，容易做白日夢。", reversed: "夢醒了，該面對現實了。" }
        }
    },
    {
        id: 43,
        name: "聖杯八",
        general: {
            upright: "出走，放棄。雖有遺憾但決定離開，尋求更有意義的歸屬。",
            reversed: "恐懼改變，停滞。不想離開舒適圈，或無力轉變。"
        },
        topics: {
            love: { upright: "決定離開一段不再滿足的關係。", reversed: "不敢面對關係結束，拖拖拉拉，痛苦延續。" },
            career: { upright: "辭職，離開令人窒息的工作環境。", reversed: "即使不滿意也不敢離職，忍受職場霸凌。" },
            finance: { upright: "放棄獲利不佳的投資，停止損失。", reversed: "深陷財務泥沼，不知如何脱身。" },
            health: { upright: "決定脫離不健康的生活環境。", reversed: "無法改變壞習慣，健康持續惡化。" },
            decision: { upside: "雖然痛苦，但離開是對的選擇。", reversed: "別再猶豫了，你困住了自己。" },
            daily: { upright: "準備收拾行李，離開不再適合的地方。", reversed: "想走走不了，心情沉重。" }
        }
    },
    {
        id: 44,
        name: "聖杯九",
        general: {
            upright: "滿足，圓夢。情緒滿足，達成願望，感受到幸福與榮耀。",
            reversed: "傲慢，物質慾望。過度享樂，自滿，或缺乏真實情感。"
        },
        topics: {
            love: { upright: "感情生活圓滿，心滿意足。", reversed: "重視外表或物质勝於情感，關係顯得虛假。" },
            career: { upright: "工作成就感高，備受肯定與推崇。", reversed: "得意忘形，遭人嫉妒，或只顧面子。" },
            finance: { upright: "財富自由，想要的生活都能擁有。", reversed: "揮霍無度，過度消費，金錢買不到快樂。" },
            health: { upright: "身心健康極佳，滿懷喜悅。", reversed: "暴飲暴食，過度縱慾導致健康走樣。" },
            decision: { upside: "做你自己喜歡的決定，你值得最好的。", reversed: "別太貪心，知足常樂。" },
            daily: { upright: "心滿意足的一天，好事發生。", reversed: "感覺空虛，外在擁有再多也沒用。" }
        }
    },
    {
        id: 45,
        name: "聖杯十",
        general: {
            upright: "和諧家庭，長期幸福。團圓的喜悅，情感長久穩定。",
            reversed: "家庭失和，反目成仇。家庭紛爭，價值觀背離，或短暫的快樂。"
        },
        topics: {
            love: { upright: "邁向婚姻，家庭幸福，感情穩定深厚。", reversed: "家庭壓力，婆媳問題，感情破裂。" },
            career: { upright: "團隊和諧，長遠規劃可期，退休生活順利。", reversed: "團隊凝聚力喪失，或無法適應企業文化。" },
            finance: { upright: "家族企業興旺，或擁有不動產帶來安穩。", reversed: "遺產糾紛，家庭金錢利益分配不均。" },
            health: { upright: "身心健康，氣血運行良好。", reversed: "基因遺傳問題需注意，或家庭壓力影響健康。" },
            decision: { upside: "選擇長遠穩定，利人利己的路。", reversed: "表面光鮮，裡子已爛，需警惕。" },
            daily: { upright: "回家是最好的選擇，享受天倫之樂。", reversed: "家裡事多，心煩意亂。" }
        }
    },
    {
        id: 46,
        name: "聖杯侍者",
        general: {
            upright: "情感訊息，創意提案。直覺敏銳，新聞或邀約，充滿好奇。",
            reversed: "情感幼稚，受傷。過度敏感，情緒化，或訊息不實。"
        },
        topics: {
            love: { upright: "收到表白，或出現心儀對象，感覺像初戀。", reversed: "感情不成熟，情緒勒索，或收到糟糕的消息。" },
            career: { upright: "提出新的企劃案，適合藝術或情感類工作。", reversed: "提案不切實際，或因情緒化影響工作表現。" },
            finance: { upright: "收到投資建議，理財新點子。", reversed: "聽信謠言導致損失，理財心態不成熟。" },
            health: { upright: "直覺好，適合做身心療療。", reversed: "情緒波動大，荷爾蒙調適不良。" },
            decision: { upside: "相信直覺，接受新的情感邀約。", reversed: "別太玻璃心，客觀一點看待事情。" },
            daily: { upright: "情感豐富的一天，適合發展興趣。", reversed: "容易傷感，或收到不討喜的消息。" }
        }
    },
    {
        id: 47,
        name: "聖杯騎士",
        general: {
            upright: "浪漫追求，想像力。跟隨直覺行動，情感豐富，容易心動。",
            reversed: "情緒化，不切實際。幻想破滅，逃避現實，或濫情。"
        },
        topics: {
            love: { upright: "主動熱情的追求，浪漫的表白，展開戀情。", reversed: "情感投射在錯誤對象身上，或對方是桃花劫。" },
            career: { upright: "全心投入作品，工作熱情洋溢。", reversed: "好高騖遠，計畫不切實際，眼高手低。" },
            finance: { upright: "情緒化投資，憑感覺買賣。", reversed: "投資虛幻，被騙錢，或虧損後逃避現實。" },
            health: { upright: "情緒主導身體，適合舒緩療癒。", reversed: "情緒致病，心因性不適，酗酒或依賴藥物。" },
            decision: { upside: "做讓你感動的決定，不要吝嗇情感。", reversed: "別做夢了，回頭看看現實。" },
            daily: { upright: "今天很浪漫，適合約會或欣賞藝術。", reversed: "感覺失落，美夢成空。" }
        }
    },
    {
        id: 48,
        name: "聖杯王后",
        general: {
            upright: "情感豐富，直覺準確。充滿愛心與同理心，療癒者，善解人意。",
            reversed: "過度情緒化，操控。心機手段，依賴他人，或濫用感情。"
        },
        topics: {
            love: { upright: "完美的戀人，懂得關懷與滋養關係。", reversed: "情緒勒索，黏人，或扮演受害者。" },
            career: { upright: "憑直覺與人際關係經營事業，適合諮商醫療。", reversed: "與同事情感糾葛，或因情緒影響專業。" },
            finance: { upright: "透過人脈運氣獲得財富，理財敏銳。", reversed: "情感用事導致財務虧損。" },
            health: { upright: "身心健康，充滿愛與療癒力。", reversed: "情緒問題嚴重，身心症狀明顯。" },
            decision: { upside: "愛心與直覺是你的最佳引導。", reversed: "別讓情緒主導理智，小心被操控。" },
            daily: { upright: "今天很有人情味，適合當聽眾或照顧者。", reversed: "容易歇斯底里，情緒像坐雲霄飛車。" }
        }
    },
    {
        id: 49,
        name: "聖杯國王",
        general: {
            upright: "情感成熟，平衡情緒。溫文爾雅，善於調解衝突，情感穩定。",
            reversed: "情感壓抑，偽善。逃避情感需求，外遇，或利用情感權力。"
        },
        topics: {
            love: { upright: "成熟穩重的伴侶，提供安全感與包容。", reversed: "外遇高手，或對另一半冷暴力，情感疏離。" },
            career: { upright: "擅長處理公關危機，領導風格溫和。", reversed: "辦公室戀情醜聞，或用情感勒索部屬。" },
            finance: { upright: "理財頭冷心熱，情緒穩定下獲利。", reversed: "因情感糾紛破財，或金錢上對人虛與委蛇。" },
            health: { upright: "情緒管理良好，身心平衡。", reversed: "壓抑情緒導致心臟或循環問題。" },
            decision: { upside: "保持理性與感性平衡，你很穩。", reversed: "別裝了，面對你真實的情感需求。" },
            daily: { upright: "今天展現你的風度，協助他人解決問題。", reversed: "感到情感乾竭，或者說了些不實的話。" }
        }
    },
    {
        id: 50,
        name: "寶劍首牌",
        general: {
            upright: "理智勝出，絕對的邏輯。新思維，突破僵局，真相大白。",
            reversed: "混亂，強制的決定。思緒不清，專橫獨斷，或溝通失效。"
        },
        topics: {
            love: { upright: "理智看待感情，開始新關係，或決心斬斷不適合的愛。", reversed: "冷暴力，思緒混亂導致爭吵，感情無疾而終。" },
            career: { upright: "新專案啟動，運用思維解決難題。", reversed: "計畫混亂，缺乏策略，專案失敗。" },
            finance: { upright: "理財頭腦清晰，做出正確的財務抉擇。", reversed: "財務決定錯誤，或被詐騙，資訊混淆。" },
            health: { upright: "思維敏捷，精神狀況良好。", reversed: "焦慮，頭痛，或精神緊繃。" },
            decision: { upside: "拿出邏輯與理性來分析，別帶感情。", reversed: "頭腦不清的時候不要做決定。" },
            daily: { upright: "思緒清晰的一天，適合思考與溝通。", reversed: "腦袋亂哄哄，容易溝通不良。" }
        }
    },
    {
        id: 51,
        name: "寶劍二",
        general: {
            upright: "僵持，猶豫不決。視而不見，拒絕做選擇，等待破曉。",
            reversed: "猶豫過頭，壓力爆發。資訊過載，被迫行動，或做出錯誤決定。"
        },
        topics: {
            love: { upright: "冷戰中，不敢面對感情問題，選擇逃避。", reversed: "無法再逃避分手的現實，感情出現裂痕。" },
            career: { upright: "對工作感到猶豫，不想碰爭議事項。", reversed: "壓力過大崩潰，被迫辭職或做錯決定。" },
            finance: { upright: "財務陷入僵局，選擇暫時不看帳目。", reversed: "資金週轉不靈，壓力爆發，不得不變賣資產。" },
            health: { upright: "失眠，封閉自己，拒絕治療。", reversed: "精神壓力過大，視力問題惡化。" },
            decision: { upside: "拖延不是解決辦法，但需冷靜思考。", reversed: "時間到了，被迫要選邊站。" },
            daily: { upright: "感覺被封印了，不想做決定。", reversed: "壓力大到睡不著，事情逼到眉睫。" }
        }
    },
    {
        id: 52,
        name: "寶劍三",
        general: {
            upright: "心痛，悲傷的真相。背叛，分離，無法挽回的創傷。",
            reversed: "走出悲傷，恢復力。遺忘痛苦，釋放情緒，或拒絕療癒。"
        },
        topics: {
            love: { upright: "三角關係受傷，劈腿，或悲痛的分手。", reversed: "決定放下傷痛，嘗試復合或走出陰霾。" },
            career: { upright: "職場受創，被背叛或解僱，心情低落。", reversed: "從傷痛中站起來，重新開始。" },
            finance: { upright: "極度糟糕的財務的財務狀況，損失慘重。", reversed: "開始清理債務，慢慢從泥沼中脫身。" },
            health: { upright: "手術，意外受傷，或深度的心理創傷。", reversed: "康復中，心靈開始修補。" },
            decision: { upside: "雖然痛苦，但面對真相吧。", reversed: "別再沈溺於受害者情結，好起來。" },
            daily: { upright: "非常難過的一天，小心受傷。", reversed: "傷口開始結痂，痛感減輕。" }
        }
    },
    {
        id: 53,
        name: "寶劍四",
        general: {
            upright: "休息，恢復。冥想，遠離塵囂養精蓄銳，療傷期。",
            reversed: "躁動不安，無法休息。過度思考，或休息過久導致無法行動。"
        },
        topics: {
            love: { upright: "感情進入平靜期，或暫時分開冷靜。", reversed: "關係沈悶無趣，或因冷戰太久而心焦。" },
            career: { upright: "休假，養病，或專案暫停重新規劃。", reversed: "不想上班，逃避工作太久變成懶惰。" },
            finance: { upright: "財務休養生息，暫停投資。", reversed: "停滯太久錢滾不動，錯失翻身機會。" },
            health: { upright: "休息是當前最好的藥，住院或靜養。", reversed: "躺太久身體僵硬，或因焦慮睡不著。" },
            decision: { upside: "先別動，休息一下再說。", reversed: "別再休養了，動起來吧。" },
            daily: { upright: "今天適合靜靜休息，什麼都不做。", reversed: "心裡不安，無法休息，想太多。" }
        }
    },
    {
        id: 54,
        name: "寶劍五",
        general: {
            upright: "競爭，空洞的勝利。爭鬥，慘勝如敗，不擇手段。",
            reversed: "放下爭鬥，求和。承認失敗，停止內耗，或重蹈覆轍。"
        },
        topics: {
            love: { upright: "感情中的爭吵與競爭，贏了面子輸了裡子。", reversed: "雙方都不想吵了，決定冷靜或和解。" },
            career: { upright: "職場鬥爭激烈，手段骯髒，即便上位也不安穩。", reversed: "退出競爭，承認不適合這個環境。" },
            finance: { upright: "惡性競爭導致虧損，或為了面子損錢。", reversed: "放棄無謂的爭奪，停止金錢損失。" },
            health: { upright: "壓力導致病痛，或意外受傷。", reversed: "停止自虐，開始照顧身體。" },
            decision: { upside: "這場仗沒意義，考慮退場。", reversed: "別再重犯以前的錯誤。" },
            daily: { upright: "今天充滿火藥味，小心被捲入戰局。", reversed: "決定不計較，放手吧。" }
        }
    },
    {
        id: 55,
        name: "寶劍六",
        general: {
            upright: "轉移，過渡期。慢慢地離開困境，前往平靜之境，療癒之旅。",
            reversed: "拒絕改變，無法動彈。固守傷痛，或轉變過程不順遂。"
        },
        topics: {
            love: { upright: "結束一段傷痛的關係，慢慢療傷。", reversed: "不願離開糟糕的伴侶，深陷痛苦。" },
            career: { upright: "轉型期，慢慢離開不適合的工作環境。", reversed: "抗拒轉調，或轉換跑道過程受阻。" },
            finance: { upright: "慢慢從財務困境中脫身，重整旗鼓。", reversed: "財務修補失敗，或不想面對債務。" },
            health: { upright: "恢復期，轉換療癒環境，身體向好。", reversed: "病況無好转，轉院困難或抗拒治療。" },
            decision: { upside: "接受改變，慢慢往平靜的方向走。", reversed: "別固守著過去的痛苦，你該走了。" },
            daily: { upright: "適合搬家或轉換心情，慢慢離開爭吵。", reversed: "心身拒絕改變，感到無助。" }
        }
    },
    {
        id: 56,
        name: "寶劍七",
        general: {
            upright: "詭計，策略，偷走。不擇手段獲取成功，智取，單獨行動。",
            reversed: "被抓包，陰謀被揭穿。認錯，或放棄欺騙。"
        },
        topics: {
            love: { upright: "隱瞞不當關係，用欺騙手段獲得感情。", reversed: "外遇抓包，戀情曝光，不得不承認。" },
            career: { upright: "職場詭計，或偷偷尋找下家，不擇手段上位。", reversed: "小動作被發現，職場信用破產。" },
            finance: { upright: "詐欺，偷雞摸狗，或極度精明的投資。", reversed: "財務詐欺被揭，投資踩雷。" },
            health: { upright: "隱藏病情，或偷偷服用藥物成癮。", reversed: "健康問題曝光，被強制就醫。" },
            decision: { upside: "你有策略嗎？但要注意後果。", reversed: "別再玩了，你的陰謀被識破了。" },
            daily: { upright: "今天需要點小手段，或偷偷做點事。", reversed: "東窗事發，尷尬的一天。" }
        }
    },
    {
        id: 57,
        name: "寶劍八",
        general: {
            upright: "受限，自投羅網。被自己的思想困住，感覺無助，看不見出路。",
            reversed: "解脫，鬆綁。打開視野，找到解決方案，釋放壓力。"
        },
        topics: {
            love: { upright: "關係窒息，不自由，被道德或觀念綁架。", reversed: "敞開心胸，走出過去的陰影，重獲自由。" },
            career: { upright: "工作毫無出路，受制於環境，自我設限。", reversed: "跳出思考框架，解決職場難題。" },
            finance: { upright: "財務陷入死胡同，感覺無力改變。", reversed: "開源節流找到新方法，破除財務僵局。" },
            health: { upright: "心理障礙，恐懼症，或感覺被困住。", reversed: "心理治療生效，心結解開。" },
            decision: { upside: "你的囚籠是虛幻的，睜開眼睛看。", reversed: "打破舊有的思維模式，你自由了。" },
            daily: { upright: "感覺卡住了，動彈不得，心情低落。", reversed: "突然想通了，枷鎖解開。" }
        }
    },
    {
        id: 58,
        name: "寶劍九",
        general: {
            upright: "焦慮，惡夢。最後的黑夜，擔憂過度，自暴自棄。",
            reversed: "噩夢結束，悲觀轉現實。擔憂減輕，但仍有餘悸。"
        },
        topics: {
            love: { upright: "對感情感到深恐不安全，胡思亂想。", reversed: "最壞的情況沒發生，心情緩解。" },
            career: { upright: "對工作感到絕望，害怕失敗，失眠。", reversed: "焦慮減低，開始面現實狀況恢復生活。" },
            finance: { upright: "擔心破產，對未來財務極度恐慌。", reversed: "財務恐慌結束，雖然不好但還能過。" },
            health: { upright: "嚴重的焦慮症，失眠，精神耗弱。", reversed: "睡眠狀況改善，開始轉向積極。" },
            decision: { upside: "恐懼是虛擬的，別自己嚇自己。", reversed: "黑夜過去了，你可以面對清晨。" },
            daily: { upright: "今晚可能會失眠，壞事想到滿滿。", reversed: "從惡夢中醒來，發現還是有希望。" }
        }
    },
    {
        id: 59,
        name: "寶劍十",
        general: {
            upright: "悲劇的結局，谷底。無法挽回的結局，極度痛苦，等待黎明。",
            reversed: "恢復期，延遲緩解。痛苦逐漸減退，或抗拒接受結局。"
        },
        topics: {
            love: { upright: "感情徹底結束，毀滅性的打擊。", reversed: "從分手中慢慢恢復，或接受現實。" },
            career: { upright: "失去工作，職涯崩潰，不得不重啟。", reversed: "準備開始新生活，雖然傷痕累累。" },
            finance: { upright: "資產歸零，破產，徹底失敗。", reversed: "債務整理開始，慢慢重建經濟。" },
            health: { upright: "重創，垂死邊緣，或心理崩潰。", reversed: "生死關頭存活下來，開始復建。" },
            decision: { upside: "已經是最壞狀況，只能變好了。", reversed: "痛苦正在遠去，你活下來了。" },
            daily: { upright: "非常糟糕的一天，但也是轉折點。", reversed: "雖然痛，但最難熬的時刻過去了。" }
        }
    },
    {
        id: 60,
        name: "寶劍侍者",
        general: {
            upright: "訊息，警戒。掌握新資訊，觀察銳利，好奇心旺盛。",
            reversed: "八卦，心機。使用言語攻擊，資訊不實，或神經質。"
        },
        topics: {
            love: { upright: "收到表白訊息，或對感情保持警戒。", reversed: "流言蜚語破壞感情，或傳遞負面訊息。" },
            career: { upright: "收到工作郵件或通知，適合偵查市場。", reversed: "辦公室八卦，或因溝通不清導致誤解。" },
            finance: { upright: "財經新聞，市場觀察，理財新知。", reversed: "聽信錯誤資訊投資，或被推銷騙錢。" },
            health: { upright: "對健康資訊敏銳，適合檢查身體。", reversed: "疑病症，或因壓力導致神經質。" },
            decision: { upside: "收集更多資訊，保持觀察。", reversed: "別聽信謠言，搞清楚真相再說。" },
            daily: { upright: "今天收到訊息，保持警惕。", reversed: "容易捲入八卦，或言語傷人。" }
        }
    },
    {
        id: 61,
        name: "寶劍騎士",
        general: {
            upright: "快速行動，野心勃勃。追求真理，行動力強，甚至衝動。",
            reversed: "冷酷，魯莽。為達目的不擇手段，言語尖酸刻薄，急躁。"
        },
        topics: {
            love: { upright: "追求時速戰速決，但缺乏細膩情感。", reversed: "說出狠話分手，或追求者太過激進。" },
            career: { upright: "行動迅速的專案經理，效率極高。", reversed: "強迫性工作，攻擊同事，缺乏耐心。" },
            finance: { upright: "理財積極，快速進場出場。", reversed: "盲目急躁操作，頻繁交易損失。" },
            health: { upright: "神經反應快，但容易緊繃過度。", reversed: "壓力過大，頭痛，意外受傷。" },
            decision: { upside: "行動要快，保持專注。", reversed: "別因急躁做出錯誤的衝動決定。" },
            daily: { upright: "今天做事很快，但衝刺容易跌倒。", reversed: "說話太犀利，容易得罪人。" }
        }
    },
    {
        id: 62,
        name: "寶劍王后",
        general: {
            upright: "獨立，專業女性。邏輯清晰，情感抽離，公正嚴格。",
            reversed: "孤僻，尖酸。心胸狹隘，獨斷專行，或是受傷很深。"
        },
        topics: {
            love: { upright: "獨立自主，不依賴男人，甚至有點清心寡慾。", reversed: "因受傷而封閉自己，對伴侶挑剔刻薄。" },
            career: { upright: "專業能力強，適合律師或決策者，但嚴格。", reversed: "職場上有毒的老板，情緒冷漠。" },
            finance: { upright: "理財嚴謹，分毫不差，甚至有點吝嗇。", reversed: "因孤僻而斷送財路，或判斷失誤。" },
            health: { upright: "理智控制身體，適合規律生活。", reversed: "憂鬱傾向，或因情緒冷漠導致失調。" },
            decision: { upside: "保持客觀，把感情抽離，你能看清。", reversed: "別那麼尖銳，試著同理別人。" },
            daily: { upright: "展現專業的一天，用腦不用心。", reversed: "心情冷漠，不想理人。" }
        }
    },
    {
        id: 63,
        name: "寶劍國王",
        general: {
            upright: "權威，邏輯決策。用理智掌控一切，公正無私，嚴守規紀。",
            reversed: "濫權，操縱。冷酷無情，言語暴利，或判斷錯誤。"
        },
        topics: {
            love: { upright: "過於理性，缺乏浪漫，甚至冷漠。", reversed: "情感疏離，控制欲強，用言語傷人。" },
            career: { upright: "頂級管理者，意志堅定，專注於目標。", reversed: "獨裁霸氣，聽不進意見，導致管理失敗。" },
            finance: { upright: "嚴肅的理財家，只做理性投資。", reversed: "利用規則漏洞，或因固執導致重大財損。" },
            health: { upright: "精神力量強大，頭腦清晰。", reversed: "中風風險，或智力衰退。" },
            decision: { upside: "相信邏輯與法則，你的判斷很準。", reversed: "別以為你永遠是對的，傲慢是致命傷。" },
            daily: { upright: "適合處理棘手的公事，展現威嚴。", reversed: "容易出言傷人，不要太強勢。" }
        }
    },
    {
        id: 64,
        name: "錢幣首牌",
        general: {
            upright: "物質機會，現實回饋。新的工作、金錢或身體健康，務實開始。",
            reversed: "機錯過，財務虧空。計畫虛浮，錯失工作機會，健康警訊。"
        },
        topics: {
            love: { upright: "穩定發展的感情，或因現實考量而開始交往。", reversed: "感情受現實阻礙，或物質慾望過高。" },
            career: { upright: "新工作機會，或開展新事業，務實可行。", reversed: "求職失敗，或新計畫不切實際。" },
            finance: { upright: "天上掉下來的錢，或資金到位。", reversed: "投資機會錯過，或有金錢損失。" },
            health: { upright: "健康開端，體能狀況回升。", reversed: "健康開始走下坡，需注意保養。" },
            decision: { upside: "只要務實去做，結果會很不錯。", reversed: "現況不允許，別衝動做決。" },
            daily: { upright: "適合處理現實事務，財運不錯。", reversed: "感到資源不足，或者弄丟了東西。" }
        }
    },
    {
        id: 65,
        name: "錢幣二",
        general: {
            upright: "平衡與流動。多工處理，善於管理時間與資源，靈活適應。",
            reversed: "失衡，過度負荷。時間管理不當，忙不過來，或財務失調。"
        },
        topics: {
            love: { upright: "在生活與感情間取得平衡，配合度高。", reversed: "工作太忙忽略感情，或關係失衡。" },
            career: { upright: "身兼多職，忙碌但充實，適應良好。", reversed: "忙亂無序，工作量超過負荷，效率低。" },
            finance: { upright: "資金靈活運用，周轉順利。", reversed: "左手進右手出，財務不穩，壓力大。" },
            health: { upright: "身體協調性好，身心靈平衡。", reversed: "因忙碌導致身心俱疲，失去平衡。" },
            decision: { upside: "彈性一點，你可以同時處理好幾件事。", reversed: "別貪多，你已經超過負荷了。" },
            daily: { upright: "今天適合做多項工作，腳步加快。", reversed: "手忙腳亂的一天，到處都是狀況。" }
        }
    },
    {
        id: 66,
        name: "錢幣三",
        general: {
            upright: "團隊合作，品質。發揮專業技能，集體創業，評価與建立。",
            reversed: "缺乏遠見，低劣品質。合作不順，或學藝不精。"
        },
        topics: {
            love: { upright: "共同經營感情，為未來奠定基礎。", reversed: "付出不對等，或彼此不在同一個高度。" },
            career: { upright: "團隊合作愉快，發揮所長，專案進度良好。", reversed: "工作品質低落，團隊溝通不良，偷工減料。" },
            finance: { upright: "合資投資，穩健獲利，長期規劃。", reversed: "施工品質差，或投資標的有瑕疵。" },
            health: { upright: "身體結構健全，專業復健很有效。", reversed: "身體機能故障，或缺乏醫學常識。" },
            decision: { upside: "參考專家意見，共同打造計畫。", reversed: "別敷衍了事，品質會出問題。" },
            daily: { upright: "適合作務實評估，累積實力。", reversed: "事情辦的不漂亮，需要重做。" }
        }
    },
    {
        id: 67,
        name: "錢幣四",
        general: {
            upright: "守成，擁有。緊抓不放，財富守成，吝嗇，拒絕改變。",
            reversed: "放手揮霍，財務漏洞。過度消費，放棄財務控制，或失去固有的。"
        },
        topics: {
            love: { upright: "佔有慾強，控制欲高，關係穩定但悶。", reversed: "不敢投入，或花錢買感情卻得不到真愛。" },
            career: { upright: "安於現狀，不想冒險，守住既有成果。", reversed: "無法掌握工作核心，或因管理不當而流失資源。" },
            finance: { upright: "存錢一哥，資產保值，不輕易投資。", reversed: "花錢如流水，資金流失嚴重，財務出現漏洞。" },
            health: { upright: "對健康很固執，或者身體僵硬。", reversed: "健康流失，過度勞累卻不肯休息。" },
            decision: { upside: "保持現狀，穩健保守。", reversed: "該放手就放手，抓太緊會讓你崩潰。" },
            daily: { upright: "守緊你的荷包，別亂花錢。", reversed: "今天容易破財，小心被騙。" }
        }
    },
    {
        id: 68,
        name: "錢幣五",
        general: {
            upright: "貧困，孤獨。物質短缺，失去依靠，感到孤獨無助。",
            reversed: "恢復，經濟回升。獲得援助，度過難關，或精神貧瘠。"
        },
        topics: {
            love: { upright: "因貧窮或現實問題導致感情疏離。", reversed: "情感援助抵達，或金錢問題緩解。" },
            career: { upright: "失業，低薪，工作環境恶劣，感到絕望。", reversed: "找到新工作，度過難關，獲得喘息。" },
            finance: { upright: "財務陷入困境，資金短缺，生活困苦。", reversed: "經濟情況好轉，獲得資金援助。" },
            health: { upright: "營養不良，虛弱，缺乏照顧。", reversed: "身體開始康復，或獲得醫療資源。" },
            decision: { upside: "資源不足，請尋求協助。", reversed: "轉機到了，接受他人的幫助。" },
            daily: { upright: "感到寒風刺骨，日子不好過。", reversed: "感受到溫暖，生活開始好轉。" }
        }
    },
    {
        id: 69,
        name: "錢幣六",
        general: {
            upright: "給予，慈善。有錢出錢，有力出力，慷慨助人。",
            reversed: "債務，貪婪。施捨不當，被施捨者看不起，或金錢權力運用失衡。"
        },
        topics: {
            love: { upright: "在金錢上支持對方，或關係中權力不對等但順利。", reversed: "金錢搞壞感情，或因還債壓力影響關係。" },
            career: { upright: "分配利潤，老闆賞賜员工，合作愉快。", reversed: "薪資不公，催收債務，或金錢爭議。" },
            finance: { upright: "借貸順利，助人運佳，理財有餘裕。", reversed: "金錢糾紛，被討債，或理財運勢不佳。" },
            health: { upright: "幫助他人帶來滿足感，照顧弱者。", reversed: "對身體過度操勰，或因貪婪導致病變。" },
            decision: { upside: "分享你的資源，善有善報。", reversed: "別發橫財，小心金錢糾葛。" },
            daily: { upright: "適合做慈善，或多給一點小費。", reversed: "收到帳單，或者有人來討錢。" }
        }
    },
    {
        id: 70,
        name: "錢幣七",
        general: {
            upright: "耕耘，耐心。投資長期目標，等待收穫，評估成果。",
            reversed: "缺乏耐心，投資失敗。急於見效，毫無收穫，或評估錯誤。"
        },
        topics: {
            love: { upright: "慢熱的關係，長期經營，等待結果。", reversed: "對感情失去耐心，不想等了。" },
            career: { upright: "工作進度緩慢，需要時間累積成果。", reversed: "努力看不到回報，想要轉換跑道。" },
            finance: { upright: "長期投資，等待報酬，耐心最重要。", reversed: "短線操作虧損，對投資失去信心。" },
            health: { upright: "養生需要時間，慢慢調理身體。", reversed: "急於求成導致運動傷害。" },
            decision: { upside: "別急著看結果，持續耕耘。", reversed: "這條路沒花，趕緊換條路。" },
            daily: { upright: "今天適合評估目前的進度。", reversed: "感覺停滯不前，心浮氣躁。" }
        }
    },
    {
        id: 71,
        name: "錢幣八",
        general: {
            upright: "學徒，精進。一絲不苟，專注細節，為了未來努力。",
            reversed: "偷懶，缺乏紀律。粗心大意，追求速成，只會做表面工夫。"
        },
        topics: {
            love: { upright: "在關係中努力學習經營，態度認真。", reversed: "對感情漫不經心，不想花時間經營。" },
            career: { upright: "認真工作，打磨技能，學徒做得好。", reversed: "工作偷懶，品質不佳，心態不正。" },
            finance: { upright: "勤奮賺錢，累積財富，積沙成塔。", reversed: "手艺不精被扣錢，或粗心造成財損。" },
            health: { upright: "專注健康，重複練習，體能提升。", reversed: "運動不當，或健康計畫三天打魚。" },
            decision: { upside: "腳踏實地，細節決定成敗。", reversed: "別偷工減料，基本功要做足。" },
            daily: { upright: "今天適合一絲不苟地完成工作。", reversed: "心情怠惰，只想混過去。" }
        }
    },
    {
        id: 72,
        name: "錢幣九",
        general: {
            upright: "優雅，奢華。財富帶來的高品味，享受成果，獨立經營。",
            reversed: "虛榮，自負。過度追求奢華，眼高手低，或孤芳自賞。"
        },
        topics: {
            love: { upright: "優雅成熟的戀愛，或伴侶條件優越。", reversed: "重物質勝於感情，或對伴侶過度挑剔。" },
            career: { upright: "成功女性白手起家，事業有成，品味獨特。", reversed: "注重排場輕實質，或心胸狹窄。" },
            finance: { upright: "財富自由，享受高級生活，品味之選。", reversed: "虛榮消費過度，或財務問題掩飾不住。" },
            health: { upright: "愛護身體，享受SPA與高品質醫療。", reversed: "過度講究保養忽略實際健康。" },
            decision: { upside: "你值得擁有最好的，展現自信。", reversed: "別被表象迷惑，實際層面更重要。" },
            daily: { upright: "適合裝扮一下，享受優雅生活。", reversed: "別太臭美，小心花錢如流水。" }
        }
    },
    {
        id: 73,
        name: "錢幣十",
        general: {
            upright: "傳承，富足。家族財富，長期穩定，終極成就。",
            reversed: "家族失和，拆毀。浪費家產，為錢爭吵，或基礎動搖。"
        },
        topics: {
            love: { upright: "婚後生活幸福，家庭團滿，有子息。", reversed: "家族壓力導致感情破裂，或關係名存實亡。" },
            career: { upright: "創業有成，退休規劃，機構運作順利。", reversed: "企業衰敗，或無法繼承家業。" },
            finance: { upright: "家族基金，不動產傳承，長期資產配置。", reversed: "揮霍祖產，或家族金錢爭訟。" },
            health: { upright: "家族壽命基因好，福氣高。", reversed: "遺傳病變，或肥胖問題。" },
            decision: { upside: "考慮長遠，傳承與穩固。", reversed: "基礎動搖，趕緊修補。" },
            daily: { upright: "享受家庭的溫暖與財富帶來的穩定。", reversed: "家庭紛爭，心情悶。" }
        }
    },
    {
        id: 74,
        name: "錢幣侍者",
        general: {
            upright: "學習，財務消息。關注金錢，學習新技能，務實規劃。",
            reversed: "懶惰，無趣。學習遲緩，財務狀況不佳，或態度僵化。"
        },
        topics: {
            love: { upright: "適合認識務實的對象，單純美好的發展。", reversed: "對感情太現實或無趣，或太過在意對方條件。" },
            career: { upright: "學業進步，或從事兼職工作，態度認真。", reversed: "工作態度消極，學習效率低。" },
            finance: { upright: "收到理財建議，或開始學習投資。", reversed: "財務消息不佳，或理財態度消極。" },
            health: { upright: "體能開始建設，注重實際保健。", reversed: "體質虛弱，或懶得運動。" },
            decision: { upside: "多聽多學，務實評估。", reversed: "別那麼懶，行動起來。" },
            daily: { upright: "適合讀書或處理報稅，務實度過。", reversed: "事情進展緩慢，有偷懶的念頭。" }
        }
    },
    {
        id: 75,
        name: "錢幣騎士",
        general: {
            upright: "穩健，堅持。慢工出細活，按部就班，值得信賴。",
            reversed: "遲緩，固執。過度保守，行動遲緩，或只關注利益缺乏彈性。"
        },
        topics: {
            love: { upright: "穩健的追求者，慢熱但長久，給人安全感。", reversed: "發展太慢，或對方太過無趣木訥。" },
            career: { upright: "按計劃執行，穩步推進專案，可靠。", reversed: "工作進度嚴重落後，或固執己見。" },
            finance: { upright: "長期穩健投資，不冒險，慢慢積累。", reversed: "錯過獲利機會，因固執導致虧損。" },
            health: { upright: "體質強健，適合需要耐力的運動。", reversed: "代謝慢，容易肥胖，或缺乏靈活度。" },
            decision: { upside: "保持耐心，穩紮穩打。", reversed: "太快則退？不，太慢會死。你要變通。" },
            daily: { upright: "今天腳步放慢一點，好好處理事務。", reversed: "行動遲緩，或太過固執讓人火大。" }
        }
    },
    {
        id: 76,
        name: "錢幣王后",
        general: {
            upright: "富足，自然。資源豐富，貼心照顧，務實與感性兼備。",
            reversed: "焦慮，缺乏安全感。過度擔憂金錢，虛榮，或生活雜亂。"
        },
        topics: {
            love: { upright: "照顧伴侶，經營溫暖的家庭生活。", reversed: "缺乏安全感，控制伴侶財務，或母愛過度。" },
            career: { upright: "資源豐富的管理者，善於照顧員工。", reversed: "太過在乎細節，或缺乏安全感導致管理不佳。" },
            finance: { upright: "理財有方，物質生活優渥，給予家人支持。", reversed: "揮霍買安全感，或對財務過度焦慮。" },
            health: { upright: "自然療癒力強，身體健康豐盛。", reversed: "因焦慮導致身心症，或新陳代謝失調。" },
            decision: { upside: "信賴自然發展，你資源充足。", reversed: "別讓不安全感影響判斷。" },
            daily: { upright: "適合享受生活，照顧身體，打理家裡。", reversed: "今天很焦慮，覺得什麼都不夠。" }
        }
    },
    {
        id: 77,
        name: "錢幣國王",
        general: {
            upright: "財富，成就。物質穩固，成功企業家，財務自由。",
            reversed: "貪婪，物質主義。守財奴，為富不仁，或過於固執導致失去。"
        },
        topics: {
            love: { upright: "提供優渥物質生活，穩固可靠的支柱。", reversed: "用錢控制伴侶，或只看重金錢不重視感情。" },
            career: { upright: "商業巨頭，事業登上頂峰，掌握豐富資源。", reversed: "為了利益不擇手段，過度壓榨。" },
            finance: { upright: "極度富有，投資眼光獨到，財務大師。", reversed: "守財奴，金錢觀保守固執，失去財富。" },
            health: { upright: "體格強壯，生命力旺盛。", reversed: "過度肥胖，或心血管出問題。" },
            decision: { upside: "採取務實且穩健的方案，你是贏家。", reversed: "別被貪慾蒙蔽，錢不是萬能。" },
            daily: { upright: "展現你的實力，掌握主導權。", reversed: "容易太鑽牛角尖，錢不是唯一的。" }
        }
    }
];